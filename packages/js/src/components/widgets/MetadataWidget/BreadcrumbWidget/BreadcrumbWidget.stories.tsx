import {
  BreadcrumbWidgetStoryArgs,
  BreadcrumbWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/BreadcrumbWidget/BreadcrumbWidgetStories";
import './index'
import { BreadcrumbDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { BreadcrumbWidgetProps } from "@ts4nfdi/terminology-service-suite/src";

let counter = 0;

function getIncNum() {
  return counter++;
}

export default {
  title: "Additional Entity Metadata/BreadcrumbWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: BreadcrumbDescription,
      },
    },
  },
  render: (args: BreadcrumbWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    const num = getIncNum();

    return `
<div id="breadcrumb_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createBreadcrumb(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        entityType:"${args.entityType}",
        colorFirst:"${args.colorFirst}",
        colorSecond:"${args.colorSecond}",
        parameter:"${args.parameter}",
        onNavigateToOntology:${args.onNavigateToOntology},
        className: "${args.className}"
    },
    document.querySelector('#breadcrumb_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: BreadcrumbWidgetStoryArgTypes,
  args: BreadcrumbWidgetStoryArgs,
};

export {
  SelectingDefiningOntology,
  DefiningOntologyUnavailable,
  ErrorBreadcrumbWidget,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/BreadcrumbWidget/BreadcrumbWidgetStories";