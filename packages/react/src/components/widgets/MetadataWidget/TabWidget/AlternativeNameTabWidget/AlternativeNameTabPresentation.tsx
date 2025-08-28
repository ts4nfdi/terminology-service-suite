import React from "react";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiPanel,
  EuiText,
} from "@elastic/eui";
import { AlternativeNameTabWidgetPresentationProps } from "../../../../../app/types";
import { getErrorMessageToDisplay } from "../../../../../app/util";
import "../../../../../style/ts4nfdiStyles/ts4nfdiAltNameTabStyle.css";

function AlternativeNameTabPresentation(
  props: AlternativeNameTabWidgetPresentationProps,
) {
  const finalClassName = props.className || "ts4nfdi-altNameTab-style";

  function renderAltLabel() {
    if (props.isLoading) {
      return <EuiLoadingSpinner />;
    }

    if (props.error) {
      <EuiText>
        {getErrorMessageToDisplay(props.error, "alternative names")}
      </EuiText>;
    }
    if (props.synonyms && props.synonyms.length > 0) {
      return props.synonyms.map((value: string, index: number) => (
        <EuiFlexItem key={value + index}>{value}</EuiFlexItem>
      ));
    }
    return <EuiText>No alternative names exist.</EuiText>;
  }

  return (
    <div className={finalClassName}>
      <EuiPanel>
        <EuiFlexGroup style={{ padding: 10 }} direction="column">
          {renderAltLabel()}
        </EuiFlexGroup>
      </EuiPanel>
    </div>
  );
}

export { AlternativeNameTabPresentation };
