import React from "react";
import { EuiCard, EuiLoadingSpinner, EuiText } from "@elastic/eui";
import { useQuery } from "react-query";
import { OlsApi } from "../../../api/OlsApi";
import { Ontologies } from "../../../model/interfaces";

export interface DataContentWidgetProps {
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
  useLegacy?: boolean;
}

function DataContentWidget(props: DataContentWidgetProps) {
  const { api, parameter, ...rest } = props;
  const olsApi = new OlsApi(api);

  const {
    data: ontologiesData,
    isLoading,
    isError,
    dataUpdatedAt
  } = useQuery<Ontologies>(
    ["ontologiesData", api, parameter],
    async () => {
      return olsApi.getOntologiesData(
        props.parameter
      );
    }
  );

  return (
    <>
      <EuiCard
        title="Data Content"
        description={dataUpdatedAt ? `Updated ${new Date(dataUpdatedAt).toLocaleString()}` : ""}
        layout="horizontal"
      >
        <EuiText {...rest}>
          {(isError) && <EuiText>No data content available</EuiText>}
          {isLoading
            ? <EuiLoadingSpinner size="s" />
            :
            <ul>
              {(ontologiesData?.getTotalOntologies()
                ? <li>{ontologiesData?.getTotalOntologies().toLocaleString()} ontologies and terminologies</li>
                : <li style={{ fontStyle: "italic" }}>ontology number not available</li>)}
              {(ontologiesData?.getNumClasses()
                ? <li>{ontologiesData?.getNumClasses().toLocaleString()} terms</li>
                : <li style={{ fontStyle: "italic" }}>term number not available</li>)}
              {(ontologiesData?.getNumProperties()
                ? <li>{ontologiesData?.getNumProperties().toLocaleString()} properties</li>
                : <li style={{ fontStyle: "italic" }}>property number not available</li>)}
              {(ontologiesData?.getNumIndividuals()
                ? <li>{ontologiesData?.getNumIndividuals().toLocaleString()} individuals</li>
                : <li style={{ fontStyle: "italic" }}>individual number not available</li>)}
              {/* <li>Version {NOT_AVAILABLE}</li> */} {/* TODO how to get API version? */}
            </ul>
          }
        </EuiText>
      </EuiCard>
    </>
  );
}

export { DataContentWidget };
