import React from "react";
import {
  EuiLoadingSpinner,
  EuiProvider,
  EuiIcon,
} from "@elastic/eui";
import { OlsEntityApi } from "../../../../api/ols/OlsEntityApi";
import { BreadcrumbWidgetProps } from "../../../../app";
import { isEntity } from "../../../../model/ModelTypeCheck";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { BreadcrumbPresentation } from "./BreadcrumbPresentation/BreadcrumbPresentation";
import Badge from "../../../helperComponents/Badge";

function BreadcrumbWidget(props: BreadcrumbWidgetProps) {
  const {
    api,
    ontologyId,
    iri,
    entityType,
    colorFirst,
    colorSecond,
    parameter,
    useLegacy,
    onNavigateToOntology,
    className,
  } = props;
  const olsApi = new OlsEntityApi(api);

  const { data, isLoading, isSuccess, isError, error } = useQuery(
    ["breadcrumb", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return await olsApi.getEntityObject(
        iri,
        entityType,
        ontologyId,
        parameter,
        useLegacy,
      );
    },
  );

  return (
    <div data-testid="breadcrumb">
      {isLoading && (
        <span>
          <Badge
            onClick={() => {
                if (typeof props.onNavigateToOntology === "function" && props.ontologyId)
                    props.onNavigateToOntology(props.ontologyId, undefined, undefined);
            }}
            color={colorFirst || (props.ontologyId ? "primary" : "warning")}
          >
            {props.ontologyId ? props.ontologyId.toUpperCase() : <EuiLoadingSpinner size={"s"} />}
          </Badge>
          &nbsp;
          <EuiIcon type="arrowRight" />
          &nbsp;
          <Badge color={colorSecond || "warning"}>
              {<EuiLoadingSpinner size={"s"} />}
          </Badge>
        </span>
      )}
      {isSuccess && data && isEntity(data) && (
        <BreadcrumbPresentation
          shortForm={data.getShortForm()}
          ontologyId={ontologyId || data.getOntologyId()}
          colorFirst={colorFirst}
          colorSecond={colorSecond}
          onNavigateToOntology={onNavigateToOntology}
          className={className}
        />
      )}
      {isError && (
        <BreadcrumbPresentation
          shortForm={
            data && data.getShortForm() ? data.getShortForm().toUpperCase() : ""
          }
          ontologyId={ontologyId || (data ? data.getOntologyId() : "")}
          colorFirst={
            colorFirst ||
            (props.ontologyId || (data && data.getOntologyId())
              ? "primary"
              : "danger")
          }
          colorSecond={
            colorSecond || (data && data.getShortForm() ? "success" : "danger")
          }
          onNavigateToOntology={onNavigateToOntology}
          className={className}
        />
      )}
    </div>
  );
}

function WrappedBreadcrumbWidget(props: BreadcrumbWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
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
  );
}

export { BreadcrumbWidget, WrappedBreadcrumbWidget };
