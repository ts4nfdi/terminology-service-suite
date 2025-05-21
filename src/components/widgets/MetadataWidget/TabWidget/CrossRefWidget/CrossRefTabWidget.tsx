import React from "react";
import { EuiLoadingSpinner, EuiProvider, EuiText } from "@elastic/eui";
import { OlsApi } from "../../../../../api/OlsApi";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { getErrorMessageToDisplay } from "../../../../../app/util";
import { CrossRefWidgetProps } from "../../../../../app/types";
import { Thing } from "../../../../../model/interfaces";
import { isEntity } from "../../../../../model/ModelTypeCheck";
import { CrossRefTabPresentation } from "./CrossRefTabPresentation";
import Reified from "../../../../../model/Reified";
import ReactDOM from "react-dom";
import { createRoot, Root } from "react-dom/client";

function CrossRefTabWidget(props: CrossRefWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId, useLegacy, className } =
    props;
  const olsApi = new OlsApi(api);

  const { data, isLoading, error } = useQuery<Thing>(
    ["crossRefTab", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getEntityObject(
        iri,
        entityType,
        ontologyId,
        parameter,
        useLegacy
      );
    }
  );

  return (
    <CrossRefTabPresentation
      crossrefs={
        data
          ? isEntity(data)
            ? Reified.fromJson(data.getCrossReferences()).map((value) => {
                return value.value;
              })
            : []
          : []
      }
      isLoading={isLoading}
      error={error}
      className={className}
    />
  );
}
const roots = new WeakMap<Element, Root>();
function createCrossRefTab(
  props: CrossRefWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedCrossRefTabWidget {...props} />);
}

function WrappedCrossRefTabWidget(props: CrossRefWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <CrossRefTabWidget
          iri={props.iri}
          api={props.api}
          ontologyId={props.ontologyId}
          entityType={props.entityType}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          className={props.className}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { CrossRefTabWidget, createCrossRefTab };
