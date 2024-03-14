import 'semlookp-widgets';
import {BreadcrumbWidgetProps} from "../../../../utils/types";
import {BreadcrumbWidgetStoryArgs, BreadcrumbWidgetStoryArgTypes} from "root/src/components/widgets/MetadataWidget/BreadcrumbWidget/BreadcrumbWidgetStories";

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
    BreadcrumbWidget1,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable,
    ErrorBreadcrumbWidget
} from "root/src/components/widgets/MetadataWidget/BreadcrumbWidget/BreadcrumbWidgetStories"