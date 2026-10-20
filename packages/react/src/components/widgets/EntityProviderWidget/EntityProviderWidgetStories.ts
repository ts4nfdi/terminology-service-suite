import { expect, waitFor, within } from "storybook/test";
import {
  disabledArgs,
  entityProviderArgs,
  EntityProviderHookStoryArgs,
  EntityProviderHookStoryArgTypes,
  notFoundArgs,
} from "./EntityProviderHookStories";

export const EntityProviderWidgetStoryArgTypes = {
  ...EntityProviderHookStoryArgTypes,
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

export const EntityProviderWidgetStoryArgs = {
  ...EntityProviderHookStoryArgs,
  showRaw: true,
};

export const WithOntologyIdArgs = { ...entityProviderArgs } as const;

export const WithoutRawArgs = {
  ...entityProviderArgs,
  showRaw: false,
} as const;

export const NotFoundArgs = { ...notFoundArgs } as const;

export const DisabledArgs = { ...disabledArgs } as const;

/**
 * Waits until the widget left the loading state and reached the expected one.
 * `data-state` avoids a race with the first render, where the hook is still
 * idle before its effect starts the request.
 */
async function waitForState(
  canvasElement: HTMLElement,
  expected: string[],
  timeout = 10000,
) {
  const canvas = within(canvasElement);
  await waitFor(
    async () => {
      const widget = canvas.getByTestId("entity-provider-widget");
      await expect(expected).toContain(widget.getAttribute("data-state"));
    },
    { timeout },
  );
  return canvas;
}

export const fullWithOntologyIdPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = await waitForState(canvasElement, ["success"]);
  // The gateway decides which provider answers, so only assert that one is shown.
  await expect(
    canvas.getAllByTestId("entity-provider-card").length,
  ).toBeGreaterThan(0);
};

export const fullWithoutRawPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = await waitForState(canvasElement, ["success"]);
  await expect(
    canvas.getAllByTestId("entity-provider-card").length,
  ).toBeGreaterThan(0);
  await expect(canvas.queryByText("Raw provider data")).toBeNull();
};

export const fullNotFoundPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = await waitForState(canvasElement, ["success"]);
  await expect(
    canvas.getByText("No provider information available"),
  ).toBeVisible();
  await expect(canvas.queryAllByTestId("entity-provider-card")).toHaveLength(0);
};

export const fullDisabledPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = await waitForState(canvasElement, ["idle"], 3000);
  await expect(canvas.queryByTestId("entity-provider-presentation")).toBeNull();
  await expect(canvas.queryAllByTestId("entity-provider-card")).toHaveLength(0);
};
