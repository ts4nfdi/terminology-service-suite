import { EntityProvider, EntityProviderWidgetProps } from '../../../app/types';
export type GetEntityProviderParams = Omit<EntityProviderWidgetProps, "enabled">;
/**
 * Maps the `provider` block of a single entity from an OLS4 `elements` array to
 * an {@link EntityProvider}. Returns undefined if the entity carries no
 * provider information, which is the case for every non-gateway OLS instance.
 */
export declare function parseEntityProvider(element: any): EntityProvider | undefined;
/**
 * Queries the `/entities` endpoint and returns the resolved entities together
 * with their parsed providers, keeping both aligned so that the defining
 * ontology can still be identified afterwards.
 */
declare function fetchEntityProviders(params: GetEntityProviderParams, abortSignal?: AbortSignal): Promise<{
    element: any;
    provider: EntityProvider;
}[]>;
/**
 * Returns the provider of the entity in its defining ontology, or the first one
 * if no occurrence is marked as defining. Mirrors the preference rule of
 * `getPreferredOntologyJSON` in `model/ols-model/ModelObjectCreator.ts`.
 */
declare function pickPreferredProvider(entries: {
    element: any;
    provider: EntityProvider;
}[]): EntityProvider | undefined;
/**
 * Fetches provider information for an entity from the `/entities` endpoint of an
 * OLS4 API, without requiring React.
 *
 * As one IRI can resolve in several ontologies, each potentially served by a
 * different provider, this returns one entry per ontology the IRI was found in.
 * Providing an `ontologyId` restricts the result to that single ontology.
 *
 * Returns an empty array if the entity could not be resolved, or if the API
 * reports no provider information (i.e. it is not the TS4NFDI API Gateway).
 * Only genuine request failures reject.
 *
 * @example
 * const providers = await getEntityProviders({
 *   ontologyId: "voc4cat",
 *   iri: "https://w3id.org/nfdi4cat/voc4cat_0000151",
 * });
 */
export declare function getEntityProviders(params: GetEntityProviderParams, abortSignal?: AbortSignal): Promise<EntityProvider[]>;
/**
 * Convenience wrapper around {@link getEntityProviders} returning a single
 * provider: the one of the defining ontology, or of the first occurrence if
 * none is marked as defining. Undefined if the entity could not be resolved or
 * carries no provider information.
 *
 * @example
 * const provider = await getEntityProvider({
 *   ontologyId: "voc4cat",
 *   iri: "https://w3id.org/nfdi4cat/voc4cat_0000151",
 * });
 * console.log(provider?.name); // "tib"
 */
export declare function getEntityProvider(params: GetEntityProviderParams, abortSignal?: AbortSignal): Promise<EntityProvider | undefined>;
export { fetchEntityProviders, pickPreferredProvider };
