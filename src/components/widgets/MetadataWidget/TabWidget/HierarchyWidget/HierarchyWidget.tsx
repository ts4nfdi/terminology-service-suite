import { EuiPanel } from "@elastic/eui";
import React, { useEffect } from "react";
import "ols4-widgets";
import "./style/treestyles.css";


export interface HierarchyWidgetProps {
  iri?: string;
  ontologyId: string;
  api: string;
}

const HierarchyWidget = (props: HierarchyWidgetProps) => {

  useEffect(() => {
    const treeContainer = document.querySelector('#tree_container');
    (window as any)["OLSWidgets"].createEntityTree({
        ontologyId: props.ontologyId,
        apiUrl: props.api,
        iri: props.iri
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
