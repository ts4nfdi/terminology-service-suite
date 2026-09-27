"use client";

import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { EntityInfoWidgetProps } from "../../../app";
import { EntityInfoPresentation } from "./EntityInfoPresentation";

function EntityInfoWidget(props: EntityInfoWidgetProps): React.JSX.Element {
  const {
    api,
    iri,
    ontologyId,
    hasTitle,
    entityType,
    parameter,
    showBadges,
    useLegacy,
    onNavigateToEntity,
    onNavigateToOntology,
    onNavigateToDisambiguate,
    ...rest
  } = props;

  const olsApi = new OlsEntityApi(api);

  const {
    data: entity,
    isLoading: isLoadingEntity,
    isError: isErrorEntity,
    error: errorEntity,
  } = useQuery(["entityInfo", props], () => {
    return olsApi.getEntityObject(
      iri,
      entityType,
      ontologyId,
      parameter,
      useLegacy,
    );
  });

  return (
    <EntityInfoPresentation
      {...rest}
      entity={entity}
      isLoading={isLoadingEntity}
      error={isErrorEntity ? errorEntity : undefined}
      api={api}
      iri={iri}
      hasTitle={hasTitle}
      entityType={entityType}
      showBadges={showBadges}
      useLegacy={useLegacy}
      onNavigateToEntity={onNavigateToEntity}
      onNavigateToOntology={onNavigateToOntology}
      onNavigateToDisambiguate={onNavigateToDisambiguate}
    />
  );
}

function WrappedEntitiyInfoWidget(
  props: EntityInfoWidgetProps,
): React.JSX.Element {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <EntityInfoWidget
          api={props.api}
          iri={props.iri}
          ontologyId={props.ontologyId}
          hasTitle={props.hasTitle}
          entityType={props.entityType}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          showBadges={props.showBadges}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
          onNavigateToDisambiguate={props.onNavigateToDisambiguate}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { EntityInfoWidget, WrappedEntitiyInfoWidget };
