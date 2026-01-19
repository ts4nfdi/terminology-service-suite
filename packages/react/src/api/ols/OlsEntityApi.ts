import { OlsBaseApi } from "./OlsBaseApi";

import { getEntityInOntologySuffix, getUseLegacy } from "../../app/util";
import {
  classTypeNames,
  EntityTypeName,
  entityTypeNames,
} from "../../model/ModelTypeCheck";
import { Entity, Individual } from "../../model/interfaces";
import { createModelObject } from "../../model/ols-model/ModelObjectCreator";
import {
  apiCallFn,
  ContentParams,
  JsTreeParams,
} from "../../utils/olsApiTypes";
import {
  buildOtherParams,
  buildParamsForEntities,
  buildParamsForGet,
} from "../../utils/olsApiUtils";

export class OlsEntityApi extends OlsBaseApi {
  /**
   * Is used to fetch all terms from the api
   * @param paginationParams
   * @param sortingParams
   * @param contentParams
   * @param parameter
   * @param `useLegacy` Depending on the value of `useLegacy`, `"terms"` (`useLegacy == true`) or `"classes"` (`useLegacy == false`) will be used in the query url
   */
  public getTerms: apiCallFn = async (
    paginationParams,
    sortingParams,
    contentParams,
    parameter,
    useLegacy?: boolean,
  ) => {
    const typePrefix = getUseLegacy(useLegacy) ? "terms" : "classes";
    return this.makeCall(
      typePrefix,
      {
        params: buildParamsForGet(
          paginationParams,
          sortingParams,
          contentParams,
        ),
      },
      getUseLegacy(useLegacy),
    );
  };

  public getProperties: apiCallFn = async (
    paginationParams,
    sortingParams,
    contentParams,
    parameter,
    useLegacy?: boolean,
  ) => {
    return this.makeCall(
      "properties",
      {
        params: buildParamsForGet(
          paginationParams,
          sortingParams,
          contentParams,
        ),
      },
      getUseLegacy(useLegacy),
    );
  };

  public getIndividuals: apiCallFn = async (
    paginationParams,
    sortingParams,
    contentParams,
    parameter,
    useLegacy?: boolean,
  ) => {
    return this.makeCall(
      "individuals",
      {
        params: buildParamsForGet(
          paginationParams,
          sortingParams,
          contentParams,
        ),
      },
      getUseLegacy(useLegacy),
    );
  };

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
  public getTerm: apiCallFn = async (
    paginationParams,
    sortingParams,
    contentParams,
    parameter,
    useLegacy?: boolean,
    abortSignal?: AbortSignal,
  ) => {
    const ontologyPrefix = contentParams?.ontologyId
      ? "ontologies/" + contentParams?.ontologyId + "/"
      : "";
    const typePrefix = getUseLegacy(useLegacy) ? "terms" : "classes";
    const params = {
      iri: contentParams?.termIri,
      ...buildOtherParams(parameter),
    };
    return this.makeCall(
      ontologyPrefix + typePrefix,
      { params: params, signal: abortSignal },
      getUseLegacy(useLegacy),
    );
  };

  /**
   * Is used to fetch a property from the api in ols3.
   * Always requires the respective object IRI in contentParams to be set
   * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
   */
  public getProperty: apiCallFn = async (
    paginationParams,
    sortingParams,
    contentParams,
    parameter,
    useLegacy?: boolean,
    abortSignal?: AbortSignal,
  ) => {
    const queryPrefix = contentParams?.ontologyId
      ? "ontologies/" + contentParams?.ontologyId + "/"
      : "";
    const params = {
      iri: contentParams?.propertyIri,
      ...buildOtherParams(parameter),
    };
    return this.makeCall(
      queryPrefix + "properties",
      { params: params, signal: abortSignal },
      getUseLegacy(useLegacy),
    );
  };

  /**
   * Is used to fetch an individual from the api in ols3.
   * Always requires the respective object IRI in contentParams to be set
   * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
   */
  public getIndividual: apiCallFn = async (
    paginationParams,
    sortingParams,
    contentParams,
    parameter,
    useLegacy?: boolean,
    abortSignal?: AbortSignal,
  ) => {
    const queryPrefix = contentParams?.ontologyId
      ? "ontologies/" + contentParams?.ontologyId + "/"
      : "";
    const params = {
      iri: contentParams?.individualIri,
      ...buildOtherParams(parameter),
    };
    return this.makeCall(
      queryPrefix + "individuals",
      { params: params, signal: abortSignal },
      getUseLegacy(useLegacy),
    );
  };

  /**
   * Is used to fetch an entity from the /entities endpoint in the api in ols4.
   * Always requires the respective object IRI in contentParams to be set
   * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
   * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
   */
  public getEntity: apiCallFn = async (
    paginationParams,
    sortingParams,
    contentParams,
    parameter,
    useLegacy?: boolean,
  ) => {
    const queryPrefix = contentParams?.ontologyId
      ? "ontologies/" + contentParams?.ontologyId + "/"
      : "";
    const params = {
      iri: contentParams?.termIri,
      ...buildParamsForEntities(parameter),
    };
    return this.makeCall(
      queryPrefix + "entities",
      { params: params },
      getUseLegacy(useLegacy),
    );
  };

