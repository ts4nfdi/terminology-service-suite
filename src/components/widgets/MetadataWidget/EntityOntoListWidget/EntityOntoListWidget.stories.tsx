import {EntityOntoListWidget} from "./EntityOntoListWidget";
import {
    EntityOntoListWidgetStoryArgs,
    EntityOntoListWidgetStoryArgTypes
} from "./EntityOntoListWidgetStories";
import {manuallyEmbedOnNavigate} from "../../../../app/util";
import {EntityOntoListDescription} from "../../../../app/widgetDescriptions";

export default {
  title: "Additional Entity Metadata/EntityOntoListWidget",
  component: EntityOntoListWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate
      },
      description: {
          component: EntityOntoListDescription
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
