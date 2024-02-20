import React from "react";
import { EuiText } from "@elastic/eui";

export interface DescriptionPresentationProps {
  description: string,
  descText?: string
}


function DescriptionPresentation(props: DescriptionPresentationProps) {

  return (
    <>
      <EuiText>{props.descText || props.description}</EuiText>
    </>
  );
}

export { DescriptionPresentation };
