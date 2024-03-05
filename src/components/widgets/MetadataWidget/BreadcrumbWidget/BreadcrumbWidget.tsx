import React from "react";
import {EuiBadge, EuiLoadingSpinner} from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import {useQuery} from "react-query";
import { getErrorMessageToDisplay } from "../../../../utils/helper";
import {BreadcrumbWidgetProps} from "../../../../utils/types";
import { isEntity } from "../../../../model/ModelTypeCheck";
import { BreadcrumbPresentation } from "./BreadcrumbPresentation";

function BreadcrumbWidget(props: BreadcrumbWidgetProps) {
  const { api, ontologyId, iri, entityType, colorFirst, colorSecond, parameter , useLegacy} = props;
  const olsApi = new OlsApi(api);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery(
    ["metadata", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy);
    }
  );

  return (
    <>
      {isLoading &&
          <span>
                <EuiBadge color={colorFirst || ((props.ontologyId) ? "primary" : "warning")}>{props.ontologyId?.toUpperCase() || <EuiLoadingSpinner size={"s"}/>}</EuiBadge>
            {" > "}
            <EuiBadge color={colorSecond || "warning"}>{<EuiLoadingSpinner size={"s"}/>}</EuiBadge>
          </span>
      }
      {isSuccess && data && isEntity(data) &&
        <BreadcrumbPresentation
          isDefiningOntology={data.getIsDefiningOntology()}
          ontologyName={data.getOntologyId()}
          shortForm={data.getShortForm()}
          ontologyId={ontologyId}
        />
      }
      {isError &&
          <span>
                <EuiBadge color={colorFirst || ((props.ontologyId || (data && data.getOntologyId())) ? "primary" : "danger")}>{props.ontologyId?.toUpperCase() || (data && data.getOntologyId().toUpperCase()) || getErrorMessageToDisplay(error, "ontology")}</EuiBadge>
            {" > "}
            <EuiBadge color={colorSecond || ((data && data.getShortForm()) ? "success" : "danger")}>{(data && data.getShortForm()) ? data.getShortForm().toUpperCase() : getErrorMessageToDisplay(error, "short form")}</EuiBadge>
            </span>
      }
      </>
  );
}
export { BreadcrumbWidget };
