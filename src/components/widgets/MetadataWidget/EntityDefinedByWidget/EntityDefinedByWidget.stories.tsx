import {EntityDefinedByWidget} from "./EntityDefinedByWidget";
import {
    EntityDefinedByWidgetStoryArgs,
    EntityDefinedByWidgetStoryArgTypes
} from "./EntityDefinedByWidgetStories";

export default {
  title: "EntityDefinedByWidget",
  component: EntityDefinedByWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: EntityDefinedByWidgetStoryArgTypes,
  args: EntityDefinedByWidgetStoryArgs
};

export {
    v2ApiEFO,
    v2ApiONS,
    legacyApi
} from "./EntityDefinedByWidgetStories"
