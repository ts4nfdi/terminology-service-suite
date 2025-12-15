"use client";

import React from "react";
import { EuiButton, EuiProvider } from "@elastic/eui";
import { AntelopeApiWidgetProps } from "../../../app/types";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

function AntelopeApiWidget(props: AntelopeApiWidgetProps) {
  const { apiQuery, buttonText, buttonSize, threshold } = props;

  return (
    <EuiButton
      href={apiQuery}
      target="_blank"
      size={buttonSize || "m"}
      data-testid="antelope-api"
    >
      {buttonText}
    </EuiButton>
  );
}

function WrappedAntelopeApiWidget(props: AntelopeApiWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <AntelopeApiWidget
          apiQuery={props.apiQuery}
          buttonText={props.buttonText}
          buttonSize={props.buttonSize}
          threshold={props.threshold}
          searchTerm={props.searchTerm}
          language={props.language}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { AntelopeApiWidget, WrappedAntelopeApiWidget };
