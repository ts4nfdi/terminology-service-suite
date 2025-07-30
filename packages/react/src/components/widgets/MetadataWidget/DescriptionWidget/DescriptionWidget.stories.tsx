import { DescriptionWidget } from "./DescriptionWidget";
import {
  DescriptionWidgetStoryArgs,
  DescriptionWidgetStoryArgTypes,
  DescriptionWidget1Args,
  SelectingDefiningOntologyArgs,
  DefiningOntologyUnavailableArgs,
  ErrorFetchingDataArgs, commonDescriptionWidgetPlay
} from "./DescriptionWidgetStories";
import { DescriptionDescription } from "../../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Entity Metadata/DescriptionWidget",
  component: DescriptionWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: DescriptionDescription,
      },
    },
  },
  argTypes: DescriptionWidgetStoryArgTypes,
  args: DescriptionWidgetStoryArgs,
} satisfies Meta<typeof DescriptionWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DescriptionWidget1: Story = {
  args: DescriptionWidget1Args,
  play: commonDescriptionWidgetPlay
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonDescriptionWidgetPlay
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonDescriptionWidgetPlay
};

export const ErrorFetchingData: Story = {
  args: ErrorFetchingDataArgs,
  play: commonDescriptionWidgetPlay
};
