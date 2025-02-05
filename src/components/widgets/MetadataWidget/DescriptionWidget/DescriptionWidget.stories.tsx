import { DescriptionWidget } from "./DescriptionWidget";
import {DescriptionWidgetStoryArgs, DescriptionWidgetStoryArgTypes} from "./DescriptionWidgetStories";
import {DescriptionDescription} from "../../../../app/widgetDescriptions";

export default {
  title: "Metadata/Entity Information/DescriptionWidget",
  component: DescriptionWidget,
  parameters: {
    layout: "centered",
    docs: {
        description: {
            component: DescriptionDescription
        }
    }
  },
  argTypes: DescriptionWidgetStoryArgTypes,
  args: DescriptionWidgetStoryArgs
};

export {
    DescriptionWidget1,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable,
    ErrorFetchingData
} from "./DescriptionWidgetStories"