import 'ts4nfdi-widgets';
import {EntityRelationsWidgetProps} from "../../../app/types";
import {EntityRelationsWidgetStoryArgs, EntityRelationsWidgetStoryArgTypes} from "./EntityRelationsWidgetStories";
import "../../../style/semlookp-styles.css";
import {EntityRelationsDescription} from "../../../app/widgetDescriptions";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'EntityRelationsWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: EntityRelationsDescription
            }
        }
    },
    render: (args: EntityRelationsWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="autocomplete_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityRelations(
    {
        api:"${args.api}",
        entityType:"${args.entityType}",
        ontologyId:"${args.ontologyId}",
        iri:"${args.iri}",
        hasTitle:${args.hasTitle},
        showBadges:${args.showBadges},
        parameter:"${args.parameter}",
        onNavigateToEntity:${args.onNavigateToEntity},
        onNavigateToOntology:${args.onNavigateToOntology},
        onNavigateToDisambiguate:${args.onNavigateToDisambiguate}
    },
    document.querySelector('#autocomplete_widget_container_${num}')
)
</script>
        `
    },
    argTypes: EntityRelationsWidgetStoryArgTypes,
    args: EntityRelationsWidgetStoryArgs
}

export {
    SubEntityOf,
    AllValuesFrom,
    DifferentFrom,
    EquivalentTo,
    SingleValue,
    InverseOf,
    PropertyChain,
    Instances,
    Axioms,
    QualifiedCardinality,
    NavigateToEBIPage
} from "./EntityRelationsWidgetStories"