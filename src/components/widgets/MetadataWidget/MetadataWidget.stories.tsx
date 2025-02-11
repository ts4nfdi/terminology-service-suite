import { MetadataWidget } from "./MetadataWidget";
import {MetadataWidgetStoryArgs, MetadataWidgetStoryArgTypes} from "./MetadataWidgetStories";
import {manuallyEmbedOnNavigate} from "../../../app/util";
import {MetadataDescription} from "../../../app/widgetDescriptions";

export default {
  title: "Metadata/MetadataWidget",
  component: MetadataWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate
      },
      description: {
          component: MetadataDescription,
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
    HiddenTabs,
    TermAsLink,
} from "./MetadataWidgetStories"
