import 'semlookp-widgets';
import "semlookp-widgets/semlookp_widgets.css"
import {TabWidgetProps} from "../../../../app/types";
import {TabWidgetStoryArgs, TabWidgetStoryArgTypes} from "./TabWidgetStories";

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'TabWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: TabWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="tab_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createTab(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy}
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
    DefiningOntologyUnavailable
} from "./TabWidgetStories"
