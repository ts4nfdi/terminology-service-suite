import { DescriptionWidget } from "./DescriptionWidget";
import {DescriptionWidgetStoryArgs, DescriptionWidgetStoryArgTypes} from "./DescriptionWidgetStories";

export default {
  title: "DescriptionWidget",
  component: DescriptionWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: DescriptionWidgetStoryArgTypes,
  args: DescriptionWidgetStoryArgs
};

export {
    DescriptionWidget1,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable
} from "./DescriptionWidgetStories"