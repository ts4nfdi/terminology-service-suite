import React from "react";
import {EuiBadge, EuiFlexItem, EuiLoadingSpinner, EuiText, EuiIconTip} from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import {useQuery} from "react-query";
import {getPreferredOntologyJSON} from "../index";

export interface BreadcrumbWidgetProps {
  iri: string;
  ontologyId?: string;
  api: string;

  entityType:
      | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
      | "individual"
      | "property"
      | string;
  colorFirst?:
    | "primary"
    | "accent"
    | "success"
    | "warning"
    | "danger"
    | "ghost"
    | "text"
    | "subdued"
    | string;
  colorSecond?: string;
  /**
   * This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'
   */
  parameter?: string
}

const NO_SHORTFORM = "No short form available.";

function BreadcrumbWidget(props: BreadcrumbWidgetProps) {
  const { api, ontologyId, iri, entityType, colorFirst, colorSecond, parameter } = props;
  const fixedEntityType = entityType == "class" ? "term" : entityType
  const olsApi = new OlsApi(api);

  const {
    data: ontologyJSON,
    isLoading: isLoading,
    isSuccess: isSuccess,
  } = useQuery([api, "short_form", fixedEntityType, ontologyId, iri, parameter], () => { return getPreferredOntologyJSON(olsApi, fixedEntityType, ontologyId, iri, parameter); });

  return (
      <>
        {isLoading && <EuiLoadingSpinner size="s"></EuiLoadingSpinner>}
        {isSuccess &&
            <span>
              {
                  !props.ontologyId && !ontologyJSON["is_defining_ontology"] &&
                  <EuiFlexItem>
                    <EuiText size={"s"}>
                      <i>Defining ontology not available </i>
                      <EuiIconTip type={"iInCircle"}
                                  color={"subdued"}
                                  content={`Showing occurence inside ${ontologyJSON["ontology_name"]} instead.`}
                      >
                      </EuiIconTip>
                    </EuiText>
                  </EuiFlexItem>
              }
              <EuiBadge color={colorFirst || "primary"}>{ontologyJSON['ontology_name'].toUpperCase()}</EuiBadge>
              {" > "}
              <EuiBadge color={colorSecond || "success"}>{ontologyJSON['short_form'] ? ontologyJSON['short_form'].toUpperCase() : NO_SHORTFORM}</EuiBadge>
            </span>
        }
      </>
  );
}
export { BreadcrumbWidget };
