import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataContentDescription } from "../../../app/widgetDescriptions";
import { DataContentWidget } from "./DataContentWidget";
import {
  commonDataContentWidgetPlay,
  DataContentWidgetStoryArgs,
  DataContentWidgetStoryArgTypes,
  ErrorDataContentWidgetArgs,
  NFDI4HealthDataContentWidgetArgs,
  SafetyDataContentWidgetArgs,
} from "./DataContentWidgetStories";

const meta = {
  title: "Terminology Service/DataContentWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: DataContentDescription,
      },
    },
  },
  component: DataContentWidget,
  argTypes: DataContentWidgetStoryArgTypes,
  args: DataContentWidgetStoryArgs,
} satisfies Meta<typeof DataContentWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NFDI4HealthDataContentWidget: Story = {
  args: NFDI4HealthDataContentWidgetArgs,
  play: commonDataContentWidgetPlay,
};

export const SafetyDataContentWidget: Story = {
  args: SafetyDataContentWidgetArgs,
  play: commonDataContentWidgetPlay,
};

export const ErrorDataContentWidget: Story = {
  args: ErrorDataContentWidgetArgs,
  play: commonDataContentWidgetPlay,
};
