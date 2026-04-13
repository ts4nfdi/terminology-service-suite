import { ThingTypeName } from '../../../../model/ModelTypeCheck';
export declare const DescriptionWidgetStoryArgTypes: {
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
export declare const DescriptionWidgetStoryArgs: {
    api: string;
    iri: string;
    useLegacy: boolean;
    ontologyId: string;
    thingType: ThingTypeName;
    descText: string;
    color: string;
    className: string;
    parameter: string;
};
export declare const DescriptionWidget1Args: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2985";
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "ncit";
    readonly thingType: "term";
    readonly parameter: "collection=nfdi4health";
};
export declare const SelectingDefiningOntologyArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly iri: "http://purl.obolibrary.org/obo/IAO_0000631";
    readonly thingType: "term";
    readonly parameter: "";
};
export declare const DefiningOntologyUnavailableArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly iri: "http://identifiers.org/uniprot/Q9VAM9";
    readonly thingType: "term";
    readonly parameter: "";
};
export declare const ErrorFetchingDataArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly iri: "http://identifiers.org/uniprot/Q9VA";
    readonly thingType: "term";
    readonly parameter: "";
};
export declare const commonDescriptionWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
