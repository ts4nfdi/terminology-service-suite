import { GraphViewWidget } from "./GraphViewWidget";
import {
  GraphViewWidgetStoryArgTypes,
  GraphViewWidgetStoryArgs,
  GraphViewWidgetExampleArgs,
  RootWalkGraphExampleArgs,
  ChebiWaterArgs,
  ChebiWaterRootWalkArgs, commonGraphViewWidgetPlay, ChebiCaffeineHierarchyArgs, WithOnNodeDoubleClickCallbackArgs
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
  parameters: {
    docs: {
      disable: true,
    }
  },
  play: commonGraphViewWidgetPlay
};

export const ChebiWater: Story = {
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true,
    }
  },
  play: commonGraphViewWidgetPlay
};

export const ChebiWaterRootWalk: Story = {
  args: ChebiWaterRootWalkArgs,
  parameters: {
    docs: {
      disable: true,
    }
  },
  play: commonGraphViewWidgetPlay
};

export const ChebiCaffeineHierarchy: Story = {
  args: ChebiCaffeineHierarchyArgs,
  parameters: {
    docs: {
      disable: true,
    }
  },
  play: commonGraphViewWidgetPlay
};

export const WithOnNodeDoubleClickCallback: Story = {
  args: WithOnNodeDoubleClickCallbackArgs,
  parameters: {
    docs: {
      disable: true,
    }
  },
  play: commonGraphViewWidgetPlay
};
