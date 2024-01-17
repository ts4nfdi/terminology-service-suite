import React from "react";
import {
  EuiFlexItem,
  EuiTabbedContent, EuiText,
} from "@elastic/eui";
import { AlternativeNameTabWidget } from "./AlternativeNameTabWidget";
import { CrossRefTabWidget } from "./CrossRefWidget";
import { HierarchyWidget } from "./HierarchyWidget";
import {useQuery} from "react-query";
import {OlsApi} from "../../../../api/OlsApi";
import { getPreferredOntologyJSON } from "../../../../utils/helper";

export interface TabWidgetProps {
  iri: string;
  api: string;
  ontologyId?: string;
  entityType:
      | "ontology"
      | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
      | "individual"
      | "property"
      | string;
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

function TabWidget(props: TabWidgetProps) {
  const { iri, api, ontologyId, entityType, parameter, ...rest } = props;
  const fixedEntityType = entityType == "class" ? "term" : entityType
  const olsApi = new OlsApi(api);

  const {
    data: ontologyJSON,
    isLoading: isLoading,
    isSuccess: isSuccess,
    isError: isError,
    error: error,
  } = useQuery(
      [
          api,
          "tab-widget",
          fixedEntityType,
          ontologyId,
          iri,
          parameter
      ],
      () => { return getPreferredOntologyJSON(olsApi, fixedEntityType, ontologyId, iri, parameter); }
  );

  return (
      <>
          {
              isSuccess && !props.ontologyId && ontologyJSON && !ontologyJSON["is_defining_ontology"] &&
              <EuiFlexItem>
                  <EuiText>
                      <i>Defining ontology not available. Showing occurrence inside {ontologyJSON["ontology_name"]} instead.</i>
                  </EuiText>
              </EuiFlexItem>
          }
          <div>
              <EuiFlexItem>
                  <EuiTabbedContent size="s" tabs={
                      [
                          {
                              content: <AlternativeNameTabWidget
                                  api={api}
                                  iri={iri}
                                  ontologyId={props.ontologyId || ((ontologyJSON && ontologyJSON['ontology_name']) ? ontologyJSON['ontology_name'] : "")}
                                  entityType={entityType}
                              />,
                              id: "tab1",
                              name: "Alternative Names",
                          },
                          {
                              content: (
                                  <HierarchyWidget api={api} iri={iri} ontologyId={props.ontologyId || ((ontologyJSON && ontologyJSON['ontology_name']) ? ontologyJSON['ontology_name'] : "")} />
                              ),
                              id: "tab2",
                              name: "Hierarchy",
                          },
                          {
                              content: <CrossRefTabWidget
                                  api={api}
                                  iri={iri}
                                  ontologyId={props.ontologyId || ((ontologyJSON && ontologyJSON['ontology_name']) ? ontologyJSON['ontology_name'] : "")}
                                  entityType={entityType}
                              />,
                              id: "tab3",
                              name: "Cross references",
                          },
                      ]
                  } />
              </EuiFlexItem>
          </div>
      </>
  );
}

export { TabWidget };
