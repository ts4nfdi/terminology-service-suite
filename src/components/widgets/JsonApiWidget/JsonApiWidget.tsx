import React from "react";
import {EuiButton, EuiProvider} from "@elastic/eui";
import {QueryClient, QueryClientProvider} from "react-query";
import {AutocompleteWidget} from "../AutocompleteWidget";
import ReactDOM from "react-dom";

export interface JsonApiWidgetProps {
  apiQuery: string;
  buttonText: string;
  buttonSize?: "s" | "m";
}

function JsonApiWidget(props: JsonApiWidgetProps) {
  const { apiQuery, buttonText, buttonSize } = props;

  return (
    <EuiButton href={apiQuery} target="_blank" size={buttonSize || "m"}>{buttonText}</EuiButton>
  );
}

function createJsonApi(props: JsonApiWidgetProps, container: any, callback?: ()=>void) {
  ReactDOM.render(WrappedJsonApiWidget(props), container, callback);
}

function WrappedJsonApiWidget(props: JsonApiWidgetProps) {
  const queryClient = new QueryClient();
  return (
      <EuiProvider colorMode="light">
        <QueryClientProvider client={queryClient}>
          <JsonApiWidget
              apiQuery={props.apiQuery}
              buttonText={props.buttonText}
              buttonSize={props.buttonSize}
          />
        </QueryClientProvider>
      </EuiProvider>
  )
}

export { JsonApiWidget, createJsonApi };
