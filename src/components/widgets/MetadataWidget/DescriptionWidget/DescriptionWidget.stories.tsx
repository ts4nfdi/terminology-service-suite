import { DescriptionWidget } from "./DescriptionWidget";
import {DescriptionWidgetStoryArgs, DescriptionWidgetStoryArgTypes} from "./DescriptionWidgetStories";
import {DescriptionDescription} from "../../../../app/widgetDescriptions";

export default {
  title: "Entity Metadata/DescriptionWidget",
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
    DefiningOntologyUnavailable
} from "./DescriptionWidgetStories"