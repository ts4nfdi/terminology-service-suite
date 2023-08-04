import React from "react";
import {EuiFlexGroup, EuiFlexItem, EuiProvider} from "@elastic/eui";
import { BreadcrumbWidget } from "./BreadcrumbWidget";
import { IriWidget } from "./IriWidget";
import { TitleWidget } from "./TitleWidget";
import { DescriptionWidget } from "./DescriptionWidget";
import { TabWidget } from "./TabWidget";
import {QueryClient, QueryClientProvider} from "react-query";
import {AutocompleteWidget} from "../AutocompleteWidget";
import ReactDOM from "react-dom";

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

function createMetadata(props: MetadataWidgetProps, container: any, callback?: ()=>void) {
    ReactDOM.render(WrappedMetadataWidget(props), container, callback);
}

function WrappedMetadataWidget(props: MetadataWidgetProps) {
    const queryClient = new QueryClient();
    return (
        <EuiProvider colorMode="light">
            <QueryClientProvider client={queryClient}>
                <MetadataWidget
                    iri={props.iri}
                    ontologyId={props.ontologyId}
                    api={props.api}
                    entityType={props.entityType}
                    parameter={props.parameter}
                />
            </QueryClientProvider>
        </EuiProvider>
    )
}

export { MetadataWidget, createMetadata };
