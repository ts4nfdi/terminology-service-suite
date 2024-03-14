import { MetadataWidget } from "./MetadataWidget";
import {MetadataWidgetStoryArgs, MetadataWidgetStoryArgTypes} from "./MetadataWidgetStories";

export default {
  title: "MetadataWidget",
  component: MetadataWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: MetadataWidgetStoryArgTypes,
  args: MetadataWidgetStoryArgs
};

export {
    MetadataWidget1,
    OLS3,
    OLS4V1,
    OLS4V2,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable
} from "root/src/components/widgets/MetadataWidget/MetadataWidgetStories"
