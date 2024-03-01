import React from "react";
import { EuiLoadingSpinner, EuiText } from "@elastic/eui";
import { OlsApi } from "../../../../../api/OlsApi";
import { useQuery } from "react-query";
import { getErrorMessageToDisplay, getPreferredOntologyJSON } from "../../../../../utils/helper";
import { AlternativeNameTabPresentation } from "./AlternativeNameTabPresentation";
import { EntityTypeName, isEntity } from "../../../../../model/ModelTypeCheck";
import { Thing } from "../../../../../model/interfaces";

export interface AlternativeNameTabWidgetProps {
  iri: string;
  api: string;
  ontologyId?: string;
  entityType: EntityTypeName
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


function AlternativeNameTabWidget(props: AlternativeNameTabWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId, useLegacy } = props;
  const olsApi = new OlsApi(api);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery<Thing>(
    ["metadata", api, parameter, entityType, iri, ontologyId],
    async () => {
      return olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy);
    }
  );

  // TODO: Should AlternativeNameTabWidget show the following info message if defining ontology is not available (placed inside EuiPanel span)?
  /*{
      isSuccess && !props.ontologyId && !ontologyJSON["is_defining_ontology"] &&
      <EuiFlexItem>
          <EuiText>
              <i>Defining ontology not available. Showing occurrence inside {ontologyJSON["ontology_name"]} instead.</i>
          </EuiText>
          <EuiSpacer size={"s"}></EuiSpacer>
      </EuiFlexItem>
  }*/

  return (
    <>
      {isSuccess && data && isEntity(data) &&
        <AlternativeNameTabPresentation synonyms={data.getSynonyms().map(synonym => synonym.value)} />}
      {isLoading && <EuiLoadingSpinner />}
      {isError && <EuiText>{getErrorMessageToDisplay(error, "alternative names")}</EuiText>}
    </>
  );
}

export { AlternativeNameTabWidget };
