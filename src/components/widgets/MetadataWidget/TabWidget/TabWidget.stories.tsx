import { TabWidget } from "./TabWidget";
import {TabWidgetStoryArgs, TabWidgetStoryArgTypes} from "./TabWidgetStories";

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
    DefiningOntologyUnavailable,
    TabWidgetLarge
} from "./TabWidgetStories"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TabWidgetLarge.storyName = "Metadata Widget Large Hierarchy"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore


