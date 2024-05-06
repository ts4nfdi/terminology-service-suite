import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {getEntityInOntologySuffix, getUseLegacy} from "../app/util";
import {createModelObject} from "../model/ModelObjectCreator";
import {Ontology, Ontologies, Entity, Thing, Individual} from "../model/interfaces";
import {OLS3Ontologies, OLS3Ontology} from "../model/ols3-model";
import {
  classTypeNames, entityTypeNames, ontologyTypeNames, thingTypeNames,
  EntityTypeName, ThingTypeName,
  isClassTypeName, isEntityTypeName, isIndividualTypeName, isOntologyTypeName
} from "../model/ModelTypeCheck";

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

export type apiCallFn = (paginationParams?: PaginationParams, sortingParams?: SortingParams, contentParams?: ContentParams, parameter?: string, useLegacy?: boolean, abortSignal?: AbortSignal) => Promise<any>;

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

  // TODO: Is this the behavior we want (especially throwing error for empty response)?
  private check_for_errors(response: any): any {
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

  private async makeCall(url: string, config: AxiosRequestConfig<any> | undefined, useLegacy: boolean) {
    const apiVersionPrefix = getUseLegacy(useLegacy) ? "" : "v2/";
    const response = (await this.axiosInstance.get(apiVersionPrefix + url, config)).data;
    return this.check_for_errors(response);
  }

  public getOntologies: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter) => {
    return this.makeCall("ontologies", { params: this.buildParamsForGet(paginationParams, sortingParams, contentParams, parameter) }, true);
  }

  /**
   * Fetch all ontologies. Currently only available for useLegacy since parameters aren't allowed in the OLS v2 API ontologies endpoint
   * @param parameter
   */
  public async getOntologiesData(parameter?: string): Promise<Ontologies> {
    let response;
    let ontologiesData: OLS3Ontology[] = [];

    let pageNum = 0;
    const pageSize = 500;

    do {
      response = await this.getOntologies({ size: pageSize.toString(), page: pageNum.toString() }, undefined, undefined, parameter); // assuming there are no more than 500 ontologies
      if (!response || !response["_embedded"] || !response["_embedded"]["ontologies"]) {
        throw new Error("Ontologies data not found"); //TODO consistent error handling
      } else {

        ontologiesData = ontologiesData.concat(response["_embedded"]["ontologies"].map((ontologyData: any) => {
          return createModelObject(ontologyData);
        }));
      }

      pageNum += 1;
    } while(pageNum < response["page"]["totalPages"]);

    return new OLS3Ontologies(ontologiesData);
  }

  /**
   * Is used to fetch all terms from the api
   * @param paginationParams
   * @param sortingParams
   * @param contentParams
   * @param parameter
   * @param `useLegacy` Depending on the value of `useLegacy`, `"terms"` (`useLegacy == true`) or `"classes"` (`useLegacy == false`) will be used in the query url
   */
  public getTerms: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter, useLegacy?: boolean) => {
    const typePrefix = getUseLegacy(useLegacy) ? "terms" : "classes";
    return this.makeCall(typePrefix, { params: this.buildParamsForGet(paginationParams, sortingParams, contentParams) }, getUseLegacy(useLegacy));
  }

  public getProperties: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter, useLegacy?: boolean) => {
    return this.makeCall("properties", { params: this.buildParamsForGet(paginationParams, sortingParams, contentParams) }, getUseLegacy(useLegacy));
  }

  public getIndividuals: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter, useLegacy?: boolean) => {
    return this.makeCall("individuals", { params: this.buildParamsForGet(paginationParams, sortingParams, contentParams) }, getUseLegacy(useLegacy));
  }

  public getOntology: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter, useLegacy?: boolean) => {
    const params = {
      ...this.buildOtherParams(parameter)
    };
    return this.makeCall("ontologies/"+contentParams?.ontologyId, params, getUseLegacy(useLegacy));
  }

  /**
   * Is used to fetch an entity from the /entities endpoint in the api in ols4.
   * Always requires the respective object IRI in contentParams to be set
   * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
   */
  public getEntity: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter, useLegacy?: boolean) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    const params = {
      iri: contentParams?.termIri,
      ...this.buildOtherParams(parameter)
    };
    return this.makeCall(queryPrefix+"entities", { params: params }, getUseLegacy(useLegacy));
  }

  /**
   * Is used to fetch a term from the api
   * @param paginationParams
   * @param sortingParams
   * @param `contentParams` Always requires the respective object IRI in `contentParams` to be set.
   *                      If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results.
   *                      If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology.
   * @param parameter
   * @param `useLegacy` Depending on the value of `useLegacy`, `"terms"` (`useLegacy == true`) or `"classes"` (`useLegacy == false`) will be used in the query url
   * @param abortSignal
   */
  public getTerm: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter, useLegacy?: boolean, abortSignal?: AbortSignal) => {
    const ontologyPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    const typePrefix = getUseLegacy(useLegacy) ? "terms" : "classes";
    const params = {
      iri: contentParams?.termIri,
      ...this.buildOtherParams(parameter)
    };
    return this.makeCall(ontologyPrefix + typePrefix, { params: params, signal: abortSignal }, getUseLegacy(useLegacy));
  }

  /**
   * Is used to fetch a property from the api in ols3.
   * Always requires the respective object IRI in contentParams to be set
   * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
   */
  public getProperty: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter, useLegacy?: boolean, abortSignal?: AbortSignal) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    const params = {
      iri: contentParams?.propertyIri,
      ...this.buildOtherParams(parameter)
    };
    return this.makeCall(queryPrefix+"properties", { params: params, signal: abortSignal }, getUseLegacy(useLegacy));
  }

  /**
   * Is used to fetch an individual from the api in ols3.
   * Always requires the respective object IRI in contentParams to be set
   * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
   */
  public getIndividual: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter, useLegacy?: boolean, abortSignal?: AbortSignal) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/"+contentParams?.ontologyId+"/" : ""
    const params = {
      iri: contentParams?.individualIri,
      ...this.buildOtherParams(parameter)
    };
    return this.makeCall(queryPrefix+"individuals", { params: params, signal: abortSignal }, getUseLegacy(useLegacy));
  }

  public search = async (queryParams: SearchQueryParams, paginationParams: PaginationParams, contentParams?: ContentParams, parameter?: string, abortSignal?: AbortSignal): Promise<any> => {
    return this.makeCall("search", { params: this.buildParamsForSearch(queryParams, paginationParams, contentParams, parameter), signal: abortSignal }, true);
  }

  public select = async(queryParams: SelectQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string): Promise<any> => {
    return this.makeCall("select", {params: this.buildParamsForSelect(queryParams, paginationParams, contentParams, parameter) }, true);
  }

  public suggest = async(queryParams: SuggestQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string): Promise<any> => {
    return this.makeCall("suggest", { params: this.buildParamsForSuggest(queryParams, paginationParams, contentParams, parameter) }, true);
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

  /**
   * Returns an Entity object (implementing 'Class', 'Property' or 'Individual').
   * Indirectly fetches the response JSON for the specified entityType, iri, ontologyId, parameter and API version (useLegacy).
   *
   * @param entityType
   * @param iri
   * @param ontologyId
   * @param parameter
   * @param useLegacy
   */
  public async getEntityObject(iri: string, entityType?: EntityTypeName, ontologyId?: string, parameter?: string, useLegacy?: boolean) : Promise<Entity> {
    let response;
    if(!iri) throw Error('No IRI provided');

    if(entityType) {
      response = await this.getEntityWithEntityTypeProvided(iri, entityType, ontologyId, parameter, useLegacy);
    }
    else {
      if(getUseLegacy(useLegacy)) {
        response = await this.getEntityWithInferredEntityType(iri, ontologyId, parameter);
      }
      else {
        response = await this.getEntity(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter, useLegacy);
      }
    }

    return createModelObject(response) as Entity;
  }

  /**
   * Returns an Ontology object.
   * Indirectly fetches the response JSON for the specified ontologyId, parameter and API version (useLegacy).
   *
   * @param ontologyId
   * @param parameter
   * @param useLegacy
   */
  public async getOntologyObject(ontologyId: string, parameter?: string, useLegacy?: boolean) : Promise<Ontology> {
    const response = await this.getOntology(undefined, undefined, {ontologyId: ontologyId}, parameter, useLegacy);

    return createModelObject(response) as Ontology;
  }

  public async getThingObject(iri?: string, thingType?: ThingTypeName, ontologyId?: string, parameter?: string, useLegacy?: boolean) : Promise<Thing> {
    if(thingType) {
      if(isOntologyTypeName(thingType)) {
        if(!ontologyId) throw new Error(`ontologyId has to be provided if thingType in {"${ontologyTypeNames.join('", "')}"}.`);
        else return await this.getOntologyObject(ontologyId, parameter, useLegacy);
      }
      else if(isEntityTypeName(thingType)) {
        if(!iri) throw new Error(`iri has to be provided if thingType in {"${entityTypeNames.join('", "')}"}.`);
        else return await this.getEntityObject(iri, thingType, ontologyId, parameter, useLegacy);
      }
      else throw new Error(`Unsupported thingType "${thingType}" provided. Must be in {"${thingTypeNames.join('", "')}"}.`);
    }
    else {
      if(!iri && ontologyId) {
        return await this.getOntologyObject(ontologyId, parameter, useLegacy);
      }
      else if(iri) {
        return await this.getEntityObject(iri, thingType, ontologyId, parameter, useLegacy);
      }
      else throw new Error(`iri or ontologyId has to be provided if thingType is not provided.`);
    }
  }

  private async getEntityWithEntityTypeProvided(iri: string, entityType: EntityTypeName, ontologyId?: string, parameter?: string, useLegacy?: boolean) : Promise<any> {
    switch (entityType) {
      case 'term': case 'class': // also allow "class" even if it should actually be "term"
        return await this.getTerm(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter, useLegacy);

      case 'property':
        return await this.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri}, parameter, useLegacy);

      case 'individual':
        return await this.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri}, parameter, useLegacy);

      default:
        throw Error('Invalid entity type "' + entityType + '". Must be one of {"term", "class", "property", "individual"}');
    }
  }

  private async getEntityWithInferredEntityType(iri: string, ontologyId?: string, parameter?: string) : Promise<any> {
    /*
            Test all types of entities (term, property, individual) manually with separate queries (as /entities does not exist for legacy API)
            -> return the response object which resolves with a contained entity
            -> throw error if none of the types contains an entity
          */
    const controller = new AbortController();
    const signal = controller.signal;

    let response; // stores the entity to be returned in the end

    function setAndStop(res: any) {
      if (res["_embedded"] !== undefined) {
        response = res;
        controller.abort(); // abort queries for other entityTypes
      }
    }

    await Promise.allSettled(
        [
          this.getTerm(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter, true, signal)
              .then((res: any) => {setAndStop(res)}),
          this.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri}, parameter, true, signal)
              .then((res: any) => {setAndStop(res)}),
          this.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri}, parameter, true, signal)
              .then((res: any) => {setAndStop(res)})
        ]
    );

    if(response !== undefined) return response;
    else throw Error("Iri " + iri + " could not be resolved.");
  }

  public async getAncestors(iri: string, entityType: EntityTypeName, ontologyId: string, includeObsoleteEntities = false) : Promise<Entity[]> {
    let ancestors: any;
    if(isClassTypeName(entityType)) {
      ancestors = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, iri, entityType, false)}/hierarchicalAncestors`, {params: {size: "1000", includeObsoleteEntities: includeObsoleteEntities}}, false);
    }
    else {
      ancestors = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, iri, entityType, false)}/ancestors`, {params: {size: "1000", includeObsoleteEntities: includeObsoleteEntities}}, false);
    }

    return ancestors["elements"].map((obj: any) =>
      createModelObject({elements: [obj]}) as Entity
    );
  }

  // TODO: Do we want the same behavior as EMBL EBI (e.g. not getting instances for classes if entityType != "individual")?
  public async getChildren(iri: string, entityType: EntityTypeName, ontologyId: string, includeObsoleteEntities = false) : Promise<Entity[]> {
    let children: any;
    if(isClassTypeName(entityType)) {
      children = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, iri, classTypeNames[0], false)}/hierarchicalChildren`, {params: {size: "1000", includeObsoleteEntities: includeObsoleteEntities}}, false);
    }
    else if(isIndividualTypeName(entityType)) {
      // entityType does NOT indicate which type the entity of the provided iri has, but which type of hierarchy is desired
      // -> "class" has to be provided for individual hierarchy as well, as individuals are always children of classes
      children = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, iri, classTypeNames[0], false)}/instances`, {params: {size: "1000", includeObsoleteEntities: includeObsoleteEntities}}, false);
    }
    else {
      children = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, iri, entityType, false)}/children`, {params: {size: "1000", includeObsoleteEntities: includeObsoleteEntities}}, false);
    }

    return children["elements"].map((obj: any) =>
      createModelObject({elements: [obj]}) as Entity
    );
  }

  public async getClassInstances(iri: string, ontologyId: string) : Promise<Individual[]> {
    const instances = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, iri, classTypeNames[0], false)}/instances`, {params: {size: "1000"}}, false);

    return instances["elements"].map((obj: any) =>
      createModelObject({elements: [obj]}) as Individual
    );
  }
}
