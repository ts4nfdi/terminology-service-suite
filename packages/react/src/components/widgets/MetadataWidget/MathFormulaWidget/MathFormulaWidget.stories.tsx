import type { Meta, StoryObj } from "@storybook/react-vite";
import { MathFormulaDescription } from "../../../../app/widgetDescriptions";
import { MathFormulaWidget } from "./MathFormulaWidget";
import {
  commonMathFormulaWidgetPlay,
  MathFormulaWidgetStoryArgs,
  MathFormulaWidgetStoryArgTypes,
  MathMLFractionInputStoryArgs,
  MathMLInputStoryArgs,
  MathMLTextInputStoryArgs,
  MathmodP983StoryArgs,
  MathmodP989StoryArgs,
} from "./MathFormulaWidgetStories";

const meta = {
  title: "Entity Metadata/MathFormulaWidget",
  component: MathFormulaWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: MathFormulaDescription,
      },
    },
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
