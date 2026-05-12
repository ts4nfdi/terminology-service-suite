import type { Meta } from "@storybook/react";
import { MappingListDetailDescription } from "../../../app/widgetDescriptions";
import { WrappedMappingListDetailWidget } from "./MappingListDetailWidget";

const meta: Meta = {
  title: "Mapping/EntityListWidget",
  component: WrappedMappingListDetailWidget,
  // argTypes: ,
  // args: ,
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
