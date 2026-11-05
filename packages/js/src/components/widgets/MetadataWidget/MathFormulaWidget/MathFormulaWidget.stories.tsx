import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  MathFormulaWidget,
  MathFormulaWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import { MathFormulaDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  commonMathFormulaWidgetPlay,
  MathFormulaWidgetStoryArgs,
  MathFormulaWidgetStoryArgTypes,
  MathMLFractionInputStoryArgs,
  MathMLInputStoryArgs,
  MathMLTextInputStoryArgs,
  MathmoddbDefiningFormulaStoryArgs,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/MathFormulaWidget/MathFormulaWidgetStories";
import "./index";

let counter = 0;

function getIncNum() {
  return counter++;
}

// @ts-ignore
const meta: Meta<MathFormulaWidgetProps> = {
  title: "Entity Metadata/MathFormulaWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: MathFormulaDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: MathFormulaWidgetProps) => {
    const num = getIncNum();

    return `
<div id="math_formula_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createMathFormula(
    {
      api: "${args.api}",
      ontologyId: "${args.ontologyId}",
      iri: "${args.iri}",
      mathProperty: "${args.mathProperty}",
      mathML: ${JSON.stringify(args.mathML ?? "")},
    },
    document.querySelector('#math_formula_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: MathFormulaWidgetStoryArgTypes,
  args: MathFormulaWidgetStoryArgs,
} satisfies Meta<typeof MathFormulaWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MathmoddbDefiningFormula: Story = {
  args: MathmoddbDefiningFormulaStoryArgs,
  play: commonMathFormulaWidgetPlay,
};

export const MathMLInput: Story = {
  args: MathMLInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story:
          "Renders a simple formula from a direct MathML string. The value of mathML should be MathML markup, not an entity IRI.",
      },
    },
  },
  play: commonMathFormulaWidgetPlay,
};

export const MathMLTextInput: Story = {
  args: MathMLTextInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story:
          "Shows how plain text can be rendered when it is wrapped in valid MathML, for example inside an mtext element.",
      },
    },
  },
  play: commonMathFormulaWidgetPlay,
};

export const MathMLFractionInput: Story = {
  args: MathMLFractionInputStoryArgs,
  parameters: {
    docs: {
      description: {
        story:
          "Renders a slightly more complex MathML formula with a fraction.",
      },
    },
  },
  play: commonMathFormulaWidgetPlay,
};
