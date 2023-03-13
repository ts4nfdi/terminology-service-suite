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
  frontend?: string;
}

export type apiCallFn = (paginationParams?: PaginationParams, sortingParams?: SortingParams, contentParams?: ContentParams, parameter?: string) => Promise<any>;

interface SearchQueryParams {
  query: string;
  exactMatch?: boolean;
  showObsoleteTerms?: boolean;
  types?: string;
  ontology?: string;
  groupByIri?: boolean;
}

interface SelectQueryParams {
  query: string;
}

interface SuggestQueryParams {
  query: string;
}

interface JsTreeParams {
  viewMode?: string;
  siblings?: boolean;
  child?: string;
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

  private buildParamsForGet(paginationParams?: PaginationParams, sortingParams?: SortingParams, contentParams?: ContentParams, parameter?: string) {
    if (sortingParams) {
      return { ...paginationParams, sort: `${sortingParams.sortField},${sortingParams.sortDir}`, ...contentParams, ...this.buildOtherParams(parameter)};
    }
    return { ...paginationParams, ...contentParams, ...this.buildOtherParams(parameter) };
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

  private buildParamsForSearch(queryParams: SearchQueryParams, paginationParams: PaginationParams, contentParams?: ContentParams) {
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

    return { ...params, ...this.buildPaginationParams(paginationParams), ...contentParams };
  }

  /**
   * Function for creating an object from string of parameters for axios input params
   * @param parameter
   * @private
   */
  private buildOtherParams(parameter?: string){
    const result: any = {};
    if (parameter) {
      const paramsSplitted = parameter.split("&")

      paramsSplitted.forEach((param: string) => {
      const key: string = param.split("=")[0]
      const value: string = param.split("=")[1]
      result[key] = value})
    }
    return result
  }

  private buildParamsForSelect(queryParams: SuggestQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameters?: string) {
    const params: any = {
      q: queryParams.query,
    };

    return { ...params, ...this.buildPaginationParams(paginationParams), ...contentParams,  ...this.buildOtherParams(parameters) };
  }


  private buildParamsForSuggest(queryParams: SuggestQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameters?: string) {
    const params: any = {
      q: queryParams.query,
    };

    return { ...params, ...this.buildPaginationParams(paginationParams), ...contentParams,  ...this.buildOtherParams(parameters) };
  }

  public getOntologies: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter) => {
    return (await this.axiosInstance.get("ontologies", { params: this.buildParamsForGet(paginationParams, sortingParams, contentParams, parameter) })).data;
  }

  public getTerms: apiCallFn = async (paginationParams, sortingParams, contentParams) => {
    return (await this.axiosInstance.get("terms", { params: this.buildParamsForGet(paginationParams, sortingParams, contentParams) })).data;
  }

  public getProperties: apiCallFn = async (paginationParams, sortingParams, contentParams) => {
    return (await this.axiosInstance.get("properties", { params: this.buildParamsForGet(paginationParams, sortingParams, contentParams) })).data;
  }

  public getIndividuals: apiCallFn = async (paginationParams, sortingParams, contentParams) => {
    return (await this.axiosInstance.get("individuals", { params: this.buildParamsForGet(paginationParams, sortingParams, contentParams) })).data;
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
    return (await this.axiosInstance.get(queryPrefix+"terms", { params: {iri: contentParams?.termIri, frontend: contentParams?.frontend} })).data;
  }

  public getProperty: apiCallFn = async (paginationParams, sortingParams, contentParams) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    return (await this.axiosInstance.get(queryPrefix+"properties", { params: {iri: contentParams?.propertyIri, frontend: contentParams?.frontend} })).data;
  }

  public getIndividual: apiCallFn = async (paginationParams, sortingParams, contentParams) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    return (await this.axiosInstance.get(queryPrefix+"individuals", { params: {iri: contentParams?.individualIri, frontend: contentParams?.frontend} })).data;
  }

  public search = async (queryParams: SearchQueryParams, paginationParams: PaginationParams, contentParams?: ContentParams): Promise<any> => {
    return (await this.axiosInstance.get("search", { params: this.buildParamsForSearch(queryParams, paginationParams, contentParams) })).data;
  }

  public select = async(queryParams: SelectQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string): Promise<any> => {
    return (await this.axiosInstance.get("select", {params: this.buildParamsForSelect(queryParams, paginationParams, contentParams, parameter) })).data;
  }

  public suggest = async(queryParams: SuggestQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string): Promise<any> => {
    return (await this.axiosInstance.get("suggest", { params: this.buildParamsForSuggest(queryParams, paginationParams, contentParams, parameter) })).data;
  }

  /**
   * getTermTree:
   * This method always requires an ontologyID in contentParams
   * 1) If no termIri is defined in contentParams, the ontology roots will be queried
   * 2) If a termIri is defined but no child in jsTreeParams, the hierarchy containing that term will be queried
   * 3) If a termIri is defined and also a child in jsTreeParams, the subhierarchy of that child will be queried
   */
  public getTermTree = async (contentParams: ContentParams, treeParams: JsTreeParams, paginationParams?: PaginationParams, sortingParams?: SortingParams ) => {
    let baseRequest = "ontologies/"+contentParams?.ontologyId+"/terms"
    if (!contentParams.termIri) return (await this.axiosInstance.get(baseRequest+"/roots")).data; //1)
    baseRequest = baseRequest+"/"+encodeURIComponent(encodeURIComponent(contentParams?.termIri))+"/jstree"
    if (treeParams.child) return (await this.axiosInstance.get(baseRequest+"/children/"+treeParams.child)).data; //3)
    else return (await this.axiosInstance.get(baseRequest, { params: treeParams })).data; //2)
  }

  public getTermRelations = async (contentParams: ContentParams, paginationParams?: PaginationParams, sortingParams?: SortingParams ) => {
    let baseRequest = "ontologies/"+contentParams?.ontologyId+"/terms"
    if (!contentParams.termIri) return (await this.axiosInstance.get(baseRequest+"/roots")).data; //1)
    baseRequest = baseRequest+"/"+encodeURIComponent(encodeURIComponent(contentParams?.termIri))+"/graph"
  }
}
