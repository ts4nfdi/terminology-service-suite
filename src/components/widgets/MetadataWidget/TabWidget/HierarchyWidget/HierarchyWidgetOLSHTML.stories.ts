import 'semlookp-widgets';
import "semlookp-widgets/terminology-service-suite.css"
import {HierarchyWidgetOLSStoryArgs, HierarchyWidgetOLSStoryArgTypes} from "./HierarchyWidgetOLSStories";
import {HierarchyWidgetOLSProps} from "../../../../../app/types";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'HierarchyWidgetOLS',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: HierarchyWidgetOLSProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="hierarchy_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createHierarchyOLS(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        api:"${args.api}",
    },
    document.querySelector('#hierarchy_widget_container_${num}')
)
</script>
        `
    },
    argTypes: HierarchyWidgetOLSStoryArgTypes,
    args: HierarchyWidgetOLSStoryArgs
}

export {
    HierarchyWidgetOLS1
} from "./HierarchyWidgetOLSStories"
