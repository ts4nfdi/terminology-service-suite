import {EuiPanel, EuiProvider} from "@elastic/eui";
import React, { useEffect } from "react";
import "@zbmed/ols-treeview"
import "../../../../../style/treestyles.css";
import {HierarchyWidgetOLSProps} from "../../../../../app/types";
import {pluralizeType} from "../../../../../app/util";
import {QueryClient, QueryClientProvider} from "react-query";
import ReactDOM from "react-dom";

const HierarchyWidgetOLS = (props: HierarchyWidgetOLSProps) => {

  useEffect(() => {
    const treeContainer = document.querySelector('#tree_container');
    (window as any)["OLSWidgets"].createEntityTree({
      iri: props.iri,
      ontologyId: props.ontologyId,
      apiUrl: props.api.substring(0, props.api.lastIndexOf("api")),
      entityType: (props.entityType ? pluralizeType(props.entityType, false) : undefined) || "entities",
      onNavigateToEntity: props.onNavigateToEntity ? props.onNavigateToEntity : (ontologyId: string, entityType: string, iri: string) => {
        console.log(`navigate to entity with ontologyId: ${ontologyId}, entityType: ${entityType}, iri: ${iri}`,);
      },
      onNavigateToOntology: props.onNavigateToOntology ? props.onNavigateToOntology : (ontologyId: string, entityType: string, iri: string) => {
        console.log(`navigate to ontology with ontologyId: ${ontologyId}, entityType: ${entityType}, iri: ${iri}`,);
      }
    }, treeContainer);
  }, [props.api, props.iri, props.ontologyId, props.entityType, props.onNavigateToEntity, props.onNavigateToOntology, "HierarchyWidgetOLS"]);

  return (
    //minWidth required workaround until overlapping checkboxes are fixed in ols4-widgets
    <EuiPanel style={{minWidth: "600px"}}>
      <div id="tree_container"/>
    </EuiPanel>
  );
};

function createHierarchyOLS(props: HierarchyWidgetOLSProps, container: Element, callback?: ()=>void) {
  ReactDOM.render(WrappedHierarchyWidgetOLS(props), container, callback);
}

function WrappedHierarchyWidgetOLS(props: HierarchyWidgetOLSProps) {
  const queryClient = new QueryClient();
  return (
      <EuiProvider colorMode="light">
        <QueryClientProvider client={queryClient}>
          <HierarchyWidgetOLS
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

export { HierarchyWidgetOLS, createHierarchyOLS };
