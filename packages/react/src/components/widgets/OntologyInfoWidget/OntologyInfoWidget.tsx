"use client";

import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsOntologyApi } from "../../../api/ols/OlsOntologyApi";
import { OntologyInfoWidgetProps } from "../../../app";
import { OntologyInfoPresentation } from "./OntologyInfoPresentation";

function OntologyInfoWidget(props: OntologyInfoWidgetProps): React.JSX.Element {
  const {
    ontologyId,
    api,
    parameter,
    hasTitle,
    useLegacy,
    showBadges,
    className,
    onNavigateToEntity,
    onNavigateToOntology,
    onNavigateToDisambiguate,
    width,
  } = props;
  const olsApi = new OlsOntologyApi(api);

  const {
    data: ontology,
    isLoading: isLoadingOntology,
    isError: isErrorOntology,
    error: errorOntology,
  } = useQuery(["ontologyInfo", props], () => {
    return olsApi.getOntologyObject(ontologyId, parameter, useLegacy);
  });

  return (
    <OntologyInfoPresentation
      ontology={ontology}
      isLoading={isLoadingOntology}
      error={isErrorOntology ? errorOntology : undefined}
      hasTitle={hasTitle}
      showBadges={showBadges}
      width={width}
      className={className}
      onNavigateToEntity={onNavigateToEntity}
      onNavigateToOntology={onNavigateToOntology}
      onNavigateToDisambiguate={onNavigateToDisambiguate}
    />
  );
}

function WrappedOntologyInfoWidget(
  props: OntologyInfoWidgetProps,
): React.JSX.Element {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <OntologyInfoWidget
          ontologyId={props.ontologyId}
          api={props.api}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          showBadges={props.showBadges}
          hasTitle={props.hasTitle}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
          onNavigateToDisambiguate={props.onNavigateToDisambiguate}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { OntologyInfoWidget, WrappedOntologyInfoWidget };
