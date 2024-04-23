import React from "react";
import {EuiBadge, EuiLoadingSpinner, EuiProvider} from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import { getErrorMessageToDisplay } from "../../../../app/util";
import {BreadcrumbWidgetProps} from "../../../../app/types";
import { isEntity } from "../../../../model/ModelTypeCheck";
import { BreadcrumbPresentation } from "./BreadcrumbPresentation";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import ReactDOM from "react-dom";

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

function createBreadcrumb(props: BreadcrumbWidgetProps, container: Element, callback?:()=>void) {
  ReactDOM.render(WrappedBreadcrumbWidget(props), container, callback);
}

function WrappedBreadcrumbWidget(props: BreadcrumbWidgetProps) {
  const queryClient = new QueryClient();
  return (
      <EuiProvider colorMode="light">
        <QueryClientProvider client={queryClient}>
          <BreadcrumbWidget
              api={props.api}
              entityType={props.entityType}
              iri={props.iri}
              ontologyId={props.ontologyId}
              colorFirst={props.colorFirst}
              colorSecond={props.colorSecond}
              parameter={props.parameter}
              useLegacy={props.useLegacy}
          />
        </QueryClientProvider>
      </EuiProvider>
  )
}

export { BreadcrumbWidget, createBreadcrumb };
