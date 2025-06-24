import "ts4nfdi-widgets";
import "ts4nfdi-widgets/terminology-service-suite.css";
import {BreadcrumbPresentationProps} from "../../../../../app/types";
import {
    BreadcrumbPresentationStoryArgs,
    BreadcrumbPresentationStoryArgTypes,
} from "./BreadcrumbPresentationStories";
import "../../../../../style/tssStyles.css";
import {BreadcrumbPresentationDescription} from "../../../../../app/widgetDescriptions";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: "Additional Entity Metadata/BreadcrumbPresentation",
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: BreadcrumbPresentationDescription,
            },
        },
    },
    render: (args: BreadcrumbPresentationProps) => {
        const num = getIncNum();
        const containerId = `breadcrumb_widget_presentation_container_${num}`;
        const loadingId = `breadcrumb_widget_presentation_loading_${num}`;

        setTimeout(() => {
            const container = document.getElementById(containerId);
            const loading = document.getElementById(loadingId);

            if (container && loading) {
                loading.remove();

                (window as any)['ts4nfdiWidgets'].createBreadcrumbPresentation(
                    {
                        ontologyId: args.ontologyId,
                        shortForm: args.shortForm,
                        colorFirst: args.colorFirst,
                        colorSecond: args.colorSecond,
                        onNavigateToOntology: args.onNavigateToOntology,
                        className: args.className,
                        entity: args.entity,
                    },
                    container
                );
            }
        }, 0);
        return `
    <div id="${loadingId}">Loading...</div>
    <div id="${containerId}"></div>
  `;
    },
    argTypes: BreadcrumbPresentationStoryArgTypes,
    args: BreadcrumbPresentationStoryArgs,
}

export {
    EntityInput,
    EntityInputMissingValue,
} from "./BreadcrumbPresentationStories";
