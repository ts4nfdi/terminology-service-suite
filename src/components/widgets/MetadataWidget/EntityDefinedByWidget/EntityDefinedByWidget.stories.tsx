import {EntityDefinedByWidget} from "./EntityDefinedByWidget";
import {
    EntityDefinedByWidgetStoryArgs,
    EntityDefinedByWidgetStoryArgTypes
} from "./EntityDefinedByWidgetStories";
import {manuallyEmbedOnNavigate} from "../../../../app/util";

export default {
  title: "EntityDefinedByWidget",
  component: EntityDefinedByWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate
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
