import { JsonApiWidget } from "./JsonApiWidget";
import {JsonApiWidgetStoryArgs, JsonApiWidgetStoryArgTypes} from "./JsonApiWidgetStories";

export default {
  title: "JsonApiWidget",
  component: JsonApiWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: JsonApiWidgetStoryArgTypes,
  args: JsonApiWidgetStoryArgs
};

export {
  JsonApiWidget1
} from "./JsonApiWidgetStories"