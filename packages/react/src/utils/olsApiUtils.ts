import {
  ContentParams,
  PaginationParams,
  SearchQueryParams,
  SortingParams,
  SuggestQueryParams,
} from "./olsApiTypes";

const DEFAULT_SEARCH_RESULTS_PER_PAGE = 10;

export function buildParamsForGet(
  paginationParams?: PaginationParams,
  sortingParams?: SortingParams,
  contentParams?: ContentParams,
  parameter?: string,
) {
  if (sortingParams) {
    return {
      ...paginationParams,
      sort: `${sortingParams.sortField},${sortingParams.sortDir}`,
      ...contentParams,
      ...buildOtherParams(parameter),
    };
  }
  return {
    ...paginationParams,
    ...contentParams,
    ...buildOtherParams(parameter),
  };
}

export function buildPaginationParams(paginationParams?: PaginationParams) {
  const params: any = {
    rows: paginationParams?.size,
  };

  if (paginationParams?.page) {
    if (paginationParams.size) {
      params.start = (
        +paginationParams.page * +paginationParams.size
      ).toString();
    } else {
      params.start = (
        +paginationParams.page * DEFAULT_SEARCH_RESULTS_PER_PAGE
      ).toString();
    }
  }

  return params;
}

export function buildParamsForSearch(
  queryParams: SearchQueryParams,
  paginationParams?: PaginationParams,
  contentParams?: ContentParams,
  parameter?: string,
  ts4nfdiGateway?: boolean,
) {
  const params: any = {
    exact: queryParams.exactMatch,
    obsoletes: queryParams.showObsoleteTerms,
  };

  if (ts4nfdiGateway) {
    params.query = queryParams.query;
  } else {
    params.q = queryParams.query;
  }

  if (queryParams.groupByIri) {
    params.groupField = queryParams.groupByIri;
  }

  if (queryParams.types) {
    params.type = queryParams.types;
  }

  if (queryParams.ontology) {
    params.ontology = queryParams.ontology;
  }

  return {
    ...params,
    ...buildPaginationParams(paginationParams),
    ...contentParams,
    ...buildOtherParams(parameter),
  };
}

/**
 * Function for creating an object from string of parameters for axios input params
 * @param parameter
 * @private
 */
export function buildOtherParams(parameter?: string) {
  const result: any = {};
  if (parameter) {
    const paramsSplitted = parameter.split("&");

    paramsSplitted.forEach((param: string) => {
      const key: string = param.split("=")[0];
      const value: string = param.split("=")[1];
      result[key] = value;
    });
  }
  return result;
}

export function buildParamsForEntities(parameter?: string) {
  const result: any = {};
  if (parameter) {
    const paramsSplitted = parameter.split("&");

    paramsSplitted.forEach((param: string) => {
      const key: string = param.split("=")[0];
      const value: string = param.split("=")[1];
      const finalKey = key === "ontology" ? "ontologyId" : key;
      if (finalKey === "ontologyId" || finalKey === "type") {
        result[finalKey] = value;
      }
    });
  }
  return result;
}

export function buildParamsForSelect(
  queryParams: SuggestQueryParams,
  paginationParams?: PaginationParams,
  contentParams?: ContentParams,
  parameters?: string,
) {
  const params: any = {
    q: queryParams.query,
  };

  return {
    ...params,
    ...buildPaginationParams(paginationParams),
    ...contentParams,
    ...buildOtherParams(parameters),
  };
}

export function buildParamsForSuggest(
  queryParams: SuggestQueryParams,
  paginationParams?: PaginationParams,
  contentParams?: ContentParams,
  parameters?: string,
) {
  const params: any = {
    q: queryParams.query,
  };

  return {
    ...params,
    ...buildPaginationParams(paginationParams),
    ...contentParams,
    ...buildOtherParams(parameters),
  };
}

// used to filter entities not be shown in hierarchy
export function isTop(iri: string): boolean {
  return (
    iri === "http://www.w3.org/2002/07/owl#Thing" ||
    iri === "http://www.w3.org/2002/07/owl#TopObjectProperty"
  );
}

// TODO: Is this the behavior we want (especially throwing error for empty response)?
export function check_for_errors(response: any): any {
  // resource not found/illegal argument exception in semanticlookup
  if (response["error"]) {
    throw Error(
      response["status"] +
        " " +
        response["error"] +
        " - " +
        response["message"] +
        " - " +
        response["exception"] +
        " at " +
        response["path"],
    );
  }
  // empty response - can be caught if this is expected, e.g. for fetching instances
  if (
    response["page"] !== undefined &&
    response["page"]["totalElements"] === 0
  ) {
    throw Error("Response contains 0 elements");
  }
  return response;
}
