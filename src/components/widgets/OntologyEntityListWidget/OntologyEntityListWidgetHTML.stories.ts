import 'semlookp-widgets';
import "semlookp-widgets/terminology-service-suite.css"
import {OntologyEntityListWidgetProps} from "../../../app/types";
import {OntologyEntityListWidgetStoryArgs, OntologyEntityListWidgetStoryArgTypes} from "./OntologyEntityListWidgetStories";

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'OntologyEntityListWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: OntologyEntityListWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="ontology_entity_list_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createOntologyEntityList(
    {
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        useLegacy:${args.useLegacy},
    },
    document.querySelector('#ontology_entity_list_widget_container_${num}')
)
</script>
        `
    },
    argTypes: OntologyEntityListWidgetStoryArgTypes,
    args: OntologyEntityListWidgetStoryArgs
}

export {
    OLS4V1Classes,
    SemlookPIndividuals
} from "./OntologyEntityListWidgetStories"
