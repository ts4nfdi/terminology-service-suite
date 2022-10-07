import React from "react";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { BreadcrumbWidget } from "./BreadcrumbWidget";
import { IriWidget } from "./IriWidget";
import { TermWidget } from "./TermWidget";
import { DescriptionWidget } from "./DescriptionWidget";
import { TabWidget } from "./TabWidget";

export interface MetadataWidgetProps {
  iri: string;
  api: string;
  linkToSelf: string;
}

function MetadataWidget(props: MetadataWidgetProps) {
  return (
    <EuiFlexGroup direction="column" style={{ maxWidth: 600 }}>
      <EuiFlexItem grow={false}>
        <span>
          <BreadcrumbWidget iri={props.iri} api={props.api} />
        </span>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiFlexGroup direction="column">
          <EuiFlexItem>
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <IriWidget iri={props.iri} api={props.api} />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>

          <EuiFlexItem grow={false}>
            <TermWidget iri={props.iri} api={props.api} />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
      <EuiFlexItem>
        <DescriptionWidget iri={props.iri} api={props.api} />
      </EuiFlexItem>
      <EuiFlexItem>
        <TabWidget
          iri={props.iri}
          api={props.api}
          linkToSelf={props.linkToSelf}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
export { MetadataWidget };
