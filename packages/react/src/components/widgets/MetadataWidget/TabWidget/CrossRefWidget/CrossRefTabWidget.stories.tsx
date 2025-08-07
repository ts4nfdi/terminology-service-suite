import { CrossRefTabWidget } from "./CrossRefTabWidget";
import {
  CrossRefWidgetStoryArgs,
  CrossRefWidgetStoryArgTypes,
  CrossRefTabWidget1Args,
  SelectingDefiningOntologyArgs,
  DefiningOntologyUnavailableArgs,
  commonCrossRefWidgetPlay,
} from "./CrossRefWidgetStories";
import { CrossRefTabDescription } from "../../../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Additional Entity Metadata/CrossRefTabWidget",
  component: CrossRefTabWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: CrossRefTabDescription,
      },
    },
  },
  argTypes: CrossRefWidgetStoryArgTypes,
  args: CrossRefWidgetStoryArgs,
} satisfies Meta<typeof CrossRefTabWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CrossRefTabWidget1: Story = {
  args: CrossRefTabWidget1Args,
  play: commonCrossRefWidgetPlay,
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonCrossRefWidgetPlay,
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonCrossRefWidgetPlay,
};
