import {
  OntologyInfoWidgetStoryArgs,
  OntologyInfoWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/OntologyInfoWidget/OntologyInfoWidgetStories";
import './index'
import { OntologyInfoDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { OntologyInfoWidgetProps } from "@ts4nfdi/terminology-service-suite/src";

let counter = 0;

function getIncNum() {
  return counter++;
}

export default {
  title: "Ontology Metadata/OntologyInfoWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: OntologyInfoDescription,
      },
    },
  },
  render: (args: OntologyInfoWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    const num = getIncNum();

    return `
<div id="ontology_info_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createOntologyInfo(
    {
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
        hasTitle:${args.hasTitle},
        showBadges:${args.showBadges},
        onNavigateToEntity:${args.onNavigateToEntity},
        onNavigateToOntology:${args.onNavigateToOntology},
        onNavigateToDisambiguate:${args.onNavigateToDisambiguate},
        className:${args.className}
    },
    document.querySelector('#ontology_info_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: OntologyInfoWidgetStoryArgTypes,
  args: OntologyInfoWidgetStoryArgs,
};

export {
  OntologyInfoWidget1,
  OntologyInfoWidget2,
  OntologyInfoWidgetOLS4API,
  NavigateToEBIPage,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/OntologyInfoWidget/OntologyInfoWidgetStories";
