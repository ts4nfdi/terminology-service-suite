import * as globals from "../../../app/globals";

import {
  apiQueryArgType,
  buttonSizeArgType,
  buttonTextArgType,
} from "../../../stories/storyArgs";
import { expect, waitFor, within } from "storybook/test";

export const JsonApiWidgetStoryArgTypes = {
  ...apiQueryArgType,
  ...buttonSizeArgType,
  ...buttonTextArgType,
};

export const JsonApiWidgetStoryArgs = {
  apiQuery: "",
  buttonText: "",
  buttonSize: "m",
} as const;

export const JsonApiWidgetDefaultArgs = {
    apiQuery: globals.ZBMED_OLS4_API + "ontologies/atc",
    buttonText: "show JSON",
    buttonSize: "m",
};

export const commonJsonApiWidgetPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('json-api');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};