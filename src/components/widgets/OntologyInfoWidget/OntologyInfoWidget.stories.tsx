import { OntologyInfoWidget } from "./OntologyInfoWidget";
import {OntologyInfoWidgetStoryArgs, OntologyInfoWidgetStoryArgTypes} from "./OntologyInfoWidgetStories"

export default {
  title: "OntologyInfoWidget",
  component: OntologyInfoWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: OntologyInfoWidgetStoryArgTypes,
  args: OntologyInfoWidgetStoryArgs
};

export {
    OntologyInfoWidget1,
    OntologyInfoWidget2,
    OntologyInfoWidgetOLS4API
} from "./OntologyInfoWidgetStories"
