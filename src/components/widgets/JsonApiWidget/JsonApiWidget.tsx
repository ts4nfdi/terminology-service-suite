import React from "react";
import {EuiButton} from "@elastic/eui";

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
export { JsonApiWidget };
