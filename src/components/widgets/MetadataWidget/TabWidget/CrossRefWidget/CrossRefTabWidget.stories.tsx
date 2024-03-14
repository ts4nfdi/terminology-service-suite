import { CrossRefTabWidget } from "./CrossRefTabWidget";
import {CrossRefWidgetStoryArgs, CrossRefWidgetStoryArgTypes} from "root/src/components/widgets/MetadataWidget/TabWidget/CrossRefWidget/CrossRefWidgetStories";

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
} from "root/src/components/widgets/MetadataWidget/TabWidget/CrossRefWidget/CrossRefWidgetStories"
