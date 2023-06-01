import React from "react";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { BreadcrumbWidget } from "./BreadcrumbWidget";
import { IriWidget } from "./IriWidget";
import { TitleWidget } from "./TitleWidget";
import { DescriptionWidget } from "./DescriptionWidget";
import { TabWidget } from "./TabWidget";

export interface MetadataWidgetProps {
  iri: string;
  ontologyId: string;
  api: string;
  entityType:
    | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
    | "individual"
    | "property"
    | string;
  parameter?: string
}

function MetadataWidget(props: MetadataWidgetProps) {
    const { iri, api, ontologyId, entityType, parameter } = props;
  return (
    <EuiFlexGroup direction="column" style={{ maxWidth: 600 }}>
      <EuiFlexItem grow={false}>
        <span>
          <BreadcrumbWidget api={api} iri={iri} entityType={entityType} ontologyId={ontologyId} parameter={parameter}/>
        </span>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiFlexGroup direction="column">
          <EuiFlexItem>
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <IriWidget iri={iri} parameter={parameter}/>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>

          <EuiFlexItem grow={false}>
            <TitleWidget iri={iri} api={api} ontologyId={ontologyId} entityType={entityType} parameter={parameter} />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
      <EuiFlexItem>
        <DescriptionWidget iri={iri} api={api} ontologyId={ontologyId} entityType={entityType} parameter={parameter}/>
      </EuiFlexItem>
      <EuiFlexItem>
        <TabWidget
          iri={iri}
          ontologyId={ontologyId}
          api={api}
          parameter={parameter}
         entityType={entityType}/>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
export { MetadataWidget };
