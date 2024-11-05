import { EntityInfoWidget } from "./EntityInfoWidget";
import {EntityInfoWidgetStoryArgs, EntityInfoWidgetStoryArgTypes} from "./EntityInfoWidgetStories";
import {manuallyEmbedOnNavigate} from "../../../app/util";
import {EntityInfoDescription} from "../../../app/widgetDescriptions";

export default {
  title: "EntityInfoWidget",
  component: EntityInfoWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate
      },
      description: {
        component: EntityInfoDescription
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