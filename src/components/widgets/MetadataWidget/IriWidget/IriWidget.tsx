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
}

function IriWidget(props: IriWidgetProps) {
  const { iri, iriText, color } = props;

  return (
      <EuiFlexItem grow={false}>
        <div>
          {iriText ? (
              <EuiLink href={iriText} target="_blank" color={color}>
                {iriText}
              </EuiLink>
          ) : (
              <EuiLink href={iri} target="_blank" color={color}>
                {iri}
              </EuiLink>
          )}
        </div>
      </EuiFlexItem>
  );
}

export { IriWidget };
