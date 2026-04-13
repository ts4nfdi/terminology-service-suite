export declare const CrossRefWidgetStoryArgTypes: {
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
export declare const CrossRefWidgetStoryArgs: {
    readonly api: "";
    readonly iri: "";
    readonly useLegacy: true;
    readonly ontologyId: "";
    readonly entityType: "term";
    readonly parameter: "collection=nfdi4health";
};
export declare const CrossRefTabWidget1Args: {
    readonly iri: "http://purl.obolibrary.org/obo/RXNO_0000138";
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly entityType: "term";
    readonly ontologyId: "rxno";
    readonly parameter: "";
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
export declare const commonCrossRefWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
