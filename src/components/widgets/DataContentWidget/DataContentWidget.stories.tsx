import {DataContentWidget} from "./DataContentWidget";
import {DataContentWidgetStoryArgs, DataContentWidgetStoryArgTypes} from "./DataContentWidgetStories";

export default {
  title: "DataContentWidget",
  component: DataContentWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: DataContentWidgetStoryArgTypes,
  args: DataContentWidgetStoryArgs
};

export {
  NFDI4HealthDataContentWidget,
  SafetyDataContentWidget,
  ErrorDataContentWidget
} from "root/src/components/widgets/DataContentWidget/DataContentWidgetStories"