import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { asArray, getEntityInOntologySuffix, getUseLegacy, pluralizeType } from "../app/util";
import {createModelObject, createModelObjects} from "../model/ModelObjectCreator";
import { Ontology, Ontologies, Entity, Thing, Individual } from "../model/interfaces";
import { OLS3Ontologies, OLS3Ontology } from "../model/ols3-model";
import {
  classTypeNames, entityTypeNames, ontologyTypeNames, thingTypeNames,
  EntityTypeName, ThingTypeName,
  isClassTypeName, isEntityTypeName, isIndividualTypeName, isOntologyTypeName
} from "../model/ModelTypeCheck";
import { Hierarchy, ParentChildRelation, TreeNode } from "../model/interfaces/Hierarchy";
import Reified from "../model/Reified";
import { BuildHierarchyProps, HierarchyBuilder, HierarchyIriProp, LoadHierarchyChildrenProps } from "./HierarchyBuilder";
import { OLSSelect } from "../model/ols-model/OLSSelect";
import { Select } from "../model/interfaces/Select";
import { OLSSelectResult } from "../model/ols-model/OLSSelectResult";
import { Ts4nfdiSearchResult } from "../model/ts4nfdi-model/Ts4nfdiSearchResult";
import { EntityData } from "../app/types";

// used to filter entities not be shown in hierarchy
function isTop(iri: string): boolean {
  return iri === "http://www.w3.org/2002/07/owl#Thing" || iri === "http://www.w3.org/2002/07/owl#TopObjectProperty";
}

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

export type JSTreeNode = {
  id: string
  parent: string
  iri: string
  text: string
  state: {
    opened: boolean
  }
  children: boolean
  a_attr: {
    iri: string
    ontology_name: string
    title: string
    class: string
  }
  ontology_name: string
}

const DEFAULT_SEARCH_RESULTS_PER_PAGE = 10;

export class OlsApi implements HierarchyBuilder {
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
      return { ...paginationParams, sort: `${sortingParams.sortField},${sortingParams.sortDir}`, ...contentParams, ...this.buildOtherParams(parameter) };
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

