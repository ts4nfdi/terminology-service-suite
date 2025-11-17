import { Thing } from './interfaces';
export declare function createModelObject(response: any): Thing;
/**
 * Returns the JSON of the entity in its defining ontology, or, if not available, just the first JSON in the array.
 * If ontologyId was provided in the response request, the array should only contain one element, thus the functionality is as expected as well
 * @param entityArrayResponse the sub-response of the initial query response containing just the entity array
 * @param useLegacy api version (needed because key giving information about defining ontology has different names in both versions)
 * @param ontologyId if specified, returns the entity in this ontology if available
 */
export declare function getPreferredOntologyJSON(entityArrayResponse: any[], useLegacy: boolean, ontologyId?: string): any;
