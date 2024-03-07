import React from "react";
import {EuiButton} from "@elastic/eui";
import {JsonApiWidgetProps} from "../../../utils/types";

function JsonApiWidget(props: JsonApiWidgetProps) {
  const { apiQuery, buttonText, buttonSize } = props;

  return (
    <EuiButton href={apiQuery} target="_blank" size={buttonSize || "m"}>{buttonText}</EuiButton>
  );
}
export { JsonApiWidget };
