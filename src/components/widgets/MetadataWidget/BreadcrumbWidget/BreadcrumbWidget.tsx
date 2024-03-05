import React from "react";
import {EuiBadge} from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import {useQuery} from "react-query";
import { getErrorMessageToDisplay } from "../../../../utils/helper";
import {BreadcrumbWidgetProps} from "../../../../utils/types";
import { Thing } from "../../../../model/interfaces";
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
  } = useQuery<Thing>(
    ["metadata", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy);
    }
  );

  return (
    <>
      {isSuccess && data && isEntity(data) &&
        <BreadcrumbPresentation
          isDefiningOntology={data.getIsDefiningOntology()}
          ontologyName={data.getOntologyId()}
          shortForm={data.getShortForm()}
          ontologyId={ontologyId}
        />
      }
      {isError && data && isEntity(data) &&
        <span>
                <EuiBadge
                  color={colorFirst || ((props.ontologyId || (data && data.getOntologyId())) ? "primary" : "danger")}>{props.ontologyId?.toUpperCase() || (data && data.getOntologyId()?.toUpperCase()) || getErrorMessageToDisplay(error, "ontology")}</EuiBadge>
          {" > "}
          <EuiBadge
            color={colorSecond || ((data && data.getShortForm()) ? "success" : "danger")}>{(data && data.getShortForm()) ? data.getShortForm().toUpperCase() : getErrorMessageToDisplay(error, "short form")}</EuiBadge>
            </span>
        }
      </>
  );
}
export { BreadcrumbWidget };
