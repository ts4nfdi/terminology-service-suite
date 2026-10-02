import type { Meta, StoryObj } from "@storybook/react";
import { MappingDetailDescription } from "../../../app/widgetDescriptions";
import { WrappedMappingDetailWidget } from "./MappingDetailWidget";
import {
  MappingDetailWidgetStoryArgs_Rec_B_2000,
  MappingDetailWidgetStoryArgTypes,
} from "./MappingDetailWidgetStories";

const meta: Meta = {
  title: "Mapping/MappingDetailWidget",
  component: WrappedMappingDetailWidget,
  argTypes: MappingDetailWidgetStoryArgTypes,
  args: MappingDetailWidgetStoryArgs_Rec_B_2000,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: MappingDetailDescription,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Rec_B_2000: Story = {
  args: MappingDetailWidgetStoryArgs_Rec_B_2000,
};
