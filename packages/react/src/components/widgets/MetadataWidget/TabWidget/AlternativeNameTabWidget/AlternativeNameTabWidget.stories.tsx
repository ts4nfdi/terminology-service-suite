import type { Meta, StoryObj } from "@storybook/react-vite";
import { AlternativeNameTabDescription } from "../../../../../app/widgetDescriptions";
import { AlternativeNameTabWidget } from "./AlternativeNameTabWidget";
import {
  AlternativeNameTabWidget1Args,
  AlternativeNameTabWidgetStoryArgs,
  AlternativeNameTabWidgetStoryArgTypes,
  commonAlternativeNameTabWidgetPlay,
  DefiningOntologyUnavailableArgs,
  SelectingDefiningOntologyArgs,
} from "./AlternativeNameTabWidgetStories";
const meta = {
  title: "Entity Metadata/AlternativeNameTabWidget",
  component: AlternativeNameTabWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: AlternativeNameTabDescription,
      },
    },
  },
  argTypes: AlternativeNameTabWidgetStoryArgTypes,
  args: AlternativeNameTabWidgetStoryArgs,
} satisfies Meta<typeof AlternativeNameTabWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AlternativeNameTabWidget1: Story = {
  args: AlternativeNameTabWidget1Args,
  play: commonAlternativeNameTabWidgetPlay,
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonAlternativeNameTabWidgetPlay,
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonAlternativeNameTabWidgetPlay,
};
