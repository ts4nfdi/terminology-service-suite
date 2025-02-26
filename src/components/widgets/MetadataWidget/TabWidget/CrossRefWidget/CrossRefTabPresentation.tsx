import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiLoadingSpinner, EuiPanel, EuiText } from "@elastic/eui";
import {CrossRefPresentationProps} from "../../../../../app/types";
import { getErrorMessageToDisplay } from "../../../../../app/util";
import "../../../../../style/ts4nfdiStyles/ts4nfdiCrossRefStyle.css"

function CrossRefTabPresentation(props: CrossRefPresentationProps) {
  const finalClassName = props.className || "ts4nfdi-altNameTab-style";

  function renderCrossRefs(crossrefs: any) {
    if (props.isLoading) {
      return <EuiLoadingSpinner />;
    }

    if (props.error) {
      <EuiText>{getErrorMessageToDisplay(props.error, "cross references")}</EuiText>;
    }

    if (crossrefs && crossrefs.length > 0) {
      return crossrefs?.map((item: any, index: any) => (
        <EuiFlexItem key={index}>
          {item}
        </EuiFlexItem>
      ));
    }
    return <EuiText>No cross references exist.</EuiText>;
  }

  return (
    <div className={finalClassName}>
    <EuiPanel>
      <>
        <EuiFlexGroup style={{ padding: 7 }} direction="column">
          {renderCrossRefs(props.crossrefs)}
        </EuiFlexGroup>
      </>
    </EuiPanel>
      </div>
  );
}

export { CrossRefTabPresentation };
