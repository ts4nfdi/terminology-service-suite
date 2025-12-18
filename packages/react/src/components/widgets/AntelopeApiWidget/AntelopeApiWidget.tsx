"use client";

import React, {useState, useEffect } from "react";
import { EuiProvider } from "@elastic/eui";
import { AntelopeApiWidgetProps } from "../../../app/types";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

function AntelopeApiWidget(props: AntelopeApiWidgetProps) {
  const { threshold, searchTerm, language } = props;
  const [ annotation, updateAnnotation ] = useState([])

  useEffect( () => {
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
        updateAnnotation(result);
        return result;
      } catch (error) {
        console.error('Error:', error);
      }
  };
  postData({ threshold, text: searchTerm, language })
  }, [threshold, searchTerm, language])

  return (
        <div dangerouslySetInnerHTML={{__html: annotation.html}}></div>

    );
}

function WrappedAntelopeApiWidget(props: AntelopeApiWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <AntelopeApiWidget
          threshold={props.threshold}
          searchTerm={props.searchTerm}
          language={props.language}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { AntelopeApiWidget, WrappedAntelopeApiWidget };
