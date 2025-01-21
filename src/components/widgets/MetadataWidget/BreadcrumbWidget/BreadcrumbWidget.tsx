import React from "react";
import {EuiLoadingSpinner, EuiProvider} from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import { getErrorMessageToDisplay } from "../../../../app/util";
import {BreadcrumbWidgetProps} from "../../../../app/types";
import {isEntity} from "../../../../model/ModelTypeCheck";
import { BreadcrumbPresentation } from "./BreadcrumbPresentation";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import ReactDOM from "react-dom";
import "../../../../style/ts4nfdiBreadcrumbStyle.css";

function BreadcrumbWidget(props: BreadcrumbWidgetProps) {
  const { api, ontologyId, iri, entityType, colorFirst, colorSecond, parameter , useLegacy, onNavigateToOntology, className} = props;
  const olsApi = new OlsApi(api);
  const finalClassName = className || "ts4nfdi-breadcrumb-style";

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery(
    ["breadcrumb", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return await olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy);
    }
  );

  return (
    <>
      {isLoading && <EuiLoadingSpinner size={"s"}/>}
      {isSuccess && data && isEntity(data) &&
        <BreadcrumbPresentation
          ontologyName={data.getOntologyId()}
          shortForm={data.getShortForm()}
          ontologyId={ontologyId || data.getOntologyId()}
          colorFirst={colorFirst}
          colorSecond={colorSecond}
          onNavigateToOntology={onNavigateToOntology}
          className={finalClassName}
        />
      }
      {isError &&
          <BreadcrumbPresentation
              ontologyName={props.ontologyId?.toUpperCase() || (data && data.getOntologyId().toUpperCase()) || getErrorMessageToDisplay(error, "ontology")}
              shortForm={(data && data.getShortForm()) ? data.getShortForm().toUpperCase() : ""}
              ontologyId={ontologyId || (data ? data.getOntologyId() : "")}
              colorFirst={colorFirst || ((props.ontologyId || (data && data.getOntologyId())) ? "primary" : "danger")}
              colorSecond={colorSecond || ((data && data.getShortForm()) ? "success" : "danger")}
              onNavigateToOntology={onNavigateToOntology}
              className={finalClassName}
          />
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
              onNavigateToOntology={props.onNavigateToOntology}
          />
        </QueryClientProvider>
      </EuiProvider>
  )
}

export { BreadcrumbWidget, createBreadcrumb };
