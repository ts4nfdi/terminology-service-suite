import { CrossRefTabWidget } from "./CrossRefTabWidget";
import {CrossRefWidgetStoryArgs, CrossRefWidgetStoryArgTypes} from "./CrossRefWidgetStories";

export default {
  title: "CrossRefTabWidget",
  component: CrossRefTabWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: CrossRefWidgetStoryArgTypes,
  args: CrossRefWidgetStoryArgs
};

export {
    CrossRefTabWidget1,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable
} from "./CrossRefWidgetStories"
