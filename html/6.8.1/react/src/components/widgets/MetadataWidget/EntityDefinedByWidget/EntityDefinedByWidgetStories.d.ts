export declare const EntityDefinedByWidgetStoryArgTypes: {
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
export declare const EntityDefinedByWidgetStoryArgs: {
    readonly api: "";
    readonly useLegacy: false;
    readonly iri: "";
    readonly ontologyId: "";
    readonly entityType: "term";
    readonly parameter: "";
    readonly onNavigateToOntology: "Console message";
};
export declare const emptyInDefiningOntologyArgs: {
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
export declare const commonEntityDefinedByWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
