import {DataContentWidget} from "./DataContentWidget";
import {DataContentWidgetStoryArgs, DataContentWidgetStoryArgTypes} from "./DataContentWidgetStories";
import {DataContentDescription} from "../../../app/widgetDescriptions";

export default {
  title: "Metadata/Ontology Information/DataContentWidget",
  component: DataContentWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: DataContentDescription
      }
    }
  },
  argTypes: DataContentWidgetStoryArgTypes,
  args: DataContentWidgetStoryArgs
};

export {
  NFDI4HealthDataContentWidget,
  SafetyDataContentWidget,
  ErrorDataContentWidget
} from "./DataContentWidgetStories"