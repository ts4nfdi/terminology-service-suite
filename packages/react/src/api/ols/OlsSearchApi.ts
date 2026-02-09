import { Select } from "../../model/interfaces/Select";
import { OLSSelect } from "../../model/ols-model/OLSSelect";
import { OLSSelectResult } from "../../model/ols-model/OLSSelectResult";
import { Ts4nfdiSearchResult } from "../../model/ts4nfdi-model/Ts4nfdiSearchResult";
import {
  ContentParams,
  PaginationParams,
  SearchQueryParams,
  SelectQueryParams,
  SuggestQueryParams,
} from "../../utils/olsApiTypes";
import {
  buildParamsForSearch,
  buildParamsForSelect,
  buildParamsForSuggest,
} from "../../utils/olsApiUtils";
import { OlsBaseApi } from "./OlsBaseApi";

export class OlsSearchApi extends OlsBaseApi {
  public search = async (
    queryParams: SearchQueryParams,
    paginationParams: PaginationParams,
    contentParams?: ContentParams,
    parameter?: string,
    abortSignal?: AbortSignal,
  ): Promise<any> => {
    return this.makeCall(
      "search",
      {
        params: buildParamsForSearch(
          queryParams,
          paginationParams,
          contentParams,
          parameter,
        ),
        signal: abortSignal,
      },
      true,
    );
  };

  public select = async (
    queryParams: SelectQueryParams,
    paginationParams?: PaginationParams,
    contentParams?: ContentParams,
    parameter?: string,
  ): Promise<any> => {
    return this.makeCall(
      "select",
      {
        params: buildParamsForSelect(
          queryParams,
          paginationParams,
          contentParams,
          parameter,
        ),
      },
      true,
    );
  };

  public searchTs4nfdiGateway = async (
    queryParams: SelectQueryParams,
    paginationParams?: PaginationParams,
    contentParams?: ContentParams,
    parameter?: string,
    ts4nfdiGateway?: boolean,
  ): Promise<any> => {
    return this.makeCall(
      "search",
      {
        params: buildParamsForSearch(
          queryParams,
          paginationParams,
          contentParams,
          parameter,
          ts4nfdiGateway,
        ),
      },
      true,
    );
  };

  /**
   * Fetch select data.
   * @param queryParams
   * @param paginationParams
   * @param contentParams
   * @param parameter
   */
  public async getSelectData(
    queryParams: SelectQueryParams,
    paginationParams?: PaginationParams,
    contentParams?: ContentParams,
    parameter?: string,
    ts4nfdiGateway?: boolean,
  ): Promise<Select> {
    let response;
    let selectData: OLSSelectResult[] = [];

    if (ts4nfdiGateway) {
      response = await this.searchTs4nfdiGateway(
        queryParams,
        paginationParams,
        contentParams,
        parameter,
        ts4nfdiGateway,
      );
      if (!response) {
        throw new Error("Select data not found");
      } else {
        selectData = selectData.concat(
          response.map((data: any) => {
            return new Ts4nfdiSearchResult(data);
          }),
        );
      }
    } else {
      response = await this.select(
        queryParams,
        paginationParams,
        contentParams,
        parameter,
      );
      if (!response || !response["response"]["docs"]) {
        throw new Error("Select data not found");
      } else {
        selectData = selectData.concat(
          response["response"]["docs"].map((data: any) => {
            return new OLSSelectResult(data);
          }),
        );
      }
    }

    return new OLSSelect(selectData);
  }

  public suggest = async (
    queryParams: SuggestQueryParams,
    paginationParams?: PaginationParams,
    contentParams?: ContentParams,
    parameter?: string,
  ): Promise<any> => {
    return this.makeCall(
      "suggest",
      {
        params: buildParamsForSuggest(
          queryParams,
          paginationParams,
          contentParams,
          parameter,
        ),
      },
      true,
    );
  };
}
