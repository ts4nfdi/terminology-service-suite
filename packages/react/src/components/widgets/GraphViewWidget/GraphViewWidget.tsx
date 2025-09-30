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


import { useLoadGraph } from '@react-sigma/core';
import '@react-sigma/core/lib/style.css';
import { MultiDirectedGraph } from 'graphology';
import {
  ControlsContainer,
  FullScreenControl,
  SigmaContainer,
  ZoomControl,
  useRegisterEvents,
  useSigma
} from '@react-sigma/core';
import { useWorkerLayoutNoverlap } from "@react-sigma/layout-noverlap";


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
    <SigmaContainer style={{ height: "800px", width: "2000px" }} settings={settings} >
      <MyGraph {...props} />
      <GraphDragEvent />
      <ControlsContainer position={'bottom-right'}>
        <ZoomControl />
        <FullScreenControl />
      </ControlsContainer>
    </ SigmaContainer>
  );
}




function MyGraph(props: GraphViewWidgetProps) {

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

  // if (data && (firstLoad || dbclicked)) {
  //   let gData = data.termRelations;
  //   if (data.treeData && rootWalkIsSelected && firstLoad && !hierarchicalView) {
  //     gData = convertToOlsGraphFormat(data.treeData as JSTreeNode[], undefined);
  //   } else if (
  //     data.termRelations &&
  //     data.treeData &&
  //     rootWalkIsSelected &&
  //     firstLoad &&
  //     hierarchicalView
  //   ) {
  //     gData = convertToOlsGraphFormat(
  //       data.treeData as JSTreeNode[],
  //       data.termRelations,
  //     );
  //   }
  //
  //   if (firstLoad) {
  //     setFirstLoad(false);
  //   }
  //   if (dbclicked) {
  //     setDbclicked(false);
  //   }
  // }


  function converFlatlistToTree(listOfJsTreeNodes: Array<JSTreeNode>): JSTreeNode[] {
    let treeData: JSTreeNode[] = [];
    for (let node of listOfJsTreeNodes) {
      if (node.parent === "#") {
        treeData.push(node);
        continue;
      }
      for (let pn of listOfJsTreeNodes) {
        if (pn.id === node.parent) {
          if ("childrenList" in pn) {
            pn.childrenList!.push(node);
          } else {
            pn.childrenList = [node];
          }
          if ("parentList" in node) {
            //@ts-ignore
            node.parentList.push(pn);
          } else {
            node.parentList = [pn];
          }
        }
      }
    }
    return treeData;
  }


  function renderTreeAsGraph(
    listOfJsTreeNodes: Array<JSTreeNode>,
    nodeRelations?: { nodes: any[]; edges: any[] },
  ) {
    // used for converting the list of ancestors to the ols api graph endpoints format. to be consumed by GraphNode and GraphEdge classes constructor.
    // currently used in showing ancestors. Equivalent to is-a relation.

    let treeData = converFlatlistToTree(listOfJsTreeNodes);

    const graph = new MultiDirectedGraph();

    // let graphData: { nodes: any[]; edges: any[] } = { nodes: [], edges: [] };
    let q = [...treeData];
    let nextLayerQ = [];
    let height = 1;
    let indexInLayer = -1;
    let layerLength = q.length;
    while (true) {
      let node = q[0];
      indexInLayer += 1;
      q = q.slice(1);
      let x = (indexInLayer - (layerLength - 1)) / 2 * 600;
      let y = height * -800;
      if (!graph.hasNode(node.iri)) {
        graph.addNode(node.iri, { x: 0, y: 0, label: node.text, size: 10, color: '#f00' });
      }
      graph.setNodeAttribute(node.iri, "x", x);
      graph.setNodeAttribute(node.iri, "y", y);
      if (node.parentList && node.parentList.length !== 0) {
        node.parentList.forEach((pn) => {
          if (!graph.hasEdge(node.iri, pn.iri)) {
            graph.addEdge(node.iri, pn.iri, { label: subClassEdgeLabel, color: '#888', size: 3 });
          }
        });
      }

      if (node.childrenList && node.childrenList.length !== 0) {
        nextLayerQ.push(...node.childrenList);
      }
      if (q.length === 0 && nextLayerQ.length === 0) {
        break;
      } else if (q.length === 0) {
        height += 1;
        q.push(...nextLayerQ);
        indexInLayer = -1;
        nextLayerQ = [];
        layerLength = q.length;
      }
    }
    // if (nodeRelations) {
    //   // add the "has part" relation to the hierarchy
    //   let onlyHasPartRelations: { nodes: any[]; edges: any[] } = {
    //     nodes: [],
    //     edges: [],
    //   };
    //   for (let edge of nodeRelations["edges"]) {
    //     if (edge["label"] === "has part") {
    //       onlyHasPartRelations.edges.push(edge);
    //       onlyHasPartRelations.nodes.push(
    //         nodeRelations.nodes.find((node) => node.iri === edge.source),
    //       );
    //       onlyHasPartRelations.nodes.push(
    //         nodeRelations.nodes.find((node) => node.iri === edge.target),
    //       );
    //     }
    //   }
    //   graphData["nodes"] = graphData["nodes"].concat(
    //     onlyHasPartRelations["nodes"],
    //   );
    //   graphData["edges"] = graphData["edges"].concat(
    //     onlyHasPartRelations["edges"],
    //   );
    // }
    return graph;
  }


  function renderDefaultGraph() {
    const graph = new MultiDirectedGraph();
    if (!data) {
      return graph;
    }

    let i = 0;
    const radius = 5; // distance from center
    for (let node of data.termRelations["nodes"]) {
      graph.addNode(node.iri, { x: 0, y: 0, label: node.label, size: 10, color: '#f00' });
      if (node.iri === selectedIri) {
        graph.setNodeAttribute(selectedIri, "x", 0);
        graph.setNodeAttribute(selectedIri, "y", 0);
      } else {
        const angle = (2 * Math.PI * i) / data.termRelations["nodes"].length - 1;
        graph.setNodeAttribute(node.iri, "x", radius * Math.cos(angle));
        graph.setNodeAttribute(node.iri, "y", radius * Math.sin(angle));
      }
      i++;
    }

    for (let edge of data.termRelations["edges"]) {
      graph.addEdge(edge.source, edge.target, { label: subClassEdgeLabel, color: '#888', size: 3 });
    }
    return graph;
  }


  const { start, stop, kill } = useWorkerLayoutNoverlap({
    nodeMargin: 5,
    scaleNodes: 1.2,
    gridSize: 20,
    permittedExpansion: 1.1,
    speed: 1,
    maxIterations: 100,
    easing: "ease-out",
    duration: 2000,
  });




  useEffect(() => {
    if (!data) {
      return;
    }

    if (!hierarchicalView) {
      const graph = renderDefaultGraph();
      loadGraph(graph);
    } else {
      const graph = renderTreeAsGraph(data.treeData, undefined);
      loadGraph(graph);
    }
    start();
    return () => {
      stop();
      // kill();
    }

  }, [loadGraph, data]);

  return null;
}

function GraphDragEvent() {

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
