import {AlternativeNameTabWidget} from "./AlternativeNameTabWidget";
import {AlternativeNameTabWidgetStoryArgs, AlternativeNameTabWidgetStoryArgTypes} from "./AlternativeNameTabWidgetStories";
import {AlternativeNameTabDescription} from "../../../../../app/widgetDescriptions";

export default {
  title: "Direct Metadata/AlternativeNameTabWidget",
  component: AlternativeNameTabWidget,
  parameters: {
    layout: "centered",
    docs: {
        description: {
            component: AlternativeNameTabDescription
        }
    }
  },
  argTypes: AlternativeNameTabWidgetStoryArgTypes,
  args: AlternativeNameTabWidgetStoryArgs
};

export {
    AlternativeNameTabWidget1,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable
} from "./AlternativeNameTabWidgetStories"
