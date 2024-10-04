import {BreadcrumbWidget} from "./BreadcrumbWidget";
import {
  BreadcrumbWidgetStoryArgs,
  BreadcrumbWidgetStoryArgTypes
} from "./BreadcrumbWidgetStories";
import {manuallyEmbedOnNavigate} from "../../../../app/util";

export default {
  title: "BreadcrumbWidget",
  component: BreadcrumbWidget,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: manuallyEmbedOnNavigate
      }
    },
  },
  argTypes: BreadcrumbWidgetStoryArgTypes,
  args: BreadcrumbWidgetStoryArgs
};

export {
    SelectingDefiningOntology,
    DefiningOntologyUnavailable,
    ErrorBreadcrumbWidget
} from "./BreadcrumbWidgetStories"