"use client";

import React from "react";
import { EuiLoadingSpinner, EuiProvider, EuiText } from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { getErrorMessageToDisplay } from "../../../../../app/util";
import { AlternativeNameTabWidgetProps } from "../../../../../app/types";
import { Thing } from "../../../../../model/interfaces";
import { isEntity } from "../../../../../model/ModelTypeCheck";
import { AlternativeNameTabPresentation } from "./AlternativeNameTabPresentation";
import ReactDOM from "react-dom";
import {OlsEntityApi} from "../../../../../api/ols/OlsEntityApi";

function AlternativeNameTabWidget(props: AlternativeNameTabWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId, useLegacy, className } =
    props;
  const olsApi = new OlsEntityApi(api);

  const { data, isLoading, error } = useQuery<Thing>(
    [
      "alternativeNameTab",
      api,
      parameter,
      entityType,
      iri,
      ontologyId,
      useLegacy,
    ],
    async () => {
      return olsApi.getEntityObject(
        iri,
        entityType,
        ontologyId,
        parameter,
        useLegacy
      );
    }
  );

  return (
    <AlternativeNameTabPresentation
      synonyms={
        data
          ? isEntity(data)
            ? data.getSynonyms().map((synonym) => synonym.value)
            : []
          : []
      }
      isLoading={isLoading}
      error={error}
      className={className}
    />
  );
}

function createAlternativeNameTab(
  props: AlternativeNameTabWidgetProps,
  container: Element,
  callback?: () => void
) {
  ReactDOM.render(WrappedAlternativeNameTabWidget(props), container, callback);
}

function WrappedAlternativeNameTabWidget(props: AlternativeNameTabWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <AlternativeNameTabWidget
          iri={props.iri}
          api={props.api}
          ontologyId={props.ontologyId}
          entityType={props.entityType}
          parameter={props.parameter}
          className={props.className}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { AlternativeNameTabWidget, createAlternativeNameTab };
