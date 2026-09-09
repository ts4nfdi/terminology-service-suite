export declare const EntityProviderWidgetStoryArgTypes: {
    api: any;
    enabled: {
        required: boolean;
        description: string;
        control: {
            readonly type: "boolean";
        };
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
};
export declare const EntityProviderWidgetStoryArgs: {
    readonly api: "https://terminology.services.base4nfdi.de/api-gateway/ols4/api/";
    readonly iri: "";
    readonly ontologyId: "";
    readonly enabled: true;
};
/**
 * An entity that resolves in voc4cat via the TS4NFDI API Gateway. At the time of writing
 * the gateway serves it through Skosmos, but which provider answers is a
 * property of the API Gateway configuration and may change - the story renders
 * whatever the API reports rather than asserting a specific provider.
 */
export declare const withOntologyIdArgs: {
    readonly api: "https://terminology.services.base4nfdi.de/api-gateway/ols4/api/";
    readonly ontologyId: "voc4cat";
    readonly iri: "https://w3id.org/nfdi4cat/voc4cat_0000151";
};
/**
 * An IRI that does not exist in the requested ontology. The API answers with an
 * empty `elements` array, which is not an error: `provider` stays undefined
 * while `isSuccess` becomes true.
 */
export declare const notFoundArgs: {
    readonly api: "https://terminology.services.base4nfdi.de/api-gateway/ols4/api/";
    readonly ontologyId: "voc4cat";
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2985";
};
/**
 * Nothing is fetched while `enabled` is false, so the hook stays idle. Lets an
 * application mount the hook before an IRI has been selected.
 */
export declare const disabledArgs: {
    readonly api: "https://terminology.services.base4nfdi.de/api-gateway/ols4/api/";
    readonly ontologyId: "voc4cat";
    readonly iri: "https://w3id.org/nfdi4cat/voc4cat_0000151";
    readonly enabled: false;
};
export declare const commonEntityProviderWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
