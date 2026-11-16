export declare const EntityProviderWidgetStoryArgTypes: {
    showRaw: {
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
    className: {
        required: boolean;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    api: {
        api: string;
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
    parameter: {
        required: boolean;
        description: string;
        table: {
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
    showRaw: boolean;
    api: "https://terminology.services.base4nfdi.de/api-gateway/ols4/api/";
    iri: "";
    ontologyId: "";
    enabled: true;
    parameter: "";
};
export declare const WithOntologyIdArgs: {
    readonly api: "https://terminology.services.base4nfdi.de/api-gateway/ols4/api/";
    readonly ontologyId: "agrovoc";
    readonly iri: "http://aims.fao.org/aos/agrovoc/c_12332";
    readonly parameter: "collectionId=ff5491d1-d0a9-481e-ac90-0fad065fa097";
};
export declare const WithoutRawArgs: {
    readonly showRaw: false;
    readonly api: "https://terminology.services.base4nfdi.de/api-gateway/ols4/api/";
    readonly ontologyId: "agrovoc";
    readonly iri: "http://aims.fao.org/aos/agrovoc/c_12332";
    readonly parameter: "collectionId=ff5491d1-d0a9-481e-ac90-0fad065fa097";
};
export declare const NotFoundArgs: {
    readonly api: "https://terminology.services.base4nfdi.de/api-gateway/ols4/api/";
    readonly ontologyId: "voc4cat";
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2985";
};
export declare const DisabledArgs: {
    readonly api: "https://terminology.services.base4nfdi.de/api-gateway/ols4/api/";
    readonly ontologyId: "voc4cat";
    readonly iri: "https://w3id.org/nfdi4cat/voc4cat_0000151";
    readonly enabled: false;
};
export declare const fullWithOntologyIdPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
export declare const fullWithoutRawPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
export declare const fullNotFoundPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
export declare const fullDisabledPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
