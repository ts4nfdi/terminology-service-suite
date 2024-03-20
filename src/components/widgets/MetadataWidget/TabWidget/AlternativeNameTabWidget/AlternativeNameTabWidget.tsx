import React from "react";
import {EuiLoadingSpinner, EuiProvider, EuiText} from "@elastic/eui";
import { OlsApi } from '../../../../../api/OlsApi'
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import { getErrorMessageToDisplay } from "../../../../../utils/helper";
import {AlternativeNameTabWidgetProps} from "../../../../../utils/types";
import { Thing } from "../../../../../model/interfaces";
import { isEntity } from "../../../../../model/ModelTypeCheck";
import { AlternativeNameTabPresentation } from "./AlternativeNameTabPresentation";
import ReactDOM from "react-dom";

function AlternativeNameTabWidget(props: AlternativeNameTabWidgetProps) {
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
        <AlternativeNameTabPresentation synonyms={data.getSynonyms().map(synonym => synonym.value)} />}
      {isLoading && <EuiLoadingSpinner />}
      {isError && <EuiText>{getErrorMessageToDisplay(error, "alternative names")}</EuiText>}
    </>
  );
}

function createAlternativeNameTab(props: AlternativeNameTabWidgetProps, container: any, callback?: ()=>void) {
    ReactDOM.render(WrappedAlternativeNameTabWidget(props), container, callback);
}

function WrappedAlternativeNameTabWidget(props: AlternativeNameTabWidgetProps) {
    const queryClient = new QueryClient();
    return (
        <EuiProvider colorMode="light">
            <QueryClientProvider client={queryClient}>
                <AlternativeNameTabWidget
                    iri={props.iri}
                    api={props.api}
                    ontologyId={props.ontologyId}
                    entityType={props.entityType}
                    parameter={props.parameter}
                />
            </QueryClientProvider>
        </EuiProvider>
    )
}

export { AlternativeNameTabWidget, createAlternativeNameTab };
