import { GraphViewWidget } from "./GraphViewWidget";
import {
  GraphViewWidgetStoryArgTypes,
  GraphViewWidgetStoryArgs,
  GraphViewWidgetExampleArgs,
  RootWalkGraphExampleArgs,
  ChebiWaterArgs,
  ChebiWaterRootWalkArgs, commonGraphViewWidgetPlay
} from "./GraphViewWidgetStories";
import { GraphViewDescription } from "../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Hierarchy and Graph/GraphViewWidget",
  component: GraphViewWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: GraphViewDescription,
      },
    },
  },
  argTypes: GraphViewWidgetStoryArgTypes,
  args: GraphViewWidgetStoryArgs,
} satisfies Meta<typeof GraphViewWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GraphViewWidgetExample: Story = {
  args: GraphViewWidgetExampleArgs,
  play: commonGraphViewWidgetPlay
};

export const RootWalkGraphExample: Story = {
  args: RootWalkGraphExampleArgs,
  play: commonGraphViewWidgetPlay
};

export const ChebiWater: Story = {
  args: ChebiWaterArgs,
  play: commonGraphViewWidgetPlay
};

export const ChebiWaterRootWalk: Story = {
  args: ChebiWaterRootWalkArgs,
  play: commonGraphViewWidgetPlay
};
