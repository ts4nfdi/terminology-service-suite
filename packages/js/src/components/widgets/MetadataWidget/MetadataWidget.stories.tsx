import {
  MetadataWidgetStoryArgs,
  MetadataWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/MetadataWidgetStories";
import './index'
import { MetadataDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { MetadataWidgetProps } from "@ts4nfdi/terminology-service-suite/src";


let counter = 0;

function getIncNum() {
  return counter++;
}

export default {
  title: "Entity Metadata/MetadataWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: MetadataDescription,
      },
    },
  },
  render: (args: MetadataWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    const num = getIncNum();

    return `
<div id="metadata_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createMetadata(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
        termLink: "${args.termLink}",
        altNamesTab: ${args.altNamesTab},
        hierarchyTab: ${args.hierarchyTab},
        crossRefTab: ${args.crossRefTab},
        terminologyInfoTab: ${args.terminologyInfoTab},
        graphViewTab: ${args.graphViewTab},
        termDepictionTab: ${args.termDepictionTab},
        hierarchyPreferredRoots:${args.hierarchyPreferredRoots},
        hierarchyKeepExpansionStates:${args.hierarchyKeepExpansionStates},
        hierarchyShowSiblingsOnInit:${args.hierarchyShowSiblingsOnInit},
        onNavigateToEntity:${args.onNavigateToEntity},
        onNavigateToOntology:${args.onNavigateToOntology},
        onNavigateToDisambiguate:${args.onNavigateToDisambiguate},
        className:"${args.className}"
    },
    document.querySelector('#metadata_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: MetadataWidgetStoryArgTypes,
  args: MetadataWidgetStoryArgs,
};

export {
  MetadataWidget1,
  OLS3,
  OLS4V1,
  OLS4V2,
  SelectingDefiningOntology,
  DefiningOntologyUnavailable,
  DefinedByAlsoAppearsInWidgets,
  HiddenTabs,
  TermAsLink,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/MetadataWidgetStories";
