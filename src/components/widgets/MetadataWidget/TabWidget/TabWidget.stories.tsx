import { TabWidget } from "./TabWidget";
import {TabWidgetStoryArgs, TabWidgetStoryArgTypes} from "root/src/components/widgets/MetadataWidget/TabWidget/TabWidgetStories";

export default {
  title: "TabWidget",
  component: TabWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: TabWidgetStoryArgTypes,
  args: TabWidgetStoryArgs
};

export {
    Default,
    TabWidgetOLS3,
    TabWidgetOLS4V1,
    TabWidgetOLS4V2,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable
} from "root/src/components/widgets/MetadataWidget/TabWidget/TabWidgetStories"
