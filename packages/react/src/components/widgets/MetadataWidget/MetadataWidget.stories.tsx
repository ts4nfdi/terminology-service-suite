import { MetadataWidget } from "./MetadataWidget";
import {
  MetadataWidgetStoryArgs,
  MetadataWidgetStoryArgTypes,
  MetadataWidget1Args,
  OLS3Args,
  OLS4V1Args,
  OLS4V2Args,
  SelectingDefiningOntologyArgs,
  DefiningOntologyUnavailableArgs,
  DefinedByAlsoAppearsInWidgetsArgs,
  HiddenTabsArgs,
  TermAsLinkArgs, commonMetadataWidgetPlay
} from "./MetadataWidgetStories";
import { manuallyEmbedOnNavigate } from "../../../app/util";
import { MetadataDescription } from "../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Entity Metadata/MetadataWidget",
  component: MetadataWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate,
      },
      description: {
        component: MetadataDescription,
      },
    },
  },
  argTypes: MetadataWidgetStoryArgTypes,
  args: MetadataWidgetStoryArgs,
} satisfies Meta<typeof MetadataWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MetadataWidget1: Story = {
  name: "Metadata Widget",
  args: MetadataWidget1Args,
  play: commonMetadataWidgetPlay
};

export const OLS3: Story = {
  name: "OLS3",
  args: OLS3Args,
  play: commonMetadataWidgetPlay
};

export const OLS4V1: Story = {
  name: "OLS4 V1",
  args: OLS4V1Args,
  play: commonMetadataWidgetPlay
};

export const OLS4V2: Story = {
  name: "OLS4 V2",
  args: OLS4V2Args,
  play: commonMetadataWidgetPlay
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonMetadataWidgetPlay
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonMetadataWidgetPlay
};

export const DefinedByAlsoAppearsInWidgets: Story = {
  args: DefinedByAlsoAppearsInWidgetsArgs,
  play: commonMetadataWidgetPlay
};

export const HiddenTabs: Story = {
  name: "Hidden Tabs",
  args: HiddenTabsArgs,
  play: commonMetadataWidgetPlay
};

export const TermAsLink: Story = {
  args: TermAsLinkArgs,
  play: commonMetadataWidgetPlay
};
