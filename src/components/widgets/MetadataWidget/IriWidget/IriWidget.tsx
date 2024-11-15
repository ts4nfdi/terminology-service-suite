import React, {useState} from "react";
import {EuiFlexItem, EuiLink, EuiProvider, EuiButtonIcon} from "@elastic/eui";
import {IriWidgetProps} from "../../../../app/types";
import {isEuiLinkColor, isHexColor, isRgbColor} from "../../../../app/util";
import ReactDOM from "react-dom";
import {QueryClient, QueryClientProvider} from "react-query";

function IriWidget(props: IriWidgetProps) {       
  const { iri, iriText, color, externalIcon, urlPrefix, copyButton } = props;
  const [copied, setCopied] = useState(false);
  const urlPrefixExist = typeof(urlPrefix) !== "undefined" && urlPrefix !== "" ? true : false;
  const iriUrl = urlPrefixExist ? urlPrefix + encodeURIComponent(iri) : iri;

  const CopyLinkButton = () => {
    if (!copied) {
      return (
        <EuiButtonIcon 
          display="base"
          iconType="copy"                       
          key={"copy-btn"}
          style={{marginLeft: "5px", marginRight: "5px", color: color && (isHexColor(color) || isRgbColor(color)) ? color : ""}} 
          color={color && isEuiLinkColor(color) ? color : undefined}
          onClick={() => {                  
            navigator.clipboard.writeText(iriUrl);
            setCopied(true);
            setTimeout(() => {setCopied(false);}, 2000);                
          }}
          >            
        </EuiButtonIcon>
      );
    }
    return (
      <EuiButtonIcon 
        style={{marginLeft: "5px", color: color && (isHexColor(color) || isRgbColor(color)) ? color : ""}}   
        display="base" 
        iconType="check" 
        key={"copy-btn"}
        color={color && isEuiLinkColor(color) ? color : undefined}
        >
      </EuiButtonIcon>
    );    
  };

  return (
    <EuiFlexItem grow={false}>
      <div>
        {copyButton === 'left' && <CopyLinkButton />}
        <EuiLink 
          href={iriUrl} 
          target="_blank" 
          style={{color: color && (isHexColor(color) || isRgbColor(color)) ? color : ""}} 
          color={color && isEuiLinkColor(color) ? color : undefined}
          external={externalIcon}
          >
          {iriText ? iriText : iri}          
        </EuiLink>
        {copyButton === 'right' && <CopyLinkButton />}
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
                    externalIcon={props.externalIcon}
                    urlPrefix={props.urlPrefix}
                    copyButton={props.copyButton}
                />
            </QueryClientProvider>
        </EuiProvider>
    )
}

export { IriWidget, createIri };
