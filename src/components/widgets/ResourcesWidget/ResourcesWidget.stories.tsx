import {ResourcesWidget} from "./ResourcesWidget";
import {ResourcesWidgetStoryArgs, ResourcesWidgetStoryArgTypes} from "./ResourcesWidgetStories"
import {ResourcesDescription} from "../../../app/widgetDescriptions";

export default {
  title: "Metadata/Ontology Information/ResourcesWidget",
  component: ResourcesWidget,
  parameters: {
    layout: "centered",
    docs: {
        description: {
            component: ResourcesDescription
        }
    }
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
