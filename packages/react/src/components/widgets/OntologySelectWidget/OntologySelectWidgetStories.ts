import * as globals from "../../../app/globals";

import { expect, waitFor, within } from "storybook/test";
import { apiArgType, parameterArgType } from "../../../stories/storyArgs";

export const OntologySelectWidgetStoryArgTypes = {
  ...apiArgType,
  ...parameterArgType,
};

export const OntologySelectWidgetStoryArgs = {
  api: "",
  parameter: "",
};

export const OntologySelectWidgetArgs = {
  ...OntologySelectWidgetStoryArgs,
  api: globals.ZBMED_OLS4_API,
};

export const commonOntologySelectWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("ontology-select");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
