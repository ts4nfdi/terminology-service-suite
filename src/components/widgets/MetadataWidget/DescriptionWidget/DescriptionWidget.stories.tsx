import { DescriptionWidget } from "./DescriptionWidget";
import {DescriptionWidgetStoryArgs, DescriptionWidgetStoryArgTypes} from "root/src/components/widgets/MetadataWidget/DescriptionWidget/DescriptionWidgetStories";

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
} from "root/src/components/widgets/MetadataWidget/DescriptionWidget/DescriptionWidgetStories"