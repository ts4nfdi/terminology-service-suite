import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  MathFormulaWidget,
  MathFormulaWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import {
  MathFormulaWidgetDefaultArgs,
  MathFormulaWidgetStoryArgs,
  MathFormulaWidgetStoryArgTypes,
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
        content: "${args.content}",
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

export const MathFormulaWidgetDefault: Story = {
  args: MathFormulaWidgetDefaultArgs,
};
