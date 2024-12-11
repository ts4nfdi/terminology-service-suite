import 'semlookp-widgets';
import "semlookp-widgets/terminology-service-suite.css"
import {HierarchyGraphWidgetProps} from "../../../app/types";
import {HierarchyGraphWidgetStoryArgs, HierarchyGraphWidgetStoryArgTypes} from "./HierarchyGraphWidgetStories";

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'HierarchyGraphWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: HierarchyGraphWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="hierarchy_graph_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createHierarchyGraph(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
        includeObsoleteEntities:${args.includeObsoleteEntities},
        preferredRoots:${args.preferredRoots},
        showSiblingsOnInit:${args.showSiblingsOnInit},
        keepExpansionStates:${args.keepExpansionStates},
        onNavigateToEntity:${args.onNavigateToEntity},
        onNavigateToOntology:${args.onNavigateToOntology},
        onNavigateToDisambiguate:${args.onNavigateToDisambiguate},
        rootWalk:${args.rootWalk}
    },
    document.querySelector('#hierarchy_graph_widget_container_${num}')
)
</script>
        `
    },
    argTypes: HierarchyGraphWidgetStoryArgTypes,
    args: HierarchyGraphWidgetStoryArgs
}

export {
    OLS4V2Class,
    OLS4V2Ontology,
    OLS4V2Property,
    OLS4V2Individual,
    SemlookPTerm
} from "./HierarchyGraphWidgetStories"
