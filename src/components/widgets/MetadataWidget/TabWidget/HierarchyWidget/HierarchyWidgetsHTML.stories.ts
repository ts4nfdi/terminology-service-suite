import "ts4nfdi-widgets";
import "ts4nfdi-widgets/terminology-service-suite.css";
import {
  HierarchyWidgetStoryArgs,
  HierarchyWidgetStoryArgTypes,
} from "./HierarchyWidgetStories";
import { HierarchyWidgetProps } from "../../../../../app/types";
import { HierarchyDescription } from "../../../../../app/widgetDescriptions";

let counter = 0;

function getIncNum() {
  return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: "Hierarchy and Graph/HierarchyWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: HierarchyDescription,
      },
    },
  },
  render: (args: HierarchyWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    const num = getIncNum();

    return `        
<div id="hierarchy_semlookp_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createHierarchy(
    {
        apiUrl:"${args.apiUrl}",
        apiKey:"${args.apiKey}",
        backendType:"${args.backendType}",
        iri:"${args.iri}",
        entityType:"${args.entityType}",
        ontologyId:"${args.ontologyId}",
        includeObsoleteEntities:${args.includeObsoleteEntities},
        useLegacy:${args.useLegacy},
        preferredRoots:${args.preferredRoots},
        keepExpansionStates:${args.keepExpansionStates},
        showSiblingsOnInit:${args.showSiblingsOnInit},
        onNavigateToEntity:${args.onNavigateToEntity},
        onNavigateToOntology:${args.onNavigateToOntology},
        parameter:"${args.parameter}"
    },
    document.querySelector('#hierarchy_semlookp_container_${num}')
)
</script>
        `;
  },
  argTypes: HierarchyWidgetStoryArgTypes,
  args: HierarchyWidgetStoryArgs,
};

export {
  ClassHierarchy,
  IndividualHierarchy,
  PreferredRoots,
  IncludeObsoleteEntities,
  PropertyRoots,
  IndividualRoots,
  LargeHierarchy,
  SkosHierarchy,
  SagePubHierarchy,
  OntoportalHierarchy,
  OLS3Hierarchy,
  OLSGerman,
  SkosmosAgrovocGerman,
} from "./HierarchyWidgetStories";
