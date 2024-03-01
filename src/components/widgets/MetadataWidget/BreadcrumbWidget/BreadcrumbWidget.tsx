import React from "react";
import {EuiBadge, EuiFlexItem, EuiLoadingSpinner, EuiText, EuiIconTip} from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import {useQuery} from "react-query";
import { getErrorMessageToDisplay } from "../../../../utils/helper";
import {BreadcrumbWidgetProps} from "../../../../utils/types";

function BreadcrumbWidget(props: BreadcrumbWidgetProps) {
  const { api, ontologyId, iri, entityType, colorFirst, colorSecond, parameter , useLegacy} = props;
  const fixedEntityType = entityType == "class" ? "term" : entityType
  const olsApi = new OlsApi(api);

  const {
    data: entity,
    isLoading: isLoading,
    isSuccess: isSuccess,
    isError: isError,
    error: error,
  } = useQuery([api, "short_form", fixedEntityType, ontologyId, iri, parameter, useLegacy], () => { return olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy); });

  return (
      <>
        {isLoading &&
            <span>
                <EuiBadge color={colorFirst || ((props.ontologyId) ? "primary" : "warning")}>{props.ontologyId?.toUpperCase() || <EuiLoadingSpinner size={"s"}></EuiLoadingSpinner>}</EuiBadge>
              {" > "}
              <EuiBadge color={colorSecond || "warning"}>{<EuiLoadingSpinner size={"s"}></EuiLoadingSpinner>}</EuiBadge>
            </span>
        }
        {isSuccess && entity &&
            <span>
              {
                  !props.ontologyId && !entity.isCanonical() &&
                  <EuiFlexItem>
                    <EuiText size={"s"}>
                      <i>Defining ontology not available </i>
                      <EuiIconTip type={"iInCircle"}
                                  color={"subdued"}
                                  content={`Showing occurence inside ${entity.getOntologyId()} instead.`}
                      />
                    </EuiText>
                  </EuiFlexItem>
              }
              <EuiBadge color={colorFirst || "primary"}>{entity.getOntologyId().toUpperCase()}</EuiBadge>
              {" > "}
              <EuiBadge color={colorSecond || "success"}>{entity.getShortForm() ? entity.getShortForm().toUpperCase() : "No short form available"}</EuiBadge>
            </span>
        }
        {isError &&
            <span>
                <EuiBadge color={colorFirst || ((props.ontologyId || (entity && entity.getOntologyId())) ? "primary" : "danger")}>{props.ontologyId?.toUpperCase() || (entity && entity.getOntologyId().toUpperCase()) || getErrorMessageToDisplay(error, "ontology")}</EuiBadge>
                {" > "}
                <EuiBadge color={colorSecond || ((entity && entity.getShortForm()) ? "success" : "danger")}>{(entity && entity.getShortForm()) ? entity.getShortForm().toUpperCase() : getErrorMessageToDisplay(error, "short form")}</EuiBadge>
            </span>
        }
      </>
  );
}
export { BreadcrumbWidget };
