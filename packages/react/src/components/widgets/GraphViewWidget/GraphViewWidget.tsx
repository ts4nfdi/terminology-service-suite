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
import { MultiDirectedGraph } from 'graphology';
import {
  ControlsContainer,
  FullScreenControl,
  SigmaContainer,
  ZoomControl,
  useRegisterEvents,
  useSigma,
} from '@react-sigma/core';
import {dagre} from "graphology-layout/dagre";


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
    <MyGraph />
    <GraphDragEvent />
    <ControlsContainer position={'bottom-right'}>
      <ZoomControl />
      <FullScreenControl />
    </ControlsContainer>
  </SigmaContainer>
  );
}

function MyGraph(){
  const loadGraph = useLoadGraph();
  useEffect(() => {
    const graph = new MultiDirectedGraph();
    graph.addNode('A', { x: 0, y: 0, label: 'Node A', size: 10, color: '#f00' });
    graph.addNode('B', { x: 1, y: 0, label: 'Node B', size: 10, color: '#0f0' });
    graph.addNode('C', { x: 0.5, y: 1, label: 'Node C', size: 10, color: '#00f' });

    graph.addEdge('A', 'B', { label: 'REL_1', color: '#888'});
    graph.addEdge('B', 'C', { label: 'REL_2', color: '#888'});

    dagre.assign(graph, {
      rankdir: "TB", // top-to-bottom
      ranksep: 50,
      nodesep: 50
    });

    loadGraph(graph);
  }, [loadGraph]);

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
