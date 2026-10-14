import * as globals from "../../../app/globals";

import { expect, waitFor, within } from "storybook/test";
import {
  apiArgType,
  dataContentParameterArgType,
} from "../../../stories/storyArgs";

export const DataContentWidgetStoryArgTypes = {
  ...apiArgType,
  ...dataContentParameterArgType,
};

export const DataContentWidgetStoryArgs = {
  api: "",
  parameter: "",
};

export const NFDI4HealthDataContentWidgetArgs = {
  ...DataContentWidgetStoryArgs,
  api: globals.ZBMED_OLS4_API,
};

export const ErrorDataContentWidgetArgs = {
  ...DataContentWidgetStoryArgs,
  api: "",
};

export const DataContentFAIRagroCollectionArgs = {
  ...DataContentWidgetStoryArgs,
  collectionId: "ff5491d1-d0a9-481e-ac90-0fad065fa097",
};

export const commonDataContentWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("data-content");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
