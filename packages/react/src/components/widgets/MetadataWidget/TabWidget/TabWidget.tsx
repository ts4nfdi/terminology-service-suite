"use client";

import { EuiLoadingSpinner, EuiProvider, EuiText } from "@elastic/eui";
import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsEntityApi } from "../../../../api/ols/OlsEntityApi";
import { TabWidgetProps } from "../../../../app/types";
import { getErrorMessageToDisplay } from "../../../../app/util";
import { Entity } from "../../../../model/interfaces";
import { EntityTypeName, isEntity } from "../../../../model/ModelTypeCheck";
import { TabPresentation } from "./TabPresentation";

function TabWidget(props: TabWidgetProps) {
  const {
    iri,
    api,
    ontologyId,
    entityType,
    parameter,
    useLegacy,
    hierarchyTab,
    crossRefTab,
    terminologyInfoTab,
    altNamesTab,
    showComparisonInputField = false,
    className,
    ...rest
  } = props;
  const olsApi = new OlsEntityApi(api);
  const finalClassName = className || "ts4nfdi-tab-style";

  const { data, isLoading, isSuccess, isError, error } = useQuery<Entity>(
    ["tabdata", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getEntityObject(
        iri,
        entityType,
        ontologyId,
        parameter,
        useLegacy,
      );
    },
  );

  const [targetIri, setTargetIri] = useState<string | undefined>(
    props.targetIri,
  );

  function render(data: Entity) {
    return (
      <div data-testid="tab">
        <TabPresentation
          {...rest}
          data={data}
          iri={iri}
          api={api}
          useLegacy={useLegacy}
          entityType={data.getType() as EntityTypeName}
          ontologyId={ontologyId ? ontologyId : data.getOntologyId()}
          hierarchyTab={hierarchyTab}
          crossRefTab={crossRefTab}
          terminologyInfoTab={terminologyInfoTab}
          altNamesTab={altNamesTab}
          entityRelationTab={props.entityRelationTab}
          entityInfoTab={props.entityInfoTab}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
          onNavigateToDisambiguate={props.onNavigateToDisambiguate}
          hierarchyPreferredRoots={props.hierarchyPreferredRoots}
          hierarchyKeepExpansionStates={props.hierarchyKeepExpansionStates}
          hierarchyShowSiblingsOnInit={props.hierarchyShowSiblingsOnInit}
          stopFullWidth={props.stopFullWidth}
          hideLegend={props.hideLegend}
          targetIri={targetIri}
          onTargetIriChange={setTargetIri}
          showComparisonInputField={props.showComparisonInputField}
          className={finalClassName}
        />
      </div>
    );
  }

  return (
    <>
      {isLoading && <EuiLoadingSpinner />}
      {isError && (
        <EuiText>{getErrorMessageToDisplay(error, "description")}</EuiText>
      )}
      {isSuccess && data && <>{isEntity(data) ? render(data) : null}</>}
    </>
  );
}

function WrappedTabWidget(props: TabWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <TabWidget
          iri={props.iri}
          api={props.api}
          ontologyId={props.ontologyId}
          entityType={props.entityType}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          altNamesTab={props.altNamesTab}
          hierarchyTab={props.hierarchyTab}
          crossRefTab={props.crossRefTab}
          terminologyInfoTab={props.terminologyInfoTab}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
          onNavigateToDisambiguate={props.onNavigateToDisambiguate}
          hierarchyPreferredRoots={props.hierarchyPreferredRoots}
          hierarchyKeepExpansionStates={props.hierarchyKeepExpansionStates}
          hierarchyShowSiblingsOnInit={props.hierarchyShowSiblingsOnInit}
          stopFullWidth={props.stopFullWidth}
          hideLegend={props.hideLegend}
          showComparisonInputField={props.showComparisonInputField}
          targetIri={props.targetIri}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { TabWidget, WrappedTabWidget };
