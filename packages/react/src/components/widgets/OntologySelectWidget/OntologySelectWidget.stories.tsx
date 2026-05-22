import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataContentDescription } from "../../../app/widgetDescriptions";
import { OntologySelectWidget } from "./OntologySelectWidget";
import {
  commonOntologySelectWidgetPlay,
  OntologySelectWidgetArgs,
  OntologySelectWidgetStoryArgs,
  OntologySelectWidgetStoryArgTypes,
} from "./OntologySelectWidgetStories";

const meta = {
  title: "Ontology Metadata/OntologySelectWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: DataContentDescription,
      },
    },
  },
  component: OntologySelectWidget,
  argTypes: OntologySelectWidgetStoryArgTypes,
  args: OntologySelectWidgetArgs,
} satisfies Meta<typeof OntologySelectWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OntologySelectWidgetStory: Story = {
  args: OntologySelectWidgetStoryArgs,
  play: commonOntologySelectWidgetPlay,
};
