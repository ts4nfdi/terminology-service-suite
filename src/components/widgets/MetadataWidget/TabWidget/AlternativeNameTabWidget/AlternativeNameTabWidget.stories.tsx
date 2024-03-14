import {AlternativeNameTabWidget} from "./AlternativeNameTabWidget";
import {AlternativeNameTabWidgetStoryArgs, AlternativeNameTabWidgetStoryArgTypes} from "root/src/components/widgets/MetadataWidget/TabWidget/AlternativeNameTabWidget/AlternativeNameTabWidgetStories";

export default {
  title: "AlternativeNameTabWidget",
  component: AlternativeNameTabWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: AlternativeNameTabWidgetStoryArgTypes,
  args: AlternativeNameTabWidgetStoryArgs
};

export {
    AlternativeNameTabWidget1,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable
} from "root/src/components/widgets/MetadataWidget/TabWidget/AlternativeNameTabWidget/AlternativeNameTabWidgetStories"
