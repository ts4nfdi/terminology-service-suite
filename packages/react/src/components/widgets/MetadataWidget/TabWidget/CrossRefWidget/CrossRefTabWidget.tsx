import React from "react";
import { EuiLoadingSpinner, EuiProvider, EuiText } from "@elastic/eui";
import { OlsApi } from "../../../../../api/OlsApi";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { getErrorMessageToDisplay } from "../../../../../app/util";
import { CrossRefWidgetProps } from "../../../../../app/types";
import { Thing } from "../../../../../model/interfaces";
import { isEntity } from "../../../../../model/ModelTypeCheck";
import { CrossRefTabPresentation } from "./CrossRefTabPresentation";
import Reified from "../../../../../model/Reified";
import ReactDOM from "react-dom";

function CrossRefTabWidget(props: CrossRefWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId, useLegacy, className } =
    props;
  const olsApi = new OlsApi(api);

  const { data, isLoading, error } = useQuery<Thing>(
    ["crossRefTab", api, parameter, entityType, iri, ontologyId, useLegacy],
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
    <CrossRefTabPresentation
      crossrefs={
        data
          ? isEntity(data)
            ? Reified.fromJson(data.getCrossReferences()).map((value) => {
                return value.value;
              })
            : []
          : []
      }
      isLoading={isLoading}
      error={error}
      className={className}
    />
  );
}

export { CrossRefTabWidget };
