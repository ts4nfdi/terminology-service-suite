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
