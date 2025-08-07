import { TabWidget } from "./TabWidget";
import {
  TabWidgetStoryArgs,
  TabWidgetStoryArgTypes,
  DefaultArgs,
  TabWidgetOLS3Args,
  TabWidgetOLS4V1Args,
  TabWidgetOLS4V2Args,
  SelectingDefiningOntologyArgs,
  DefiningOntologyUnavailableArgs,
  TabWidgetLargeArgs,
  HiddenTabsArgs,
} from "./TabWidgetStories";
import { TabDescription } from "../../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { commonTabWidgetPlay } from "./TabWidgetStories";

const meta = {
  title: "Additional Entity Metadata/TabWidget",
  component: TabWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: TabDescription,
      },
    },
  },
  argTypes: TabWidgetStoryArgTypes,
  args: TabWidgetStoryArgs,
} satisfies Meta<typeof TabWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DefaultArgs,
  play: commonTabWidgetPlay,
};

export const TabWidgetOLS3: Story = {
  name: "OLS3",
  args: TabWidgetOLS3Args,
  play: commonTabWidgetPlay,
};

export const TabWidgetOLS4V1: Story = {
  name: "OLS4 V1",
  args: TabWidgetOLS4V1Args,
  play: commonTabWidgetPlay,
};

export const TabWidgetOLS4V2: Story = {
  name: "OLS4 V2",
  args: TabWidgetOLS4V2Args,
  play: commonTabWidgetPlay,
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonTabWidgetPlay,
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonTabWidgetPlay,
};

export const TabWidgetLarge: Story = {
  args: TabWidgetLargeArgs,
  play: commonTabWidgetPlay,
};

export const HiddenTabs: Story = {
  args: HiddenTabsArgs,
  play: commonTabWidgetPlay,
};
