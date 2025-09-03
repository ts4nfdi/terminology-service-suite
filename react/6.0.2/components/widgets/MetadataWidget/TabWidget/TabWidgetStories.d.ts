import { EntityTypeName } from '../../../../model/ModelTypeCheck';
export declare const TabWidgetStoryArgTypes: {
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
export declare const TabWidgetStoryArgs: {
    api: string;
    parameter: string;
    useLegacy: boolean;
    ontologyId: string;
    entityType: EntityTypeName;
    iri: string;
    altNamesTab: boolean;
    hierarchyTab: boolean;
    crossRefTab: boolean;
    terminologyInfoTab: boolean;
    hierarchyPreferredRoots: false;
    hierarchyKeepExpansionStates: false;
    hierarchyShowSiblingsOnInit: false;
    onNavigateToEntity: string;
    onNavigateToOntology: string;
    onNavigateToDisambiguate: string;
};
export declare const DefaultArgs: {
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "hp";
    readonly iri: "http://purl.obolibrary.org/obo/HP_0000819";
    readonly useLegacy: true;
};
export declare const TabWidgetOLS3Args: {
    readonly api: "https://ols3-semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "efo";
    readonly iri: "http://www.ebi.ac.uk/efo/EFO_0009644";
    readonly useLegacy: true;
};
export declare const TabWidgetOLS4V1Args: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly ontologyId: "efo";
    readonly iri: "http://www.ebi.ac.uk/efo/EFO_0009644";
    readonly useLegacy: true;
};
export declare const TabWidgetOLS4V2Args: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly ontologyId: "efo";
    readonly iri: "http://www.ebi.ac.uk/efo/EFO_0009644";
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
export declare const TabWidgetLargeArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly ontologyId: "ncbitaxon";
    readonly iri: "http://purl.obolibrary.org/obo/NCBITaxon_2489341";
    readonly useLegacy: false;
    readonly parameter: "";
};
export declare const HiddenTabsArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly ontologyId: "ncit";
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2984";
    readonly entityType: "term";
    readonly useLegacy: false;
    readonly parameter: "";
    readonly altNamesTab: true;
    readonly hierarchyTab: false;
    readonly crossRefTab: false;
    readonly terminologyInfoTab: false;
};
export declare const commonTabWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
