import React from "react";
import {EuiLoadingSpinner, EuiProvider, EuiText} from "@elastic/eui";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import {OlsApi} from "../../../../api/OlsApi";
import {TabWidgetProps} from "../../../../app/types";
import { Entity } from "../../../../model/interfaces";
import { TabPresentation } from "./TabPresentation";
import { getErrorMessageToDisplay } from "../../../../app/util";
import {EntityTypeName, isEntity} from "../../../../model/ModelTypeCheck";
import ReactDOM from "react-dom";

function TabWidget(props: TabWidgetProps) {
  const { iri, api, ontologyId, entityType, parameter, useLegacy, hierarchyTab, crossRefTab, ontoInfoTab, altNamesTab, ...rest } = props;
  const olsApi = new OlsApi(api);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery<Entity>(
    ["tabdata", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy);
    }
  );

  function render(data: Entity) {
    return (
      <TabPresentation {...rest}
        data={data}
        iri={iri}
        api={api}
        useLegacy={useLegacy}
        entityType={data.getType() as EntityTypeName}
        ontologyId={ontologyId ? ontologyId : data.getOntologyId()}
        hierarchyTab={hierarchyTab}
        crossRefTab={crossRefTab}
        ontoInfoTab={ontoInfoTab}
        altNamesTab={altNamesTab}
      />
    );
  }

  return (
    <>
      {isLoading && <EuiLoadingSpinner />}
      {isError && <EuiText>{getErrorMessageToDisplay(error, "description")}</EuiText>}
      {isSuccess && data &&
        <>
          {isEntity(data) ? render(data) : null}
        </>
      }
    </>
  );
}

function createTab(props: TabWidgetProps, container: Element, callback?: ()=>void) {
  ReactDOM.render(WrappedTabWidget(props), container, callback);
}

function WrappedTabWidget(props: TabWidgetProps) {
  const queryClient = new QueryClient();
  return (
      <EuiProvider colorMode="light">
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
              ontoInfoTab={props.ontoInfoTab}
          />
        </QueryClientProvider>
      </EuiProvider>
  )
}

export { TabWidget, createTab };
