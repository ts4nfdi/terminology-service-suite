import { EntityTypeName } from '../../../../../model/ModelTypeCheck';
export declare const HierarchyWidgetStoryArgTypes: {
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
    parameter: {
        required: boolean;
        table: {
            type: {
                summary: string;
            };
        };
        defaultValue: {
            summary: string;
        };
        description: string;
    };
    useLegacy: {
        required: boolean;
        description: string;
        defaultValue: {
            summary: string;
        };
        control: {
            readonly type: "boolean";
        };
    };
    showSiblingsOnInit: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    keepExpansionStates: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    preferredRoots: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    includeObsoleteEntities: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    entityType: {
        description: string;
        required: boolean;
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
        description: string;
        required: boolean;
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    iri: {
        required: boolean;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    apiKey: {
        required: boolean;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
        control: "text";
    };
    backendType: {
        required: boolean;
        description: string;
        control: {
            type: "radio";
        };
        options: string[];
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
    apiUrl: {
        required: boolean;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
        control: "text";
    };
};
export declare const HierarchyWidgetStoryArgs: {
    readonly apiUrl: "";
    readonly backendType: "ols";
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly iri: "";
    readonly ontologyId: "";
    readonly entityType: "term";
    readonly includeObsoleteEntities: false;
    readonly preferredRoots: false;
    readonly keepExpansionStates: false;
    readonly showSiblingsOnInit: false;
    readonly useLegacy: false;
    readonly hierarchyWrap: false;
    readonly parameter: "";
    readonly targetIri: "";
    readonly showHeader: true;
    readonly showComparisonTitleInHeader: true;
};
export declare const ClassHierarchyArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "http://www.ebi.ac.uk/efo/EFO_0000400";
    readonly entityType: "class";
    readonly ontologyId: "efo";
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly includeObsoleteEntities: false;
    readonly preferredRoots: false;
    readonly keepExpansionStates: false;
    readonly showSiblingsOnInit: false;
    readonly useLegacy: false;
    readonly hierarchyWrap: false;
    readonly parameter: "";
    readonly targetIri: "";
    readonly showHeader: true;
    readonly showComparisonTitleInHeader: true;
};
export declare const IndividualHierarchyArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "http://purl.obolibrary.org/obo/IAO_0000120";
    readonly entityType: "individual";
    readonly ontologyId: "bco";
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly includeObsoleteEntities: false;
    readonly preferredRoots: false;
    readonly keepExpansionStates: false;
    readonly showSiblingsOnInit: false;
    readonly useLegacy: false;
    readonly hierarchyWrap: false;
    readonly parameter: "";
    readonly targetIri: "";
    readonly showHeader: true;
    readonly showComparisonTitleInHeader: true;
};
export declare const PreferredRootsArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "";
    readonly entityType: "class";
    readonly ontologyId: "uberon";
    readonly preferredRoots: true;
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly includeObsoleteEntities: false;
    readonly keepExpansionStates: false;
    readonly showSiblingsOnInit: false;
    readonly useLegacy: false;
    readonly hierarchyWrap: false;
    readonly parameter: "";
    readonly targetIri: "";
    readonly showHeader: true;
    readonly showComparisonTitleInHeader: true;
};
export declare const IncludeObsoleteEntitiesArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "";
    readonly entityType: "class";
    readonly ontologyId: "uberon";
    readonly includeObsoleteEntities: true;
    readonly useLegacy: true;
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly preferredRoots: false;
    readonly keepExpansionStates: false;
    readonly showSiblingsOnInit: false;
    readonly hierarchyWrap: false;
    readonly parameter: "";
    readonly targetIri: "";
    readonly showHeader: true;
    readonly showComparisonTitleInHeader: true;
};
export declare const PropertyRootsArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "";
    readonly entityType: "property";
    readonly ontologyId: "bco";
    readonly useLegacy: true;
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly includeObsoleteEntities: false;
    readonly preferredRoots: false;
    readonly keepExpansionStates: false;
    readonly showSiblingsOnInit: false;
    readonly hierarchyWrap: false;
    readonly parameter: "";
    readonly targetIri: "";
    readonly showHeader: true;
    readonly showComparisonTitleInHeader: true;
};
export declare const IndividualRootsArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "";
    readonly entityType: "individual";
    readonly ontologyId: "bco";
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly includeObsoleteEntities: false;
    readonly preferredRoots: false;
    readonly keepExpansionStates: false;
    readonly showSiblingsOnInit: false;
    readonly useLegacy: false;
    readonly hierarchyWrap: false;
    readonly parameter: "";
    readonly targetIri: "";
    readonly showHeader: true;
    readonly showComparisonTitleInHeader: true;
};
export declare const LargeHierarchyArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "http://purl.obolibrary.org/obo/UBERON_2001747";
    readonly entityType: "class";
    readonly ontologyId: "uberon";
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly includeObsoleteEntities: false;
    readonly preferredRoots: false;
    readonly keepExpansionStates: false;
    readonly showSiblingsOnInit: false;
    readonly useLegacy: false;
    readonly hierarchyWrap: false;
    readonly parameter: "";
    readonly targetIri: "";
    readonly showHeader: true;
    readonly showComparisonTitleInHeader: true;
};
export declare const SkosHierarchyArgs: {
    readonly apiUrl: "https://api.finto.fi/rest/v1";
    readonly backendType: "skosmos";
    readonly iri: "http://www.yso.fi/onto/yso/p864";
    readonly ontologyId: "yso";
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly entityType: "term";
    readonly includeObsoleteEntities: false;
    readonly preferredRoots: false;
    readonly keepExpansionStates: false;
    readonly showSiblingsOnInit: false;
    readonly useLegacy: false;
    readonly hierarchyWrap: false;
    readonly parameter: "";
    readonly targetIri: "";
    readonly showHeader: true;
    readonly showComparisonTitleInHeader: true;
};
export declare const SagePubHierarchyArgs: {
    readonly apiUrl: "https://concepts.sagepub.com/vocabularies/rest/v1/";
    readonly backendType: "skosmos";
    readonly iri: "https://concepts.sagepub.com/social-science/concept/economic_forecasting";
    readonly ontologyId: "social-science";
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly entityType: "term";
    readonly includeObsoleteEntities: false;
    readonly preferredRoots: false;
    readonly keepExpansionStates: false;
    readonly showSiblingsOnInit: false;
    readonly useLegacy: false;
    readonly hierarchyWrap: false;
    readonly parameter: "";
    readonly targetIri: "";
    readonly showHeader: true;
    readonly showComparisonTitleInHeader: true;
};
export declare const OntoportalHierarchyArgs: {
    readonly apiUrl: "https://data.biodivportal.gfbio.org";
    readonly backendType: "ontoportal";
    readonly iri: "http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila";
    readonly ontologyId: "IOC";
    readonly entityType: "class";
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly includeObsoleteEntities: false;
    readonly preferredRoots: false;
    readonly keepExpansionStates: false;
    readonly showSiblingsOnInit: false;
    readonly useLegacy: false;
    readonly hierarchyWrap: false;
    readonly parameter: "";
    readonly targetIri: "";
    readonly showHeader: true;
    readonly showComparisonTitleInHeader: true;
};
export declare const OLS3HierarchyArgs: {
    readonly apiUrl: "https://ols3-semanticlookup.zbmed.de/ols/api/";
    readonly backendType: "ols";
    readonly iri: "http://www.ebi.ac.uk/efo/EFO_0000400";
    readonly entityType: "class";
    readonly ontologyId: "efo";
    readonly useLegacy: true;
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly includeObsoleteEntities: false;
    readonly preferredRoots: false;
    readonly keepExpansionStates: false;
    readonly showSiblingsOnInit: false;
    readonly hierarchyWrap: false;
    readonly parameter: "";
    readonly targetIri: "";
    readonly showHeader: true;
    readonly showComparisonTitleInHeader: true;
};
export declare const OLSGermanArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "http://purl.obolibrary.org/obo/HP_0003502";
    readonly entityType: "class";
    readonly ontologyId: "hp";
    readonly useLegacy: false;
    readonly parameter: "lang=de";
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly includeObsoleteEntities: false;
    readonly preferredRoots: false;
    readonly keepExpansionStates: false;
    readonly showSiblingsOnInit: false;
    readonly hierarchyWrap: false;
    readonly targetIri: "";
    readonly showHeader: true;
    readonly showComparisonTitleInHeader: true;
};
export declare const SkosmosAgrovocGermanArgs: {
    readonly apiUrl: "https://agrovoc.fao.org/browse/rest/v1/";
    readonly backendType: "skosmos";
    readonly iri: "http://aims.fao.org/aos/agrovoc/c_1731";
    readonly showSiblingsOnInit: true;
    readonly ontologyId: "agrovoc";
    readonly parameter: "lang=de";
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly entityType: "term";
    readonly includeObsoleteEntities: false;
    readonly preferredRoots: false;
    readonly keepExpansionStates: false;
    readonly useLegacy: false;
    readonly hierarchyWrap: false;
    readonly targetIri: "";
    readonly showHeader: true;
    readonly showComparisonTitleInHeader: true;
};
export declare const CompareHierarchiesArgs: {
    apiUrl: string;
    backendType: string;
    iri: string;
    targetIri: string;
    entityType: EntityTypeName;
    ontologyId: string;
    apiKey: "";
    onNavigateToEntity: "Console message";
    onNavigateToOntology: "Console message";
    includeObsoleteEntities: false;
    preferredRoots: false;
    keepExpansionStates: false;
    showSiblingsOnInit: false;
    useLegacy: false;
    hierarchyWrap: false;
    parameter: "";
    showHeader: true;
    showComparisonTitleInHeader: true;
};
export declare const CompareHierarchiesSubEntityArgs: {
    apiUrl: string;
    backendType: string;
    iri: string;
    targetIri: string;
    entityType: EntityTypeName;
    ontologyId: string;
    apiKey: "";
    onNavigateToEntity: "Console message";
    onNavigateToOntology: "Console message";
    includeObsoleteEntities: false;
    preferredRoots: false;
    keepExpansionStates: false;
    showSiblingsOnInit: false;
    useLegacy: false;
    hierarchyWrap: false;
    parameter: "";
    showHeader: true;
    showComparisonTitleInHeader: true;
};
export declare const commonHierarchyWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
