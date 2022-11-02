import axios, { AxiosInstance } from "axios";

interface PaginationParams {
  size?: string;
  page?: string;
}

interface SortingParams {
  sortField: string | number;
  sortDir?: "asc" | "desc";
}

interface ContentParams {
  ontologyId?: string;
  termIri?: string;
  propertyIri?: string;
  individualIri?: string;
  queryString?: string;
}

export type apiCallFn = (paginationParams?: PaginationParams, sortingParams?: SortingParams, contentParams?: ContentParams) => Promise<any>;

interface SearchQueryParams {
  query: string;
  exactMatch?: boolean;
  showObsoleteTerms?: boolean;
  types?: string;
  ontology?: string;
  groupByIri?: boolean;
}

interface SuggestQueryParams {
  query: string;
  ontology?: string;
}

const DEFAULT_SEARCH_RESULTS_PER_PAGE = 10;

export class OlsApi {
  private axiosInstance: AxiosInstance;

  constructor(api: string) {
    this.axiosInstance = axios.create({
      baseURL: api,
      headers: {
        Accept: "application/json",
        Content_Type: "application/json",
      },
    });
  }

  private buildParamsForGet(paginationParams?: PaginationParams, sortingParams?: SortingParams) {
    if (sortingParams) {
      return { ...paginationParams, sort: `${sortingParams.sortField},${sortingParams.sortDir}` };
    }
    return { ...paginationParams };
  }

  private buildPaginationParams(paginationParams?: PaginationParams) {
    const params: any = {
      rows: paginationParams?.size,
    };

    if (paginationParams?.page) {
      if (paginationParams.size) {
        params.start = (+paginationParams.page * +paginationParams.size).toString();
      } else {
        params.start = (+paginationParams.page * DEFAULT_SEARCH_RESULTS_PER_PAGE).toString();
      }
    }

    return params;
  }

  private buildParamsForSearch(queryParams: SearchQueryParams, paginationParams: PaginationParams) {
    const params: any = {
      q: queryParams.query,
      exact: queryParams.exactMatch,
      obsoletes: queryParams.showObsoleteTerms,
    };

    if (queryParams.groupByIri) {
      params.groupField = queryParams.groupByIri;
    }

    if (queryParams.types) {
      params.type = queryParams.types;
    }

    if (queryParams.ontology) {
      params.ontology = queryParams.ontology;
    }

    return { ...params, ...this.buildPaginationParams(paginationParams) };
  }

  private buildParamsForSuggest(queryParams: SuggestQueryParams, paginationParams?: PaginationParams) {
    const params: any = {
      q: queryParams.query,
    };

    if (queryParams.ontology) {
      params.ontology = queryParams.ontology;
    }

    return { ...params, ...this.buildPaginationParams(paginationParams) };
  }

  public getOntologies: apiCallFn = async (paginationParams, sortingParams) => {
    return (await this.axiosInstance.get("ontologies", { params: this.buildParamsForGet(paginationParams, sortingParams) })).data;
  }

  public getTerms: apiCallFn = async (paginationParams, sortingParams) => {
    return (await this.axiosInstance.get("terms", { params: this.buildParamsForGet(paginationParams, sortingParams) })).data;
  }

  public getProperties: apiCallFn = async (paginationParams, sortingParams) => {
    return (await this.axiosInstance.get("properties", { params: this.buildParamsForGet(paginationParams, sortingParams) })).data;
  }

  public getIndividuals: apiCallFn = async (paginationParams, sortingParams) => {
    return (await this.axiosInstance.get("individuals", { params: this.buildParamsForGet(paginationParams, sortingParams) })).data;
  }

  public getOntology: apiCallFn = async (paginationParams, sortingParams, contentParams) => {
    return (await this.axiosInstance.get("ontologies/"+contentParams?.ontologyId)).data;
  }

  /**
   * getTerm, getProperty, getIndividual:
   * These methods always require the respective object IRI in contentParams to be set
   * If ontologyID is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyID is provided in contentParams, the returned list will only contain the object from that specific ontology
   */

  public getTerm: apiCallFn = async (paginationParams, sortingParams, contentParams) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    return (await this.axiosInstance.get(queryPrefix+"terms", { params: {iri: contentParams?.termIri} })).data;
  }

  public getProperty: apiCallFn = async (paginationParams, sortingParams, contentParams) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    return (await this.axiosInstance.get(queryPrefix+"properties", { params: {iri: contentParams?.propertyIri} })).data;
  }

  public getIndividual: apiCallFn = async (paginationParams, sortingParams, contentParams) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    return (await this.axiosInstance.get(queryPrefix+"individuals", { params: {iri: contentParams?.individualIri} })).data;
  }

  public getTermInfo: apiCallFn = async (paginationParams, sortingParams, contentParams) => {
        return (await this.axiosInstance.get("ontologies/" + contentParams?.ontologyId + "/terms?iri=" + contentParams?.termIri)).data;
    }

  public search = async (queryParams: SearchQueryParams, paginationParams: PaginationParams): Promise<any> => {
    return (await this.axiosInstance.get("search", { params: this.buildParamsForSearch(queryParams, paginationParams) })).data;
  }

  public suggest = async(queryParams: SuggestQueryParams, paginationParams?: PaginationParams): Promise<any> => {
    return (await this.axiosInstance.get("suggest", { params: this.buildParamsForSuggest(queryParams, paginationParams) })).data;
  }
}
