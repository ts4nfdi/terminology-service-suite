import type { Meta, StoryObj } from "@storybook/react-vite";
import { MathFormulaWidget } from "./MathFormulaWidget";
import {
  commonMathFormulaWidgetPlay,
  MathFormulaWidgetStoryArgs,
  MathFormulaWidgetStoryArgTypes,
  MathmodP983StoryArgs,
  MathmodP989StoryArgs,
} from "./MathFormulaWidgetStories";

const meta = {
  title: "Entity Metadata/MathFormulaWidget",
  component: MathFormulaWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: MathFormulaWidgetStoryArgTypes,
  args: MathFormulaWidgetStoryArgs,
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
