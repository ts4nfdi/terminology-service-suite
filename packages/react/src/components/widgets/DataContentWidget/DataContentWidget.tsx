"use client";

import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsOntologyApi } from "../../../api/ols/OlsOntologyApi";
import { DataContentWidgetProps } from "../../../app";
import { GATEWAY_API_MOD_ENDPOINT } from "../../../app/globals";
import { Ontologies } from "../../../model/interfaces";
import { DataContentPresentation } from "./DataContentPresentation";
import { useCollectionStatistics } from "./useCollectionStatistics";

function DataContentWidget(props: DataContentWidgetProps): React.JSX.Element {
  const { api, parameter, collectionId, ...rest } = props;
  const olsApi = new OlsOntologyApi(api);
  const statisticsApi = GATEWAY_API_MOD_ENDPOINT;

  const {
    data: ontologiesData,
    isLoading,
    isError,
    dataUpdatedAt,
  } = useQuery<Ontologies>(
    ["ontologiesData", api, parameter],
    async () => {
      return olsApi.getOntologiesData(props.parameter);
    },
    { enabled: !collectionId },
  );

  const collectionStatistics = useCollectionStatistics({
    statisticsApi,
    collectionId,
    enabled: !!collectionId,
  });

  return collectionId ? (
    <DataContentPresentation {...rest} {...collectionStatistics} />
  ) : (
    <DataContentPresentation
      {...rest}
      ontologiesData={ontologiesData}
      isLoading={isLoading}
      isError={isError}
      dataUpdatedAt={dataUpdatedAt}
    />
  );
}

function WrappedDataContentWidget(
  props: DataContentWidgetProps,
): React.JSX.Element {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <DataContentWidget
          api={props.api}
          parameter={props.parameter}
          collectionId={props.collectionId}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { DataContentWidget, WrappedDataContentWidget };
