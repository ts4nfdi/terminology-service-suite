import { EntityInfoWidget } from "./EntityInfoWidget";
import {EntityInfoWidgetStoryArgs, EntityInfoWidgetStoryArgTypes} from "./EntityInfoWidgetStories";

export default {
  title: "EntityInfoWidget",
  component: EntityInfoWidget,
  parameters: {
    layout: "centered",
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
  OptionalEntityTypeLegacyAPI
} from "./EntityInfoWidgetStories"