import 'ts4nfdi-widgets';
import "ts4nfdi-widgets/terminology-service-suite.css"
import {TabWidgetProps} from "../../../../app/types";
import {TabWidgetStoryArgs, TabWidgetStoryArgTypes} from "./TabWidgetStories";
import {TabDescription} from "../../../../app/widgetDescriptions";

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'Additional Entity Metadata/TabWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: TabDescription
            }
        }
    },
    render: (args: TabWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="tab_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createTab(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
        altNamesTab: ${args.altNamesTab},
        hierarchyTab: ${args.hierarchyTab},
        crossRefTab: ${args.crossRefTab},
        terminologyInfoTab: ${args.terminologyInfoTab},
        hierarchyPreferredRoots:${args.hierarchyPreferredRoots},
        hierarchyKeepExpansionStates:${args.hierarchyKeepExpansionStates},
        hierarchyShowSiblingsOnInit:${args.hierarchyShowSiblingsOnInit},
        onNavigateToEntity:${args.onNavigateToEntity},
        onNavigateToOntology:${args.onNavigateToOntology},
        onNavigateToDisambiguate:${args.onNavigateToDisambiguate}
    },
    document.querySelector('#tab_widget_container_${num}')
)
</script>
        `
    },
    argTypes: TabWidgetStoryArgTypes,
    args: TabWidgetStoryArgs
}

export {
    Default,
    TabWidgetOLS3,
    TabWidgetOLS4V1,
    TabWidgetOLS4V2,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable,
    TabWidgetLarge,
    HiddenTabs
} from "./TabWidgetStories"
