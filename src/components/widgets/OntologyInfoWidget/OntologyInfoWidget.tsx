import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiLoadingSpinner } from "@elastic/eui";
import {useQuery} from "react-query";
import { apiCallFn, OlsApi } from "../../../api/OlsApi";

export interface OntologyInfoWidgetProps {
  ontologyId: string;
  api: string;
  parameter?: string;
}

interface OntologyInfo {
  iri: string,
  id: string,
  version: string,
  termNum: number,
  lastLoad: string,
  annotations: object; //list of key&value string pairs
}

async function getOntoData(apiCall: apiCallFn, ontologyId: string, parameter?: string): Promise<OntologyInfo> {
  const response = await apiCall(undefined, undefined, {ontologyId: ontologyId}, parameter);

  return {
    iri: response.config.id,
    id: response.ontologyId,
    version: response.config.version,
    termNum: response.numberOfTerms,
    lastLoad: response.loaded,
    annotations: response.config.annotations ? response.config.annotations : [],
  };
}

function OntologyInfoWidget(props: OntologyInfoWidgetProps) {
  const { ontologyId, api, parameter } = props;
  const olsApi = new OlsApi(api);

  const infoItemStyle = {
    marginLeft: "9px"
  };

  const isAvailable = (item: any) => {
    return item != undefined && item != "" && item != []
  }

  const {
    data: ontologyInfo,
    isLoading,
  } = useQuery([api, "getOntology", ontologyId, parameter], () => { return getOntoData(olsApi.getOntology, ontologyId, parameter); });

  return (
    <EuiFlexGroup direction="column" style={{ maxWidth: 600 }}>
      <EuiFlexItem>
        <EuiFlexGroup direction="column">
          <EuiFlexItem grow={false}>
            <b>Ontology IRI:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (ontologyInfo && isAvailable(ontologyInfo.iri) ? ontologyInfo.iri.toLocaleString() : "-")}</p>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Ontology ID:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (ontologyInfo && isAvailable(ontologyInfo.id) ? ontologyInfo.id.toLocaleString() : "-")}</p>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Version:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (ontologyInfo && isAvailable(ontologyInfo.version) ? ontologyInfo.version.toLocaleString() : "-")}</p>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Number of terms:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (ontologyInfo && isAvailable(ontologyInfo.termNum) ? ontologyInfo.termNum.toLocaleString() : "-")}</p>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Last loaded:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (ontologyInfo && isAvailable(ontologyInfo.lastLoad) ? new Date(ontologyInfo.lastLoad).toLocaleString() : "-")}</p>
          </EuiFlexItem>
          {ontologyInfo ? (
            Object.entries(ontologyInfo.annotations).map(([annoKey,annoVal]) => (/*TODO clickable annoKey*/
              <EuiFlexItem grow={false} key={annoKey}>
                <b>{annoKey}:</b>
                <p style={infoItemStyle}>{isAvailable(annoVal) ? annoVal.toLocaleString() : "-"}</p>
              </EuiFlexItem>
              ))
          ) : ''}
        </EuiFlexGroup>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
export { OntologyInfoWidget };
