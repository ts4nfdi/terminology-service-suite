import React from "react";
import {EuiBadge, EuiFlexItem, EuiLoadingSpinner, EuiText, EuiIconTip} from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import {useQuery} from "react-query";
import { getErrorMessageToDisplay, getPreferredOntologyJSON } from "../../../../utils/helper";
import {BreadcrumbWidgetProps} from "../../../../utils/types";

function BreadcrumbWidget(props: BreadcrumbWidgetProps) {
  const { api, ontologyId, iri, entityType, colorFirst, colorSecond, parameter } = props;
  const fixedEntityType = entityType == "class" ? "term" : entityType
  const olsApi = new OlsApi(api);

  const {
    data: ontologyJSON,
    isLoading: isLoading,
    isSuccess: isSuccess,
    isError: isError,
    error: error,
  } = useQuery([api, "short_form", fixedEntityType, ontologyId, iri, parameter], () => { return getPreferredOntologyJSON(olsApi, fixedEntityType, ontologyId, iri, parameter); });

  return (
      <>
        {isLoading &&
            <span>
                <EuiBadge color={colorFirst || ((props.ontologyId) ? "primary" : "warning")}>{props.ontologyId?.toUpperCase() || <EuiLoadingSpinner size={"s"}></EuiLoadingSpinner>}</EuiBadge>
              {" > "}
              <EuiBadge color={colorSecond || "warning"}>{<EuiLoadingSpinner size={"s"}></EuiLoadingSpinner>}</EuiBadge>
            </span>
        }
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
                      />
                    </EuiText>
                  </EuiFlexItem>
              }
              <EuiBadge color={colorFirst || "primary"}>{ontologyJSON['ontology_name'].toUpperCase()}</EuiBadge>
              {" > "}
              <EuiBadge color={colorSecond || "success"}>{ontologyJSON['short_form'] ? ontologyJSON['short_form'].toUpperCase() : "No short form available"}</EuiBadge>
            </span>
        }
        {isError &&
            <span>
                <EuiBadge color={colorFirst || ((props.ontologyId || (ontologyJSON && ontologyJSON['ontology_name'])) ? "primary" : "danger")}>{props.ontologyId?.toUpperCase() || (ontologyJSON && ontologyJSON['ontology_name']?.toUpperCase()) || getErrorMessageToDisplay(error, "ontology")}</EuiBadge>
                {" > "}
                <EuiBadge color={colorSecond || ((ontologyJSON && ontologyJSON['short_form']) ? "success" : "danger")}>{(ontologyJSON && ontologyJSON['short_form']) ? ontologyJSON['short_form'].toUpperCase() : getErrorMessageToDisplay(error, "short form")}</EuiBadge>
            </span>
        }
      </>
  );
}
export { BreadcrumbWidget };
