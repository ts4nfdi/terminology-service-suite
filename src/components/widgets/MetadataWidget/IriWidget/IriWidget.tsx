import React from "react";
import { EuiFlexItem, EuiLink } from "@elastic/eui";
import {IriWidgetProps} from "../../../../utils/types";
import {isHexColor, isRgbColor} from "../../../../app/util";

function IriWidget(props: IriWidgetProps) {
  const { iri, iriText, color } = props;

  return (
    <EuiFlexItem grow={false}>
      <div>
        <EuiLink href={iri} target="_blank" style={{color: color && (isHexColor(color) || isRgbColor(color)) ? color : ""}} color={color}>
          {iriText ? iriText : iri}
        </EuiLink>
      </div>
    </EuiFlexItem>
  );
}

export { IriWidget };
