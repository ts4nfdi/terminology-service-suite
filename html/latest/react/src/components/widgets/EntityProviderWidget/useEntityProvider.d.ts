import { EntityProviderWidgetProps, UseEntityProviderResult } from '../../../app';
/**
 * React hook returning information about the terminology provider that specifies
 * an entity, as reported by the `provider` block of the TS4NFDI API Gateway.
 *
 * Deliberately implemented without `react-query`, so that it can be dropped
 * into any React application without having to mount a `QueryClientProvider`.
 * In-flight requests are aborted when the inputs change or the component
 * unmounts.
 *
 * Note that an entity which cannot be resolved is not an error: `provider` is
 * then undefined, `providers` is empty, and `isSuccess` is true.
 *
 * @example
 * const { provider, isLoading } = useEntityProvider({
 *   ontologyId: "voc4cat",
 *   iri: "https://w3id.org/nfdi4cat/voc4cat_0000151",
 * });
 * if (!isLoading) console.log(provider?.name);
 */
export declare function useEntityProvider(props: EntityProviderWidgetProps): UseEntityProviderResult;
