import type { Meta, StoryObj } from "@storybook/react-vite";
import { ResourcesDescription } from "../../../app/widgetDescriptions";
import { ResourcesWidget } from "./ResourcesWidget";
import {
  commonResourcesWidgetPlay,
  ResourcesWidget1Args,
  ResourcesWidgetLogosArgs,
  ResourcesWidgetStoryArgs,
  ResourcesWidgetStoryArgTypes,
  WithActionsArgs,
} from "./ResourcesWidgetStories";

const meta = {
  title: "Ontology Metadata/ResourcesWidget",
  component: ResourcesWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ResourcesDescription,
      },
    },
  },
  argTypes: ResourcesWidgetStoryArgTypes,
  args: ResourcesWidgetStoryArgs,
} satisfies Meta<typeof ResourcesWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ResourcesWidget1 = {
  args: ResourcesWidget1Args,
  play: commonResourcesWidgetPlay,
};

export const WithActions = {
  args: WithActionsArgs,
  play: commonResourcesWidgetPlay,
};

export const ResourcesWidgetLogos = {
  args: ResourcesWidgetLogosArgs,
  play: commonResourcesWidgetPlay,
};
