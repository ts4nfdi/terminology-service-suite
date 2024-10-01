import { EntityInfoWidget } from "./EntityInfoWidget";
import {EntityInfoWidgetStoryArgs, EntityInfoWidgetStoryArgTypes} from "./EntityInfoWidgetStories";
import {manuallyEmbedOnNavigate} from "../../../app/util";

export default {
  title: "EntityInfoWidget",
  component: EntityInfoWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate
      }
    },
  },
  argTypes: EntityInfoWidgetStoryArgTypes,
  args: EntityInfoWidgetStoryArgs
};

export {
  TermInfoWidget,
  PropertyInfoWidget,
  IndividualInfoWidget,
  InfoWidgetBadges,
  InfoWidgetDomain,
  InfoWidgetPropertyAssertion,
  InfoWidgetPropertyCharacteristics,
  InfoWidgetRange,
  OptionalEntityTypeLegacyAPI,
  NavigateToEBIPage
} from "./EntityInfoWidgetStories"