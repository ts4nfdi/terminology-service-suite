import 'ts4nfdi-widgets';
import 'ts4nfdi-widgets/terminology-service-suite.css'
import {BreadcrumbWidgetProps} from "../../../../app/types";
import {BreadcrumbWidgetStoryArgs, BreadcrumbWidgetStoryArgTypes} from "./BreadcrumbWidgetStories";
import "../../../../style/tssStyles.css";
import {BreadcrumbDescription} from "../../../../app/widgetDescriptions";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'Additional Entity Metadata/BreadcrumbWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: BreadcrumbDescription
            }
        }
    },
    render: (args: BreadcrumbWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="breadcrumb_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createBreadcrumb(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        entityType:"${args.entityType}",
        colorFirst:"${args.colorFirst}",
        colorSecond:"${args.colorSecond}",
        parameter:"${args.parameter}",
        onNavigateToOntology:${args.onNavigateToOntology},
        className: "${args.className}"
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
    SelectingDefiningOntology,
    DefiningOntologyUnavailable,
    ErrorBreadcrumbWidget
} from "./BreadcrumbWidgetStories"
