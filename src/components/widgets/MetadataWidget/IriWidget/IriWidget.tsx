import React from "react";
import {EuiFlexItem, EuiLink, EuiProvider} from "@elastic/eui";
import {QueryClient, QueryClientProvider} from "react-query";
import {AutocompleteWidget} from "../../AutocompleteWidget";
import ReactDOM from "react-dom";

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

function createIri(props: IriWidgetProps, container: any, callback?: ()=>void) {
    ReactDOM.render(WrappedIriWidget(props), container, callback);
}

function WrappedIriWidget(props: IriWidgetProps) {
    const queryClient = new QueryClient();
    return (
        <EuiProvider colorMode="light">
            <QueryClientProvider client={queryClient}>
                <IriWidget
                    iri={props.iri}
                    iriText={props.iriText}
                    color={props.color}
                    parameter={props.parameter}
                />
            </QueryClientProvider>
        </EuiProvider>
    )
}

export { IriWidget, createIri };
