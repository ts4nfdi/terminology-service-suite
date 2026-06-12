import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  MathFormulaWidget,
  MathFormulaWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import {
  commonMathFormulaWidgetPlay,
  MathFormulaWidgetStoryArgTypes,
  MathmodP983StoryArgs,
  MathmodP989StoryArgs,
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
    },
    document.querySelector('#math_formula_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: MathFormulaWidgetStoryArgTypes,
  args: MathmodP983StoryArgs,
} satisfies Meta<typeof MathFormulaWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MathmodP983: Story = {
  args: MathmodP983StoryArgs,
  play: commonMathFormulaWidgetPlay,
};

export const MathmodP989: Story = {
  args: MathmodP989StoryArgs,
  play: commonMathFormulaWidgetPlay,
};
