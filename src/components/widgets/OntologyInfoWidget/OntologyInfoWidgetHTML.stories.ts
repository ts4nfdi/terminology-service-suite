import 'semlookp-widgets';
import {OntologyInfoWidgetStoryArgs, OntologyInfoWidgetStoryArgTypes} from "./OntologyInfoWidgetStories"
import {OntologyInfoWidgetProps} from "../../../app/types";
import {OntologyInfoDescription} from "../../../app/widgetDescriptions";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'API and Data/OntologyInfoWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: OntologyInfoDescription
            }
        }
    },
    render: (args: OntologyInfoWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="ontology_info_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createOntologyInfo(
    {
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
        hasTitle:${args.hasTitle},
        showBadges:${args.showBadges},
        onNavigateToEntity:${args.onNavigateToEntity},
        onNavigateToOntology:${args.onNavigateToOntology},
        onNavigateToDisambiguate:${args.onNavigateToDisambiguate}
    },
    document.querySelector('#ontology_info_widget_container_${num}')
)
</script>
        `
    },
    argTypes: OntologyInfoWidgetStoryArgTypes,
    args: OntologyInfoWidgetStoryArgs
}

export {
    OntologyInfoWidget1,
    OntologyInfoWidget2,
    OntologyInfoWidgetOLS4API,
    NavigateToEBIPage
} from "./OntologyInfoWidgetStories"
