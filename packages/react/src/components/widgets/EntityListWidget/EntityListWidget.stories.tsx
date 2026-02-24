import type { Meta, StoryObj } from "@storybook/react";
import { WrappedEntityListWidget } from "./EntityListWidget";
import {
  EntityListWidgetStoryArgTypes,
  EntityListWidgetStoryArgs,
} from "./EntityListWidgetStories";

const meta: Meta = {
  title: "Widgets/EntityListWidget",
  component: WrappedEntityListWidget,
  argTypes: EntityListWidgetStoryArgTypes,
  args: EntityListWidgetStoryArgs,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const WithDefaults: Story = {
  args: {
    api: "https://www.ebi.ac.uk/ols4/api/",
    parameter: "search=",
    thingType: "property",
  },
};
