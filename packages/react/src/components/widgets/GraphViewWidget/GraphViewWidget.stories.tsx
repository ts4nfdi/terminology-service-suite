import { GraphViewWidget } from "./GraphViewWidget";
import {
  GraphViewWidgetStoryArgTypes,
  GraphViewWidgetStoryArgs,
  ChebiIonArgs,
  ChebiIonComparisonArgs,
  ChebiIonRootWalkArgs,
  ChebiWaterArgs,
  ChebiWaterRootWalkArgs,
  commonGraphViewWidgetPlay,
  ChebiCaffeineHierarchyArgs,
  WithOnNodeDoubleClickCallbackArgs,
  ChebiCaffeineHierarchyWithComparisonArgs,
  ChebiIonAndIonRadicalWithComparisonArgs
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

export const ChebiIon: Story = {
  args: ChebiIonArgs,
  play: commonGraphViewWidgetPlay,
};

export const ChebiIonComparison: Story = {
  args: ChebiIonComparisonArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};
export const ChebiIonRootWalk: Story = {
  args: ChebiIonRootWalkArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};

export const ChebiWater: Story = {
  args: ChebiWaterArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};

export const ChebiWaterRootWalk: Story = {
  args: ChebiWaterRootWalkArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};

export const ChebiCaffeineHierarchy: Story = {
  args: ChebiCaffeineHierarchyArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};

export const WithOnNodeDoubleClickCallback: Story = {
  args: WithOnNodeDoubleClickCallbackArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};

export const ChebiCaffeineHierarchyWithComparison: Story = {
  args: ChebiCaffeineHierarchyWithComparisonArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};

export const ChebiIonAndIonRadicalWithComparison: Story = {
  args: ChebiIonAndIonRadicalWithComparisonArgs,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: commonGraphViewWidgetPlay,
};
