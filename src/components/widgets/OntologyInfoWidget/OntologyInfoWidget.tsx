import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiLoadingSpinner } from "@elastic/eui";
import {QueryFunction, useQuery} from "react-query";

export interface OntologyInfoWidgetProps {
  onto: string;
  api: string;
}

interface OntoInfo {
  iri: string,
  id: string,
  version: string,
  termNum: string,
  lastLoad: string,
  annotations: object; //list of key&value string pairs
}

function OntologyInfoWidget(props: OntologyInfoWidgetProps) {
  const { onto, api } = props;

  const fetchOntoData: QueryFunction<OntoInfo, string> = ({queryKey}) => {
    const [queryPath] = queryKey;
    return fetch(queryPath, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Content_Type: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        return {
          iri: response.config.id,
          id: response.ontologyId,
          version: response.config.version,
          termNum: response.numberOfTerms,
          lastLoad: response.loaded,
          annotations: response.config.annotations ? response.config.annotations : [],
        };
      });
  }

  const {
    data: ontoInfo,
    isLoading,
  } = useQuery(`${api}ontologies/${onto}`, fetchOntoData)

  return (
    <EuiFlexGroup direction="column" style={{ maxWidth: 600 }}>
      <EuiFlexItem>
        <EuiFlexGroup direction="column">
          <EuiFlexItem grow={false}>
            <b>Ontology IRI:</b> {isLoading ? <EuiLoadingSpinner size="s" /> : (ontoInfo ? ontoInfo.iri : "-")}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Ontology ID:</b> {isLoading ? <EuiLoadingSpinner size="s" /> : (ontoInfo ? ontoInfo.id : "-")}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Version:</b> {isLoading ? <EuiLoadingSpinner size="s" /> : (ontoInfo ? ontoInfo.version : "-")}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Number of terms:</b> {isLoading ? <EuiLoadingSpinner size="s" /> : (ontoInfo ? ontoInfo.termNum : "-")}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Last loaded:</b> {isLoading ? <EuiLoadingSpinner size="s" /> : (ontoInfo ? new Date(ontoInfo.lastLoad).toLocaleString() : "-")}
          </EuiFlexItem>
          {ontoInfo ? (
            Object.entries(ontoInfo.annotations).map(([annoKey,annoVal]) => (/*TODO clickable annoKey*/
              <EuiFlexItem grow={false} key={annoKey}>
                <b>{annoKey}:</b> {annoVal}
              </EuiFlexItem>
              ))
          ) : ''}
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
export { OntologyInfoWidget };
