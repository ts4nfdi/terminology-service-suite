import type { Meta, StoryObj } from "@storybook/react-vite";
import { MathFormulaWidget } from "./MathFormulaWidget";
import {
  MathFormulaWidgetDefaultArgs,
  MathFormulaWidgetStoryArgs,
  MathFormulaWidgetStoryArgTypes,
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

export const MathFormulaWidgetDefault: Story = {
  args: MathFormulaWidgetDefaultArgs,
};
