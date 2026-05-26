"use client";

import {
  EuiButtonIcon,
  EuiIcon,
  EuiLoadingSpinner,
  EuiPanel,
  EuiPopover,
  EuiProvider,
  EuiText,
  EuiTextColor,
} from "@elastic/eui";
import { useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { DataSet } from "vis-data";
import { Network } from "vis-network";
import { GraphViewWidgetProps, OlsGraphNode } from "../../../app/types";
import { getErrorMessageToDisplay } from "../../../app/util";
import "../../../style/ts4nfdiStyles/ts4nfdiGraphStyle.css";
import { JSTreeNode } from "../../../utils/olsApiTypes";
import {
  GraphEdge,
  graphNetworkConfig,
  GraphNode,
  hierarchicalConfig,
} from "./GraphConfigs";
import {
  actionButtonsContainerStyle,
  fontSizeStyle,
  fullHeightStyle,
  fullScreenStyle,
  graphContainerStyle,
  guideMeStyle,
  legendItemStyle,
  legendStyle,
  margingLeftStyle,
  nothingToAddStyle,
  paddingStyle,
  paddingTopStyle,
  removeButtonStyle,
  removeWarningMessageStyle,
  resetButtonStyle,
  widgetContainerStyle,
} from "./styles";
import {
  GraphFetchData,
  VisGraphData,
  VisGraphEdge,
  VisGraphNode,
} from "./types";
import {
  convertFlatListToTreeStructure,
  fetchHierarchyModeData,
  fetchMultiIriHierarchyModeData,
  fetchNormalModeData,
  fetchRootWalkModeData,
} from "./utils";
import {
  COMMON_NODES_BG_COLOR,
  DEFAULT_CLASSNAME,
  DEFAULT_HIERARCHY_DIRECTION,
  DEFAULT_NODE_BG_COLOR,
  EXCLUSIVE_TO_TARGET_IRI_COLOR,
  HAS_PART_EDGE_LABEL,
  NODE_TEXT_COLOR,
  SOURCE_NODE_BG_COLOR,
  SUBCLASS_OF_EDGE_LABEL,
  SUBCLASS_OF_URIS,
  TARGET_NODE_BG_COLOR,
  ValidDirections,
} from "./vars";

function GraphViewWidget(props: GraphViewWidgetProps) {
  const {
    api,
    iri,
    irisList,
    ontologyId,
    rootWalk,
    className,
    hierarchy,
    hierarchyDirection,
    edgeLabel,
    onNodeClick,
    onNavigateTo,
    parameter,
    stopFullWidth,
    hideLegend,
  } = props;

  const shouldUseHierarchyLayout = !!(hierarchy || irisList);
  if (hierarchyDirection && ValidDirections.includes(hierarchyDirection)) {
    hierarchicalConfig["direction"] = hierarchyDirection;
  }

  const [selectedIri, setSelectedIri] = useState(iri);
  const [firstLoad, setFirstLoad] = useState(true);
  const [graphDataIsCalculated, setGraphDataIsCalculated] = useState(false);
  const [dbclicked, setDbclicked] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // needed for useQuery. without it the graph won't get updated on switching berween rootWalk=true and false.
  const [counter, setCounter] = useState(Math.floor(Math.random() * 100));
  const [dbClickCounter, setDbClickCounter] = useState(0);

  // for downloading the graph data as json.
  const [graphRawData, setGraphRawData] = useState<VisGraphData>({
    nodes: [],
    edges: [],
  });

  const [graphDataToRender, setGraphDataToRender] = useState<VisGraphData>({
    nodes: [],
    edges: [],
  });
  const [previousGraphNodeCount, setPreviousGraphNodeCount] = useState(0);
  const [previousGraphEdgeCount, setPreviousGraphEdgeCount] = useState(0);

  // track the node that is clicked
  const [clickedNodeIri, setClickedNodeIri] = useState<string>("");

  // track the doubleClicked node color to set for new expanded nodes
  const [dbClickedColor, setDbClickedColor] = useState<{
    bgColor: "";
    color: "";
  }>({ bgColor: "", color: "" });

  const [showNodeNotSelectedMessage, setShowNodeNotSelectedMessage] =
    useState<boolean>(false);
  const [showNothingToAddMessage, setShowNothingToAddMessage] =
    useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const [targetIri, setTargetIri] = useState<string>(props.targetIri ?? "");
  const [sourceLabel, setSourceLabel] = useState<string>(""); // main node label
  const [targetLabel, setTargetLabel] = useState<string>(""); // target node label (comparison)

  const finalClassName = className || DEFAULT_CLASSNAME;
  const subClassEdgeLabel =
    !edgeLabel || edgeLabel === "undefined" ? "is a" : edgeLabel;
  const onNodeClickCallbackIdProvided =
    typeof onNodeClick === "function" &&
    !onNodeClick.name.includes("actionHandler");

  const fetchQueryKey = irisList ? irisList.join("|") : iri;
  const { data, isLoading, isError, error } = useQuery(
    [
      "termGraph",
      api,
      ontologyId,
      fetchQueryKey,
      rootWalk,
      hierarchy,
      dbclicked,
      counter,
      dbClickCounter,
    ],
    async () => {
      let sourceIri = iri;
      if (dbclicked) {
        sourceIri = selectedIri;
      }
      if (irisList && firstLoad) {
        // this is for hierarchy mode with multiple iris when irisList is provided
        return await fetchMultiIriHierarchyModeData({
          api: api,
          iris: irisList,
          ontologyId: ontologyId,
          parameter: parameter,
        });
      } else if (rootWalk && (firstLoad || dbclicked) && !hierarchy) {
        // this is for rootWalk mode wihtout hierarchy view
        // only use this call on load. Double ckicking on a node should call the normal getTermRelations function.
        return await fetchRootWalkModeData({
          api: api,
          iri: sourceIri,
          ontologyId: ontologyId,
          targetIri: targetIri,
          dbClicked: dbclicked,
          parameter: parameter,
        });
      } else if (rootWalk && (firstLoad || dbclicked) && hierarchy) {
        // hierarchy mode: we need the term tree data and it's relation (for "has part" relation that is not part of the tree data )
        return await fetchHierarchyModeData({
          api: api,
          iri: sourceIri,
          ontologyId: ontologyId,
          targetIri: targetIri,
          dbClicked: dbclicked,
          parameter: parameter,
        });
      } else if (firstLoad || dbclicked) {
        // normal mode graph and,
        // when user double clicks a node --> fetch the clicked node relation
        return await fetchNormalModeData({
          api: api,
          iri: sourceIri,
          ontologyId: ontologyId,
          targetIri: targetIri,
          dbClicked: dbclicked,
          parameter: parameter,
        });
      }
    },
  );

  const networkNodes = useRef(new DataSet([]));
  const networkEdges = useRef(new DataSet([]));
  const graphNetwork = useRef({});
  const container = useRef(null);
  const fullScreenContainerRef = useRef(null);
  // kep a map between a node iri and it's color to avoid recalculating the color in case the node is removed and added again by the user
  const nodeColorMap = useRef<Map<string, string>>(new Map());

  if (shouldUseHierarchyLayout) {
    graphNetworkConfig["layout"]["hierarchical"] = hierarchicalConfig;
  }
  if (data && (firstLoad || dbclicked)) {
    let gDataForDownload: VisGraphData = { ...graphRawData };
    let gData = { ...graphDataToRender };
    if (!rootWalk && !hierarchy && !irisList) {
      addTermRelationsNodesToGraph(data);
      addTermRelationsEdgesToGraph(data);
      setGraphDataIsCalculated(true);
    } else if (
      data.treeData &&
      rootWalk &&
      (firstLoad || dbclicked) &&
      !hierarchy
    ) {
      convertToOlsGraphFormat(
        data.treeData,
        data.termRelations,
        data.targetTreeData,
        data.targetTermRelations,
      );
    } else if (
      data.termRelations &&
      data.treeData &&
      (rootWalk || irisList) &&
      (firstLoad || dbclicked) &&
      shouldUseHierarchyLayout
    ) {
      convertToOlsGraphFormat(
        data.treeData,
        data.termRelations,
        data?.targetTreeData,
        data?.targetTermRelations,
      );
    }

    if (firstLoad) {
      gDataForDownload = { nodes: [], edges: [] };
      setFirstLoad(false);
    }

    if (dbclicked) {
      setDbclicked(false);
    }
  }

  function addTermRelationsNodesToGraph(data: GraphFetchData) {
    let graphData = { ...graphDataToRender };
    let originalNodeCount = graphData.nodes.length;
    for (let n of data.termRelations?.nodes ?? []) {
      if (!graphData.nodes.find((gn) => gn.iri === n.iri)) {
        graphData.nodes.push(n);
      }
    }
    if (data.targetTermRelations) {
      // when targetIri is given for comparison
      for (let sn of data.targetTermRelations.nodes) {
        let existingNode = graphData.nodes.find((n) => n.iri === sn.iri);
        if (existingNode) {
          existingNode.isCommon = true;
        } else {
          sn.isCommon = false;
          sn.backgroundColor = EXCLUSIVE_TO_TARGET_IRI_COLOR;
          sn.color = NODE_TEXT_COLOR;
          graphData.nodes.push(sn);
        }
      }
    }
    if (originalNodeCount === graphData.nodes.length) {
      setShowNothingToAddMessage(true);
    }
  }

  function addTermRelationsEdgesToGraph(data: GraphFetchData) {
    let graphData = { ...graphDataToRender };
    for (let e of data.termRelations?.edges ?? []) {
      let existing = graphData.edges.find(
        (edge) => edge.source === e.source && edge.target === e.target,
      );
      if (existing) continue;
      if (SUBCLASS_OF_URIS.includes(e.uri!)) {
        e.label = SUBCLASS_OF_EDGE_LABEL;
      }
      graphData.edges.push(e);
    }
    if (data.targetTermRelations?.edges) {
      for (let se of data.targetTermRelations.edges) {
        let existing = graphData.edges.find(
          (edge) => edge.source === se.source && edge.target === se.target,
        );
        if (!existing) {
          graphData.edges.push(se);
        }
        if (!existing) {
          graphData.edges.push(se);
        }
      }
    }
  }

  function addAllGraphNodesToVisNetwork() {
    let graphNodesToAdd = [...graphDataToRender.nodes];
    let graphNodes: GraphNode[] = [];
    for (let node of graphNodesToAdd) {
      let gNode = new GraphNode(node);
      if (node.exclusiveToTargetIri) {
        gNode = new GraphNode(
          node,
          EXCLUSIVE_TO_TARGET_IRI_COLOR,
          NODE_TEXT_COLOR,
        );
      }
      if (!graphNodes.find((n) => n.id === gNode.id)) {
        if (
          gNode.id === iri ||
          (irisList && irisList.includes(gNode.id ?? ""))
        ) {
          setSourceLabel(gNode.label ?? "");
          gNode.color.background = SOURCE_NODE_BG_COLOR;
          gNode.font.color = NODE_TEXT_COLOR;
        } else if (!irisList && targetIri && gNode.id === targetIri) {
          setTargetLabel(gNode.label ?? "");
          gNode.color.background = TARGET_NODE_BG_COLOR;
          gNode.font.color = NODE_TEXT_COLOR;
        } else if (nodeColorMap.current.get(gNode.id!)) {
          // node has been removed and now added again. so it has to get the previous color to avoid re-calculation
          gNode.color.background = nodeColorMap.current.get(gNode.id!)!;
        } else if (
          dbclicked &&
          dbClickedColor.bgColor &&
          dbClickedColor.bgColor !== SOURCE_NODE_BG_COLOR
        ) {
          gNode.color.background = dbClickedColor.bgColor;
          gNode.font.color = NODE_TEXT_COLOR;
        }
        nodeColorMap.current.set(gNode.id ?? "", gNode.color.background);
        graphNodes.push(gNode);
      }
      if (node.isCommon && gNode.id !== iri && gNode.id !== targetIri) {
        gNode = new GraphNode((node = node), COMMON_NODES_BG_COLOR);
        let gNodeIndex = graphNodes.findIndex((n) => n.id === gNode.id);
        if (gNodeIndex !== -1) {
          graphNodes.splice(gNodeIndex, 1);
        }
        nodeColorMap.current.set(gNode.id ?? "", gNode.color.background);
        graphNodes.push(gNode);
      }
    }
    networkNodes.current.clear();
    //@ts-ignore
    networkNodes.current.add(graphNodes);
    // if (networkNodes.current.length === 0) {
    //   //@ts-ignore
    //   networkNodes.current.add(graphNodes);
    // } else {
    //   //@ts-ignore
    //   networkNodes.current.update(graphNodes);
    // }
    return true;
  }

  function addAllGraphEdgesToVisNetwork() {
    let edgesToAdd = [...graphDataToRender.edges];
    let graphEdges: GraphEdge[] = [];
    for (let edge of edgesToAdd) {
      let gEdge = new GraphEdge((edge = edge), edge.label);
      let dashed =
        SUBCLASS_OF_URIS.includes(edge.uri ?? "") || rootWalk ? false : true;
      gEdge.dashes = dashed;
      if (!graphEdges.find((e) => e.id === gEdge.id)) {
        if (!irisList && gEdge.id?.includes(iri) && rootWalk) {
          //@ts-ignore
          gEdge.color.color = "black";
        }
        graphEdges.push(gEdge);
      }
    }
    networkEdges.current.clear();
    //@ts-ignore
    networkEdges.current.add(graphEdges);
  }

  function convertToOlsGraphFormat(
    listOfJsTreeNodes: Array<JSTreeNode>,
    nodeRelations?: { nodes: any[]; edges: any[] },
    targetListOfJsTreeNodes?: Array<JSTreeNode>,
    targetNodeRelations?: { nodes: any[]; edges: any[] },
  ) {
    let graphData: VisGraphData = { nodes: [], edges: [] };
    let treeData = convertFlatListToTreeStructure(listOfJsTreeNodes);
    addTreeDataToGraphData(graphData, treeData);
    if (!dbclicked) {
      addHasPartRelationsToGraphData(graphData, nodeRelations);
    }
    if (!irisList && targetIri && targetListOfJsTreeNodes) {
      let targetTreeData = convertFlatListToTreeStructure(
        targetListOfJsTreeNodes,
      );
      addTreeDataToGraphData(graphData, targetTreeData, true);
      if (!dbclicked) {
        addHasPartRelationsToGraphData(graphData, targetNodeRelations, true);
      }
    }
    if (dbclicked) {
      let currentGraphData = { ...graphDataToRender };
      for (let node of graphData.nodes) {
        if (!currentGraphData.nodes.find((n) => n.iri === node.iri)) {
          currentGraphData.nodes.push(node);
        }
      }
      for (let edge of graphData.edges) {
        if (
          !currentGraphData.edges.find(
            (e) => e.source === edge.source && e.target === edge.target,
          )
        ) {
          currentGraphData.edges.push(edge);
        }
      }
      currentGraphData.edges = currentGraphData.edges.filter(
        (e) => !e.notOriginal,
      );
      setGraphDataToRender(currentGraphData);
    } else {
      setGraphDataToRender(graphData);
    }
    setGraphDataIsCalculated(true);
  }

  function addTreeDataToGraphData(
    graphData: VisGraphData,
    treeData: JSTreeNode[],
    istargetIri: boolean = false,
  ) {
    let q = [...treeData];
    let nextLayerNodes: JSTreeNode[] = [];
    let height = 1;
    let leftOverNodesFromtargetIri: OlsGraphNode[] = [];
    let originalGraphNodesCount = graphData.nodes.length;
    while (q.length) {
      let node = q[0];
      q = q.slice(1);
      let gnode: VisGraphNode = {
        iri: node.iri,
        label: node.text,
        level: height,
      };
      if (!istargetIri) {
        let existingNode = graphData.nodes.find((n) => n.iri === gnode.iri);
        if (!existingNode) {
          graphData.nodes.push(gnode);
        } else {
          // remove the existing node from the nodes map. This is because the node height has to be updated.
          networkNodes.current.remove(existingNode.iri as string);
          existingNode.level = height;
        }
      } else {
        let existingNode = graphData.nodes.find((n) => n.iri === gnode.iri);
        if (existingNode) {
          // in this case, the node is a common node: needs a common node color
          existingNode.isCommon = true;
          existingNode.backgroundColor = COMMON_NODES_BG_COLOR;
          existingNode.color = NODE_TEXT_COLOR;
          existingNode.level = height;
        } else {
          // otherwise the node is exclusive to the target iri. we add it to the graph with it's own color but
          // we do not add it at this point to graph data (we do it in the end of this funciton). reason is:
          // in ols tree structure a node may appears multiple times --> it conflicts with this function logic in
          // detecting the common nodes
          gnode.isCommon = false;
          gnode.backgroundColor = EXCLUSIVE_TO_TARGET_IRI_COLOR;
          gnode.color = NODE_TEXT_COLOR;
          gnode.exclusiveToTargetIri = true;
          if (!leftOverNodesFromtargetIri.find((n) => n.iri === gnode.iri)) {
            leftOverNodesFromtargetIri.push(gnode);
          }
        }
      }

      if (node.parentList && node.parentList.length !== 0) {
        node.parentList.forEach((pn) => {
          let edge = {
            source: node.iri,
            target: pn.iri,
            label: subClassEdgeLabel,
            uri: SUBCLASS_OF_URIS[0],
          };
          if (
            !graphData.edges.find(
              (e) => e.source === edge.source && e.target === edge.target,
            )
          ) {
            graphData.edges.push(edge);
          }
        });
      }

      if (node.childrenList?.length) {
        nextLayerNodes.push(...node.childrenList);
      }
      if (q.length === 0) {
        height += 1;
        q.push(...nextLayerNodes);
        nextLayerNodes = [];
      }
    }
    if (irisList) {
      transfromGraphDataToTree(graphData);
    }
    graphData.nodes = [...graphData.nodes, ...leftOverNodesFromtargetIri];
    if (originalGraphNodesCount === graphData.nodes.length) {
      setShowNothingToAddMessage(true);
    }
  }

  function transfromGraphDataToTree(graphData: VisGraphData) {
    // Transfer the graph data to tree. Used when irisList is given as input.

    let cleanedEdges: VisGraphEdge[] = [];
    for (let edge of graphData.edges) {
      let sourceNode = graphData.nodes.find(
        (node) => node.iri === edge.source,
      )!;
      let targetNode = graphData.nodes.find(
        (node) => node.iri === edge.target,
      )!;
      if (sourceNode.level! - targetNode.level! === 1) {
        cleanedEdges.push(edge);
      }
    }
    graphData.edges = cleanedEdges;
  }

  function addHasPartRelationsToGraphData(
    graphData: VisGraphData,
    nodeRelations?: VisGraphData,
    isTargetNode: boolean = false,
  ) {
    if (!nodeRelations) {
      return;
    }
    let bgColor = "";
    let color = "";
    if (isTargetNode) {
      bgColor = EXCLUSIVE_TO_TARGET_IRI_COLOR;
      color = NODE_TEXT_COLOR;
    }
    for (let edge of nodeRelations["edges"]) {
      if (edge["label"] === HAS_PART_EDGE_LABEL) {
        graphData.edges.push(edge);
        let sourceNode = nodeRelations.nodes.find(
          (node) => node.iri === edge.source,
        )!;
        sourceNode.isCommon = false;
        sourceNode.backgroundColor = bgColor;
        sourceNode.color = color;
        graphData.nodes.push(sourceNode);
        let targetNode = nodeRelations.nodes.find(
          (node) => node.iri === edge.target,
        )!;
        targetNode.isCommon = false;
        targetNode.backgroundColor = bgColor;
        targetNode.color = color;
        graphData.nodes.push(targetNode);
      }
    }
  }

  function downloadGraphData() {
    const jsonString = JSON.stringify(graphRawData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `tss_graphData.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function reset() {
    networkNodes.current.clear();
    networkEdges.current.clear();
    setSelectedIri(iri);
    setFirstLoad(true);
    setDbclicked(false);
    setGraphDataToRender({ nodes: [], edges: [] });
    setCounter(Math.floor(Math.random() * 100));
  }

  function removeNodeFromGraph() {
    if (!clickedNodeIri) {
      setShowNodeNotSelectedMessage(true);
      setTimeout(() => {
        setShowNodeNotSelectedMessage(false);
      }, 3000);
      return;
    }
    setGraphDataIsCalculated(false);
    let graphData = { ...graphDataToRender };
    let incommingNodesIris = graphData.edges
      .filter((e) => e.target === clickedNodeIri)
      .map((e) => e.source);
    let outgoingNodesIris = graphData.edges
      .filter((e) => e.source === clickedNodeIri)
      .map((e) => e.target);
    let nodeToRemoveIndex = graphData.nodes.findIndex(
      (n) => n.iri === clickedNodeIri,
    );
    if (nodeToRemoveIndex !== -1) {
      graphData.nodes.splice(nodeToRemoveIndex, 1);
    }
    graphData.edges = graphData.edges.filter(
      (e) => e.source !== clickedNodeIri && e.target !== clickedNodeIri,
    );
    for (let iri of incommingNodesIris) {
      for (let oiri of outgoingNodesIris) {
        // create new edges upon removing the node from the graph
        let edge = {
          source: iri,
          target: oiri,
          label: SUBCLASS_OF_EDGE_LABEL,
          uri: SUBCLASS_OF_URIS[0],
          notOriginal: true,
        };
        if (
          !graphData.edges.find(
            (e) => e.source === edge.source && e.target === edge.target,
          )
        ) {
          graphData.edges.push(edge);
        }
      }
    }
    networkNodes.current.remove(clickedNodeIri);
    setGraphDataToRender(graphData);
    setGraphDataIsCalculated(true);

    //@ts-ignore
    graphNetwork.current.setOptions({ physics: true });
    //@ts-ignore
    setTimeout(() => {
      //@ts-ignore
      graphNetwork.current.setOptions({ physics: false });
    }, 4000);
  }

  useEffect(() => {
    if (
      !Object.keys(graphNetwork.current).length ||
      (previousGraphNodeCount === graphDataToRender.nodes.length &&
        previousGraphEdgeCount === graphDataToRender.edges.length)
    ) {
      return;
    }
    setGraphRawData(graphDataToRender);
    addAllGraphNodesToVisNetwork();
    addAllGraphEdgesToVisNetwork();
    setPreviousGraphNodeCount(graphDataToRender.nodes.length);
    setPreviousGraphEdgeCount(graphDataToRender.edges.length);
    //@ts-ignore
    graphNetwork.current.setOptions({ physics: true });
    setTimeout(() => {
      //@ts-ignore
      graphNetwork.current.setOptions({ physics: false });
    }, 4000);
  }, [graphDataToRender.nodes.length, graphDataToRender.edges.length]);

  useEffect(() => {
    if (!graphDataIsCalculated) {
      return;
    }
    setGraphRawData(graphDataToRender);
    addAllGraphNodesToVisNetwork();
    addAllGraphEdgesToVisNetwork();
    let graphData = {
      nodes: networkNodes.current,
      edges: networkEdges.current,
    };
    if (hierarchyDirection && ValidDirections.includes(hierarchyDirection)) {
      hierarchicalConfig["direction"] = hierarchyDirection;
    } else {
      hierarchicalConfig["direction"] = DEFAULT_HIERARCHY_DIRECTION;
    }
    if (shouldUseHierarchyLayout) {
      graphNetworkConfig["layout"]["hierarchical"] = hierarchicalConfig;
    } else {
      graphNetworkConfig["layout"]["hierarchical"] = { enabled: false };
    }
    let config = JSON.parse(JSON.stringify(graphNetworkConfig));
    graphNetwork.current = new Network(
      //@ts-ignore
      container.current,
      graphData,
      config,
    );

    // Stop physics after the initial layout so users can freely move nodes
    //@ts-ignore
    setTimeout(() => {
      //@ts-ignore
      graphNetwork.current.setOptions({ physics: false });
    }, 4000);
  }, [counter, graphDataIsCalculated]);

  useEffect(() => {
    if (graphNetwork.current && graphDataIsCalculated) {
      //@ts-ignore
      graphNetwork.current.on("click", function (params) {
        if (params.nodes.length > 0) {
          setClickedNodeIri(params.nodes[0]);
        } else {
          setClickedNodeIri("");
        }
      });
      //@ts-ignore
      graphNetwork.current.on("doubleClick", function (params) {
        if (params.nodes.length > 0) {
          let nodeIri = params.nodes[0];
          setDbClickedColor({
            //@ts-ignore
            bgColor: networkNodes.current.get(nodeIri)?.color?.background,
            //@ts-ignore
            color: networkNodes.current.get(nodeIri)?.font?.color,
          });
          setSelectedIri(nodeIri);
          if (onNodeClickCallbackIdProvided) {
            onNodeClick(nodeIri);
          } else {
            setDbClickCounter(Math.floor(Math.random() * 100));
            setDbclicked(true);
          }
        }
      });
    }
  }, [graphNetwork.current]);

  useEffect(() => {
    if (props.targetIri && targetIri !== props.targetIri) {
      setGraphDataIsCalculated(false);
      //@ts-ignore
      graphNetwork.current.destroy();
      networkNodes.current.clear();
      networkEdges.current.clear();
      setTargetIri(props.targetIri);
      setFirstLoad(true);
      setCounter(Math.floor(Math.random() * 100));
    }
  }, [props.targetIri]);

  useEffect(() => {
    setCounter(Math.floor(Math.random() * 100));
  }, [shouldUseHierarchyLayout, hierarchyDirection]);

  useEffect(() => {
    if (!showNothingToAddMessage) {
      return;
    }
    setTimeout(() => {
      setShowNothingToAddMessage(false);
    }, 3000);
  }, [showNothingToAddMessage]);

  const onButtonClick = () =>
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  const runFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullScreen(false);
    } else if (fullScreenContainerRef.current) {
      let graphContainerDiv = fullScreenContainerRef.current as HTMLDivElement;
      graphContainerDiv.requestFullscreen();
      setIsFullScreen(true);
    }
  };

  function renderLegend() {
    if (hideLegend || irisList) {
      return <></>;
    }

    return (
      <div style={legendStyle}>
        <ul style={paddingStyle("5px")}>
          <li style={{ ...paddingTopStyle("5px") }}>
            <div
              style={{
                backgroundColor: SOURCE_NODE_BG_COLOR,
                ...legendItemStyle,
              }}
            ></div>{" "}
            Source: <i>{sourceLabel}</i>{" "}
          </li>
          {targetIri && (
            <>
              <li style={paddingTopStyle("5px")}>
                <div
                  style={{
                    backgroundColor: DEFAULT_NODE_BG_COLOR,
                    ...legendItemStyle,
                  }}
                ></div>{" "}
                Subtree exclusive to <i>{sourceLabel}</i>{" "}
              </li>
              <li style={paddingTopStyle("5px")}>
                <div
                  style={{
                    backgroundColor: COMMON_NODES_BG_COLOR,
                    ...legendItemStyle,
                  }}
                ></div>{" "}
                Common subtree{" "}
              </li>
              <li style={paddingTopStyle("5px")}>
                <div
                  style={{
                    backgroundColor: TARGET_NODE_BG_COLOR,
                    ...legendItemStyle,
                  }}
                ></div>{" "}
                Target: <i>{targetLabel}</i>{" "}
              </li>
              <li style={paddingTopStyle("5px")}>
                <div
                  style={{
                    backgroundColor: EXCLUSIVE_TO_TARGET_IRI_COLOR,
                    ...legendItemStyle,
                  }}
                ></div>{" "}
                Subtree exclusive to <i>{targetLabel}</i>{" "}
              </li>
            </>
          )}
        </ul>
      </div>
    );
  }

  return (
    <div
      className={finalClassName}
      style={!stopFullWidth ? widgetContainerStyle : {}}
      ref={fullScreenContainerRef}
    >
      <EuiPanel style={fullHeightStyle} data-testid="graph-widget">
        {isError && (
          <EuiText>{getErrorMessageToDisplay(error, "graph")}</EuiText>
        )}
        <EuiPanel
          style={fontSizeStyle(12)}
          paddingSize="s"
          borderRadius="none"
          data-testid="graph-view"
        >
          {!isFullScreen && (
            <EuiPopover
              button={
                <EuiButtonIcon
                  iconType="questionInCircle"
                  onClick={onButtonClick}
                  size="m"
                />
              }
              isOpen={isPopoverOpen}
              closePopover={closePopover}
            >
              <EuiText style={guideMeStyle}>
                <li>Expand the nodes by double clicking on them</li>
                <li>Zoom out/in by scrolling on the graph.</li>
                <li>
                  Go to fullscreen mode by clicking the fullscreen icon on the
                  right corner.
                </li>
                <li>
                  Download the graph data as JSON by clicking the download icon
                  on the right corner.
                </li>
                <li>
                  You can go back to the initial graph by clicking on the Reset
                  button.
                </li>
                <li>You can move the nodes and edges around by dragging.</li>
              </EuiText>
            </EuiPopover>
          )}

          {showNothingToAddMessage && (
            <div style={nothingToAddStyle}>nothing to add</div>
          )}

          <div style={actionButtonsContainerStyle}>
            <button
              onClick={reset}
              aria-label="reset the graph to default view"
              title="Reset the graph to the original state."
              style={resetButtonStyle}
            >
              <EuiIcon type="refresh" />
            </button>
            <button
              onClick={removeNodeFromGraph}
              style={removeButtonStyle}
              title="Remove node"
              aria-label="remove the selected node from graph"
            >
              <EuiIcon type="cut" />
            </button>
            {showNodeNotSelectedMessage && (
              <EuiTextColor color="red" style={removeWarningMessageStyle}>
                Please select a node to remove
              </EuiTextColor>
            )}
            <button
              onClick={downloadGraphData}
              title="Download graph data as json."
              aria-label="download graph data as json"
            >
              <EuiIcon type="download" />
            </button>
            <button
              onClick={runFullScreen}
              style={margingLeftStyle("20px")}
              title={!isFullScreen ? "Fullscreen mode" : "Exit fullscreen mode"}
              aria-label={
                !isFullScreen ? "go to fullscreen mode" : "exit fullscreen mode"
              }
            >
              {!isFullScreen ? (
                <EuiIcon type="fullScreen" />
              ) : (
                <EuiIcon type="fullScreenExit" />
              )}
            </button>
          </div>
        </EuiPanel>

        {isLoading && <EuiLoadingSpinner size="m" />}
        <div
          ref={container}
          className="graph-container"
          style={!stopFullWidth ? graphContainerStyle : {}}
        />
        {renderLegend()}

        {/*the default background color for the reqeustFullscreen browser API is black. so we need this to keep it white. */}
        <style>{fullScreenStyle}</style>
      </EuiPanel>
    </div>
  );
}

function WrappedGraphViewWidget(props: GraphViewWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <GraphViewWidget
          api={props.api}
          iri={props.iri}
          irisList={props.irisList}
          ontologyId={props.ontologyId}
          rootWalk={props.rootWalk}
          hierarchy={props.hierarchy}
          hierarchyDirection={props.hierarchyDirection}
          edgeLabel={props.edgeLabel}
          onNodeClick={props.onNodeClick}
          onNavigateTo={props.onNavigateTo}
          targetIri={props.targetIri}
          parameter={props.parameter}
          hideLegend={props.hideLegend}
          stopFullWidth={props.stopFullWidth}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { GraphViewWidget, WrappedGraphViewWidget };
