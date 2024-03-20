import React from "react";
import { EuiText } from "@elastic/eui";
import {DescriptionPresentationProps} from "../../../../utils/types";

function DescriptionPresentation(props: DescriptionPresentationProps) {
  const {descText, description, ...rest} = props;

  return (
    <>
      <EuiText {...rest}>{descText || description}</EuiText>
    </>
  );
}

export { DescriptionPresentation };
