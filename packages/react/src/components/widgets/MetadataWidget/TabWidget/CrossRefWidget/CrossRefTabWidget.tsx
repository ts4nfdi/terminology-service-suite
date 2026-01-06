"use client";

import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsEntityApi } from "../../../../../api/ols/OlsEntityApi";
import { CrossRefWidgetProps } from "../../../../../app/types";
import { Thing } from "../../../../../model/interfaces";
import { isEntity } from "../../../../../model/ModelTypeCheck";
import Reified from "../../../../../model/Reified";
import { CrossRefTabPresentation } from "./CrossRefTabPresentation";

function CrossRefTabWidget(props: CrossRefWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId, useLegacy, className } =
    props;
  const olsApi = new OlsEntityApi(api);

  const { data, isLoading, error } = useQuery<Thing>(
    ["crossRefTab", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getEntityObject(
        iri,
        entityType,
        ontologyId,
        parameter,
        useLegacy,
      );
    },
  );

  return (
    <div data-testid="cross-ref">
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
    </div>
  );
}

function WrappedCrossRefTabWidget(props: CrossRefWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <CrossRefTabWidget
          iri={props.iri}
          api={props.api}
          ontologyId={props.ontologyId}
          entityType={props.entityType}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          className={props.className}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { CrossRefTabWidget, WrappedCrossRefTabWidget };
