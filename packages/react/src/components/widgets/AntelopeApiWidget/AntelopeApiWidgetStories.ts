import * as globals from "../../../app/globals";

import {
  thresholdArgType,
  searchTermArgType,
  languageArgType,
} from "../../../stories/storyArgs";
import { expect, waitFor, within } from "storybook/test";

export const AntelopeApiWidgetStoryArgTypes = {
  ...thresholdArgType,
  ...searchTermArgType,
  ...languageArgType,
};

export const AntelopeApiWidgetStoryArgs = {
  threshold: "",
  searchTerm: "",
  language: "",
} as const;

export const AntelopeApiWidgetDefaultArgs = {
  threshold: 0.8,
  searchTerm: "string",
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
