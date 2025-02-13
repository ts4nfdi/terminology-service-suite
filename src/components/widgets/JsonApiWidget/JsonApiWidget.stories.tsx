import { JsonApiWidget } from "./JsonApiWidget";
import {JsonApiWidgetStoryArgs, JsonApiWidgetStoryArgTypes} from "./JsonApiWidgetStories";
import {JsonApiDescription} from "../../../app/widgetDescriptions";

export default {
  title: "API and Data/JsonApiWidget",
  component: JsonApiWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: JsonApiDescription
      }
    }
  },
  argTypes: JsonApiWidgetStoryArgTypes,
  args: JsonApiWidgetStoryArgs
};

export {
  JsonApiWidgetDefault
} from "./JsonApiWidgetStories"