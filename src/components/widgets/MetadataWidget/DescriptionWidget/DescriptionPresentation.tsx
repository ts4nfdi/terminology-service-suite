import React from "react";
import { EuiText } from "@elastic/eui";

export interface DescriptionPresentationProps {
  description: string,
  descText?: string
}


function DescriptionPresentation(props: DescriptionPresentationProps) {
  const {descText, description, ...rest} = props;

  return (
    <>
      <EuiText {...rest}>{descText || description}</EuiText>
    </>
  );
}

export { DescriptionPresentation };