  /**
   * Returns the whole entity response json with a comfortable wrapper handling entityType, ontologyId and useLegacy
   * @param iri
   * @param entityType queries specific routes if provided and infers type if not
   * @param ontologyId queries ontology routes if provided, otherwise not
   * @param parameter
   * @param useLegacy affects how entityType is inferred if not provided
   */
  public async getEntityResponse(
    iri: string,
    entityType?: EntityTypeName,
    ontologyId?: string,
    parameter?: string,
    useLegacy?: boolean,
  ): Promise<any> {
    let response;
    if (!iri) throw Error("No IRI provided");

    if (getUseLegacy(useLegacy)) {
      if (entityType) {
        response = await this.getEntityWithEntityTypeProvided(
          iri,
          entityType,
          ontologyId,
          parameter,
          useLegacy,
        );
      } else {
        response = await this.getEntityWithInferredEntityType(
          iri,
          ontologyId,
          parameter,
        );
      }
    } else {
      response = await this.getEntity(
        undefined,
        undefined,
        { ontologyId: ontologyId, termIri: iri },
        parameter,
        useLegacy,
      );
    }

    return response;
  }

  private async getEntityWithEntityTypeProvided(
    iri: string,
    entityType: EntityTypeName,
    ontologyId?: string,
    parameter?: string,
    useLegacy?: boolean,
  ): Promise<any> {
    switch (entityType) {
      case "term":
      case "class": // also allow "class" even if it should actually be "term"
        return await this.getTerm(
          undefined,
          undefined,
          { ontologyId: ontologyId, termIri: iri },
          parameter,
          useLegacy,
        );

      case "property":
      case "annotationProperty":
      case "dataProperty":
      case "objectProperty":
        return await this.getProperty(
          undefined,
          undefined,
          { ontologyId: ontologyId, propertyIri: iri },
          parameter,
          useLegacy,
        );

      case "individual":
        return await this.getIndividual(
          undefined,
          undefined,
          { ontologyId: ontologyId, individualIri: iri },
          parameter,
          useLegacy,
        );

      default:
        throw Error(
          'Invalid entity type "' +
            entityType +
            `". Must be one of {${entityTypeNames
              .map((elem) => `"${elem}"`)
              .join(", ")}}.`,
        );
    }
  }

  private async getEntityWithInferredEntityType(
    iri: string,
    ontologyId?: string,
    parameter?: string,
  ): Promise<any> {
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

    await Promise.allSettled([
      this.getTerm(
        undefined,
        undefined,
        { ontologyId: ontologyId, termIri: iri },
        parameter,
        true,
        signal,
      ).then((res: any) => {
        setAndStop(res);
      }),
      this.getProperty(
        undefined,
        undefined,
        { ontologyId: ontologyId, propertyIri: iri },
        parameter,
        true,
        signal,
      ).then((res: any) => {
        setAndStop(res);
      }),
      this.getIndividual(
        undefined,
        undefined,
        { ontologyId: ontologyId, individualIri: iri },
        parameter,
        true,
        signal,
      ).then((res: any) => {
        setAndStop(res);
      }),
    ]);

    if (response !== undefined) return response;
    else throw Error("Iri " + iri + " could not be resolved.");
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
  public async getEntityObject(
    iri: string,
    entityType?: EntityTypeName,
    ontologyId?: string,
    parameter?: string,
    useLegacy?: boolean,
  ): Promise<Entity> {
    return createModelObject(
      await this.getEntityResponse(
        iri,
        entityType,
        ontologyId,
        parameter,
        useLegacy,
      ),
    ) as Entity;
  }

  public async getClassInstances(
    iri: string,
    ontologyId: string,
  ): Promise<Individual[]> {
    const instances = await this.makeCall(
      `${getEntityInOntologySuffix(
        ontologyId,
        classTypeNames[0],
        iri,
        false,
      )}/individuals`,
      { params: { size: "1000" } },
      false,
    );

    return instances["elements"].map(
      (obj: any) => createModelObject({ elements: [obj] }) as Individual,
    );
  }

  public getTermRelations = async (
    contentParams: ContentParams,
    parameter?: string,
  ) => {
    let baseRequest = "ontologies/" + contentParams?.ontologyId + "/terms";
    if (!contentParams.termIri)
      return (
        await this.axiosInstance.get(
          baseRequest + "/roots" + (parameter ? "?" + parameter : ""),
        )
      ).data; //1)
    baseRequest =
      baseRequest +
      "/" +
      encodeURIComponent(encodeURIComponent(contentParams?.termIri)) +
      "/graph" +
      (parameter ? "?" + parameter : "");
    return (await this.axiosInstance.get(baseRequest)).data;
  };

  /**
   * getTermTree:
   * This method always requires an ontologyId in contentParams
   * 1) If no termIri is defined in contentParams, the ontology roots will be queried
   * 2) If a termIri is defined but no child in jsTreeParams, the hierarchy containing that term will be queried
   * 3) If a termIri is defined and also a child in jsTreeParams, the subhierarchy of that child will be queried
   */
  public getTermTree = async (
    contentParams: ContentParams,
    treeParams: JsTreeParams,
    parameter?: string,
  ) => {
    let baseRequest = "ontologies/" + contentParams?.ontologyId + "/terms";
    if (!contentParams.termIri)
      return (await this.axiosInstance.get(baseRequest + "/roots")).data; //1)
    baseRequest =
      baseRequest +
      "/" +
      encodeURIComponent(encodeURIComponent(contentParams?.termIri)) +
      "/jstree" +
      (parameter ? "?" + parameter : "");
    if (treeParams.child)
      return (
        await this.axiosInstance.get(
          baseRequest +
            "/children/" +
            treeParams.child +
            (parameter ? "?" + parameter : ""),
        )
      ).data;
    //3)
    else
      return (await this.axiosInstance.get(baseRequest, { params: treeParams }))
        .data; //2)
  };
}
