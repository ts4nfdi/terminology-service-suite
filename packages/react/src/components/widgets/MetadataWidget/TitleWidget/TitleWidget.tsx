import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { EuiProvider } from "@elastic/eui";
import { OlsApi } from "../../../../api/OlsApi";
import { TitleWidgetProps } from "../../../../app/types";
import { isOntology } from "../../../../model/ModelTypeCheck";
import { Thing } from "../../../../model/interfaces";
import { TitlePresentation } from "./TitlePresentation";
import ReactDOM from "react-dom";

function TitleWidget(props: TitleWidgetProps) {
  const {
    iri,
    ontologyId,
    api,
    titleText,
    thingType,
    parameter,
    useLegacy,
    defaultValue,
    className,
    onNavigateTo,
    href,
  } = props;
  const olsApi = new OlsApi(api);

  const { data, isLoading, isSuccess, isError, error } = useQuery<Thing>(
    ["titleData", api, parameter, thingType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getThingObject(
        iri,
        thingType,
        ontologyId,
        parameter,
        useLegacy,
      );
    },
  );

  return (
    <TitlePresentation
      title={
        data ? (isOntology(data) ? data.getName() : data.getLabel()) : null
      }
      titleText={titleText}
      defaultValue={defaultValue}
      className={className}
      isLoading={isLoading}
      error={isError ? error : null}
      iri={iri ? iri : data ? data.getIri() : null}
      onNavigateTo={onNavigateTo}
      ontologyId={
        ontologyId ? ontologyId : data ? data.getOntologyId() : undefined
      }
      thingType={thingType ? thingType : data ? data.getType() : undefined}
      href={href}
    />
  );
}

function WrappedTitleWidget(props: TitleWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <TitleWidget
          api={props.api}
          thingType={props.thingType}
          iri={props.iri}
          ontologyId={props.ontologyId}
          titleText={props.titleText}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          defaultValue={props.defaultValue}
          className={props.className}
          onNavigateTo={props.onNavigateTo}
          href={props.href}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { TitleWidget, WrappedTitleWidget };
