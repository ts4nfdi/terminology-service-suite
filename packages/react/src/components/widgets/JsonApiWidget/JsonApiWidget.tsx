import React from "react";
import { EuiButton, EuiProvider } from "@elastic/eui";
import { JsonApiWidgetProps } from "../../../app/types";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

function JsonApiWidget(props: JsonApiWidgetProps) {
  const { apiQuery, buttonText, buttonSize } = props;

  return (
    <EuiButton href={apiQuery} target="_blank" size={buttonSize || "m"}>
      {buttonText}
    </EuiButton>
  );
}

export { JsonApiWidget };
