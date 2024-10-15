import 'semlookp-widgets';
import 'semlookp-widgets/terminology-service-suite.css'
import {MetadataWidgetProps} from "../../../app/types";
import {MetadataWidgetStoryArgs, MetadataWidgetStoryArgTypes} from "./MetadataWidgetStories"

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'MetadataWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: MetadataWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="metadata_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createMetadata(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
        onNavigateToOntology:${args.onNavigateToOntology},
        termLink: "${args.termLink}",
        altNamesTab: ${args.altNamesTab},
        hierarchyTab: ${args.hierarchyTab},
        crossRefTab: ${args.crossRefTab},
        terminologyInfoTab: ${args.terminologyInfoTab}
    },
    document.querySelector('#metadata_widget_container_${num}')
)
</script>
        `
    },
    argTypes: MetadataWidgetStoryArgTypes,
    args: MetadataWidgetStoryArgs
}

export {
    MetadataWidget1,
    OLS3,
    OLS4V1,
    OLS4V2,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable,
    DefinedByAlsoAppearsInWidgets,
    HiddenTabs,
    TermAsLink
} from "./MetadataWidgetStories"
