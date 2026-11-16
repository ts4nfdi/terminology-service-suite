import type { StoryContext } from "@storybook/react-vite";
import { expect, screen, waitFor, within } from "storybook/test";
import * as globals from "../../../app/globals";
import {
  apiArgType,
  entityTypeArgType,
  ontologyIdArgType,
  parameterArgType,
} from "../../../stories/storyArgs";

export const EntityListWidgetStoryArgTypes = {
  ...apiArgType,
  ...ontologyIdArgType,
  ...entityTypeArgType,
  ...parameterArgType,
};

export const EntityListWidgetStoryArgs = {
  api: globals.EBI_API_ENDPOINT,
  ontologyId: "uberon",
  entityType: "class",
  parameter: "",
} as const;

export const EntityListWidgetIndividualsArgs = {
  api: globals.EBI_API_ENDPOINT,
  ontologyId: "iao",
  entityType: "individual",
  parameter: "",
} as const;

export const EntityListWidgetMeshTermsArgs = {
  api: "https://semanticlookup.zbmed.de/ols/api/",
  ontologyId: "mesh",
  entityType: "term",
  parameter: "",
} as const;

/**
 * The Individuals story loads real data from the EBI OLS API,
 * so every wait for server data gets a generous timeout.
 * It must stay below the Vitest test timeout of 15 seconds.
 */
const SERVER_TIMEOUT = { timeout: 10000 };

export const entityListIndividualsPlay = async ({
  canvas,
  step,
  userEvent,
}: StoryContext) => {
  // Wait until the first page of data is rendered in the table
  await canvas.findByRole("table", {}, SERVER_TIMEOUT);

  // Individuals show Name, ID and Type, but no property columns
  await step("Table has the columns Name, ID and Type", async () => {
    await expect(
      canvas.getByRole("columnheader", { name: "Name" }),
    ).toBeVisible();
    await expect(
      canvas.getByRole("columnheader", { name: "ID" }),
    ).toBeVisible();
    await expect(
      canvas.getByRole("columnheader", { name: "Type" }),
    ).toBeVisible();
    await expect(
      canvas.queryByRole("columnheader", { name: "Domain" }),
    ).not.toBeInTheDocument();
  });

  // The total depends on the server, so it is read from the page, not hardcoded
  let totalItemCount = 0;

  // The counter shows the 10 rows of the first page and the total on the server
  await step('Shows "Loaded: 10 / <total>" after loading', async () => {
    const loadedText = await canvas.findByText(
      /^Loaded: 10 \/ \d+$/,
      {},
      SERVER_TIMEOUT,
    );
    totalItemCount = Number(loadedText.textContent?.split("/")[1]);

    // More than one page of data, otherwise the paging steps cannot work
    await expect(totalItemCount).toBeGreaterThan(10);
    await expect(canvas.queryByText(/loading…/)).not.toBeInTheDocument();
  });

  // The rows start sorted by Name ascending, so one click switches to descending
  await step(
    "Clicking the Name header changes the order of the rows",
    async () => {
      const nameHeader = canvas.getByRole("columnheader", { name: "Name" });
      const namesBefore = getNameColumn(canvas);
      await expect(nameHeader).toHaveAttribute("aria-sort", "ascending");

      await userEvent.click(within(nameHeader).getByRole("button"));

      await expect(nameHeader).toHaveAttribute("aria-sort", "descending");
      await expect(getNameColumn(canvas)).toEqual([...namesBefore].reverse());
      await expect(getNameColumn(canvas)).not.toEqual(namesBefore);
    },
  );

  // Page 2 loads new rows from the server, so none of the page 1 names stay
  await step("The next page shows different rows", async () => {
    const namesOnPage1 = getNameColumn(canvas);
    // Page 2 is full, unless the total ends before 20 rows
    const expectedRowCount = Math.min(10, totalItemCount - 10);

    // EUI renders the clickable page controls as links, not buttons
    await userEvent.click(canvas.getByRole("link", { name: "Next page" }));

    // Wait until the server answered and the old rows are replaced
    await waitFor(async () => {
      await expect(getNameColumn(canvas)).not.toContain(namesOnPage1[0]);
    }, SERVER_TIMEOUT);

    const namesOnPage2 = getNameColumn(canvas);
    await expect(namesOnPage2).toHaveLength(expectedRowCount);
    await expect(
      canvas.getByText(`Loaded: ${expectedRowCount} / ${totalItemCount}`),
    ).toBeVisible();
    await expect(
      canvas.getByRole("button", { name: /^Page 2 of/ }),
    ).toHaveAttribute("aria-current", "page");
    // No name from page 1 is shown on page 2
    await expect(
      namesOnPage2.filter((name) => namesOnPage1.includes(name)),
    ).toEqual([]);
  });

  // With 25 rows per page, all rows up to 25 fit on one page
  await step(
    "Changing rows per page changes how many rows we see",
    async () => {
      const expectedRowCount = Math.min(25, totalItemCount);

      await userEvent.click(
        canvas.getByRole("button", { name: "Rows per page: 10" }),
      );
      // The options open in a popover outside the story root, so use screen
      await userEvent.click(
        await screen.findByRole("button", { name: "25 rows" }),
      );

      // Wait until the server answered with the bigger page
      await waitFor(async () => {
        await expect(getNameColumn(canvas)).toHaveLength(expectedRowCount);
      }, SERVER_TIMEOUT);

      await expect(
        canvas.getByText(`Loaded: ${expectedRowCount} / ${totalItemCount}`),
      ).toBeVisible();
      await expect(
        canvas.getByRole("button", { name: "Rows per page: 25" }),
      ).toBeVisible();
      await expect(
        canvas.queryByRole("button", { name: "Rows per page: 10" }),
      ).not.toBeInTheDocument();
    },
  );
};

/**
 * Returns the names in the table body from top to bottom.
 * The header row is skipped because it has column headers instead of cells.
 */
function getNameColumn(canvas: StoryContext["canvas"]) {
  return canvas
    .getAllByRole("row")
    .filter((row) => within(row).queryAllByRole("cell").length > 0)
    .map((row) => within(row).getAllByRole("cell")[0].textContent);
}
