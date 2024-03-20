import React from "react";
import {EuiLoadingSpinner, EuiProvider, EuiText} from "@elastic/eui";
import { OlsApi } from "../../../../../api/OlsApi";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import { getErrorMessageToDisplay } from "../../../../../utils/helper";
import { CrossRefWidgetProps } from "../../../../../utils/types";
import { Thing } from "../../../../../model/interfaces";
import { isEntity } from "../../../../../model/ModelTypeCheck";
import { CrossRefTabPresentation } from "./CrossRefTabPresentation";
import Reified from "../../../../../model/Reified";
import ReactDOM from "react-dom";

function CrossRefTabWidget(props: CrossRefWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId, useLegacy } = props;
  const olsApi = new OlsApi(api);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery<Thing>(
    ["metadata", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy);
    }
  );

  return (
    <>
      {isSuccess && data && isEntity(data) &&
        <CrossRefTabPresentation crossrefs={Reified.fromJson(data.getCrossReferences()).map((value) => {
          return value.value;
        })} />}
      {isLoading && <EuiLoadingSpinner />}
      {isError && <EuiText>{getErrorMessageToDisplay(error, "cross references")}</EuiText>}
    </>
  );
}

function createCrossRefTab(props: CrossRefWidgetProps, container: Element, callback?: ()=>void) {
    ReactDOM.render(WrappedCrossRefTabWidget(props), container, callback);
}

function WrappedCrossRefTabWidget(props: CrossRefWidgetProps) {
    const queryClient = new QueryClient();
    return (
        <EuiProvider colorMode="light">
            <QueryClientProvider client={queryClient}>
                <CrossRefTabWidget
                    iri={props.iri}
                    api={props.api}
                    ontologyId={props.ontologyId}
                    entityType={props.entityType}
                    parameter={props.parameter}
                    useLegacy={props.useLegacy}
                />
            </QueryClientProvider>
        </EuiProvider>
    )
}

export { CrossRefTabWidget, createCrossRefTab };
