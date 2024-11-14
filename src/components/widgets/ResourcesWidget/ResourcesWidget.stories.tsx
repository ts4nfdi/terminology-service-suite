import {ResourcesWidget} from "./ResourcesWidget";
import {ResourcesWidgetStoryArgs, ResourcesWidgetStoryArgTypes} from "./ResourcesWidgetStories"

export default {
  title: "ResourcesWidget",
  component: ResourcesWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: ResourcesWidgetStoryArgTypes,
  args: ResourcesWidgetStoryArgs
};

export {
    ResourcesWidget1,
    WithActions,
    WithActionsAndSafety,
    ResourcesWidgetLogos
} from "./ResourcesWidgetStories"
