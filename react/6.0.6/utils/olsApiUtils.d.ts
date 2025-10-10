import { ContentParams, PaginationParams, SearchQueryParams, SortingParams, SuggestQueryParams } from './olsApiTypes';
export declare function buildParamsForGet(paginationParams?: PaginationParams, sortingParams?: SortingParams, contentParams?: ContentParams, parameter?: string): any;
export declare function buildPaginationParams(paginationParams?: PaginationParams): any;
export declare function buildParamsForSearch(queryParams: SearchQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string, ts4nfdiGateway?: boolean): any;
/**
 * Function for creating an object from string of parameters for axios input params
 * @param parameter
 * @private
 */
export declare function buildOtherParams(parameter?: string): any;
export declare function buildParamsForEntities(parameter?: string): any;
export declare function buildParamsForSelect(queryParams: SuggestQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameters?: string): any;
export declare function buildParamsForSuggest(queryParams: SuggestQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameters?: string): any;
export declare function isTop(iri: string): boolean;
export declare function check_for_errors(response: any): any;
