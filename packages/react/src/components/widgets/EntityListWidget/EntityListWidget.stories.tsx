// EntityListWidget.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { WrappedEntityListWidget } from "./EntityListWidget";
import {
  EntityListWidgetStoryArgTypes,
  EntityListWidgetStoryArgs,
  buildEntityListApiUrl,
} from "./EntityListWidgetStories";

const meta: Meta = {
  title: "Widgets/EntityListWidget",
  component: WrappedEntityListWidget,
  argTypes: EntityListWidgetStoryArgTypes,
  args: EntityListWidgetStoryArgs,
  render: (args: any) => {
    const apiUrl = buildEntityListApiUrl(args);
    return <WrappedEntityListWidget apiUrl={apiUrl} />;
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WithDefaults: Story = {
  args: {
    api: "https://semanticlookup.zbmed.de/ols/api/",
    parameter: "search=",
  },
};
