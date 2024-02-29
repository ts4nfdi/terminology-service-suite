import { EuiPanel } from "@elastic/eui";
import React, { useEffect } from "react";
import "@zbmed/ols-treeview";
import "../../../../../style/treestyles.css";
import { Entity, Ontology } from "../../../../../model/interfaces";

export interface HierarchyWidgetProps {
  iri?: string;
  ontologyId: string;
  api: string;
  entityType: "entities" | "classes" | "properties" | "individuals",
  onNavigateToEntity?: (ontology: Ontology, entity: Entity) => void,
  onNavigateToOntology?: (ontologyId: string, entity: Entity) => void
}

const HierarchyWidget = (props: HierarchyWidgetProps) => {

  useEffect(() => {
    const treeContainer = document.querySelector("#tree_container");
    (window as any)["OLSWidgets"].createEntityTree({
      iri: props.iri,
      ontologyId: props.ontologyId,
      apiUrl: props.api.substring(0, props.api.lastIndexOf("api")),
      entityType: props.entityType,
      onNavigateToEntity: (ontology: Ontology, entity: Entity) => {
        console.log(ontology as Ontology, entity as Entity);
      },
      onNavigateToOntology: (ontologyId: string, entity: Entity) => {
        console.log(ontologyId, entity as Entity);
      }
    }, treeContainer);
  });

  return (
    //minWidth required workaround until overlapping checkboxes are fixed in ols4-widgets
    <EuiPanel style={{ minWidth: "600px" }}>
      <div id="tree_container" />
    </EuiPanel>
  );
};

export { HierarchyWidget };
