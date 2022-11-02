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

  private buildParams(paginationParams?: PaginationParams, sortingParams?: SortingParams) {
    if (sortingParams) {
      return { ...paginationParams, sort: `${sortingParams.sortField},${sortingParams.sortDir}` };
    }
    return { ...paginationParams };
  }

  public getOntologies: apiCallFn = async (paginationParams, sortingParams) => {
    return (await this.axiosInstance.get("ontologies", { params: this.buildParams(paginationParams, sortingParams) })).data;
  }

  public getTerms: apiCallFn = async (paginationParams, sortingParams) => {
    return (await this.axiosInstance.get("terms", { params: this.buildParams(paginationParams, sortingParams) })).data;
  }

  public getProperties: apiCallFn = async (paginationParams, sortingParams) => {
    return (await this.axiosInstance.get("properties", { params: this.buildParams(paginationParams, sortingParams) })).data;
  }

  public getIndividuals: apiCallFn = async (paginationParams, sortingParams) => {
    return (await this.axiosInstance.get("individuals", { params: this.buildParams(paginationParams, sortingParams) })).data;
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
}
