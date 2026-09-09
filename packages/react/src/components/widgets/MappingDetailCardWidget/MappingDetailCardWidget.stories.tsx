import type { Meta, StoryObj } from "@storybook/react";
import { MappingDetailCardDescription } from "../../../app/widgetDescriptions";
import { MappingDetailCardWidget } from "./MappingDetailCardWidget";
import {
  MappingDetailCardWidgetStoryArgs_Rec_B_2000,
  MappingDetailCardWidgetStoryArgTypes,
} from "./MappingDetailCardWidgetStories";

const meta: Meta = {
  title: "Mapping/MappingDetailCardWidget",
  component: MappingDetailCardWidget,
  argTypes: MappingDetailCardWidgetStoryArgTypes,
  args: MappingDetailCardWidgetStoryArgs_Rec_B_2000,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: MappingDetailCardDescription,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Rec_B_2000: Story = {
  args: MappingDetailCardWidgetStoryArgs_Rec_B_2000,
};
