import 'semlookp-widgets';
import {
    EntityOntoListWidgetStoryArgs,
    EntityOntoListWidgetStoryArgTypes
} from "./EntityOntoListWidgetStories";
import {EntityOntoListWidgetProps} from "../../../../app/types";
import "../../../../style/semlookp-styles.css";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'EntityOntoListWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: EntityOntoListWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="entity_onto_list_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createEntityOntoList(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
        onNavigateToOntology:${args.onNavigateToOntology}
    },
    document.querySelector('#entity_onto_list_widget_container_${num}')
)
</script>
        `
    },
    argTypes: EntityOntoListWidgetStoryArgTypes,
    args: EntityOntoListWidgetStoryArgs
}

export {
    v2ApiEFO,
    v2ApiONS,
    legacyApi,
    exceedsMaxDisplay
} from "./EntityOntoListWidgetStories"