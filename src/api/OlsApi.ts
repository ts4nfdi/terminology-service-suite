import axios, { AxiosInstance } from "axios";
import OLS4Entity from "../model/ols4-model/OLS4Entity";
import OLS4Class from "../model/ols4-model/OLS4Class";
import OLS4Individual from "../model/ols4-model/OLS4Individual";
import OLS4Property from "../model/ols4-model/OLS4Property";
import Entity from "../model/interfaces/Entity";
import StandardClass from "../model/standard-model/StandardClass";
import StandardOntology from "../model/standard-model/StandardOntology";
import Thing from "../model/interfaces/Thing";
import StandardProperty from "../model/standard-model/StandardProperty";
import StandardIndividual from "../model/standard-model/StandardIndividual";
import OLS4Ontology from "../model/ols4-model/OLS4Ontology";

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

  private buildParamsForSearch(queryParams: SearchQueryParams, paginationParams: PaginationParams, contentParams?: ContentParams, parameter?: string) {
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

    return { ...params, ...this.buildPaginationParams(paginationParams), ...contentParams, ...this.buildOtherParams(parameter) };
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

  public check_for_errors(response: any): any {
    // resource not found/illegal argument exception in semanticlookup
    if(response["error"]) {
      throw Error(response["status"] + " " + response["error"] + " - " + response["message"] + " - " + response["exception"] + " at " + response["path"]);
    }
    // empty response - can be caught if this is expected, e.g. for fetching instances
    if(response["page"] !== undefined && response["page"]["totalElements"] === 0) {
      throw Error("Response contains 0 elements");
    }
    return response;
  }

  public getOntologies: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter) => {
    const response = (await this.axiosInstance.get("ontologies", { params: this.buildParamsForGet(paginationParams, sortingParams, contentParams, parameter) })).data;
    return this.check_for_errors(response);
  }

  public getTerms: apiCallFn = async (paginationParams, sortingParams, contentParams) => {
    const response = (await this.axiosInstance.get("terms", { params: this.buildParamsForGet(paginationParams, sortingParams, contentParams) })).data;
    return this.check_for_errors(response);
  }

  public getProperties: apiCallFn = async (paginationParams, sortingParams, contentParams) => {
    const response = (await this.axiosInstance.get("properties", { params: this.buildParamsForGet(paginationParams, sortingParams, contentParams) })).data;
    return this.check_for_errors(response);
  }

  public getIndividuals: apiCallFn = async (paginationParams, sortingParams, contentParams) => {
    const response = (await this.axiosInstance.get("individuals", { params: this.buildParamsForGet(paginationParams, sortingParams, contentParams) })).data;
    return this.check_for_errors(response);
  }

  public getOntology: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter) => {
    const response = (await this.axiosInstance.get("ontologies/"+contentParams?.ontologyId, { params: this.buildOtherParams(parameter) })).data;
    return this.check_for_errors(response);
  }

  /**
   * Is used to fetch an entity from the api in ols4 (for ols3, getTerm, getProperty and getIndividual are used respectively).
   * Always requires the respective object IRI in contentParams to be set
   * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
   */
  public getEntity: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    const response = (await this.axiosInstance.get(queryPrefix+"entities", { params: {iri: contentParams?.termIri, parameter: this.buildOtherParams(parameter)} })).data;
    return this.check_for_errors(response);
  }

  /**
   * Is used to fetch a term from the api in ols3 (for ols4, getClass is used).
   * Always requires the respective object IRI in contentParams to be set
   * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
   */
  public getTerm: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    const response = (await this.axiosInstance.get(queryPrefix+"terms", { params: {iri: contentParams?.termIri, parameter: this.buildOtherParams(parameter)} })).data;
    return this.check_for_errors(response);
  }

  /**
   * Is used to fetch a class from the api in ols4 (for ols3, getTerm is used).
   * Always requires the respective object IRI in contentParams to be set
   * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
   */
  public getClass: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    return (await this.axiosInstance.get(queryPrefix+"classes", { params: {iri: contentParams?.termIri, parameter: this.buildOtherParams(parameter)} })).data;
  }

  /**
   * Returns a response Object (implementing 'Class', 'Property', 'Individual' or 'Ontology').
   * Indirectly fetches the response JSON for the specified entityType, iri, ontologyId, parameter and API version (useLegacy).
   * 
   * @param entityType
   * @param iri
   * @param ontologyId
   * @param parameter
   * @param useLegacy
   */
  public async getResponseObject(entityType?: string, iri?: string, ontologyId?: string, parameter?: string, useLegacy: boolean = false) : Promise<Thing> {
    if(useLegacy) {
      if(entityType) {
        let response;
        switch (entityType) {
          case 'ontology':
            if(!ontologyId) throw Error("ontologyId has to be specified if entityType == 'ontology'");
            response = await this.getOntology(undefined, undefined, {ontologyId: ontologyId}, parameter);
            return new StandardOntology(response);

          case 'term':
            response = await this.getTerm(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter);
            return new StandardClass(response["_embedded"]["terms"][0]);

          case 'property':
            response = await this.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri}, parameter);
            return new StandardProperty(response["_embedded"]["properties"][0]);

          case 'individual':
            response = await this.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri}, parameter);
            return new StandardIndividual(response["_embedded"]["individuals"][0]);

          default:
            throw Error("Invalid entity type '" + entityType + "'. Must be one of {'term', 'ontology', 'property', 'individual'}");
        }
      }
      else {
        throw Error("Entity type must be specified when using legacy API."); // TODO: for now just throw error
      }
    }
    else {
      if(entityType) {
        let response;
        switch (entityType) {
          case "ontology":
            response = await this.getOntology(undefined, undefined, {ontologyId: ontologyId}, parameter);
            return new OLS4Ontology(response);

          case "class":
            response = await this.getClass(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter);
            return new OLS4Class(response["elements"][0]);

          case "property":
            response = await this.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri}, parameter);
            return new OLS4Property(response["elements"][0]);

          case "individual":
            response = await this.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri}, parameter);
            return new OLS4Individual(response["elements"][0]);

          default:
            throw Error("Invalid entity type '" + entityType + "'. Must be one of {'term', 'ontology', 'property', 'individual'}");
        }
      }
      else {
        if(iri) {
          const response = await this.getEntity(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter);
          const types = response["elements"][0]["type"]

          if(types.includes("class")) {
            return new OLS4Class(response["elements"][0]);
          }
          else if(types.includes("property")) {
            return new OLS4Property(response["elements"][0]);
          }
          else if(types.includes("individual")) {
            return new OLS4Individual(response["elements"][0]);
          }
          else {
            throw Error("Response object does not have a 'type' property");
          }
        }
        else if(!iri && ontologyId) {
          const response = await this.getOntology(undefined, undefined, {ontologyId: ontologyId}, parameter);
          return new OLS4Ontology(response);
        }
        else {
          throw Error("Neither ontologyId nor iri was provided.");
        }
      }
    }
  }

  /**
   * Is used to fetch a classes instances from the api.
   * Always requires the respective object IRI in contentParams to be set
   * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
   */
  public getClassInstances: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    return (await this.axiosInstance.get(queryPrefix+"classes/"+contentParams?.termIri+"/instances", { params: { parameter: this.buildOtherParams(parameter)} })).data;
  }

  /**
   * Is used to fetch a property from the api in ols3.
   * Always requires the respective object IRI in contentParams to be set
   * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
   */
  public getProperty: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    const response = (await this.axiosInstance.get(queryPrefix+"properties", { params: {iri: contentParams?.propertyIri, parameter: this.buildOtherParams(parameter)} })).data;
    return this.check_for_errors(response);
  }

  /**
   * Is used to fetch an individual from the api in ols3.
   * Always requires the respective object IRI in contentParams to be set
   * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
   */
  public getIndividual: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    const response = (await this.axiosInstance.get(queryPrefix+"individuals", { params: {iri: contentParams?.individualIri, parameter: this.buildOtherParams(parameter)} })).data;
    return this.check_for_errors(response);
  }

  public search = async (queryParams: SearchQueryParams, paginationParams: PaginationParams, contentParams?: ContentParams, parameter?: string, abortSignal?: AbortSignal): Promise<any> => {
    return (await this.axiosInstance.get("search", { params: this.buildParamsForSearch(queryParams, paginationParams, contentParams, parameter), signal: abortSignal })).data;
  }

  public select = async(queryParams: SelectQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string): Promise<any> => {
    return (await this.axiosInstance.get("select", {params: this.buildParamsForSelect(queryParams, paginationParams, contentParams, parameter) })).data;
  }

  public suggest = async(queryParams: SuggestQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string): Promise<any> => {
    return (await this.axiosInstance.get("suggest", { params: this.buildParamsForSuggest(queryParams, paginationParams, contentParams, parameter) })).data;
  }

  /**
   * getTermTree:
   * This method always requires an ontologyId in contentParams
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
