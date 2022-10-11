import React, {useEffect, useState} from "react";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

export interface OntologyInfoWidgetProps {
  onto: string;
  api: string;
}

function OntologyInfoWidget(props: OntologyInfoWidgetProps) {
  const { onto, api } = props;
  const [ontoInfo, setOntoInfo] = useState({
    iri: "IRI?",
    id: "ID?",
    version: "VERSION?",
    termNum: "COUNT?",
    lastLoad: "DATE?",
    comment: "COMMENT?",
    label: "LABEL?",
  });


  useEffect(() => {
    const getOntoInfo = async () => {
      const ontoInfo = await fetch(`${api}ontologies/${onto}`, {
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
            comment: response.config.annotations.comment,
            label: response.config.annotations.label,
          }
        });
      setOntoInfo(ontoInfo)
    };
    getOntoInfo().catch((error) => console.log(error));
  },[onto, api]);

  return (
    <EuiFlexGroup direction="column" style={{ maxWidth: 600 }}>
      <EuiFlexItem>
        <EuiFlexGroup direction="column">
          <EuiFlexItem grow={false}>
            Ontology IRI: {ontoInfo.iri}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            Ontology ID: {ontoInfo.id}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            Version: {ontoInfo.version}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            Number of terms: {ontoInfo.termNum}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            Last loaded: {ontoInfo.lastLoad}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            comment: {ontoInfo.comment}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            label: {ontoInfo.label}
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
export { OntologyInfoWidget };
