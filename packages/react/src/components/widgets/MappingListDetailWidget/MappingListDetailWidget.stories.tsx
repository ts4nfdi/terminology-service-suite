import type { Meta } from "@storybook/react";
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
