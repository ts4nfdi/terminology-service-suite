

export interface PaginationParams {
    size?: string;
    page?: string;
}

export interface SortingParams {
    sortField: string | number;
    sortDir?: "asc" | "desc";
}

export interface ContentParams {
    ontologyId?: string;
    termIri?: string;
    propertyIri?: string;
    individualIri?: string;
    queryString?: string;
}

export interface SearchQueryParams {
    query: string;
    exactMatch?: boolean;
    showObsoleteTerms?: boolean;
    types?: string;
    ontology?: string;
    groupByIri?: boolean;
}

export interface SelectQueryParams {
    query: string;
}

export interface SuggestQueryParams {
    query: string;
}

export interface JsTreeParams {
    viewMode?: string;
    siblings?: boolean;
    child?: string;
}

export type JSTreeNode = {
    id: string;
    parent: string;
    iri: string;
    text: string;
    state: {
        opened: boolean;
    };
    children: boolean;
    a_attr: {
        iri: string;
        ontology_name: string;
        title: string;
        class: string;
    };
    ontology_name: string;
};

export type apiCallFn = (
    paginationParams?: PaginationParams,
    sortingParams?: SortingParams,
    contentParams?: ContentParams,
    parameter?: string,
    useLegacy?: boolean,
    abortSignal?: AbortSignal,
) => Promise<any>;