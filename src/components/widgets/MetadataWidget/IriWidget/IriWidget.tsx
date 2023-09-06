import React from "react";
import { EuiFlexItem, EuiLink } from "@elastic/eui";

export interface IriWidgetProps {
  iri: string;
  iriText?: string;
  color?:
      | "primary"
      | "accent"
      | "success"
      | "warning"
      | "danger"
      | "ghost"
      | "text"
      | "subdued";
  parameter?: string
}

function IriWidget(props: IriWidgetProps) {
  const { iri, iriText, color } = props;

  return (
    <EuiFlexItem grow={false}>
      <div>
        <EuiLink href={iri} target="_blank" color={color}>
          {iriText ? iriText : iri}
        </EuiLink>
      </div>
    </EuiFlexItem>
  );
}

export { IriWidget };
