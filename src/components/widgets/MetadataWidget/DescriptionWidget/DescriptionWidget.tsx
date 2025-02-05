import React from "react";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import {EuiLoadingSpinner, EuiProvider, EuiText} from "@elastic/eui";
import { OlsApi } from "../../../../api/OlsApi";
import { getErrorMessageToDisplay } from "../../../../app/util";
import {DescriptionWidgetProps} from "../../../../app/types";
import { Thing } from "../../../../model/interfaces";
import { DescriptionPresentation } from "./DescriptionPresentation";
import ReactDOM from "react-dom";

const NO_DESCRIPTION = "No description available.";

function DescriptionWidget(props: DescriptionWidgetProps) {
  const {
    api,
    ontologyId,
    iri,
    descText,
    thingType,
    parameter,
    useLegacy,
    className,
    ...rest
  } = props;
  const olsApi = new OlsApi(api);

  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery<Thing>(
    ["description", api, parameter, thingType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getThingObject(iri, thingType, ontologyId, parameter, useLegacy);
    }
  );

  return (
    <DescriptionPresentation
      description={data ? data.getDescription() : NO_DESCRIPTION}
      descText={descText}
      className={className}
      isLoading={isLoading}
      error={isError ? error: null}
      {...rest}
    />
  );
}

function createDescription(props: DescriptionWidgetProps, container: Element, callback?:()=>void) {
  ReactDOM.render(WrappedDescriptionWidget(props), container, callback);
}

function WrappedDescriptionWidget(props: DescriptionWidgetProps) {
  const queryClient = new QueryClient();
  return (
      <EuiProvider colorMode="light">
        <QueryClientProvider client={queryClient}>
          <DescriptionWidget
              api={props.api}
              ontologyId={props.ontologyId}
              iri={props.iri}
              descText={props.descText}
              thingType={props.thingType}
              parameter={props.parameter}
              color={props.color}
              useLegacy={props.useLegacy}
              className={props.className}
          />
        </QueryClientProvider>
      </EuiProvider>
  )
}

export { DescriptionWidget, createDescription };
