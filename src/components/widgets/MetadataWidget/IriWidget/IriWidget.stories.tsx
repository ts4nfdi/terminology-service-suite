import { IriWidget } from "./IriWidget";
import {
  IriWidgetStoryArgs,
  IriWidgetStoryArgTypes
} from "./IriWidgetStories";

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
  IriWidget1, withCopyButton, withoutExternalIcon, withUrlPrefix
} from "./IriWidgetStories"
