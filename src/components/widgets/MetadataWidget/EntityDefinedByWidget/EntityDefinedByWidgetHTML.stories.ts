import 'semlookp-widgets';
import {
    EntityDefinedByWidgetStoryArgTypes,
    EntityDefinedByWidgetStoryArgs
} from "./EntityDefinedByWidgetStories";
import {EntityDefinedByWidgetProps} from "../../../../app/types";
import "../../../../style/tssStyles.css";
import {EntityDefinedByDescription} from "../../../../app/widgetDescriptions";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'Additional Metadata/EntityDefinedByWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: EntityDefinedByDescription
            }
        }
    },
    render: (args: EntityDefinedByWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="entity_defined_by_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createEntityDefinedBy(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
        onNavigateToOntology:${args.onNavigateToOntology}
    },
    document.querySelector('#entity_defined_by_widget_container_${num}')
)
</script>
        `
    },
    argTypes: EntityDefinedByWidgetStoryArgTypes,
    args: EntityDefinedByWidgetStoryArgs
}

export {
    v2ApiONS,
    emptyInDefiningOntology,
    legacyApi
} from "./EntityDefinedByWidgetStories"
