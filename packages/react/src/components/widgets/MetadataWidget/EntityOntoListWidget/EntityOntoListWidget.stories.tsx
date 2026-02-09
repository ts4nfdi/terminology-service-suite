import type { Meta, StoryObj } from "@storybook/react-vite";
import { manuallyEmbedOnNavigate } from "../../../../app/util";
import { EntityOntoListDescription } from "../../../../app/widgetDescriptions";
import { EntityOntoListWidget } from "./EntityOntoListWidget";
import {
  commonEntityOntoListWidgetPlay,
  EntityOntoListWidgetStoryArgs,
  EntityOntoListWidgetStoryArgTypes,
  exceedsMaxDisplayArgs,
  legacyApiArgs,
  v2ApiEFOArgs,
  v2ApiONSArgs,
} from "./EntityOntoListWidgetStories";

const meta = {
  title: "Additional Entity Metadata/EntityOntoListWidget",
  component: EntityOntoListWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate,
      },
      description: {
        component: EntityOntoListDescription,
      },
    },
  },
  argTypes: EntityOntoListWidgetStoryArgTypes,
  args: EntityOntoListWidgetStoryArgs,
} satisfies Meta<typeof EntityOntoListWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const v2ApiEFO: Story = {
  args: v2ApiEFOArgs,
  play: commonEntityOntoListWidgetPlay,
};

export const v2ApiONS: Story = {
  args: v2ApiONSArgs,
  play: commonEntityOntoListWidgetPlay,
};

export const legacyApi: Story = {
  args: legacyApiArgs,
  play: commonEntityOntoListWidgetPlay,
};

export const exceedsMaxDisplay: Story = {
  args: exceedsMaxDisplayArgs,
  play: commonEntityOntoListWidgetPlay,
};
