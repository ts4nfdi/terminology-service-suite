export declare const TitleWidgetStoryArgTypes: {
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
export declare const TitleWidgetStoryArgs: {
    readonly api: "";
    readonly useLegacy: true;
    readonly iri: "";
    readonly ontologyId: "";
    readonly thingType: "term";
    readonly titleText: "";
    readonly defaultValue: "";
    readonly className: "";
    readonly parameter: "collection=nfdi4health";
};
export declare const TitleWidgetDefaultArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2985";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly thingType: "term";
};
export declare const OntologyTitleArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly thingType: "ontology";
};
export declare const SelectingDefiningOntologyArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly iri: "http://purl.obolibrary.org/obo/IAO_0000631";
    readonly thingType: "term";
    readonly parameter: "";
};
export declare const TitleWidgetWithTitleTextArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C29";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly thingType: "term";
    readonly titleText: "title text";
};
export declare const IncorrectIriWithDefaultValueArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C29";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly thingType: "term";
    readonly defaultValue: "default value";
};
export declare const IncorrectIriWithoutDefaultValueArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C29";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly thingType: "term";
};
export declare const DefiningOntologyUnavailableArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly iri: "http://identifiers.org/uniprot/Q9VAM9";
    readonly thingType: "term";
    readonly parameter: "";
};
export declare const WithStylesArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2985";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly thingType: "term";
    readonly className: "custom-title-style";
};
export declare const WithoutStylesArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2985";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly thingType: "term";
    readonly className: "none";
};
export declare const OntologyTitleCustomOnNavigateArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly thingType: "ontology";
    readonly onNavigateTo: (iri: string, ontologyId: string, thingType: any) => void;
};
export declare const OntologyTitleCustomLinkArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly thingType: "ontology";
    readonly href: "/";
};
export declare const commonTitleWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
