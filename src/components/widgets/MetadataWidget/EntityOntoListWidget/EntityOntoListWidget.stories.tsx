import {EntityOntoListWidget} from "./EntityOntoListWidget";
import {
    EntityOntoListWidgetStoryArgs,
    EntityOntoListWidgetStoryArgTypes
} from "./EntityOntoListWidgetStories";
import {manuallyEmbedOnNavigate} from "../../../../app/util";

export default {
  title: "EntityOntoListWidget",
  component: EntityOntoListWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate
      }
    },
  },
  argTypes: EntityOntoListWidgetStoryArgTypes,
  args: EntityOntoListWidgetStoryArgs
};

export {
    v2ApiEFO,
    v2ApiONS,
    legacyApi,
    exceedsMaxDisplay
} from "./EntityOntoListWidgetStories"
