import React from "react";
import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { BreadcrumbWidget } from "./BreadcrumbWidget";
import { IriWidget } from "./IriWidget";
import { TitleWidget } from "./TitleWidget";
import { DescriptionWidget } from "./DescriptionWidget";
import { TabWidget } from "./TabWidget";

export interface MetadataWidgetProps {
  iri: string;
  ontologyID: string;
  api: string;
  objType:
    | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
    | "individual"
    | "property"
    | string;
}

function MetadataWidget(props: MetadataWidgetProps) {
  return (
    <EuiFlexGroup direction="column" style={{ maxWidth: 600 }}>
      <EuiFlexItem grow={false}>
        <span>
          <BreadcrumbWidget api={props.api} iri={props.iri} objType={props.objType} ontologyID={props.ontologyID}/>
        </span>
      </EuiFlexItem>
      <EuiFlexItem>
        <EuiFlexGroup direction="column">
          <EuiFlexItem>
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <IriWidget iri={props.iri} />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>

          <EuiFlexItem grow={false}>
            <TitleWidget iri={props.iri} ontologyID={props.ontologyID} api={props.api} objType={"term"} />
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiFlexItem>
      <EuiFlexItem>
        <DescriptionWidget iri={props.iri} ontologyID={props.ontologyID} api={props.api} objType={"term"} />
      </EuiFlexItem>
      <EuiFlexItem>
        <TabWidget
          iri={props.iri}
          ontologyID={props.ontologyID}
          api={props.api}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}
export { MetadataWidget };
