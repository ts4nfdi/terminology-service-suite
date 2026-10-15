"use client";

import { EuiCard, EuiLoadingSpinner, EuiProvider, EuiText } from "@elastic/eui";
import { DataContentPresentationProps } from "../../../app";

type CountKey =
  | "getTotalOntologies"
  | "getNumClasses"
  | "getNumProperties"
  | "getNumIndividuals";

const zeroMessages: Record<CountKey, string> = {
  getTotalOntologies: "No ontologies or terminologies",
  getNumClasses: "No terms",
  getNumProperties: "No properties",
  getNumIndividuals: "No individuals",
};

const unavailableMessages: Record<CountKey, string> = {
  getTotalOntologies: "Ontology count unavailable",
  getNumClasses: "Term count unavailable",
  getNumProperties: "Property count unavailable",
  getNumIndividuals: "Individual count unavailable",
};

function isCountUnavailable(count: number | undefined | null): boolean {
  return count === undefined || count === null || Number.isNaN(count);
}

function CountItem({
  count,
  kind,
  singular,
  plural,
}: {
  count: number | undefined | null;
  kind: CountKey;
  singular: string;
  plural: string;
}) {
  if (isCountUnavailable(count)) {
    return <li style={{ fontStyle: "italic" }}>{unavailableMessages[kind]}</li>;
  }

  if (count === 0) {
    return <li style={{ fontStyle: "italic" }}>{zeroMessages[kind]}</li>;
  }

  return (
    <li>
      {count?.toLocaleString()} {count === 1 ? singular : plural}
    </li>
  );
}

function formatDateTime(timestamp: number): string {
  const iso = new Date(timestamp).toISOString(); // e.g. 2026-10-15T13:08:00.000Z
  const date = iso.slice(0, 10);
  const time = iso.slice(11);
  return time === "00:00:00.000Z" ? date : `${date} ${time.slice(0, 5)} UTC`;
}

function DataContentPresentation(
  props: DataContentPresentationProps,
): React.JSX.Element {
  const { isError, isLoading, dataUpdatedAt, ontologiesData, ...rest } = props;

  if (isError) {
    return (
      <EuiCard
        data-testid="data-content"
        title="Data Content"
        description={
          dataUpdatedAt ? `Updated ${formatDateTime(dataUpdatedAt)}` : ""
        }
        layout="horizontal"
      >
        <EuiText {...rest}>No data content available</EuiText>
      </EuiCard>
    );
  }

  return (
    <EuiCard
      data-testid="data-content"
      title="Data Content"
      description={
        dataUpdatedAt ? `Updated at ${formatDateTime(dataUpdatedAt)}` : ""
      }
      layout="horizontal"
    >
      <EuiText {...rest}>
        {isLoading ? (
          <EuiLoadingSpinner size="s" />
        ) : (
          <ul>
            <CountItem
              count={ontologiesData?.getTotalOntologies()}
              kind="getTotalOntologies"
              singular="ontology or terminology"
              plural="ontologies and terminologies"
            />
            <CountItem
              count={ontologiesData?.getNumClasses()}
              kind="getNumClasses"
              singular="term"
              plural="terms"
            />
            <CountItem
              count={ontologiesData?.getNumProperties()}
              kind="getNumProperties"
              singular="property"
              plural="properties"
            />
            <CountItem
              count={ontologiesData?.getNumIndividuals()}
              kind="getNumIndividuals"
              singular="individual"
              plural="individuals"
            />
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
