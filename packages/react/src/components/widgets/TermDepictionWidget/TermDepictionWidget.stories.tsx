import { TermDepictionWidget } from "./TermDepictionWidget";
import {
  TermDepictionWidgetStoryArgs,
  TermDepictionWidgetStoryArgTypes,
  TermDepictionWidgetExampleArgs,
  TermDepictionWidget3DArgs, commonTermDepictionWidgetPlay
} from "./TermDepictionWidgetStories";
import { TermDepictionDescription } from "../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Additional Entity Metadata/TermDepictionWidget",
  component: TermDepictionWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: TermDepictionDescription,
      },
    },
  },
  argTypes: TermDepictionWidgetStoryArgTypes,
  args: TermDepictionWidgetStoryArgs,
} satisfies Meta<typeof TermDepictionWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TermDepictionWidgetExample = {
  args: TermDepictionWidgetExampleArgs,
  play: commonTermDepictionWidgetPlay
};


export const TermDepictionWidget3D = {
  args: TermDepictionWidget3DArgs,
  play: commonTermDepictionWidgetPlay
};
