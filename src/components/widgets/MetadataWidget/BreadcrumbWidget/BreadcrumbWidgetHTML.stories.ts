import 'semlookp-widgets';
import {BreadcrumbWidgetProps} from "../../../../app/types";
import {BreadcrumbWidgetStoryArgs, BreadcrumbWidgetStoryArgTypes} from "./BreadcrumbWidgetStories";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'BreadcrumbWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: BreadcrumbWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="breadcrumb_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createBreadcrumb(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        entityType:"${args.entityType}",
        colorFirst:"${args.colorFirst}",
        colorSecond:"${args.colorSecond}",
        parameter:"${args.parameter}",
    },
    document.querySelector('#breadcrumb_widget_container_${num}')
)
</script>
        `
    },
    argTypes: BreadcrumbWidgetStoryArgTypes,
    args: BreadcrumbWidgetStoryArgs
}

export {
    BreadcrumbWidgetExample,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable,
    ErrorBreadcrumbWidget
} from "./BreadcrumbWidgetStories"