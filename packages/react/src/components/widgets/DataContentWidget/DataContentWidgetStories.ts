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
  api: globals.GATEWAY_API_OLS_ENDPOINT,
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
  collectionId:
    "https://w3id.org/ts4nfdi/collection/4f7df6cc-a6b2-45b7-a15e-7e8a577d70c2",
};

export const DataContentCollectionWithoutPropertiesArgs = {
  ...DataContentWidgetStoryArgs,
  collectionId:
    "https://w3id.org/ts4nfdi/collection/c2832af3-c7ac-4c95-ba5c-eb31d7cdf8db",
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
