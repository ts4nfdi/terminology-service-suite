import * as globals from "../../../app/globals";

import { apiArgType, parameterArgType } from "../../../stories/storyArgs";
import { within, expect, waitFor } from "storybook/test";

export const DataContentWidgetStoryArgTypes = {
  ...apiArgType,
  ...parameterArgType,
};

export const DataContentWidgetStoryArgs = {
  api: "",
  parameter: "",
};

export const NFDI4HealthDataContentWidgetArgs = {
    ...DataContentWidgetStoryArgs,
    api: globals.ZBMED_OLS4_API,
    parameter: "collection=nfdi4health",
};

export const SafetyDataContentWidgetArgs = {
    ...DataContentWidgetStoryArgs,
    api: globals.ZBMED_OLS4_API,
    parameter: "collection=safety",
};

export const ErrorDataContentWidgetArgs = {
    ...DataContentWidgetStoryArgs,
    api: globals.ZBMED_OLS4_API,
    parameter: "collection=safety",
};

export const commonDataContentWidgetPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('data-content');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};