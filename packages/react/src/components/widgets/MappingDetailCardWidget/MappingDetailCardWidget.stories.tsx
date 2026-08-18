import type { Meta, StoryObj } from "@storybook/react";
import { MappingDetailCardDescription } from "../../../app/widgetDescriptions";
import { WrappedMappingDetailCardWidget } from "./MappingDetailCardWidget";
import {
  MappingDetailCardWidgetStoryArgs_OEO_00000150,
  MappingDetailCardWidgetStoryArgTypes,
} from "./MappingDetailCardWidgetStories";

const meta: Meta = {
  title: "Mapping/MappingDetailCardWidget",
  component: WrappedMappingDetailCardWidget,
  argTypes: MappingDetailCardWidgetStoryArgTypes,
  args: MappingDetailCardWidgetStoryArgs_OEO_00000150,
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

export const OEO_00000150: Story = {
  args: MappingDetailCardWidgetStoryArgs_OEO_00000150,
};
