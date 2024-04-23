import 'semlookp-widgets';
import {AlternativeNameTabWidgetProps} from "../../../../../app/types";
import {AlternativeNameTabWidgetStoryArgs, AlternativeNameTabWidgetStoryArgTypes} from "./AlternativeNameTabWidgetStories";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'AlternativeNameTabWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: AlternativeNameTabWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="alternative_name_tab_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createAlternativeNameTab(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy}
    },
    document.querySelector('#alternative_name_tab_widget_container_${num}')
)
</script>
        `
    },
    argTypes: AlternativeNameTabWidgetStoryArgTypes,
    args: AlternativeNameTabWidgetStoryArgs
}

export {
    AlternativeNameTabWidget1,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable
} from "./AlternativeNameTabWidgetStories"
