import { OntologyInfoWidget } from "./OntologyInfoWidget";
import {OntologyInfoWidgetStoryArgs, OntologyInfoWidgetStoryArgTypes} from "./OntologyInfoWidgetStories"
import {manuallyEmbedOnNavigate} from "../../../app/util";
import {OntologyInfoDescription} from "../../../app/widgetDescriptions";

export default {
  title: "Metadata/Ontology Information/OntologyInfoWidget",
  component: OntologyInfoWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate
      },
      description: {
            component: OntologyInfoDescription
        },
    },
  },
  argTypes: OntologyInfoWidgetStoryArgTypes,
  args: OntologyInfoWidgetStoryArgs
};

export {
    OntologyInfoWidget1,
    OntologyInfoWidget2,
    OntologyInfoWidgetOLS4API,
    NavigateToEBIPage
} from "./OntologyInfoWidgetStories"
