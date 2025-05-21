import React, { useState } from "react";
import { EuiFlexItem, EuiLink, EuiProvider, EuiButtonIcon } from "@elastic/eui";
import { IriWidgetProps } from "../../../../app/types";
import {
  isEuiButtonColor,
  isEuiLinkColor,
  isHexColor,
  isRgbColor,
} from "../../../../app/util";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "../../../../style/ts4nfdiStyles/ts4nfdiIriStyle.css";
import { createRoot, Root } from "react-dom/client";

function IriWidget(props: IriWidgetProps) {
  const {
    iri,
    iriText,
    color,
    externalIcon,
    urlPrefix,
    copyButton,
    className,
  } = props;
  const [copied, setCopied] = useState(false);
  const urlPrefixExist =
    typeof urlPrefix !== "undefined" && urlPrefix !== "" ? true : false;
  const iriUrl = urlPrefixExist ? urlPrefix + encodeURIComponent(iri) : iri;
  const finalClassName = className || "ts4nfdi-iri-style";

  const CopyLinkButton = () => {
    if (!copied) {
      return (
        <div className={finalClassName}>
          <EuiButtonIcon
            display="base"
            iconType="copy"
            key={"copy-btn"}
            style={{
              marginLeft: "5px",
              marginRight: "5px",
              color:
                color && (isHexColor(color) || isRgbColor(color)) ? color : "",
            }}
            color={color && isEuiButtonColor(color) ? color : undefined}
            onClick={() => {
              navigator.clipboard.writeText(iriUrl);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
          ></EuiButtonIcon>
        </div>
      );
    }
    return (
      <div className={finalClassName}>
        <EuiButtonIcon
          style={{
            marginLeft: "5px",
            color:
              color && (isHexColor(color) || isRgbColor(color)) ? color : "",
          }}
          display="base"
          iconType="check"
          key={"copy-btn"}
          color={color && isEuiLinkColor(color) ? color : undefined}
        ></EuiButtonIcon>
      </div>
    );
  };

  return (
    <EuiFlexItem grow={false}>
      <div className={finalClassName}>
        {copyButton === "left" && <CopyLinkButton />}
        <EuiLink
          href={iriUrl}
          target="_blank"
          style={{
            color:
              color && (isHexColor(color) || isRgbColor(color)) ? color : "",
          }}
          color={color && isEuiLinkColor(color) ? color : undefined}
          external={externalIcon}
        >
          {iriText ? iriText : iri}
        </EuiLink>
        {copyButton === "right" && <CopyLinkButton />}
      </div>
    </EuiFlexItem>
  );
}
const roots = new WeakMap<Element, Root>();
function createIri(
  props: IriWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedIriWidget {...props} />);
}

function WrappedIriWidget(props: IriWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <IriWidget
          iri={props.iri}
          iriText={props.iriText}
          color={props.color}
          externalIcon={props.externalIcon}
          urlPrefix={props.urlPrefix}
          copyButton={props.copyButton}
          className={props.className}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { IriWidget, createIri };
