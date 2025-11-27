import { ResourcesWidget } from "./ResourcesWidget";
import {
  ResourcesWidgetStoryArgs,
  ResourcesWidgetStoryArgTypes,
  ResourcesWidget1Args,
  WithActionsArgs,
  ResourcesWidgetLogosArgs,
  commonResourcesWidgetPlay,
} from "./ResourcesWidgetStories";
import { ResourcesDescription } from "../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react-vite";

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
