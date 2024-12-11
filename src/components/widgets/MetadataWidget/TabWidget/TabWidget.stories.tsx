import { TabWidget } from "./TabWidget";
import {TabWidgetStoryArgs, TabWidgetStoryArgTypes} from "./TabWidgetStories";
import {TabDescription} from "../../../../app/widgetDescriptions";

export default {
  title: "Metadata/TabWidget",
  component: TabWidget,
  parameters: {
    layout: "centered",
    docs: {
        description: {
            component: TabDescription
        }
    }
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
    DefiningOntologyUnavailable,
    TabWidgetLarge,
    HiddenTabs
} from "./TabWidgetStories"


