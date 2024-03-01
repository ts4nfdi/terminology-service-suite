import React from "react";
import {EuiFlexItem, EuiIconTip, EuiTabbedContent, EuiText,} from "@elastic/eui";
import { AlternativeNameTabWidget } from "./AlternativeNameTabWidget";
import { CrossRefTabWidget } from "./CrossRefWidget";
import { HierarchyWidget } from "./HierarchyWidget";
import {useQuery} from "react-query";
import {OlsApi} from "../../../../api/OlsApi";
import {TabWidgetProps} from "../../../../utils/types";

function TabWidget(props: TabWidgetProps) {
  const { iri, api, ontologyId, entityType, parameter, useLegacy, ...rest } = props;
  const olsApi = new OlsApi(api);

  const {
    data: entity,
    isLoading: isLoading,
    isSuccess: isSuccess,
    isError: isError,
    error: error,
  } = useQuery(
      [
          api,
          "tab-widget",
          entityType,
          ontologyId,
          iri,
          parameter,
          useLegacy
      ],
      () => { return olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy); }
  );

  return (
      <>
          {
              isSuccess && !props.ontologyId && entity && !entity.isCanonical() &&
              <EuiFlexItem>
                  <EuiText size={"m"}>
                      <i>Defining ontology not available </i>
                      <EuiIconTip type={"iInCircle"} color={"subdued"} content={`Showing occurrence inside ${entity.getOntologyId()} instead.`}/>
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
                                  ontologyId={props.ontologyId || entity?.getOntologyId() || ""}
                                  entityType={entityType}
                                  useLegacy={useLegacy}
                              />,
                              id: "tab1",
                              name: "Alternative Names",
                          },
                          {
                              content: (
                                  <HierarchyWidget
                                      api={api}
                                      iri={iri}
                                      ontologyId={props.ontologyId || entity?.getOntologyId() || ""} />
                              ),
                              id: "tab2",
                              name: "Hierarchy",
                          },
                          {
                              content: <CrossRefTabWidget
                                  api={api}
                                  iri={iri}
                                  ontologyId={props.ontologyId || entity?.getOntologyId() || ""}
                                  entityType={entityType}
                                  useLegacy={useLegacy}
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
