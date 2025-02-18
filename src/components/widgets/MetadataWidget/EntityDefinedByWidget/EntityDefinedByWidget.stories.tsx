import {EntityDefinedByWidget} from "./EntityDefinedByWidget";
import {
    EntityDefinedByWidgetStoryArgs,
    EntityDefinedByWidgetStoryArgTypes
} from "./EntityDefinedByWidgetStories";
import {manuallyEmbedOnNavigate} from "../../../../app/util";
import {EntityDefinedByDescription} from "../../../../app/widgetDescriptions";

export default {
  title: "Additional Entity Metadata/EntityDefinedByWidget",
  component: EntityDefinedByWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate
      },
      description: {
          component: EntityDefinedByDescription
      }
    },
  },
  argTypes: EntityDefinedByWidgetStoryArgTypes,
  args: EntityDefinedByWidgetStoryArgs
};

export {
    v2ApiONS,
    emptyInDefiningOntology,
    legacyApi
} from "./EntityDefinedByWidgetStories"
