import { Select } from '../../model/interfaces/Select';
import { ContentParams, PaginationParams, SearchQueryParams, SelectQueryParams, SuggestQueryParams } from '../../utils/olsApiTypes';
import { OlsBaseApi } from './OlsBaseApi';
export declare class OlsSearchApi extends OlsBaseApi {
    search: (queryParams: SearchQueryParams, paginationParams: PaginationParams, contentParams?: ContentParams, parameter?: string, abortSignal?: AbortSignal) => Promise<any>;
    select: (queryParams: SelectQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string) => Promise<any>;
    searchTs4nfdiGateway: (queryParams: SelectQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string, ts4nfdiGateway?: boolean) => Promise<any>;
    /**
     * Fetch select data.
     * @param queryParams
     * @param paginationParams
     * @param contentParams
     * @param parameter
     */
    getSelectData(queryParams: SelectQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string, ts4nfdiGateway?: boolean): Promise<Select>;
    suggest: (queryParams: SuggestQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string) => Promise<any>;
}
