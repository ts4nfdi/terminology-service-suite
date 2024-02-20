import React from "react";
import { EuiText } from "@elastic/eui";

export interface TitlePresentationProps {
  titleText?: string;
  title?: string
}

function TitlePresentation(props: TitlePresentationProps) {

  return (
    <EuiText>{props.titleText || props.title}</EuiText>
  );
}

export { TitlePresentation };
