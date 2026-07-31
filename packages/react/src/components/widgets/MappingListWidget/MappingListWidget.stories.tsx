import type { Meta, StoryObj } from "@storybook/react";
import { MappingListDetailDescription } from "../../../app/widgetDescriptions";
import { WrappedMappingListWidget } from "./MappingListWidget";
import {
  MappingListWidgetStoryArgs_B14C4A,
  MappingListWidgetStoryArgs_Energy,
  MappingListWidgetStoryArgs_Ges_C_2700,
  MappingListWidgetStoryArgs_OEO_00000150,
  MappingListWidgetStoryArgs_Q259745,
  MappingListWidgetStoryArgs_Rec_B_2000,
  MappingListWidgetStoryArgTypes,
} from "./MappingListWidgetStories";

const meta: Meta = {
  title: "Mapping/MappingListWidget",
  component: WrappedMappingListWidget,
  argTypes: MappingListWidgetStoryArgTypes,
  args: MappingListWidgetStoryArgs_OEO_00000150,
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

export const OEO_00000150: Story = {
  args: MappingListWidgetStoryArgs_OEO_00000150,
};

export const Q259745: Story = {
  args: MappingListWidgetStoryArgs_Q259745,
};

export const Energy: Story = {
  args: MappingListWidgetStoryArgs_Energy,
};

export const Rec_B_2000: Story = {
  args: MappingListWidgetStoryArgs_Rec_B_2000,
};

export const Ges_C_2700: Story = {
  args: MappingListWidgetStoryArgs_Ges_C_2700,
};

export const B14C4A: Story = {
  args: MappingListWidgetStoryArgs_B14C4A,
};
