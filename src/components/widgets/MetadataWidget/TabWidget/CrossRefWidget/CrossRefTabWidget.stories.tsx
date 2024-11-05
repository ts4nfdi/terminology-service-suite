import { CrossRefTabWidget } from "./CrossRefTabWidget";
import {CrossRefWidgetStoryArgs, CrossRefWidgetStoryArgTypes} from "./CrossRefWidgetStories";
import {CrossRefTabDescription} from "../../../../../app/widgetDescriptions";

export default {
  title: "CrossRefTabWidget",
  component: CrossRefTabWidget,
  parameters: {
    layout: "centered",
    docs: {
        description: {
            component: CrossRefTabDescription
        }
    }
  },
  argTypes: CrossRefWidgetStoryArgTypes,
  args: CrossRefWidgetStoryArgs
};

export {
    CrossRefTabWidget1,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable
} from "./CrossRefWidgetStories"
