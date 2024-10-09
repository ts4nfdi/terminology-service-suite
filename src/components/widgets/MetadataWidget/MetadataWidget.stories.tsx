import { MetadataWidget } from "./MetadataWidget";
import {MetadataWidgetStoryArgs, MetadataWidgetStoryArgTypes} from "./MetadataWidgetStories";
import {manuallyEmbedOnNavigate} from "../../../app/util";

export default {
  title: "MetadataWidget",
  component: MetadataWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate
      }
    },
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
    DefiningOntologyUnavailable,
    HiddenTabs
} from "./MetadataWidgetStories"
