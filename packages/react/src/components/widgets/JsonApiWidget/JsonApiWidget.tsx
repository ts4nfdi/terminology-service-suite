"use client";

import React from "react";
import { EuiButton, EuiProvider } from "@elastic/eui";
import { JsonApiWidgetProps } from "../../../app/types";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

function JsonApiWidget(props: JsonApiWidgetProps) {
  const { apiQuery, buttonText, buttonSize } = props;

  return (
    <EuiButton
      href={apiQuery}
      target="_blank"
      size={buttonSize || "m"}
      data-testid="json-api"
    >
      {buttonText}
    </EuiButton>
  );
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
  );
}

export { JsonApiWidget, WrappedJsonApiWidget };
