import { EntityTypeName } from '../../../../model/ModelTypeCheck';
export declare const BreadcrumbWidgetStoryArgTypes: {
    entityType: {
        required: boolean;
        description: string;
        control: {
            readonly type: "radio";
        };
        table: {
            type: {
                summary: string;
            };
        };
        options: string[];
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
export declare const BreadcrumbWidgetStoryArgs: {
    api: string;
    useLegacy: boolean;
    iri: string;
    ontologyId: string;
    entityType: EntityTypeName;
    colorFirst: string;
    colorSecond: string;
    parameter: string;
    onNavigateToOntology: string;
};
export declare const BreadcrumbWidgetDefaultArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2985";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly entityType: "term";
    readonly parameter: "collection=nfdi4health";
};
export declare const SelectingDefiningOntologyArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly iri: "http://purl.obolibrary.org/obo/IAO_0000631";
    readonly entityType: "term";
    readonly parameter: "";
};
export declare const DefiningOntologyUnavailableArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly iri: "http://identifiers.org/uniprot/Q9VAM9";
    readonly entityType: "term";
    readonly parameter: "";
};
export declare const ErrorBreadcrumbWidgetArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2985987654345678";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly entityType: "term";
    readonly parameter: "collection=nfdi4health";
};
export declare const CustomColorsArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2985";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly entityType: "term";
    readonly parameter: "collection=nfdi4health";
    readonly colorFirst: "red";
    readonly colorSecond: "grey";
};
export declare const CustomStyleArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2985";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly entityType: "term";
    readonly parameter: "collection=nfdi4health";
    readonly colorFirst: "#eced8e";
    readonly colorSecond: "#8eaeed";
    readonly className: "custom-breadcrumb-style";
};
export declare const EntityInputArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2985";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly entityType: "term";
    readonly parameter: "collection=nfdi4health";
    readonly entity: {
        readonly properties: {
            readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2985";
            readonly ontologyId: "ncit";
            readonly shortForm: "NCIT_C2985";
        };
    };
};
export declare const commonBreadcrumbWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
