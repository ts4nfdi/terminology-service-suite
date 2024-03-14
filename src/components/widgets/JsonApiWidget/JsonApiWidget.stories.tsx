import { JsonApiWidget } from "./JsonApiWidget";
import {JsonApiWidgetStoryArgs, JsonApiWidgetStoryArgTypes} from "root/src/components/widgets/JsonApiWidget/JsonApiWidgetStories";

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
} from "root/src/components/widgets/JsonApiWidget/JsonApiWidgetStories"