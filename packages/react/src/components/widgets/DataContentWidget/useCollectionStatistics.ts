"use client";

import { useEffect, useState } from "react";
import { UseCollectionStatisticsResult } from "../../../app";
import { Ontologies } from "../../../model/interfaces";

const RDF_PROPERTY = "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property";
const OWL_CLASS = "http://www.w3.org/2002/07/owl#Class";
const OWL_INDIVIDUAL = "http://www.w3.org/2002/07/owl#NamedIndividual";
const SKOS_CONCEPT = "http://www.w3.org/2004/02/skos/core#Concept";

const IDLE: UseCollectionStatisticsResult = {
  ontologiesData: undefined,
  isLoading: false,
  isError: false,
  dataUpdatedAt: undefined,
};

/**
 * Maps the latest statistics of the given collections onto the Ontologies
 * interface so that the result can be shown by the DataContentPresentation.
 * Classes and SKOS concepts are both counted as terms.
 */
function toOntologies(collections: Record<string, any>[]): {
  ontologies: Ontologies;
  updatedAt: number | undefined;
} {
  const terminologies = new Set<string>();
  const count: Record<string, number> = {};
  let updatedAt: number | undefined;

  collections.forEach((collection) => {
    (collection.terminologies ?? []).forEach((t: Record<string, any>) =>
      terminologies.add(`${t.source}:${t.uri ?? t.label}`),
    );
    const latest = [...(collection.statistics ?? [])].sort((a, b) =>
      String(b.created).localeCompare(String(a.created)),
    )[0];
    const created = latest?.created ? Date.parse(latest.created) : NaN;
    if (!isNaN(created) && (updatedAt === undefined || created > updatedAt)) {
      updatedAt = created;
    }
    Object.entries(latest?.count ?? {}).forEach(([type, n]) => {
      count[type] = (count[type] ?? 0) + Number(n);
    });
  });

  const numClasses = (count[OWL_CLASS] ?? 0) + (count[SKOS_CONCEPT] ?? 0);
  const numProperties = count[RDF_PROPERTY] ?? 0;
  const numIndividuals = count[OWL_INDIVIDUAL] ?? 0;

  const ontologies: Ontologies = {
    properties: [],
    getTotalOntologies: () => terminologies.size,
    getNumEntities: () => numClasses + numProperties + numIndividuals,
    getNumClasses: () => numClasses,
    getNumProperties: () => numProperties,
    getNumIndividuals: () => numIndividuals,
  };
  return { ontologies, updatedAt };
}

/**
 * React hook returning the statistics of a collection of the TS4NFDI API
 * Gateway.
 *
 * @example
 * const { ontologiesData, isLoading } = useCollectionStatistics({
 *   collectionId: "dc45621d-7e40-47ce-9616-4133f0b54edf",
 * });
 */
export function useCollectionStatistics(props: {
  statisticsApi: any;
  collectionId: string | undefined;
  enabled: boolean;
}): UseCollectionStatisticsResult {
  const { statisticsApi, collectionId, enabled = true } = props;
  const [state, setState] = useState<UseCollectionStatisticsResult>(IDLE);

  useEffect(() => {
    if (!enabled) {
      setState(IDLE);
      return;
    }

    let ignore = false;
    const controller = new AbortController();

    setState({ ...IDLE, isLoading: true });

    const url = `${statisticsApi.endsWith("/") ? statisticsApi : statisticsApi + "/"}collections/`;
    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw Error(`${response.status} ${url}`);
        return response.json();
      })
      .then(
        (collections: Record<string, any>[]) => {
          if (ignore) return;
          const selected = collectionId
            ? collections.filter((c) => c.id === collectionId)
            : collections;
          const { ontologies, updatedAt } = toOntologies(selected);
          setState({
            ontologiesData: ontologies,
            isLoading: false,
            isError: selected.length === 0,
            dataUpdatedAt: updatedAt,
          });
        },
        () => {
          if (ignore || controller.signal.aborted) return;
          setState({ ...IDLE, isError: true });
        },
      );

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [statisticsApi, collectionId, enabled]);

  return state;
}
