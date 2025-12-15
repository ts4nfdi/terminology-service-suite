import * as globals from "../../../app/globals";

import {
  apiQueryArgType,
  buttonSizeArgType,
  buttonTextArgType,
  thresholdArgType,
  searchTermArgType,
  languageArgType,
} from "../../../stories/storyArgs";
import { expect, waitFor, within } from "storybook/test";

export const AntelopeApiWidgetStoryArgTypes = {
  ...apiQueryArgType,
  ...buttonSizeArgType,
  ...buttonTextArgType,
  ...thresholdArgType,
  ...searchTermArgType,
  ...languageArgType,
};

export const AntelopeApiWidgetStoryArgs = {
  apiQuery: "",
  buttonText: "",
  buttonSize: "m",
  thresholdArgType: 0.8,
  searchTerm: "",
  language: ['en'] as string[],
} as const;

export const AntelopeApiWidgetDefaultArgs = {
  apiQuery: globals.TIB_ANNOTATION_API_ENDPOINT + "annotation/status",
  buttonText: "show JSON",
  buttonSize: "m",
  threshold: 0.8,
  searchTerm: "",
  language: "en",
};

export const commonAntelopeApiWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("antelope-api");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
