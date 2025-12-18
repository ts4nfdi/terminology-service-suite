"use client";

import React from "react";
import { EuiButton, EuiProvider } from "@elastic/eui";
import { AntelopeApiWidgetProps } from "../../../app/types";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import * as globals from "../../../app/globals";

function AntelopeApiWidget(props: AntelopeApiWidgetProps) {
  const { buttonText, threshold, searchTerm, language } = props;

  const postData = async (data: any) => {
    try {

      // use proxy (defined in main.ts)
      const response = await fetch('/antelope', { // Use the proxied path
      //const response = await fetch(globals.TIB_ANNOTATION_API_ENDPOINT + 'annotation/entitylinking/text?iconclass=true', { // Use the proxied path
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <EuiButton
      onClick={() => postData({ threshold, text: searchTerm, language })}
      target="_blank"
      size={"m"}
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
          threshold={props.threshold}
          searchTerm={props.searchTerm}
          language={props.language}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { AntelopeApiWidget, WrappedAntelopeApiWidget };
