import type { Meta, StoryObj } from "@storybook/react-vite";
import { manuallyEmbedOnNavigate } from "../../../../app/util";
import { EntityDefinedByDescription } from "../../../../app/widgetDescriptions";
import { EntityDefinedByWidget } from "./EntityDefinedByWidget";
import {
  commonEntityDefinedByWidgetPlay,
  emptyInDefiningOntologyArgs,
  EntityDefinedByWidgetStoryArgs,
  EntityDefinedByWidgetStoryArgTypes,
  legacyApiArgs,
  v2ApiONSArgs,
} from "./EntityDefinedByWidgetStories";

const meta = {
  title: "Additional Entity Metadata/EntityDefinedByWidget",
  component: EntityDefinedByWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate,
      },
      description: {
        component: EntityDefinedByDescription,
      },
    },
  },
  argTypes: EntityDefinedByWidgetStoryArgTypes,
  args: EntityDefinedByWidgetStoryArgs,
} satisfies Meta<typeof EntityDefinedByWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const emptyInDefiningOntology: Story = {
  args: emptyInDefiningOntologyArgs,
  play: commonEntityDefinedByWidgetPlay,
};

export const v2ApiONS: Story = {
  args: v2ApiONSArgs,
  play: commonEntityDefinedByWidgetPlay,
};

export const legacyApi: Story = {
  args: legacyApiArgs,
  play: commonEntityDefinedByWidgetPlay,
};
