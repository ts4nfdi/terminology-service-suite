import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataContentDescription } from "../../../app/widgetDescriptions";
import { DataContentWidget } from "./DataContentWidget";
import {
  commonDataContentWidgetPlay,
  DataContentFAIRagroCollectionArgs,
  DataContentWidgetStoryArgs,
  DataContentWidgetStoryArgTypes,
  ErrorDataContentWidgetArgs,
  NFDI4HealthDataContentWidgetArgs,
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
  name: "SemLookP NFDI4Health",
  args: NFDI4HealthDataContentWidgetArgs,
  play: commonDataContentWidgetPlay,
};

export const ErrorDataContentWidget: Story = {
  name: "Error",
  args: ErrorDataContentWidgetArgs,
  play: commonDataContentWidgetPlay,
};

export const DataContentFAIRagroCollection: Story = {
  name: "FAIRagro Collection",
  args: DataContentFAIRagroCollectionArgs,
  play: commonDataContentWidgetPlay,
};
