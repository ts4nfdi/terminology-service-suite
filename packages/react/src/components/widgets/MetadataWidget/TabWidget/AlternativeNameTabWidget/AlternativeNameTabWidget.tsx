import React from "react";
import { EuiLoadingSpinner, EuiProvider, EuiText } from "@elastic/eui";
import { OlsApi } from "../../../../../api/OlsApi";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { getErrorMessageToDisplay } from "../../../../../app/util";
import { AlternativeNameTabWidgetProps } from "../../../../../app/types";
import { Thing } from "../../../../../model/interfaces";
import { isEntity } from "../../../../../model/ModelTypeCheck";
import { AlternativeNameTabPresentation } from "./AlternativeNameTabPresentation";
import ReactDOM from "react-dom";

function AlternativeNameTabWidget(props: AlternativeNameTabWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId, useLegacy, className } =
    props;
  const olsApi = new OlsApi(api);

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

export { AlternativeNameTabWidget };
