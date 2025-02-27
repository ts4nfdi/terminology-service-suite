import { BreadcrumbWidget } from "./BreadcrumbWidget";
import {
  BreadcrumbWidgetStoryArgs,
  BreadcrumbWidgetStoryArgTypes,
} from "./BreadcrumbWidgetStories";
import { manuallyEmbedOnNavigate } from "../../../../app/util";
import { BreadcrumbDescription } from "../../../../app/widgetDescriptions";

export default {
  title: "Additional Entity Metadata/BreadcrumbWidget",
  component: BreadcrumbWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate,
      },
      description: {
        component: BreadcrumbDescription,
      },
    },
  },
  argTypes: BreadcrumbWidgetStoryArgTypes,
  args: BreadcrumbWidgetStoryArgs,
};

export {
  BreadcrumbWidgetDefault,
  SelectingDefiningOntology,
  DefiningOntologyUnavailable,
  ErrorBreadcrumbWidget,
  CustomColors,
  CustomStyle,
} from "./BreadcrumbWidgetStories";
