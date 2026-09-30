"use client";

import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsThingApi } from "../../../api/ols/OlsThingApi";
import { TermDepictionWidgetProps } from "../../../app/";
import { Thing } from "../../../model/interfaces";
import { TermDepictionPresentation } from "./TermDepictionPresentation";

function TermDepictionWidget(
  props: TermDepictionWidgetProps,
): React.JSX.Element {
  const { api, iri, ontologyId, useLegacy } = props;
  const olsApi = new OlsThingApi(api);

  const { data, isLoading, isLoadingError, error } = useQuery<Thing>(
    ["termDepiction", api, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getThingObject(
        iri,
        "class",
        encodeURIComponent(encodeURIComponent(ontologyId)),
        "",
        useLegacy,
      );
    },
  );

  return (
    <TermDepictionPresentation
      depictionUrls={data?.getDepictionUrl()}
      isLoading={isLoading}
      error={isLoadingError ? error : undefined}
    />
  );
}

function WrappedTermDepictionWidget(
  props: TermDepictionWidgetProps,
): React.JSX.Element {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <TermDepictionWidget
          api={props.api}
          iri={props.iri}
          ontologyId={props.ontologyId}
          useLegacy={props.useLegacy}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { TermDepictionWidget, WrappedTermDepictionWidget };
