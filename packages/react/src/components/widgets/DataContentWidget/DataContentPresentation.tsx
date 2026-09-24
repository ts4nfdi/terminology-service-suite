"use client";

import { EuiCard, EuiLoadingSpinner, EuiProvider, EuiText } from "@elastic/eui";
import { DataContentPresentationProps } from "../../../app";

function DataContentPresentation(
  props: DataContentPresentationProps,
): React.JSX.Element {
  const { isError, isLoading, dataUpdatedAt, ontologiesData, ...rest } = props;

  return (
    <EuiCard
      data-testid="data-content"
      title="Data Content"
      description={
        dataUpdatedAt
          ? `Updated ${new Date(dataUpdatedAt).toLocaleString()}`
          : ""
      }
      layout="horizontal"
    >
      <EuiText {...rest}>
        {isError && <EuiText>No data content available</EuiText>}
        {isLoading ? (
          <EuiLoadingSpinner size="s" />
        ) : (
          <ul>
            {ontologiesData?.getTotalOntologies() ? (
              <li>
                {ontologiesData?.getTotalOntologies().toLocaleString()}{" "}
                ontologies and terminologies
              </li>
            ) : (
              <li style={{ fontStyle: "italic" }}>
                ontology number not available
              </li>
            )}
            {ontologiesData?.getNumClasses() ? (
              <li>{ontologiesData?.getNumClasses().toLocaleString()} terms</li>
            ) : (
              <li style={{ fontStyle: "italic" }}>term number not available</li>
            )}
            {ontologiesData?.getNumProperties() ? (
              <li>
                {ontologiesData?.getNumProperties().toLocaleString()} properties
              </li>
            ) : (
              <li style={{ fontStyle: "italic" }}>
                property number not available
              </li>
            )}
            {ontologiesData?.getNumIndividuals() ? (
              <li>
                {ontologiesData?.getNumIndividuals().toLocaleString()}{" "}
                individuals
              </li>
            ) : (
              <li style={{ fontStyle: "italic" }}>
                individual number not available
              </li>
            )}
            {/* <li>Version {NOT_AVAILABLE}</li> */}{" "}
            {/* TODO how to get API version? */}
          </ul>
        )}
      </EuiText>
    </EuiCard>
  );
}

/**
 * Brings its own EUI provider, the way the widgets do, so the card also renders
 * inside a plain host application. It performs no request of its own.
 */
function WrappedDataContentPresentation(
  props: DataContentPresentationProps,
): React.JSX.Element {
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <DataContentPresentation {...props} />
    </EuiProvider>
  );
}

export { DataContentPresentation, WrappedDataContentPresentation };
