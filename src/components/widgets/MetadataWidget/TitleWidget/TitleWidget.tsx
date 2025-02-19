import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { EuiLoadingSpinner, EuiProvider, EuiText } from "@elastic/eui";
import { OlsApi } from "../../../../api/OlsApi";
import { getErrorMessageToDisplay } from "../../../../app/util";
import { TitleWidgetProps } from "../../../../app/types";
import { isOntology } from "../../../../model/ModelTypeCheck";
import { Thing } from "../../../../model/interfaces";
import { TitlePresentation } from "./TitlePresentation";
import ReactDOM from "react-dom";

const NO_TITLE = "No title available.";

function TitleWidget(props: TitleWidgetProps) {
  const {
    iri,
    ontologyId,
    api,
    titleText,
    thingType,
    parameter,
    useLegacy,
    defaultValue,
    className
  } = props;
  const olsApi = new OlsApi(api);
  const finalClassName = className || "default-class";

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery<Thing>(
    ["titleData", api, parameter, thingType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getThingObject(iri, thingType, ontologyId, parameter, useLegacy);
    }
  );


  return (
    <>
      {titleText &&
        <TitlePresentation
          titleText={titleText}
          className={finalClassName} />
      }

      {!titleText && isSuccess && data &&
        <TitlePresentation
          title={isOntology(data) ? data.getName() : data.getLabel()} className={finalClassName} />
      }

      {!titleText && isLoading && (defaultValue ? (
          <TitlePresentation titleText={defaultValue} className={finalClassName} />)
        : <EuiLoadingSpinner size="s" />)
      }

      {!titleText && isError && (defaultValue ?
        <TitlePresentation titleText={defaultValue} className={finalClassName} /> :
        <EuiText>{getErrorMessageToDisplay(error, "title")}</EuiText>)}
    </>
  );
}

function createTitle(props: TitleWidgetProps, container: Element, callback?: () => void) {
  ReactDOM.render(WrappedTitleWidget(props), container, callback);
}

function WrappedTitleWidget(props: TitleWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <TitleWidget
          api={props.api}
          thingType={props.thingType}
          iri={props.iri}
          ontologyId={props.ontologyId}
          titleText={props.titleText}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          defaultValue={props.defaultValue}
          className={props.className}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { TitleWidget, createTitle };
