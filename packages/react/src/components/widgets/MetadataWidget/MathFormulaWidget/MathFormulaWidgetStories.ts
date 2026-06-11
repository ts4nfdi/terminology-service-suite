import { expect, waitFor, within } from "storybook/test";
import {
  apiArgType,
  iriArgType,
  mathPorpertyArgType,
  ontologyIdArgType,
} from "../../../../stories/storyArgs";

export const MathFormulaWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdArgType,
  ...mathPorpertyArgType,
};

export const MathFormulaWidgetStoryArgs = {
  api: "",
  content: "",
  ontologyId: "",
  iri: "",
} as const;

export const MathmodP983StoryArgs = {
  api: "http://localhost:8080/api/",
  ontologyId: "mathmod",
  iri: "https://portal.mardi4nfdi.de/entity/Q6674137",
  mathProperty: "https://portal.mardi4nfdi.de/wiki/entity/P983",
};

export const MathmodP989StoryArgs = {
  api: "http://localhost:8080/api/",
  ontologyId: "mathmod",
  iri: "https://portal.mardi4nfdi.de/entity/Q6674137",
  mathProperty: "https://portal.mardi4nfdi.de/wiki/entity/P989",
};

export const commonMathFormulaWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("math-formula");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
