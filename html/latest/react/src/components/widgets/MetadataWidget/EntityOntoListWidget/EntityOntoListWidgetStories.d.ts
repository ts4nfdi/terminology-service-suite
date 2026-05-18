export declare const EntityOntoListWidgetStoryArgTypes: {
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
export declare const EntityOntoListWidgetStoryArgs: {
    readonly api: "";
    readonly useLegacy: false;
    readonly iri: "";
    readonly ontologyId: "";
    readonly entityType: "term";
    readonly parameter: "";
    readonly onNavigateToOntology: "Console message";
};
export declare const v2ApiNCBITaxonArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCBITaxon_10090";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly entityType: "term";
    readonly ontologyId: "ncbitaxon";
};
export declare const v2ApiFOODONArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCBITaxon_10090";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "foodon";
};
export declare const legacyApiArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/MONDO_0005015";
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly entityType: "term";
    readonly ontologyId: "efo";
    readonly useLegacy: true;
};
export declare const exceedsMaxDisplayArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/HP_0000819";
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly ontologyId: "hp";
};
export declare const commonEntityOntoListWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
