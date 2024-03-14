import {BreadcrumbWidget} from "./BreadcrumbWidget";
import {
  BreadcrumbWidgetStoryArgs,
  BreadcrumbWidgetStoryArgTypes
} from "root/src/components/widgets/MetadataWidget/BreadcrumbWidget/BreadcrumbWidgetStories";

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
} from "root/src/components/widgets/MetadataWidget/BreadcrumbWidget/BreadcrumbWidgetStories"