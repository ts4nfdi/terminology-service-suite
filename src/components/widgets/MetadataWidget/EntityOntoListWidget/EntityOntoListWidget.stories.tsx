import {EntityOntoListWidget} from "./EntityOntoListWidget";
import {
    EntityOntoListWidgetStoryArgs,
    EntityOntoListWidgetStoryArgTypes
} from "./EntityOntoListWidgetStories";

export default {
  title: "EntityOntoListWidget",
  component: EntityOntoListWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: EntityOntoListWidgetStoryArgTypes,
  args: EntityOntoListWidgetStoryArgs
};

export {
    v2ApiEFO,
    v2ApiONS,
    legacyApi
} from "./EntityOntoListWidgetStories"
