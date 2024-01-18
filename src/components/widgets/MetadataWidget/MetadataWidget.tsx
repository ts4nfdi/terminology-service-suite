import React from "react";
import {EuiFlexGroup, EuiFlexItem, EuiIconTip, EuiLoadingSpinner, EuiText} from "@elastic/eui";
import { BreadcrumbWidget } from "./BreadcrumbWidget";
import { IriWidget } from "./IriWidget";
import { TitleWidget } from "./TitleWidget";
import { DescriptionWidget } from "./DescriptionWidget";
import { TabWidget } from "./TabWidget";
import {useQuery} from "react-query";
import {OlsApi} from "../../../api/OlsApi";
import {getPreferredOntologyJSON} from "./index";
import {never} from "@elastic/eui/src/services/predicate/common_predicates";

export interface MetadataWidgetProps {
  iri: string;
  ontologyId?: string;
  api: string;
  entityType:
    | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
    | "individual"
    | "property"
    | string;
  parameter?: string
}

function MetadataWidget(props: MetadataWidgetProps) {
    const { iri, api, ontologyId, entityType, parameter } = props;

    const olsApi = new OlsApi(api);

    const {
        data: ontologyJSON,
        isLoading: isLoadingOntologyId,
        isSuccess: isSuccessOntologyId,
        isError: isErrorOntologyId,
        error: errorOntologyId
    } = useQuery(
        [
            "ontologyId",
            iri,
            api,
            entityType,
            parameter,
            props.ontologyId
        ],
        async () => {
            return getPreferredOntologyJSON(olsApi, entityType, ontologyId, iri, parameter);
        },
        {

        }
    )

  return (
      <>
          {isLoadingOntologyId && <EuiLoadingSpinner size="s"></EuiLoadingSpinner>}
          {(props.ontologyId || isSuccessOntologyId) &&
              <EuiFlexGroup direction="column" style={{ maxWidth: 600 }}>
                  {
                      !props.ontologyId && !ontologyJSON["is_defining_ontology"] &&
                      <EuiFlexItem>
                          <EuiText size={"m"}>
                              <i>Defining ontology not available </i>
                              <EuiIconTip type={"iInCircle"}
                                          color={"subdued"}
                                          content={`Showing occurence inside ${ontologyJSON["ontology_name"]} instead.`}
                              >
                              </EuiIconTip>
                          </EuiText>
                      </EuiFlexItem>
                  }
                  <EuiFlexItem grow={false}>
                <span>
                  <BreadcrumbWidget api={api} iri={iri} entityType={entityType} ontologyId={props.ontologyId ? props.ontologyId : ontologyJSON["ontology_name"]} parameter={parameter}/>
                </span>
                  </EuiFlexItem>
                  <EuiFlexItem>
                      <EuiFlexGroup direction="column">
                          <EuiFlexItem>
                              <EuiFlexGroup>
                                  <EuiFlexItem grow={false}>
                                      <IriWidget iri={iri} parameter={parameter}/>
                                  </EuiFlexItem>
                              </EuiFlexGroup>
                          </EuiFlexItem>

                          <EuiFlexItem grow={false}>
                              <TitleWidget iri={iri} api={api} ontologyId={props.ontologyId ? props.ontologyId : ontologyJSON["ontology_name"]} entityType={entityType} parameter={parameter} />
                          </EuiFlexItem>
                      </EuiFlexGroup>
                  </EuiFlexItem>
                  <EuiFlexItem>
                      <DescriptionWidget iri={iri} api={api} ontologyId={props.ontologyId ? props.ontologyId : ontologyJSON["ontology_name"]} entityType={entityType} parameter={parameter}/>
                  </EuiFlexItem>
                  <EuiFlexItem>
                      <TabWidget
                          iri={iri}
                          ontologyId={props.ontologyId ? props.ontologyId : ontologyJSON["ontology_name"]}
                          api={api}
                          parameter={parameter}
                          entityType={entityType}/>
                  </EuiFlexItem>
              </EuiFlexGroup>
          }
      </>
  );
}
export { MetadataWidget };
