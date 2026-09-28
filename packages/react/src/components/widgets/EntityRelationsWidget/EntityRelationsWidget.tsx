"use client";

import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { EntityRelationsWidgetProps } from "../../../app";
import { isClass } from "../../../model/ModelTypeCheck";
import { EntityRelationsPresentation } from "./EntityRelationsPresentation";

function EntityRelationsWidget(
  props: EntityRelationsWidgetProps,
): React.JSX.Element {
  const {
    api,
    iri,
    ontologyId,
    hasTitle,
    showBadges,
    entityType,
    parameter,
    onNavigateToEntity,
    onNavigateToOntology,
    onNavigateToDisambiguate,
    ...rest
  } = props;

  const olsApi = new OlsEntityApi(api);

  /**
   * Used to fetch an entities' data to be shown in different sections
   */
  const {
    data: entity,
    isLoading: isLoadingEntityRelation,
    isError: isErrorEntityRelation,
  } = useQuery(
    ["entityJson", api, iri, ontologyId, entityType, parameter, showBadges],
    async () => {
      return olsApi.getEntityObject(
        iri,
        entityType,
        ontologyId,
        parameter,
        false,
      ); // always use v2/ API
    },
  );

  /**
   * Used to fetch a classes instances to be shown in class instances section
   */
  const { data: instances, isLoading: isLoadingInstances } = useQuery({
    queryKey: ["instances", entity],
    queryFn: async () => {
      return entity && isClass(entity) && entity.hasDirectChildren()
        ? olsApi.getClassInstances(entity.getIri(), entity.getOntologyId())
        : [];
    },
    enabled: !!entity,
  });

  return (
    <EntityRelationsPresentation
      {...rest}
      entity={entity}
      instances={instances}
      isLoading={isLoadingEntityRelation || isLoadingInstances}
      isError={isErrorEntityRelation}
      hasTitle={hasTitle}
      entityType={entityType}
      showBadges={showBadges}
      onNavigateToEntity={onNavigateToEntity}
      onNavigateToOntology={onNavigateToOntology}
      onNavigateToDisambiguate={onNavigateToDisambiguate}
    />
  );
}

function WrappedEntityRelationsWidget(
  props: EntityRelationsWidgetProps,
): React.JSX.Element {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <EntityRelationsWidget
          api={props.api}
          iri={props.iri}
          ontologyId={props.ontologyId}
          hasTitle={props.hasTitle}
          entityType={props.entityType}
          parameter={props.parameter}
          showBadges={props.showBadges}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
          onNavigateToDisambiguate={props.onNavigateToDisambiguate}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { EntityRelationsWidget, WrappedEntityRelationsWidget };
