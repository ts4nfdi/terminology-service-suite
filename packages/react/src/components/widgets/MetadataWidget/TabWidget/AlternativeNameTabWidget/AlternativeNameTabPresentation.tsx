import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiPanel,
  EuiProvider,
  EuiText,
} from "@elastic/eui";
import { useEffect } from "react";
import { AlternativeNameTabWidgetPresentationProps } from "../../../../../app/";
import { getErrorMessageToDisplay } from "../../../../../app/util";
import "../../../../../style/ts4nfdiStyles/ts4nfdiAltNameTabStyle.css";

function AlternativeNameTabPresentation(
  props: AlternativeNameTabWidgetPresentationProps,
) {
  const finalClassName = props.className || "ts4nfdi-altNameTab-style";

  /**
   * The message shown to the user stays short, so the details of the failure are
   * logged for whoever develops the host application.
   */
  useEffect(() => {
    if (props.error) {
      console.error("Loading the alternative names failed:", props.error);
    }
  }, [props.error]);

  function renderAltLabel() {
    if (props.isLoading) {
      return <EuiLoadingSpinner />;
    }

    if (props.error) {
      return (
        <EuiText>
          {getErrorMessageToDisplay(props.error, "alternative names")}
        </EuiText>
      );
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

function WrappedAlternativeNameTabPresentation(
  props: AlternativeNameTabWidgetPresentationProps,
) {
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <AlternativeNameTabPresentation {...props} />
    </EuiProvider>
  );
}

export {
  AlternativeNameTabPresentation,
  WrappedAlternativeNameTabPresentation,
};
