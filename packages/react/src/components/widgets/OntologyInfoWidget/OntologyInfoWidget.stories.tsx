import type { Meta, StoryObj } from "@storybook/react-vite";
import { manuallyEmbedOnNavigate } from "../../../app/util";
import { OntologyInfoDescription } from "../../../app/widgetDescriptions";
import { OntologyInfoWidget } from "./OntologyInfoWidget";
import {
  commonOntologyInfoWidgetPlay,
  NavigateToEBIPageArgs,
  OntologyInfoWidget1Args,
  OntologyInfoWidget2Args,
  OntologyInfoWidgetOLS4APIArgs,
  OntologyInfoWidgetStoryArgs,
  OntologyInfoWidgetStoryArgTypes,
} from "./OntologyInfoWidgetStories";

const meta = {
  title: "Ontology Metadata/OntologyInfoWidget",
  component: OntologyInfoWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate,
      },
      description: {
        component: OntologyInfoDescription,
      },
    },
  },
  argTypes: OntologyInfoWidgetStoryArgTypes,
  args: OntologyInfoWidgetStoryArgs,
} satisfies Meta<typeof OntologyInfoWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OntologyInfoWidget1: Story = {
  args: OntologyInfoWidget1Args,
  play: commonOntologyInfoWidgetPlay,
};

export const OntologyInfoWidget2: Story = {
  args: OntologyInfoWidget2Args,
  play: commonOntologyInfoWidgetPlay,
};

export const OntologyInfoWidgetOLS4API: Story = {
  args: OntologyInfoWidgetOLS4APIArgs,
  play: commonOntologyInfoWidgetPlay,
};

export const NavigateToEBIPage: Story = {
  args: NavigateToEBIPageArgs,
  play: commonOntologyInfoWidgetPlay,
};
