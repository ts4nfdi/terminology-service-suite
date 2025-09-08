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
export declare const v2ApiEFOArgs: {
    readonly iri: "http://www.ebi.ac.uk/efo/EFO_0000400";
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly entityType: "term";
    readonly ontologyId: "efo";
};
export declare const v2ApiONSArgs: {
    readonly iri: "http://www.ebi.ac.uk/efo/EFO_0000400";
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly ontologyId: "ons";
};
export declare const legacyApiArgs: {
    readonly iri: "http://www.ebi.ac.uk/efo/EFO_0000400";
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
