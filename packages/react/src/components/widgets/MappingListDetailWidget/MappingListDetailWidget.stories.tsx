import type { Meta, StoryObj } from "@storybook/react";
import { MappingListDetailDescription } from "../../../app/widgetDescriptions";
import { WrappedMappingListDetailWidget } from "./MappingListDetailWidget";
import {
  MappingListDetailWidgetStoryArgTypes,
  MappingListDetailWidgetStoryArgs,
} from "./MappingListDetailWidgetStories";

const meta: Meta = {
  title: "Mapping/MappingListDetailWidget",
  component: WrappedMappingListDetailWidget,
  argTypes: MappingListDetailWidgetStoryArgTypes,
  args: MappingListDetailWidgetStoryArgs,
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
  args: MappingListDetailWidgetStoryArgs,
};
