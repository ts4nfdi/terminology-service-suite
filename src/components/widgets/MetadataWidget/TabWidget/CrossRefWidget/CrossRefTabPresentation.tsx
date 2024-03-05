import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiLink, EuiPanel, EuiText } from "@elastic/eui";

export interface CrossRefPresentationProps {
  crossrefs: any[];
}

function CrossRefTabPresentation(props: CrossRefPresentationProps) {

  function renderCrossRefs(crossrefs: any) {
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
    <EuiPanel>
      <>
        <EuiFlexGroup style={{ padding: 7 }} direction="column">
          {renderCrossRefs(props.crossrefs)}
        </EuiFlexGroup>
      </>
    </EuiPanel>
  );
}

export { CrossRefTabPresentation };
