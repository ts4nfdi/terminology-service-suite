import { OlsBaseApi } from './OlsBaseApi';
import { EntityTypeName } from '../../model/ModelTypeCheck';
import { Entity, Individual } from '../../model/interfaces';
import { apiCallFn, ContentParams, JsTreeParams } from '../../utils/olsApiTypes';
export declare class OlsEntityApi extends OlsBaseApi {
    /**
     * Is used to fetch all terms from the api
     * @param paginationParams
     * @param sortingParams
     * @param contentParams
     * @param parameter
     * @param `useLegacy` Depending on the value of `useLegacy`, `"terms"` (`useLegacy == true`) or `"classes"` (`useLegacy == false`) will be used in the query url
     */
    getTerms: apiCallFn;
    getProperties: apiCallFn;
    getIndividuals: apiCallFn;
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
    getTerm: apiCallFn;
    /**
     * Is used to fetch a property from the api in ols3.
     * Always requires the respective object IRI in contentParams to be set
     * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
     * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
     */
    getProperty: apiCallFn;
    /**
     * Is used to fetch an individual from the api in ols3.
     * Always requires the respective object IRI in contentParams to be set
     * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
     * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
     */
    getIndividual: apiCallFn;
    /**
     * Is used to fetch an entity from the /entities endpoint in the api in ols4.
     * Always requires the respective object IRI in contentParams to be set
     * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
     * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
     */
    getEntity: apiCallFn;
    /**
     * Returns the whole entity response json with a comfortable wrapper handling entityType, ontologyId and useLegacy
     * @param iri
     * @param entityType queries specific routes if provided and infers type if not
     * @param ontologyId queries ontology routes if provided, otherwise not
     * @param parameter
     * @param useLegacy affects how entityType is inferred if not provided
     */
    getEntityResponse(iri: string, entityType?: EntityTypeName, ontologyId?: string, parameter?: string, useLegacy?: boolean): Promise<any>;
    private getEntityWithEntityTypeProvided;
    private getEntityWithInferredEntityType;
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
    getEntityObject(iri: string, entityType?: EntityTypeName, ontologyId?: string, parameter?: string, useLegacy?: boolean): Promise<Entity>;
    getClassInstances(iri: string, ontologyId: string): Promise<Individual[]>;
    getTermRelations: (contentParams: ContentParams, parameter?: string) => Promise<any>;
    /**
     * getTermTree:
     * This method always requires an ontologyId in contentParams
     * 1) If no termIri is defined in contentParams, the ontology roots will be queried
     * 2) If a termIri is defined but no child in jsTreeParams, the hierarchy containing that term will be queried
     * 3) If a termIri is defined and also a child in jsTreeParams, the subhierarchy of that child will be queried
     */
    getTermTree: (contentParams: ContentParams, treeParams: JsTreeParams, parameter?: string) => Promise<any>;
}
