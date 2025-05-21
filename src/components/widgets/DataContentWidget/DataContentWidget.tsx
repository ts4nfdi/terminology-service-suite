import React from "react";
import { EuiCard, EuiLoadingSpinner, EuiProvider, EuiText } from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsApi } from "../../../api/OlsApi";
import { Ontologies } from "../../../model/interfaces";
import { AutocompleteWidgetProps, DataContentWidgetProps } from "../../../app/types";
import ReactDOM from "react-dom";
import { createRoot, Root } from "react-dom/client";

function DataContentWidget(props: DataContentWidgetProps) {
  const { api, parameter, ...rest } = props;
  const olsApi = new OlsApi(api);

  const {
    data: ontologiesData,
    isLoading,
    isError,
    dataUpdatedAt,
  } = useQuery<Ontologies>(["ontologiesData", api, parameter], async () => {
    return olsApi.getOntologiesData(props.parameter);
  });

  return (
    <>
      <EuiCard
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
                <li>
                  {ontologiesData?.getNumClasses().toLocaleString()} terms
                </li>
              ) : (
                <li style={{ fontStyle: "italic" }}>
                  term number not available
                </li>
              )}
              {ontologiesData?.getNumProperties() ? (
                <li>
                  {ontologiesData?.getNumProperties().toLocaleString()}{" "}
                  properties
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
    </>
  );
}
const roots = new WeakMap<Element, Root>();
function createDataContent(
  props: DataContentWidgetProps,
  container: any,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedDataContentWidget {...props} />);
}


function WrappedDataContentWidget(props: DataContentWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <DataContentWidget api={props.api} parameter={props.parameter} />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { DataContentWidget, createDataContent };
