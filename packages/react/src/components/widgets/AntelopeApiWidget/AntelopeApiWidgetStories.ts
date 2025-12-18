import * as globals from "../../../app/globals";

import {
  apiQueryArgType,
  buttonTextArgType,
  thresholdArgType,
  searchTermArgType,
  languageArgType,
} from "../../../stories/storyArgs";
import { expect, waitFor, within } from "storybook/test";

export const AntelopeApiWidgetStoryArgTypes = {
  ...apiQueryArgType,
  ...buttonTextArgType,
  ...thresholdArgType,
  ...searchTermArgType,
  ...languageArgType,
};

export const AntelopeApiWidgetStoryArgs = {
  apiQuery: "",
  buttonText: "",
  threshold: "",
  searchTerm: "",
  language: "",
} as const;

export const AntelopeApiWidgetDefaultArgs = {
  apiQuery: globals.TIB_ANNOTATION_API_ENDPOINT + "annotation/status",
  buttonText: "Annotate with Antelope",
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
