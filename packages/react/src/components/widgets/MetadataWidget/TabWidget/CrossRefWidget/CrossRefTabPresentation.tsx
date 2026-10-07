import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiPanel,
  EuiProvider,
  EuiText,
} from "@elastic/eui";
import { useEffect } from "react";
import { CrossRefPresentationProps } from "../../../../../app/";
import { getErrorMessageToDisplay } from "../../../../../app/util";
import "../../../../../style/ts4nfdiStyles/ts4nfdiCrossRefStyle.css";

function CrossRefTabPresentation(props: CrossRefPresentationProps) {
  const finalClassName = props.className || "ts4nfdi-altNameTab-style";

  /**
   * The message shown to the user stays short, so the details of the failure are
   * logged for whoever develops the host application.
   */
  useEffect(() => {
    if (props.error) {
      console.error("Loading the cross references failed:", props.error);
    }
  }, [props.error]);

  function renderCrossRefs(crossrefs: any) {
    if (props.isLoading) {
      return <EuiLoadingSpinner />;
    }

    if (props.error) {
      return (
        <EuiText>
          {getErrorMessageToDisplay(props.error, "cross references")}
        </EuiText>
      );
    }

    if (crossrefs && crossrefs.length > 0) {
      return crossrefs?.map((item: any, index: any) => (
        <EuiFlexItem key={index}>{item}</EuiFlexItem>
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

function WrappedCrossRefTabPresentation(props: CrossRefPresentationProps) {
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <CrossRefTabPresentation {...props} />
    </EuiProvider>
  );
}

export { CrossRefTabPresentation, WrappedCrossRefTabPresentation };
