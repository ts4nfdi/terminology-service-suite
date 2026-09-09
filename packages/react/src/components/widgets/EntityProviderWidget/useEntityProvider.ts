"use client";

import { useEffect, useState } from "react";
import {
  EntityProviderWidgetProps,
  UseEntityProviderResult,
} from "../../../app";
import {
  fetchEntityProviders,
  pickPreferredProvider,
} from "./getEntityProvider";

const IDLE: UseEntityProviderResult = {
  providers: [],
  provider: undefined,
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: undefined,
};

/**
 * React hook returning information about the terminology backend that provides
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
export function useEntityProvider(
  props: EntityProviderWidgetProps,
): UseEntityProviderResult {
  const { iri, ontologyId, api, enabled = true } = props;
  const [state, setState] = useState<UseEntityProviderResult>(IDLE);

  useEffect(() => {
    if (!enabled || !iri) {
      setState(IDLE);
      return;
    }

    // Guards against a superseded response overwriting a newer one, and against
    // the double-invoked effect of React's strict mode.
    let ignore = false;
    const controller = new AbortController();

    setState({ ...IDLE, isLoading: true });

    fetchEntityProviders({ iri, ontologyId, api }, controller.signal).then(
      (entries) => {
        if (ignore) return;
        setState({
          providers: entries.map((entry) => entry.provider),
          provider: pickPreferredProvider(entries),
          isLoading: false,
          isSuccess: true,
          isError: false,
          error: undefined,
        });
      },
      (error) => {
        // An abort is the expected outcome of cleanup, not a failure.
        if (ignore || controller.signal.aborted) return;
        setState({
          ...IDLE,
          isError: true,
          error: error instanceof Error ? error : Error(String(error)),
        });
      },
    );

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [iri, ontologyId, api, enabled]);

  return state;
}
