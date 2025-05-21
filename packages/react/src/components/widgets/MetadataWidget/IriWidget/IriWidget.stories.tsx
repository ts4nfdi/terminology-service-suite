import { IriWidget } from "./IriWidget";
import { IriWidgetStoryArgs, IriWidgetStoryArgTypes } from "./IriWidgetStories";
import { IriDescription } from "../../../../app/widgetDescriptions";

export default {
  title: "Entity Metadata/IriWidget",
  component: IriWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: IriDescription,
      },
    },
  },
  argTypes: IriWidgetStoryArgTypes,
  args: IriWidgetStoryArgs,
};

export {
  IriWidget1,
  withCopyButton,
  withoutExternalIcon,
  withUrlPrefix,
} from "./IriWidgetStories";
