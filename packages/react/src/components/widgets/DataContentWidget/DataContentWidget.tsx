"use client";

import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsOntologyApi } from "../../../api/ols/OlsOntologyApi";
import { DataContentWidgetProps } from "../../../app";
import { Ontologies } from "../../../model/interfaces";
import { DataContentPresentation } from "./DataContentPresentation";

function DataContentWidget(props: DataContentWidgetProps): React.JSX.Element {
  const { api, parameter, ...rest } = props;
  const olsApi = new OlsOntologyApi(api);

  const {
    data: ontologiesData,
    isLoading,
    isError,
    dataUpdatedAt,
  } = useQuery<Ontologies>(["ontologiesData", api, parameter], async () => {
    return olsApi.getOntologiesData(props.parameter);
  });

  return (
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
        <DataContentWidget api={props.api} parameter={props.parameter} />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { DataContentWidget, WrappedDataContentWidget };
