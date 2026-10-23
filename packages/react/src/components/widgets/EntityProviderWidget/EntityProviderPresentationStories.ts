import { expect, waitFor, within } from "storybook/test";
import { EntityProvider } from "../../../app/types";

export const EntityProviderPresentationStoryArgTypes = {
  providers: {
    required: true,
    description:
      "All providers found for the entity, one per ontology it occurs in.",
    table: { type: { summary: "EntityProvider[]" } },
  },
  provider: {
    required: false,
    description:
      "The preferred provider (defining ontology). It is highlighted when " +
      "more than one provider is listed.",
    table: { type: { summary: "EntityProvider | undefined" } },
  },
  isLoading: {
    required: false,
    description: "Shows a loading skeleton.",
    control: { type: "boolean" } as const,
    table: {
      defaultValue: { summary: "false" },
      type: { summary: "boolean" },
    },
  },
  isError: {
    required: false,
    description: "Shows an error callout with the message of `error`.",
    control: { type: "boolean" } as const,
    table: {
      defaultValue: { summary: "false" },
      type: { summary: "boolean" },
    },
  },
  error: {
    required: false,
    description: "The error shown when `isError` is true.",
    table: { type: { summary: "Error" } },
  },
  showRaw: {
    required: false,
    description: "Shows the collapsible raw `provider` block per entry.",
    control: { type: "boolean" } as const,
    table: {
      defaultValue: { summary: "true" },
      type: { summary: "boolean" },
    },
  },
  className: {
    required: false,
    description: "Custom CSS class replacing the default wrapper class.",
    table: { type: { summary: "string" } },
  },
};

export const EntityProviderPresentationStoryArgs = {
  providers: [] as EntityProvider[],
  provider: undefined,
  isLoading: false,
  isError: false,
  error: undefined,
  showRaw: true,
};

const skosmosProvider: EntityProvider = {
  name: "skosmos",
  type: "skosmos",
  api: "https://agrovoc.fao.org/browse/rest/v1",
  ontologyId: "agrovoc",
  raw: {
    provider_name: "skosmos",
    provider_type: "skosmos",
    provider_api: "https://agrovoc.fao.org/browse/rest/v1",
  },
};

const tibProvider: EntityProvider = {
  name: "tib",
  type: "ols",
  api: "https://www.tib.eu/api/ols/",
  ontologyId: "voc4cat",
  raw: {
    provider_name: "tib",
    provider_type: "ols",
    provider_api: "https://www.tib.eu/api/ols/",
  },
};

const unspecifiedProvider: EntityProvider = {
  name: "custom-provider",
  type: undefined as unknown as string,
  api: undefined as unknown as string,
  ontologyId: "myonto",
  raw: { provider_name: "custom-provider" },
};

export const singleProviderArgs = {
  providers: [skosmosProvider],
  provider: skosmosProvider,
};

export const multipleProvidersArgs = {
  providers: [tibProvider, skosmosProvider],
  provider: tibProvider,
};

export const withoutRawArgs = {
  providers: [skosmosProvider],
  provider: skosmosProvider,
  showRaw: false,
};

export const missingFieldsArgs = {
  providers: [unspecifiedProvider],
  provider: unspecifiedProvider,
};

export const loadingArgs = {
  providers: [],
  isLoading: true,
};

export const emptyArgs = {
  providers: [],
};

export const errorArgs = {
  providers: [],
  isError: true,
  error: new Error("Request failed with status code 500"),
};

async function waitForPresentation(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);
  await waitFor(
    async () => {
      await expect(
        canvas.getByTestId("entity-provider-presentation"),
      ).toBeInTheDocument();
    },
    { timeout: 3000 },
  );
  return canvas;
}

export const singleProviderPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = await waitForPresentation(canvasElement);
  await expect(canvas.getAllByTestId("entity-provider-card")).toHaveLength(1);
  await expect(canvas.getByText("skosmos", { selector: "h4" })).toBeVisible();
  await expect(canvas.queryByText("Defining ontology")).toBeNull();
  await expect(
    canvas.getByRole("link", { name: /agrovoc\.fao\.org/ }),
  ).toBeVisible();
};

export const multipleProvidersPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = await waitForPresentation(canvasElement);
  await expect(canvas.getAllByTestId("entity-provider-card")).toHaveLength(2);
  // Only the preferred provider carries the badge.
  await expect(canvas.getAllByText("Defining ontology")).toHaveLength(1);
  await expect(canvas.getByText(/served by 2 providers/)).toBeVisible();
};

export const withoutRawPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = await waitForPresentation(canvasElement);
  await expect(canvas.getAllByTestId("entity-provider-card")).toHaveLength(1);
  await expect(canvas.queryByText("Raw provider data")).toBeNull();
};

export const missingFieldsPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = await waitForPresentation(canvasElement);
  await expect(canvas.getAllByText("Not specified")).toHaveLength(2);
};

export const loadingPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = await waitForPresentation(canvasElement);
  await expect(canvas.queryAllByTestId("entity-provider-card")).toHaveLength(0);
};

export const emptyPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = await waitForPresentation(canvasElement);
  await expect(
    canvas.getByText("No provider information available"),
  ).toBeVisible();
  await expect(canvas.queryAllByTestId("entity-provider-card")).toHaveLength(0);
};

export const errorPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = await waitForPresentation(canvasElement);
  await expect(
    canvas.getByText("Provider information could not be loaded"),
  ).toBeVisible();
  await expect(
    canvas.getByText("Request failed with status code 500"),
  ).toBeVisible();
};
