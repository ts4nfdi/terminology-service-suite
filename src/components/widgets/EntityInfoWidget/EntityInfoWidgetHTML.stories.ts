import 'semlookp-widgets';
import {EntityInfoWidgetStoryArgs, EntityInfoWidgetStoryArgTypes} from "./EntityInfoWidgetStories";
import {EntityInfoWidgetProps} from "../../../app/types";

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'EntityInfoWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: EntityInfoWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `        
<div id="entity_info_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createEntityInfo(
    {
        api:"${args.api}",
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        hasTitle:${args.hasTitle},
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy}
    },
    document.querySelector('#entity_info_widget_container_${num}')
)
</script>
        `
    },
    argTypes: EntityInfoWidgetStoryArgTypes,
    args: EntityInfoWidgetStoryArgs
}

export {
    TermInfoWidget,
    PropertyInfoWidget,
    IndividualInfoWidget,
    InfoWidgetBadges,
    InfoWidgetDomain,
    InfoWidgetPropertyAssertion,
    InfoWidgetPropertyCharacteristics,
    InfoWidgetRange,
    OptionalEntityTypeLegacyAPI
} from "./EntityInfoWidgetStories"