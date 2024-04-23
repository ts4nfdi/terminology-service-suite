import {BreadcrumbWidget} from "./BreadcrumbWidget";
import {
  BreadcrumbWidgetStoryArgs,
  BreadcrumbWidgetStoryArgTypes
} from "./BreadcrumbWidgetStories";

export default {
  title: "BreadcrumbWidget",
  component: BreadcrumbWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: BreadcrumbWidgetStoryArgTypes,
  args: BreadcrumbWidgetStoryArgs
};

export {
    BreadcrumbWidget1,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable,
    ErrorBreadcrumbWidget
} from "./BreadcrumbWidgetStories"