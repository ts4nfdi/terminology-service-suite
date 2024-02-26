import React from "react";
import { EuiLoadingSpinner, EuiText } from "@elastic/eui";
import { useQuery } from "react-query";
import { OlsApi } from "../../../../api/OlsApi";
import { Entity, Ontology, Thing } from "../../../../model/interfaces";
import { getErrorMessageToDisplay } from "../../../../utils/helper";
import { TabPresentation } from "./TabPresentation";
import { isEntity, isOntology } from "../../../../model/ModelTypeCheck";

export interface TabWidgetProps {
  iri: string;
  api: string;
  ontologyId?: string;
  entityType:
    | "ontology"
    | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
    | "individual"
    | "property";
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

function TabWidget(props: TabWidgetProps) {
  const { iri, api, ontologyId, entityType, parameter, useLegacy } = props;
  const olsApi = new OlsApi(api);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery<Thing>(
    ["tabdata", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getResponseObject(entityType, iri, ontologyId, parameter, useLegacy);
    }
  );

  const {
    data: ontologyData,
    isLoading: isLoadingOntology,
    isSuccess: isSuccessOntology,
    isError: isErrorOntology,
    error: errorOntology
  } = useQuery<Thing>({
      queryKey: ["ontologyData", api, parameter, entityType, iri, ontologyId, useLegacy
      ],
      queryFn: async () => {
        return olsApi.getResponseObject("ontology", iri, data ? data.getOntologyId() : undefined, parameter, useLegacy);
      },
      enabled:
        !!data
    }
  );

  function render(data: Entity, ontologyData: Ontology) {
    return (
      <TabPresentation
        data={data}
        iri={iri}
        api={api}
        useLegacy={useLegacy}
        selectedEntity={data}
        ontology={ontologyData}
        entityType={data.getTypePlural()}
      />
    );
  }

  return (
    <>
      {isLoading && <EuiLoadingSpinner />}
      {isError && <EuiText>{getErrorMessageToDisplay(error, "description")}</EuiText>}
      {isSuccess && data && isSuccessOntology && ontologyData &&
        <>
          {isEntity(data) && isOntology(ontologyData) ? render(data, ontologyData) : null}
        </>
      }
    </>
  );
}

export { TabWidget };
