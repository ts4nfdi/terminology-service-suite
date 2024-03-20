import {EuiPanel, EuiProvider} from "@elastic/eui";
import React, { useEffect } from "react";
import "@zbmed/ols-treeview"
import "../../../../../style/treestyles.css";
import {HierarchyWidgetProps} from "../../../../../utils/types";
import {asArray, pluralizeType} from "../../../../../app/util";
import {QueryClient, QueryClientProvider} from "react-query";
import ReactDOM from "react-dom";

const HierarchyWidget = (props: HierarchyWidgetProps) => {

  useEffect(() => {
    const treeContainer = document.querySelector('#tree_container');
    (window as any)["OLSWidgets"].createEntityTree({
      iri: props.iri,
      ontologyId: props.ontologyId,
      apiUrl: props.api.substring(0, props.api.lastIndexOf("api")),
      entityType: (props.entityType ? pluralizeType(asArray(props.entityType)) : undefined) || "entities",
      onNavigateToEntity: props.onNavigateToEntity ? props.onNavigateToEntity : (ontologyId: string, entityType: string, iri: string) => {
        console.log(`navigate to entity with ontologyId: ${ontologyId}, entityType: ${entityType}, iri: ${iri}`,);
      },
      onNavigateToOntology: props.onNavigateToOntology ? props.onNavigateToOntology : (ontologyId: string, entityType: string, iri: string) => {
        console.log(`navigate to ontology with ontologyId: ${ontologyId}, entityType: ${entityType}, iri: ${iri}`,);
      }
    }, treeContainer);
  }, [props.api, props.iri, props.ontologyId, props.entityType, props.onNavigateToEntity, props.onNavigateToOntology, "hierarchyWidget"]);

  return (
    //minWidth required workaround until overlapping checkboxes are fixed in ols4-widgets
    <EuiPanel style={{minWidth: "600px"}}>
      <div id="tree_container"/>
    </EuiPanel>
  );
};

function createHierarchy(props: HierarchyWidgetProps, container: Element, callback?: ()=>void) {
  ReactDOM.render(WrappedHierarchyWidget(props), container, callback);
}

function WrappedHierarchyWidget(props: HierarchyWidgetProps) {
  const queryClient = new QueryClient();
  return (
      <EuiProvider colorMode="light">
        <QueryClientProvider client={queryClient}>
          <HierarchyWidget
              ontologyId={props.ontologyId}
              api={props.api}
              iri={props.iri}
              entityType={props.entityType}
              onNavigateToEntity={props.onNavigateToEntity}
              onNavigateToOntology={props.onNavigateToOntology}
          />
        </QueryClientProvider>
      </EuiProvider>
  )
}

export { HierarchyWidget, createHierarchy };
