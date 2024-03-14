import { IriWidget } from "./IriWidget";
import {
  IriWidgetStoryArgs,
  IriWidgetStoryArgTypes
} from "root/src/components/widgets/MetadataWidget/IriWidget/IriWidgetStories";

export default {
  title: "IriWidget",
  component: IriWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: IriWidgetStoryArgTypes,
  args: IriWidgetStoryArgs
};

export {
  IriWidget1
} from "root/src/components/widgets/MetadataWidget/IriWidget/IriWidgetStories"
