export interface entityObject {
    properties: {
        iri: string;
        ontologyId?: string;
        short_form?: string;
        [key: string]: any;
    };
}
export declare function getBreadcrumbData({ api, useLegacy, iri, ontologyId, entityType, parameter, }: any): Promise<entityObject>;
