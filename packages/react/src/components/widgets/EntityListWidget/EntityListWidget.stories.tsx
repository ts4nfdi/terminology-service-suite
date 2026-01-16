import type { Meta, StoryObj } from "@storybook/react";
import { WrappedEntityListWidget } from "./EntityListWidget";
import {
    EntityListWidgetStoryArgsReact,
} from "./EntityListWidgetStories";

const meta: Meta<typeof WrappedEntityListWidget> = {
    title: "Widgets/EntityListWidget",
    component: WrappedEntityListWidget,
    args: EntityListWidgetStoryArgsReact,
};

export default meta;
type Story = StoryObj<typeof WrappedEntityListWidget>;

export const WithDefaults: Story = {};

