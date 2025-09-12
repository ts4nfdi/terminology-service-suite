"use client";

import React from "react";
import { useRef, useEffect, useState, useMemo } from "react";
import { GraphViewWidgetProps } from "../../../app/types";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import {
  EuiProvider,
  EuiLoadingSpinner,
  EuiText,
  EuiButton,
  EuiPanel,
  EuiSwitch,
  EuiPopover,
  EuiButtonEmpty,
} from "@elastic/eui";
import { OlsGraphNode, OlsGraphEdge } from "../../../app/types";
import { getErrorMessageToDisplay } from "../../../app/util";
import "../../../style/ts4nfdiStyles/ts4nfdiGraphStyle.css";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { JSTreeNode } from "../../../utils/olsApiTypes";


import {  useLoadGraph } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { MultiDirectedGraph} from 'graphology';
import {
  ControlsContainer,
  FullScreenControl,
  SigmaContainer,
  ZoomControl,
  useRegisterEvents,
  useSigma,
} from '@react-sigma/core';



function GraphViewWidget(props: GraphViewWidgetProps) {
  const {
    api,
    iri,
    ontologyId,
    rootWalk,
    className,
    hierarchy,
    edgeLabel,
    onNodeClick,
  } = props;


  const [selectedIri, setSelectedIri] = useState(iri);
  const [firstLoad, setFirstLoad] = useState(true);
  const [dbclicked, setDbclicked] = useState(false);
  const [rootWalkIsSelected, setRootWalkIsSelected] = useState(
    rootWalk ? rootWalk : false,
  );
  const [hierarchicalView, setHierarchicalView] = useState<boolean>(
    hierarchy ? true : false,
  );


  const settings = useMemo(
    () => ({
      allowInvalidContainer: true,
      renderEdgeLabels: true,
      defaultEdgeType: "arrow",
      edgeArrowSizeRatio: 5,
    }),
    [],
  );


  return (
      // <SigmaContainer style={{ height: "600px", width: "600px" }} graph={MultiDirectedGraph} settings={settings}>
      //   <MyGraph />
      // </SigmaContainer>
  <SigmaContainer style={{ height: "600px", width: "600px" }} settings={{ allowInvalidContainer: true }}>
    <MyGraph {...props}  />
    <GraphDragEvent />
    <ControlsContainer position={'bottom-right'}>
      <ZoomControl />
      <FullScreenControl />
    </ControlsContainer>
  </SigmaContainer>
  );
}




