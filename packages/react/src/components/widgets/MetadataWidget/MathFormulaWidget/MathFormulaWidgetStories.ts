import { expect, waitFor, within } from "storybook/test";
import {
  apiArgType,
  iriArgType,
  mathPorpertyArgType,
  ontologyIdArgType,
} from "../../../../stories/storyArgs";

const mathmodApi = "https://ols4-mathmod.qa.km.k8s.zbmed.de/ols/api/";
const mathmodOntologyId = "mathmod";
const mathmodEntityIri = "https://portal.mardi4nfdi.de/entity/Q6674137";

export const SimpleMathMLExample =
  '<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi><mo>=</mo><mn>1</mn></math>';

export const TextMathMLExample =
  '<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>formula example</mtext></math>';

export const FractionMathMLExample =
  '<math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow><mi>c</mi></mfrac></math>';

export const MathFormulaWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdArgType,
  ...mathPorpertyArgType,
  mathML: {
    control: { type: "text" } as const,
    description:
      "Inline MathML string to render directly. This should be MathML markup, not an entity IRI. When provided, mathProperty is not required.",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: SimpleMathMLExample },
    },
  },
};

export const MathMLInputStoryArgs = {
  api: mathmodApi,
  ontologyId: mathmodOntologyId,
  iri: mathmodEntityIri,
  mathML: SimpleMathMLExample,
};

export const MathMLTextInputStoryArgs = {
  api: mathmodApi,
  ontologyId: mathmodOntologyId,
  iri: mathmodEntityIri,
  mathML: TextMathMLExample,
};

export const MathMLFractionInputStoryArgs = {
  api: mathmodApi,
  ontologyId: mathmodOntologyId,
  iri: mathmodEntityIri,
  mathML: FractionMathMLExample,
};

export const MathFormulaWidgetStoryArgs = {
  api: "",
  ontologyId: "",
  iri: "",
} as const;

export const MathmodP983StoryArgs = {
  api: mathmodApi,
  ontologyId: mathmodOntologyId,
  iri: mathmodEntityIri,
  mathProperty: "https://portal.mardi4nfdi.de/entity/P983",
};

export const MathmodP989StoryArgs = {
  api: mathmodApi,
  ontologyId: mathmodOntologyId,
  iri: mathmodEntityIri,
  mathProperty: "https://portal.mardi4nfdi.de/entity/P989",
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
