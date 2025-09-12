export declare const BreadcrumbPresentationStoryArgTypes: {
    entity: {
        required: boolean;
        description: string;
    };
    ontologyId: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
};
export declare const BreadcrumbPresentationStoryArgs: {
    ontologyId: string;
    shortForm: string;
    colorFirst: string;
    colorSecond: string;
    onNavigateToOntology: string;
    className: string;
    entity: {
        properties: {
            ontologyId: string;
            iri: string;
            shortForm: string;
        };
    };
};
export declare const EntityInputArgs: {
    entity: {
        properties: {
            iri: string;
            ontologyId: string;
            shortForm: string;
        };
    };
    ontologyId: string;
    shortForm: string;
    colorFirst: string;
    colorSecond: string;
    onNavigateToOntology: string;
    className: string;
};
export declare const EntityInputMissingValueArgs: {
    entity: {
        properties: {
            iri: string;
            shortForm: string;
            ontologyId: string;
        };
    };
    ontologyId: string;
    shortForm: string;
    colorFirst: string;
    colorSecond: string;
    onNavigateToOntology: string;
    className: string;
};
export declare const commonBreadcrumbPresentationPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
