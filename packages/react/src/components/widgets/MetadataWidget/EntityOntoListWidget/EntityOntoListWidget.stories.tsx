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
  v2ApiFOODONArgs,
  v2ApiNCBITaxonArgs,
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

export const v2ApiNCBITaxon: Story = {
  args: v2ApiNCBITaxonArgs,
  play: commonEntityOntoListWidgetPlay,
};

export const v2ApiFOODON: Story = {
  args: v2ApiFOODONArgs,
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
