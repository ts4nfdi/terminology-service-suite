import {ResourcesWidget} from "./ResourcesWidget";
import {ResourcesWidgetStoryArgs, ResourcesWidgetStoryArgTypes} from "root/src/components/widgets/ResourcesWidget/ResourcesWidgetStories"

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
    WithActionsAndSafety
} from "root/src/components/widgets/ResourcesWidget/ResourcesWidgetStories"