function MyGraph(props: GraphViewWidgetProps){

  const {
    api,
    iri,
    ontologyId,
    rootWalk,
    className,
    hierarchy,
    edgeLabel,
    onNodeClick,
  } = props;

  const loadGraph = useLoadGraph();

  const [selectedIri, setSelectedIri] = useState(iri);
  const [firstLoad, setFirstLoad] = useState(true);
  const [dbclicked, setDbclicked] = useState(false);
  const [rootWalkIsSelected, setRootWalkIsSelected] = useState(
    rootWalk ? rootWalk : false,
  );
  const [hierarchicalView, setHierarchicalView] = useState<boolean>(
    hierarchy ? true : false,
  );
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // needed for useQuery. without it the graph won't get updated on switching berween rootWalk=true and false.
  const [counter, setCounter] = useState(0);

  const olsEntityApi = new OlsEntityApi(api);
  const finalClassName = className || "ts4nfdi-graph-style";
  const subClassEdgeLabel =
    !edgeLabel || edgeLabel === "undefined" ? "is a" : edgeLabel;
  const onNodeClickCallbackIdProvided =
    typeof onNodeClick === "function" &&
    !onNodeClick.name.includes("mockConstructor");


  const { data, isLoading, isError, error } = useQuery(
    [
      "termGraph",
      api,
      selectedIri,
      ontologyId,
      rootWalkIsSelected,
      dbclicked,
      counter,
    ],
    async () => {
      if (rootWalkIsSelected && firstLoad && !hierarchicalView) {
        // only use this call on load. Double ckicking on a node should call the normal getTermRelations function.
        return {
          treeData: await olsEntityApi.getTermTree(
            { ontologyId: ontologyId, termIri: iri },
            { viewMode: "All", siblings: false },
          ),
        };
      } else if (rootWalkIsSelected && firstLoad && hierarchicalView) {
        let termTree = await olsEntityApi.getTermTree(
          { ontologyId: ontologyId, termIri: iri },
          { viewMode: "All", siblings: false },
        );

        let termRelation = await olsEntityApi.getTermRelations({
          ontologyId: ontologyId,
          termIri: selectedIri,
        });
        return { treeData: termTree, termRelations: termRelation };
      } else if (firstLoad || dbclicked) {
        return {
          termRelations: await olsEntityApi.getTermRelations({
            ontologyId: ontologyId,
            termIri: selectedIri,
          }),
        };
      }
    },
  );




  useEffect(() => {
    if(!data){
      return;
    }
    const graph = new MultiDirectedGraph();

    let i = 0;
    const radius = 5; // distance from center
    for(let node of data.termRelations["nodes"]){
      graph.addNode(node.iri, { x: 0, y: 0, label: node.label, size: 10, color: '#f00' });
      if(node.iri === selectedIri){
        graph.setNodeAttribute(selectedIri, "x", 0);
        graph.setNodeAttribute(selectedIri, "y", 0);
      }else{
        const angle = (2 * Math.PI * i) / data.termRelations["nodes"].length - 1;
        graph.setNodeAttribute(node.iri, "x", radius * Math.cos(angle));
        graph.setNodeAttribute(node.iri, "y", radius * Math.sin(angle));
      }
      i++;
    }

    for(let edge of data.termRelations["edges"]){
      graph.addEdge(edge.source, edge.target, { label: edge.label, color: '#888'});
    }


    //@ts-ignore
    // graph.forEachNode((node, attrs, i) => {
    //   const layer = node === "A" ? 1 : 0; // set layer for hierarchy layer
    //   const index = node === "B" ? 1 : 0; // set order for nodes in each layer in heirarchy
    //   graph.setNodeAttribute(node, "x", 200 + index * 200);
    //   graph.setNodeAttribute(node, "y", 100 + layer * 200);
    // });



    loadGraph(graph);
  }, [loadGraph, data]);

  return null;
}

function GraphDragEvent(){

 const registerEvents = useRegisterEvents();
  const sigma = useSigma();
  const [draggedNode, setDraggedNode] = useState<string | null>(null);

  useEffect(() => {
    // Register the events
    registerEvents({
      downNode: (e) => {
        setDraggedNode(e.node);
        sigma.getGraph().setNodeAttribute(e.node, 'highlighted', true);
      },
      // On mouse move, if the drag mode is enabled, we change the position of the draggedNode
      mousemovebody: (e) => {
        if (!draggedNode) return;
        // Get new position of node
        const pos = sigma.viewportToGraph(e);
        sigma.getGraph().setNodeAttribute(draggedNode, 'x', pos.x);
        sigma.getGraph().setNodeAttribute(draggedNode, 'y', pos.y);

        // Prevent sigma to move camera:
        e.preventSigmaDefault();
        e.original.preventDefault();
        e.original.stopPropagation();
      },
      // On mouse up, we reset the autoscale and the dragging mode
      mouseup: () => {
        if (draggedNode) {
          setDraggedNode(null);
          sigma.getGraph().removeNodeAttribute(draggedNode, 'highlighted');
        }
      },
      // Disable the autoscale at the first down interaction
      mousedown: () => {
        if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
      },
    });
  }, [registerEvents, sigma, draggedNode]);

  return null;
}

function WrappedGraphViewWidget(props: GraphViewWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <GraphViewWidget
          api={props.api}
          iri={props.iri}
          ontologyId={props.ontologyId}
          rootWalk={props.rootWalk}
          hierarchy={props.hierarchy}
          edgeLabel={props.edgeLabel}
          onNodeClick={props.onNodeClick}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { GraphViewWidget, WrappedGraphViewWidget };
