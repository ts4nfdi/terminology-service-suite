import type { StoryContext } from "@storybook/react-vite";
import { expect } from "storybook/test";
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
};
