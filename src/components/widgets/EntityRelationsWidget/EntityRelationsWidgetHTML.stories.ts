import 'semlookp-widgets';
import {EntityRelationsWidgetProps} from "../../../utils/types";
import {EntityRelationsWidgetStoryArgs, EntityRelationsWidgetStoryArgTypes} from "root/src/components/widgets/EntityRelationsWidget/EntityRelationsWidgetStories";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'EntityRelationsWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: EntityRelationsWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="autocomplete_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createEntityRelations(
    {
        api:"${args.api}",
        entityType:"${args.entityType}",
        ontologyId:"${args.ontologyId}",
        iri:"${args.iri}",
        hasTitle:${args.hasTitle},
        showBadges:${args.showBadges},
        parameter:"${args.parameter}"
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
    QualifiedCardinality
} from "root/src/components/widgets/EntityRelationsWidget/EntityRelationsWidgetStories"