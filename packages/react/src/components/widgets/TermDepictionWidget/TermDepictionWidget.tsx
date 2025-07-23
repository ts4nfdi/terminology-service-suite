import React from "react";
import ReactDOM from "react-dom";
import { TermDepictionWidgetProps } from "../../../app/types";
import { OlsApi } from "../../../api/OlsApi";
import { Thing } from "../../../model/interfaces";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import {
  EuiLoadingSpinner,
  EuiProvider,
  EuiText,
  EuiImage,
} from "@elastic/eui";
import { getErrorMessageToDisplay } from "../../../app/util";
import "@google/model-viewer";


function TermDepictionWidget(props: TermDepictionWidgetProps) {
  const { api, iri, ontologyId, useLegacy } = props;
  const olsApi = new OlsApi(api);

  const { data, isLoading, isSuccess, isError, error } = useQuery<Thing>(
    ["termDepiction", api, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getThingObject(iri, "class", ontologyId, "", useLegacy);
    }
  );

  return (
    <>
      {isLoading && <EuiLoadingSpinner size="s" />}
      {isSuccess && data && data.getDepictionUrl().length !== 0 && (
        <>
          {data.getDepictionUrl().map((url: string) => {
            if (url.includes(".glb")) {
              return (
                <model-viewer
                  style={{ width: '300px', height: '300px', display: 'inline-block' }}
                  src={url}
                  shadow-intensity="1"
                  camera-controls
                  touch-action="pan-y"
                />
              )
            }
            return (
              <>
                <EuiImage
                  size="m"
                  hasShadow
                  allowFullScreen
                  alt={url}
                  src={url}
                />
                <p>
                  <small>Click to expand.</small>
                </p>
              </>
            )

          })}
        </>
      )}
      {isError && (
        <EuiText>{getErrorMessageToDisplay(error, "depiction")}</EuiText>
      )}
    </>
  );
}

function WrappedTermDepictionWidget(props: TermDepictionWidgetProps) {
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
