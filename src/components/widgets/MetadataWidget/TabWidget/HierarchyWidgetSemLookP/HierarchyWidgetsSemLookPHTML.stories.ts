import 'semlookp-widgets';
import {HierarchyWidgetSemLookPStoryArgs, HierarchyWidgetSemLookPStoryArgTypes} from "./HierarchyWidgetSemLookPStories";
import {HierarchyWidgetSemLookPProps} from "../../../../../app/types";

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'HierarchyWidgetSemLookP',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: HierarchyWidgetSemLookPProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `        
<div id="hierarchy_semlookp_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createHierarchySemLookP(
    {
        apiUrl:"${args.apiUrl}",
        apikey:"${args.apikey}",
        backend_type:"${args.backend_type}",
        iri:"${args.iri}",
        entityType:"${args.entityType}",
        ontologyId:"${args.ontologyId}",
        includeObsoleteEntities:${args.includeObsoleteEntities},
        useLegacy:${args.useLegacy},
        preferredRoots:${args.preferredRoots},
        keepExpansionStates:${args.keepExpansionStates},
        showSiblingsOnInit:${args.showSiblingsOnInit},
        onNavigateToEntity:${args.onNavigateToEntity},
        onNavigateToOntology:${args.onNavigateToOntology}
    },
    document.querySelector('#hierarchy_semlookp_container_${num}')
)
</script>
        `
    },
    argTypes: HierarchyWidgetSemLookPStoryArgTypes,
    args: HierarchyWidgetSemLookPStoryArgs
}

export {
    ClassHierarchy,
    IndividualHierarchy,
    PreferredRoots,
    IncludeObsoleteEntities,
    PropertyRoots,
    IndividualRoots,
    LargeHierarchy,
    SkosHierarchy,
    OntoportalHierarchy
} from "./HierarchyWidgetSemLookPStories"