import React from "react";
import { EuiText } from "@elastic/eui";
import {TitlePresentationProps} from "../../../../utils/types";

function TitlePresentation(props: TitlePresentationProps) {

  return (
    <EuiText>{props.titleText || props.title}</EuiText>
  );
}

export { TitlePresentation };
