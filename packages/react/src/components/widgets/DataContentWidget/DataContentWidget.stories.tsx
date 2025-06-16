import { DataContentWidget } from "./DataContentWidget";
import {
  DataContentWidgetStoryArgs,
  DataContentWidgetStoryArgTypes, ErrorDataContentWidgetArgs,
  NFDI4HealthDataContentWidgetArgs, SafetyDataContentWidgetArgs
} from "./DataContentWidgetStories";
import {  DataContentDescription } from "../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react";
import { within, expect, waitFor } from "@storybook/test";

const meta = {
  title: "Terminology Service/DataContentWidget",
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
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
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('data-content');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const SafetyDataContentWidget: Story = {
  args: SafetyDataContentWidgetArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('data-content');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};

export const ErrorDataContentWidget: Story = {
  args: ErrorDataContentWidgetArgs,
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      const content = canvas.getByTestId('data-content');
      await expect(content).toBeInTheDocument();
    }, {
      timeout: 3000
    })
  }
};