  private buildParamsForSearch(queryParams: SearchQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string, ts4nfdiGateway?: boolean) {

    const params: any = {
      exact: queryParams.exactMatch,
      obsoletes: queryParams.showObsoleteTerms,
    };

    if (ts4nfdiGateway) {
      params.query = queryParams.query
    } else {
      params.q = queryParams.query
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

    return { ...params, ...this.buildPaginationParams(paginationParams), ...contentParams, ...this.buildOtherParams(parameter) };
  }

  /**
   * Function for creating an object from string of parameters for axios input params
   * @param parameter
   * @private
   */
  private buildOtherParams(parameter?: string) {
    const result: any = {};
    if (parameter) {
      const paramsSplitted = parameter.split("&")

      paramsSplitted.forEach((param: string) => {
        const key: string = param.split("=")[0]
        const value: string = param.split("=")[1]
        result[key] = value
      })
    }
    return result
  }

  private buildParamsForSelect(queryParams: SuggestQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameters?: string) {
    const params: any = {
      q: queryParams.query,
    };

    return { ...params, ...this.buildPaginationParams(paginationParams), ...contentParams, ...this.buildOtherParams(parameters) };
  }


  private buildParamsForSuggest(queryParams: SuggestQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameters?: string) {
    const params: any = {
      q: queryParams.query,
    };

    return { ...params, ...this.buildPaginationParams(paginationParams), ...contentParams, ...this.buildOtherParams(parameters) };
  }

  // TODO: Is this the behavior we want (especially throwing error for empty response)?
  private check_for_errors(response: any): any {
    // resource not found/illegal argument exception in semanticlookup
    if (response["error"]) {
      throw Error(response["status"] + " " + response["error"] + " - " + response["message"] + " - " + response["exception"] + " at " + response["path"]);
    }
    // empty response - can be caught if this is expected, e.g. for fetching instances
    if (response["page"] !== undefined && response["page"]["totalElements"] === 0) {
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
    } while (pageNum < response["page"]["totalPages"]);

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
    return this.makeCall("ontologies/" + contentParams?.ontologyId, params, getUseLegacy(useLegacy));
  }

  /**
   * Is used to fetch an entity from the /entities endpoint in the api in ols4.
   * Always requires the respective object IRI in contentParams to be set
   * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
   */
  public getEntity: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter, useLegacy?: boolean) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/" + contentParams?.ontologyId + "/" : ""
    const params = {
      iri: contentParams?.termIri,
      ...this.buildOtherParams(parameter)
    };
    return this.makeCall(queryPrefix + "entities", { params: params }, getUseLegacy(useLegacy));
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
    const ontologyPrefix = contentParams?.ontologyId ? "ontologies/" + contentParams?.ontologyId + "/" : ""
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
    const queryPrefix = contentParams?.ontologyId ? "ontologies/" + contentParams?.ontologyId + "/" : ""
    const params = {
      iri: contentParams?.propertyIri,
      ...this.buildOtherParams(parameter)
    };
    return this.makeCall(queryPrefix + "properties", { params: params, signal: abortSignal }, getUseLegacy(useLegacy));
  }

  /**
   * Is used to fetch an individual from the api in ols3.
   * Always requires the respective object IRI in contentParams to be set
   * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
   */
  public getIndividual: apiCallFn = async (paginationParams, sortingParams, contentParams, parameter, useLegacy?: boolean, abortSignal?: AbortSignal) => {
    const queryPrefix = contentParams?.ontologyId ? "ontologies/" + contentParams?.ontologyId + "/" : ""
    const params = {
      iri: contentParams?.individualIri,
      ...this.buildOtherParams(parameter)
    };
    return this.makeCall(queryPrefix + "individuals", { params: params, signal: abortSignal }, getUseLegacy(useLegacy));
  }

  public search = async (queryParams: SearchQueryParams, paginationParams: PaginationParams, contentParams?: ContentParams, parameter?: string, abortSignal?: AbortSignal): Promise<any> => {
    return this.makeCall("search", { params: this.buildParamsForSearch(queryParams, paginationParams, contentParams, parameter), signal: abortSignal }, true);
  }

  public select = async (queryParams: SelectQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string): Promise<any> => {
    return this.makeCall("select", { params: this.buildParamsForSelect(queryParams, paginationParams, contentParams, parameter) }, true);
  }

  public searchTs4nfdiGateway = async (queryParams: SelectQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string, ts4nfdiGateway?: boolean): Promise<any> => {
    return this.makeCall("search", { params: this.buildParamsForSearch(queryParams, paginationParams, contentParams, parameter, ts4nfdiGateway) }, true);
  }

  /**
   * Fetch select data.
   * @param queryParams
   * @param paginationParams
   * @param contentParams
   * @param parameter
   */
  public async getSelectData(queryParams: SelectQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string, ts4nfdiGateway?: boolean): Promise<Select> {
    let response;
    let selectData: OLSSelectResult[] = [];
    let resultNum = 0;

    if (ts4nfdiGateway) {
      response = await this.searchTs4nfdiGateway(
        queryParams,
        paginationParams,
        contentParams,
        parameter,
        ts4nfdiGateway
      );
      if (!response) {
        throw new Error("Select data not found");
      } else {
        selectData = selectData.concat(response.map((data: any) => {
          return new Ts4nfdiSearchResult(data);
        }));
      }

    } else {
      response = await this.select(
        queryParams,
        paginationParams,
        contentParams,
        parameter
      );
      if (!response || !response["response"]["docs"]) {
        throw new Error("Select data not found");
      } else {
        selectData = selectData.concat(response["response"]["docs"].map((data: any) => {
          return new OLSSelectResult(data);
        }));
      }
    }

    return new OLSSelect(selectData);
  }



  public suggest = async (queryParams: SuggestQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string): Promise<any> => {
    return this.makeCall("suggest", { params: this.buildParamsForSuggest(queryParams, paginationParams, contentParams, parameter) }, true);
  }

  /**
   * getTermTree:
   * This method always requires an ontologyId in contentParams
   * 1) If no termIri is defined in contentParams, the ontology roots will be queried
   * 2) If a termIri is defined but no child in jsTreeParams, the hierarchy containing that term will be queried
   * 3) If a termIri is defined and also a child in jsTreeParams, the subhierarchy of that child will be queried
   */
  public getTermTree = async (contentParams: ContentParams, treeParams: JsTreeParams, paginationParams?: PaginationParams, sortingParams?: SortingParams) => {
    let baseRequest = "ontologies/" + contentParams?.ontologyId + "/terms"
    if (!contentParams.termIri) return (await this.axiosInstance.get(baseRequest + "/roots")).data; //1)
    // @ts-ignore
    baseRequest = baseRequest + "/" + encodeURIComponent(encodeURIComponent(contentParams?.termIri)) + "/jstree"
    if (treeParams.child) return (await this.axiosInstance.get(baseRequest + "/children/" + treeParams.child)).data; //3)
    else return (await this.axiosInstance.get(baseRequest, { params: treeParams })).data; //2)
  }

  public getTermRelations = async (contentParams: ContentParams, paginationParams?: PaginationParams, sortingParams?: SortingParams) => {
    let baseRequest = "ontologies/" + contentParams?.ontologyId + "/terms"
    if (!contentParams.termIri) return (await this.axiosInstance.get(baseRequest + "/roots")).data; //1)
    // @ts-ignore
    baseRequest = baseRequest + "/" + encodeURIComponent(encodeURIComponent(contentParams?.termIri)) + "/graph";
    return (await this.axiosInstance.get(baseRequest)).data;
  }

  /**
   * Returns the whole entity response json with a comfortable wrapper handling entityType, ontologyId and useLegacy
   * @param iri
   * @param entityType queries specific routes if provided and infers type if not
   * @param ontologyId queries ontology routes if provided, otherwise not
   * @param parameter
   * @param useLegacy affects how entityType is inferred if not provided
   */
  public async getEntityResponse(iri?: string, entityType?: EntityTypeName, ontologyId?: string, parameter?: string, useLegacy?: boolean): Promise<any> {
    let response;
    if (entityType && (iri ||  ontologyId)) {
      response = await this.getEntityWithEntityTypeProvided(entityType, iri, ontologyId, parameter, useLegacy);
    }
    else if (iri) {
      if (getUseLegacy(useLegacy)) {
        response = await this.getEntityWithInferredEntityType(iri, ontologyId, parameter);
      }
      else {
        response = await this.getEntity(undefined, undefined, { ontologyId: ontologyId, termIri: iri }, parameter, useLegacy);
      }
    }
    else throw Error('Either IRI or both ontologyId and entityType have to be provided.');

    return response;
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
  public async getEntityObject(iri: string, entityType?: EntityTypeName, ontologyId?: string, parameter?: string, useLegacy?: boolean): Promise<Entity> {
    return createModelObject(await this.getEntityResponse(iri, entityType, ontologyId, parameter, useLegacy)) as Entity;
  }

  public async getEntityObjects(entityType: EntityTypeName, ontologyId: string, parameter?: string, useLegacy?: boolean): Promise<Entity[]> {
    return createModelObjects(await this.getEntityResponse(undefined, entityType, ontologyId, parameter, useLegacy)) as Entity[];
  }

  /**
   * Returns an Ontology object.
   * Indirectly fetches the response JSON for the specified ontologyId, parameter and API version (useLegacy).
   *
   * @param ontologyId
   * @param parameter
   * @param useLegacy
   */
  public async getOntologyObject(ontologyId: string, parameter?: string, useLegacy?: boolean): Promise<Ontology> {
    const response = await this.getOntology(undefined, undefined, { ontologyId: ontologyId }, parameter, useLegacy);

    return createModelObject(response) as Ontology;
  }

  public async getThingObject(iri?: string, thingType?: ThingTypeName, ontologyId?: string, parameter?: string, useLegacy?: boolean): Promise<Thing> {
    if (thingType) {
      if (isOntologyTypeName(thingType)) {
        if (!ontologyId) throw new Error(`ontologyId has to be provided if thingType in {"${ontologyTypeNames.join('", "')}"}.`);
        else return await this.getOntologyObject(ontologyId, parameter, useLegacy);
      }
      else if (isEntityTypeName(thingType)) {
        if (!iri) throw new Error(`iri has to be provided if thingType in {"${entityTypeNames.join('", "')}"}.`);
        else return await this.getEntityObject(iri, thingType, ontologyId, parameter, useLegacy);
      }
      else throw new Error(`Unsupported thingType "${thingType}" provided. Must be in {"${thingTypeNames.join('", "')}"}.`);
    }
    else {
      if (!iri && ontologyId) {
        return await this.getOntologyObject(ontologyId, parameter, useLegacy);
      }
      else if (iri) {
        return await this.getEntityObject(iri, thingType, ontologyId, parameter, useLegacy);
      }
      else throw new Error(`iri or ontologyId has to be provided if thingType is not provided.`);
    }
  }

  private async getEntityWithEntityTypeProvided(entityType: EntityTypeName, iri?: string, ontologyId?: string, parameter?: string, useLegacy?: boolean): Promise<any> {
    switch (entityType) {
      case 'term': case 'class': // also allow "class" even if it should actually be "term"
        return await this.getTerm(undefined, undefined, { ontologyId: ontologyId, termIri: iri }, parameter, useLegacy);

      case 'property': case 'annotationProperty': case 'dataProperty': case 'objectProperty':
        return await this.getProperty(undefined, undefined, { ontologyId: ontologyId, propertyIri: iri }, parameter, useLegacy);

      case 'individual':
        return await this.getIndividual(undefined, undefined, { ontologyId: ontologyId, individualIri: iri }, parameter, useLegacy);

      default:
        throw Error('Invalid entity type "' + entityType + `". Must be one of {${entityTypeNames.map((elem) => `"${elem}"`).join(", ")}}.`);
    }
  }

  private async getEntityWithInferredEntityType(iri: string, ontologyId?: string, parameter?: string): Promise<any> {
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
        this.getTerm(undefined, undefined, { ontologyId: ontologyId, termIri: iri }, parameter, true, signal)
          .then((res: any) => { setAndStop(res) }),
        this.getProperty(undefined, undefined, { ontologyId: ontologyId, propertyIri: iri }, parameter, true, signal)
          .then((res: any) => { setAndStop(res) }),
        this.getIndividual(undefined, undefined, { ontologyId: ontologyId, individualIri: iri }, parameter, true, signal)
          .then((res: any) => { setAndStop(res) })
      ]
    );

    if (response !== undefined) return response;
    else throw Error("Iri " + iri + " could not be resolved.");
  }

  public async getAncestors(iri: string, entityType: EntityTypeName, ontologyId: string, useLegacy = false, includeObsoleteEntities = false): Promise<Entity[]> {
    let ancestors: any;
    if (isClassTypeName(entityType)) {
      ancestors = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, entityType, iri, useLegacy)}/hierarchicalAncestors`, { params: { size: "1000", includeObsoleteEntities: includeObsoleteEntities } }, useLegacy);
    }
    else {
      ancestors = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, entityType, iri, useLegacy)}/ancestors`, { params: { size: "1000", includeObsoleteEntities: includeObsoleteEntities } }, useLegacy);
    }
    if (useLegacy) {
      const listOfAncestorObj: Array<Entity> = [];
      let extractKey = "";
      switch (entityType) {
        case "class":
          extractKey = "terms";
          break;
        case "term":
          extractKey = "terms";
          break;
        case "property":
          extractKey = "properties";
          break;
        case "individual":
          extractKey = "individuals";
          break;
        default:
          throw Error("Entity type could not be correctly inferred.");
      }
      ancestors["_embedded"][extractKey].map((obj: any) => {
        listOfAncestorObj.push(createModelObject({ _embedded: { [extractKey]: [obj] } }) as Entity);
      });
      return listOfAncestorObj;
    }
    return ancestors["elements"].map((obj: any) =>
      createModelObject({ elements: [obj] }) as Entity
    );
  }

  public async getJSTree(iri: string, entityType: EntityTypeName, ontologyId: string): Promise<JSTreeNode[]> {
    return await this.makeCall(`${getEntityInOntologySuffix(ontologyId, entityType, iri, true)}/jstree`, { params: { size: "1000" } }, true);
  }

  // TODO: Do we want the same behavior as EMBL EBI (e.g. not getting instances for classes if entityType != "individual")?
  public async getChildren(iri: string, entityType: EntityTypeName, ontologyId: string, includeObsoleteEntities = false, useLegacy = false): Promise<Entity[]> {
    let children: any;
    if (isClassTypeName(entityType)) {
      children = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, classTypeNames[0], iri, useLegacy)}/hierarchicalChildren`, { params: { size: "1000", includeObsoleteEntities: includeObsoleteEntities } }, useLegacy);
    }
    else if (isIndividualTypeName(entityType)) {
      // entityType does NOT indicate which type the entity of the provided iri has, but which type of hierarchy is desired
      // -> "class" has to be provided for individual hierarchy as well, as individuals are always children of classes
      if (useLegacy) {
        // TODO: Does descendants always work for this (or are there classes with both individuals and classes as descendants)?
        children = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, classTypeNames[0], iri, useLegacy)}/descendants`, { params: { size: "1000" } }, useLegacy)
      }
      else {
        children = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, classTypeNames[0], iri, useLegacy)}/instances`, { params: { size: "1000", includeObsoleteEntities: includeObsoleteEntities } }, useLegacy);
      }
    }
    else {
      children = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, entityType, iri, useLegacy)}/children`, { params: { size: "1000", includeObsoleteEntities: includeObsoleteEntities } }, useLegacy);
    }

    if (useLegacy) {
      return children["_embedded"][isIndividualTypeName(entityType) ? pluralizeType(classTypeNames[0], useLegacy) : pluralizeType(entityType, useLegacy)].map((obj: any) =>
        createModelObject({ ["_embedded"]: { [isIndividualTypeName(entityType) ? pluralizeType(classTypeNames[0], useLegacy) : pluralizeType(entityType)]: [obj] } }) as Entity
      );
    }
    else {
      return children["elements"].map((obj: any) =>
        createModelObject({ elements: [obj] }) as Entity
      );
    }
  }

  public async getRootEntities(entityType: EntityTypeName, ontologyId: string, preferredRoots = false, includeObsoleteEntities = false, useLegacy = false): Promise<Entity[]> {
    if (useLegacy) {
      if (isIndividualTypeName(entityType)) {
        // TODO: Implement behaviour for individuals
        return [];
      }
      else {
        // TODO: /preferredRoots route should exist in legacy api, but does not work
        const roots = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, entityType, undefined, useLegacy)}/roots`, { params: { size: "1000", includeObsoleteEntities: includeObsoleteEntities } }, useLegacy);

        return roots["_embedded"][pluralizeType(entityType, useLegacy)].map((obj: any) =>
          createModelObject({ ["_embedded"]: { [pluralizeType(entityType, useLegacy)]: [obj] } }) as Entity
        );
      }
    }
    else {
      if (isIndividualTypeName(entityType)) {
        // TODO: Implement behaviour for individuals
        return [];
      }
      else {
        const roots = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, entityType, undefined, useLegacy)}`, { params: { size: "1000", includeObsoleteEntities: includeObsoleteEntities, hasDirectParents: preferredRoots ? undefined : "false", isPreferredRoot: preferredRoots ? "true" : undefined } }, useLegacy);

        return roots["elements"].map((obj: any) =>
          createModelObject({ elements: [obj] }) as Entity
        );
      }
    }
  }

  public async getClassInstances(iri: string, ontologyId: string): Promise<Individual[]> {
    const instances = await this.makeCall(`${getEntityInOntologySuffix(ontologyId, classTypeNames[0], iri, false)}/individuals`, { params: { size: "1000" } }, false);

    return instances["elements"].map((obj: any) =>
      createModelObject({ elements: [obj] }) as Individual
    );
  }

  public async buildHierarchyWithIri(props: BuildHierarchyProps & HierarchyIriProp): Promise<Hierarchy> {
    const {
      iri,
      ontologyId,
      entityType,
      preferredRoots = false,
      includeObsoleteEntities = false,
      keepExpansionStates = true,
      showSiblingsOnInit = false,
      useLegacy = false,
    } = props;

    if (iri) {
      return await this.getEntityObject(iri, entityType, ontologyId, "", useLegacy).then((entity) => this.buildHierarchyWithEntity({
        entityType: entityType || entity.getType() as EntityTypeName,
        ontologyId: ontologyId || entity.getOntologyId(),
        includeObsoleteEntities: includeObsoleteEntities,
        preferredRoots: preferredRoots,
        mainEntity: entity,
        keepExpansionStates: keepExpansionStates,
        showSiblingsOnInit: showSiblingsOnInit,
        useLegacy: useLegacy,
      }));
    }
    else {
      if (entityType == undefined || ontologyId == undefined) throw Error("Either iri or ontologyId and entityType have to be provided.");
      return await this.buildRootHierarchy({
        entityType: entityType,
        ontologyId: ontologyId,
        includeObsoleteEntities: includeObsoleteEntities,
        preferredRoots: preferredRoots,
        keepExpansionStates: keepExpansionStates,
        showSiblingsOnInit: showSiblingsOnInit,
        useLegacy: useLegacy,
      });
    }
  }

  public jsTreeNodeToEntityData(jsTreeNode: JSTreeNode): EntityData {
    return {
      iri: jsTreeNode.iri,
      label: jsTreeNode.text,
      hasChildren: jsTreeNode.children || jsTreeNode.state.opened,
      parents: []
    };
  }

  public entityToEntityData(entity: Entity): EntityData {
    return {
      iri: entity.getIri(),
      label: asArray(entity.getLabel())[0],
      definedBy: entity.getDefinedBy(),
      hasChildren: entity.hasChildren(),
      numDescendants: entity.getNumHierarchicalDescendants() || entity.getNumDescendants(),
      parents: entity.getParents()
    };
  }

  public async buildRootHierarchy(
    props: {
      ontologyId: string,
      entityType: EntityTypeName,
    } & BuildHierarchyProps
  ): Promise<Hierarchy> {

    const {
      ontologyId,
      entityType,
      preferredRoots,
      includeObsoleteEntities,
      useLegacy
    } = props;

    /* QUERY root entities */
    const rootEntitiesData = (await this.getRootEntities(entityType, ontologyId, preferredRoots, includeObsoleteEntities, useLegacy))
      .map((entity) => this.entityToEntityData(entity))
      .filter((root) => !isTop(root.iri));
    /* --- */

    /* INITIALIZE entitiesData, parentChildRelations */
    const parentChildRelations: Map<string, ParentChildRelation[]> = new Map<string, ParentChildRelation[]>();
    const entitiesData: Map<string, EntityData> = new Map<string, EntityData>();
    for (const entityData of rootEntitiesData) {
      parentChildRelations.set(entityData.iri, []); // initialize with empty array
      entitiesData.set(entityData.iri, entityData);
    }
    /* --- */

    return new Hierarchy({
      parentChildRelations: parentChildRelations,
      entitiesData: entitiesData,
      allChildrenPresent: new Set(),
      roots: rootEntitiesData.map((root) => new TreeNode(root)).sort((a, b) => (a.entityData.label || a.entityData.iri).localeCompare(b.entityData.label || b.entityData.iri)),
      api: new OlsApi(this.axiosInstance.getUri()),
      ontologyId: ontologyId,
      includeObsoleteEntities: includeObsoleteEntities,
      entityType: entityType,
      keepExpansionStates: props.keepExpansionStates,
      useLegacy: useLegacy,
    });
  }

  public async buildHierarchyWithEntity(
    props: {
      mainEntity: Entity,
      ontologyId: string,
      entityType: EntityTypeName,
    } & BuildHierarchyProps
  ): Promise<Hierarchy> {

    const {
      mainEntity,
      ontologyId,
      entityType,
      preferredRoots,
      includeObsoleteEntities,
      showSiblingsOnInit,
      useLegacy
    } = props;

    /* LOAD ancestors */
    let entities: EntityData[] = [];

    if (useLegacy) {
      // TODO: JSTree sometimes returns smaller trees than would be possible via querying hierarchical ancestors and all children of those (e.g. http://purl.obolibrary.org/obo/UBERON_2001747 -> strange and not really useful hierarchy because many entities are both sibling and children of other entities (is it wrong to take hierarchicalParent instead of directParent in entityToEntityDataToHierarchy? EMBL-EBI does it like that as well))
      //       Question: Should we prefer complete hierarchies (query /hierarchicalAncestors + /children for each) or slim queries (query /jstree)?
      const jsTree = await this.getJSTree(mainEntity.getIri(), entityType, ontologyId);
      const idToIri: Map<string, string> = new Map<string, string>();
      const parents: Map<string, Set<string>> = new Map<string, Set<string>>();

      for (const jsTreeNode of jsTree) {
        idToIri.set(jsTreeNode.id, jsTreeNode.iri);
        parents.set(jsTreeNode.iri, new Set<string>());
      }

      for (const jsTreeNode of jsTree) {
        const parArr = parents.get(jsTreeNode.iri);
        const parIri = idToIri.get(jsTreeNode.parent);
        if (parArr != undefined && parIri != undefined) {
          parArr.add(parIri);
        }
      }

      entities = [];
      const inArr = new Set<string>();

      for (const jsTreeNode of jsTree) {
        if (!inArr.has(jsTreeNode.iri)) {
          inArr.add(jsTreeNode.iri);

          entities.push(this.jsTreeNodeToEntityData(jsTreeNode));
          const par = parents.get(jsTreeNode.iri);
          if (par != undefined) entities[entities.length - 1].parents = Reified.fromJson(Array.from(par.values())) || [];
        }
      }
    }
    else {
      const ancestors = await this.getAncestors(mainEntity.getIri(), entityType, ontologyId || mainEntity.getOntologyId(), includeObsoleteEntities);
      entities = [this.entityToEntityData(mainEntity), ...ancestors.map((entity) => this.entityToEntityData(entity))]
    }

    // filter top entities
    entities = entities.filter((e) => !isTop(e.iri));
    /* --- */

    /* BUILD parentChildRelations */
    const parentChildRelations: Map<string, ParentChildRelation[]> = new Map<string, ParentChildRelation[]>();
    const allChildrenPresent: Set<string> = new Set<string>();
    const entitiesData: Map<string, EntityData> = new Map<string, EntityData>();

    // initialize parentChildRelations & entitiesData
    for (const entityData of entities) {
      parentChildRelations.set(entityData.iri, []); // initialize with empty array
      entitiesData.set(entityData.iri, entityData);
    }

    if (showSiblingsOnInit) {
      // additionally load siblings from api
      const realEntityType = (entityType || mainEntity.getType());
      const entityTypeForQuery = realEntityType == "individual" ? "class" : realEntityType; // TODO: only relevant for entityType == "individual" (maybe we don't even need this as behaviour for individual hierarchies is not yet determined)

      const promises: Promise<void>[] = [];
      for (const entityData of entities) {
        if (entityData.iri != mainEntity.getIri()) {
          promises.push(new Promise((resolve) =>
            this.getChildren(entityData.iri, entityTypeForQuery, ontologyId, includeObsoleteEntities, useLegacy).then((children) => children.map((child) => this.entityToEntityData(child))).then((children) => {
              const parChildRel: ParentChildRelation[] = [];
              for (const child of children) {
                entitiesData.set(child.iri, child);
                if (child.parents) {
                  const parRelation = child.parents.filter((par) => par.value == entityData.iri);
                  parChildRel.push({ childIri: child.iri, childRelationToParent: parRelation.length > 0 && parRelation[0].getMetadata() ? parRelation[0].getMetadata()["childRelationToParent"] : undefined });
                } // should have exactly one element


              }

              parentChildRelations.set(entityData.iri, parChildRel);
              allChildrenPresent.add(entityData.iri);
            }).then(resolve)
          ))
        }
      }

      await Promise.allSettled(promises);

      // TODO: only relevant for entityType == "individual" (maybe we don't even need this as behaviour for individual hierarchies is not yet determined)
      if (realEntityType == "individual") {
        for (const parentReified of mainEntity.getParents()) {
          const children = (await this.getChildren(parentReified.value, realEntityType, ontologyId, includeObsoleteEntities))
            .map((child) => this.entityToEntityData(child))

          const parChildRel: ParentChildRelation[] = [];
          for (const child of children) {
            parChildRel.push({ childIri: child.iri, childRelationToParent: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" });
          }
          parentChildRelations.set(parentReified.value, parChildRel);
        }
      }
    }
    else {
      for (const entityData of entities) {
        if (entityData.parents) {
          const parents = entityData.parents.filter((parentReified: Reified<string>) => !isTop(parentReified.value));
          if (entityData.iri == mainEntity?.getIri() && isIndividualTypeName(entityType || mainEntity.getType())) {
          for (const parentReified of parents) {
            if (parentChildRelations.has(parentReified.value)) {
              parentChildRelations.get(parentReified.value)?.push({ childIri: entityData.iri, childRelationToParent: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" });
            }
          }
        }
        else {
          for (const parentReified of parents) {
            if (parentChildRelations.has(parentReified.value)) {
              parentChildRelations.get(parentReified.value)?.push({ childIri: entityData.iri, childRelationToParent: parentReified.getMetadata() ? parentReified.getMetadata()["childRelationToParent"] : undefined });
            }
          }
        }
        }
      }
    }

    // sort parentChildRelations
    for (const rel of parentChildRelations.values()) rel.sort((a, b) => (entitiesData.get(a.childIri)?.label || a.childIri).localeCompare(entitiesData.get(b.childIri)?.label || b.childIri));
    /* --- */

    /* BUILD rootEntities */
    const rootEntities: string[] = [];
    if (preferredRoots) {
      const preferredRootEntities = (await this.getOntologyObject(ontologyId, undefined, useLegacy)).getPreferredRoots();
      for (const e of preferredRootEntities) {
        if (entitiesData.has(e)) rootEntities.push(e);
      }
    }
    else {
      for (const entityData of entities) {
        if (entityData.parents) {
          const parents = entityData.parents.filter((parentReified: Reified<string>) => !isTop(parentReified.value));
          if (parents.length == 0) rootEntities.push(entityData.iri);
        }

      }
    }
    /* --- */

    function createTreeNode(entityData: EntityData, cycleCheck: Set<string>, childRelationToParent?: string): TreeNode {
      cycleCheck.add(entityData.iri); // add current entity to cycle check set

      const node = new TreeNode(entityData);
      node.childRelationToParent = childRelationToParent;
      const children = parentChildRelations.get(entityData.iri) || [];

      for (const child of children) {
        if (cycleCheck.has(child.childIri)) {
          // cyclic tree, skip cycle
          console.error(`Cyclic tree at entity "${child.childIri}".`);
          continue;
        }

        const childData = entitiesData.get(child.childIri);
        if (childData != undefined) node.addChild(createTreeNode(childData, cycleCheck, child.childRelationToParent));
      }

      if (node.loadedChildren.length > 0) node.expanded = true;

      cycleCheck.delete(entityData.iri);
      return node;
    }

    const cycleCheck: Set<string> = new Set<string>(); // Contains iris of all entities that have occurred within the current recursion branch. Is used to check for cycles.

    return new Hierarchy({
      parentChildRelations: parentChildRelations,
      entitiesData: entitiesData,
      allChildrenPresent: allChildrenPresent,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      roots: rootEntities.map((rootEntity) => createTreeNode(entitiesData.get(rootEntity)!, cycleCheck)).sort((a, b) => (a.entityData.label || a.entityData.iri).localeCompare(b.entityData.label || b.entityData.iri)),
      api: new OlsApi(this.axiosInstance.getUri()),
      ontologyId: ontologyId,
      includeObsoleteEntities: includeObsoleteEntities,
      entityType: entityType,
      mainEntityIri: mainEntity?.getIri(),
      keepExpansionStates: props.keepExpansionStates,
      useLegacy: useLegacy,
    })
  }

  public async loadHierarchyChildren(props: LoadHierarchyChildrenProps): Promise<EntityData[]> {
    if (props.entityType == undefined) throw Error("EntityType has to be provided to load children in OLS.");

    return (await this.getChildren(props.nodeToExpand.entityData.iri, props.entityType, props.ontologyId, props.includeObsoleteEntities, props.useLegacy))
      .map((entity) => this.entityToEntityData(entity))
  }
}
