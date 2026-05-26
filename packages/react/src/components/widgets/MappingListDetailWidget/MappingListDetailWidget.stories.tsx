import type { Meta, StoryObj } from "@storybook/react";
import { MappingListDetailDescription } from "../../../app/widgetDescriptions";
import { WrappedMappingListDetailWidget } from "./MappingListDetailWidget";
import {
  MappingListDetailWidgetStoryArgs_B14C4A,
  MappingListDetailWidgetStoryArgs_Ges_C_2700,
  MappingListDetailWidgetStoryArgs_Rec_B_2000,
  MappingListDetailWidgetStoryArgTypes,
} from "./MappingListDetailWidgetStories";

const meta: Meta = {
  title: "Mapping/MappingListDetailWidget",
  component: WrappedMappingListDetailWidget,
  argTypes: MappingListDetailWidgetStoryArgTypes,
  args: MappingListDetailWidgetStoryArgs_Rec_B_2000,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: MappingListDetailDescription,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Rec_B_2000: Story = {
  args: MappingListDetailWidgetStoryArgs_Rec_B_2000,
};

export const Ges_C_2700: Story = {
  args: MappingListDetailWidgetStoryArgs_Ges_C_2700,
};

export const B14C4A: Story = {
  args: MappingListDetailWidgetStoryArgs_B14C4A,
};
