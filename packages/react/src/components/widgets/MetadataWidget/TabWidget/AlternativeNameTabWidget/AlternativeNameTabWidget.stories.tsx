import { AlternativeNameTabWidget } from "./AlternativeNameTabWidget";
import {
  AlternativeNameTabWidgetStoryArgs,
  AlternativeNameTabWidgetStoryArgTypes,
  AlternativeNameTabWidget1Args,
  SelectingDefiningOntologyArgs,
  DefiningOntologyUnavailableArgs,
  commonAlternativeNameTabWidgetPlay,
} from "./AlternativeNameTabWidgetStories";
import { AlternativeNameTabDescription } from "../../../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react-vite";
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
