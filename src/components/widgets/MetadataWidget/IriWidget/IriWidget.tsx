import React from "react";
import {EuiFlexItem, EuiLink, EuiProvider} from "@elastic/eui";
import {IriWidgetProps} from "../../../../app/types";
import {isEuiLinkColor, isHexColor, isRgbColor} from "../../../../app/util";
import ReactDOM from "react-dom";
import {QueryClient, QueryClientProvider} from "react-query";

function IriWidget(props: IriWidgetProps) {
  const { iri, iriText, color, externalIcon } = props;

  return (
    <EuiFlexItem grow={false}>
      <div>
        <EuiLink 
          href={iri} 
          target="_blank" 
          style={{color: color && (isHexColor(color) || isRgbColor(color)) ? color : ""}} 
          color={color && isEuiLinkColor(color) ? color : undefined}
          external={externalIcon === "false" ? false : true}
          >
          {iriText ? iriText : iri}
        </EuiLink>
      </div>
    </EuiFlexItem>
  );
}

function createIri(props: IriWidgetProps, container: Element, callback?: ()=>void) {
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
                />
            </QueryClientProvider>
        </EuiProvider>
    )
}

export { IriWidget, createIri };
