import { OntologyInfoWidget } from "./OntologyInfoWidget";
import {OntologyInfoWidgetStoryArgs, OntologyInfoWidgetStoryArgTypes} from "root/src/components/widgets/OntologyInfoWidget/OntologyInfoWidgetStories"

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
} from "root/src/components/widgets/OntologyInfoWidget/OntologyInfoWidgetStories"
