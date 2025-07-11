import { BreadcrumbPresentation } from "./BreadcrumbPresentation";
import {
  BreadcrumbPresentationStoryArgs,
  BreadcrumbPresentationStoryArgTypes,
} from "./BreadcrumbPresentationStories";
import { manuallyEmbedOnNavigate } from "../../../../../app/util";
import {BreadcrumbPresentationDescription} from "../../../../../app/widgetDescriptions";

export default {
  title: "Additional Entity Metadata/BreadcrumbPresentation",
  component: BreadcrumbPresentation,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate,
      },
      description: {
        component: BreadcrumbPresentationDescription,
      },
    },
  },
  argTypes: BreadcrumbPresentationStoryArgTypes,
  args: BreadcrumbPresentationStoryArgs,
};

export {
  EntityInput,
  EntityInputMissingValue,
} from "./BreadcrumbPresentationStories";
