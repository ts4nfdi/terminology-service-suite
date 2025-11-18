export declare const AlternativeNameTabWidgetStoryArgTypes: {
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
export declare const AlternativeNameTabWidgetStoryArgs: {
    readonly api: "";
    readonly useLegacy: true;
    readonly iri: "";
    readonly ontologyId: "";
    readonly entityType: "term";
    readonly className: "";
    readonly parameter: "collection=nfdi4health";
};
export declare const AlternativeNameTabWidget1Args: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2985";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly entityType: "term";
    readonly ontologyId: "ncit";
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
export declare const commonAlternativeNameTabWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
