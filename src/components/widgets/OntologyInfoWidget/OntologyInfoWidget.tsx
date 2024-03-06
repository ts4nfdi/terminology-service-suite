import React from "react";
import {EuiFlexGroup, EuiFlexItem, EuiLoadingSpinner} from "@elastic/eui";
import {useQuery} from "react-query";
import { apiCallFn, OlsApi } from "../../../api/OlsApi";

export interface OntologyInfoWidgetProps {
  ontologyId: string;
  api: string;
  /**
     * Additional parameters to pass to the API.
     *
     * This parameters can be used to filter the search results. Each parameter can be combined via
     * the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign
     * <i><b>,</b></i>. The following keys could be used:<br/> <br/>
     *  <table>
     *  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
     *  <tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>
     *  <tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>
     *  <tr><td>slim</td><td>Restrict a search to a particular set of slims by name</td></tr>
     *  <tr><td>fieldList</td><td>Specify the fields to return. Defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td></tr>
     *  <tr><td>obsoletes</td><td>Set to true to include obsolete terms in the results</td></tr>
     *  <tr><td>local</td><td>Set to true to only return terms that are in a defining ontology, e.g. only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>
     *  <tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>
     *  <tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>
     *  <tr><td>rows</td><td>Set results per page</td></tr>
     *  <tr><td>start</td><td>Set the results page number</td></tr>
     *  <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. collection=nfdi4health</td></tr>
     * </table>
     */
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
    isError,
    error,
  } = useQuery([api, "getOntology", ontologyId, parameter], () => { return getOntoData(olsApi.getOntology, ontologyId, parameter); });

  return (
    <EuiFlexGroup direction="column" style={{ maxWidth: 600 }}>
      <EuiFlexItem>
        <EuiFlexGroup direction="column">
          <EuiFlexItem grow={false}>
            <b>Ontology IRI:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (!isError && ontologyInfo && isAvailable(ontologyInfo.iri) ? ontologyInfo.iri.toLocaleString() : "-")}</p>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Ontology ID:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (!isError && ontologyInfo && isAvailable(ontologyInfo.id) ? ontologyInfo.id.toLocaleString() : "-")}</p>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Version:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (!isError && ontologyInfo && isAvailable(ontologyInfo.version) ? ontologyInfo.version.toLocaleString() : "-")}</p>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Number of terms:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (!isError && ontologyInfo && isAvailable(ontologyInfo.termNum) ? ontologyInfo.termNum.toLocaleString() : "-")}</p>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <b>Last loaded:</b>
            <p style={infoItemStyle}>{isLoading ? <EuiLoadingSpinner size="s" /> : (!isError && ontologyInfo && isAvailable(ontologyInfo.lastLoad) ? new Date(ontologyInfo.lastLoad).toLocaleString() : "-")}</p>
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
