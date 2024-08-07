import React from "react";
import { EuiText } from "@elastic/eui";
import {TitlePresentationProps} from "../../../../app/types";

function TitlePresentation(props: TitlePresentationProps) {

  return (
    <EuiText className={props.className}>{props.titleText || props.title}</EuiText>
  );
}

export { TitlePresentation };
