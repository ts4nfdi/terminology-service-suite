import { OntologyInfoWidget } from "./OntologyInfoWidget";
import {OntologyInfoWidgetStoryArgs, OntologyInfoWidgetStoryArgTypes} from "./OntologyInfoWidgetStories"
import {OntologyInfoDescription} from "../../../app/widgetDescriptions";

export default {
  title: "OntologyInfoWidget",
  component: OntologyInfoWidget,
  parameters: {
    layout: "centered",
    docs: {
        description: {
            component: OntologyInfoDescription
        }
    }
  },
  argTypes: OntologyInfoWidgetStoryArgTypes,
  args: OntologyInfoWidgetStoryArgs
};

export {
    OntologyInfoWidget1,
    OntologyInfoWidget2,
    OntologyInfoWidgetOLS4API
} from "./OntologyInfoWidgetStories"
