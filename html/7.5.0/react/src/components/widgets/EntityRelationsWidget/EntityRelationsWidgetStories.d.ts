export declare const EntityRelationsWidgetStoryArgTypes: {
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
export declare const EntityRelationsWidgetStoryArgs: {
    readonly api: "https://semanticlookup.zbmed.de/api/";
    readonly iri: "";
    readonly ontologyId: "";
    readonly entityType: "term";
    readonly hasTitle: true;
    readonly showBadges: true;
    readonly parameter: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly onNavigateToDisambiguate: "Console message";
};
export declare const SubEntityOfArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly entityType: "term";
    readonly ontologyId: "agro";
    readonly iri: "http://purl.obolibrary.org/obo/AGRO_00000002";
};
export declare const AllValuesFromArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly entityType: "term";
    readonly ontologyId: "go";
    readonly iri: "http://purl.obolibrary.org/obo/BFO_0000004";
};
export declare const DifferentFromArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly entityType: "individual";
    readonly ontologyId: "bco";
    readonly iri: "http://purl.obolibrary.org/obo/IAO_0000120";
};
export declare const EquivalentToArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly entityType: "term";
    readonly ontologyId: "go";
    readonly iri: "http://purl.obolibrary.org/obo/GO_0048021";
};
export declare const SingleValueArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly entityType: "term";
    readonly ontologyId: "bfo";
    readonly iri: "http://purl.obolibrary.org/obo/BFO_0000001";
};
export declare const InverseOfArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly entityType: "property";
    readonly ontologyId: "ro";
    readonly iri: "http://purl.obolibrary.org/obo/RO_0000057";
};
export declare const PropertyChainArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly entityType: "property";
    readonly ontologyId: "ro";
    readonly iri: "http://purl.obolibrary.org/obo/RO_0002170";
};
export declare const InstancesArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly entityType: "term";
    readonly ontologyId: "iao";
    readonly iri: "http://purl.obolibrary.org/obo/IAO_0000078";
};
export declare const AxiomsArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly entityType: "term";
    readonly ontologyId: "aism";
    readonly iri: "http://purl.obolibrary.org/obo/UBERON_0000006";
};
export declare const QualifiedCardinalityArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly entityType: "term";
    readonly ontologyId: "foodon";
    readonly iri: "http://purl.obolibrary.org/obo/FOODON_00003382";
};
export declare const NavigateToEBIPageArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly entityType: "individual";
    readonly ontologyId: "bco";
    readonly iri: "http://purl.obolibrary.org/obo/IAO_0000120";
    readonly onNavigateToEntity: "Navigate to EBI page";
    readonly onNavigateToOntology: "Navigate to EBI page";
    readonly onNavigateToDisambiguate: "Navigate to EBI page";
};
export declare const commonEntityRelationsWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
