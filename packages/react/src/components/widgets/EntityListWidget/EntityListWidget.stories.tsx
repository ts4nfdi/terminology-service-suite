import type { Meta, StoryObj } from "@storybook/react";
import { EntityListDescription } from "../../../app/widgetDescriptions";
import { WrappedEntityListWidget } from "./EntityListWidget";
import {
  EntityListWidgetIndividualsArgs,
  EntityListWidgetMeshTermsArgs,
  EntityListWidgetPropertiesArgs,
  EntityListWidgetStoryArgTypes,
  EntityListWidgetStoryArgs,
} from "./EntityListWidgetStories";

const meta: Meta = {
  title: "Search/EntityListWidget",
  component: WrappedEntityListWidget,
  argTypes: EntityListWidgetStoryArgTypes,
  args: EntityListWidgetStoryArgs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: EntityListDescription,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: EntityListWidgetStoryArgs,
};

export const MeshTerms: Story = {
  args: EntityListWidgetMeshTermsArgs,
};

export const Individuals: Story = {
  args: EntityListWidgetIndividualsArgs,
};

export const Properties: Story = {
  args: EntityListWidgetPropertiesArgs,
};
