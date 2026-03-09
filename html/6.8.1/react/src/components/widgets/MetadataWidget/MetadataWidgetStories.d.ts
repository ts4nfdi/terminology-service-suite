export declare const MetadataWidgetStoryArgTypes: {
    hierarchyShowSiblingsOnInit: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    hierarchyKeepExpansionStates: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    hierarchyPreferredRoots: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    hierarchyWrap: {
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
};
export declare const MetadataWidgetStoryArgs: {
    readonly api: "";
    readonly useLegacy: true;
    readonly ontologyId: "";
    readonly entityType: "term";
    readonly iri: "";
    readonly termLink: "";
    readonly altNamesTab: true;
    readonly hierarchyTab: true;
    readonly crossRefTab: true;
    readonly terminologyInfoTab: true;
    readonly graphViewTab: true;
    readonly termDepictionTab: true;
    readonly hierarchyPreferredRoots: false;
    readonly hierarchyKeepExpansionStates: false;
    readonly hierarchyShowSiblingsOnInit: false;
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly onNavigateToDisambiguate: "Console message";
    readonly hierarchyWrap: false;
    readonly parameter: "";
};
export declare const MetadataWidget1Args: {
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "uberon";
    readonly iri: "http://purl.obolibrary.org/obo/UBERON_0001443";
    readonly entityType: "term";
    readonly hierarchyWrap: true;
};
export declare const OLS3Args: {
    readonly api: "https://ols3-semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2984";
    readonly entityType: "term";
};
export declare const OLS4V1Args: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly ontologyId: "ncit";
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2984";
    readonly entityType: "term";
};
export declare const OLS4V2Args: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly ontologyId: "ncit";
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2984";
    readonly entityType: "term";
    readonly useLegacy: false;
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
export declare const DefinedByAlsoAppearsInWidgetsArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly iri: "http://purl.obolibrary.org/obo/HP_0000819";
    readonly ontologyId: "efo";
};
export declare const HiddenTabsArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly ontologyId: "uberon";
    readonly iri: "http://purl.obolibrary.org/obo/UBERON_0001443";
    readonly entityType: "term";
    readonly useLegacy: false;
    readonly parameter: "";
    readonly altNamesTab: false;
    readonly hierarchyTab: false;
    readonly crossRefTab: false;
    readonly terminologyInfoTab: false;
    readonly graphViewTab: false;
    readonly termDepictionTab: false;
};
export declare const TermAsLinkArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly iri: "http://purl.obolibrary.org/obo/HP_0000819";
    readonly ontologyId: "efo";
    readonly termLink: "https://www.ebi.ac.uk/ols4/ontologies/efo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FHP_0000819";
};
export declare const commonMetadataWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
