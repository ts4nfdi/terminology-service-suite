import { EuiPanel } from "@elastic/eui";
import React, { useEffect } from "react";
import "@zbmed/ols-treeview"
import "../../../../../style/treestyles.css";
import {HierarchyWidgetProps} from "../../../../../utils/types";
import {asArray, pluralizeType} from "../../../../../app/util";

const HierarchyWidget = (props: HierarchyWidgetProps) => {

  useEffect(() => {
    const treeContainer = document.querySelector('#tree_container');
    (window as any)["OLSWidgets"].createEntityTree({
      iri: props.iri,
      ontologyId: props.ontologyId,
      apiUrl: props.api.substring(0, props.api.lastIndexOf("api")),
      entityType: (props.entityType ? pluralizeType(asArray(props.entityType)) : undefined) || "entities",
      onNavigateToEntity: props.onNavigateToEntity ? props.onNavigateToOntology : (ontologyId: string, entityType: string, iri: string) => {
        console.log(`navigate to entity with ontologyId: ${ontologyId}, entityType: ${entityType}, iri: ${iri}`,);
      },
      onNavigateToOntology: props.onNavigateToOntology ? props.onNavigateToOntology : (ontologyId: string, entityType: string, iri: string) => {
        console.log(`navigate to ontology with ontologyId: ${ontologyId}, entityType: ${entityType}, iri: ${iri}`,);
      }
    }, treeContainer);
  });

  return (
    //minWidth required workaround until overlapping checkboxes are fixed in ols4-widgets
    <EuiPanel style={{minWidth: "600px"}}>
      <div id="tree_container"/>
    </EuiPanel>
  );
};

export { HierarchyWidget };
