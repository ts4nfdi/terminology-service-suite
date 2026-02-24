"use client";

import {
  EuiButton,
  EuiButtonEmpty,
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
import {
  GraphViewWidgetProps,
  OlsGraphEdge,
  OlsGraphNode,
} from "../../../app/types";
import { getErrorMessageToDisplay } from "../../../app/util";
import "../../../style/ts4nfdiStyles/ts4nfdiGraphStyle.css";
import { JSTreeNode } from "../../../utils/olsApiTypes";
import {
  GraphEdge,
  graphNetworkConfig,
  GraphNode,
  hierarchicalConfig,
} from "./GraphConfigs";
import { GraphFetchData, VisGraphData } from "./types";
import {
  convertFlatListToTreeStructure,
  fetchHierarchyModeData,
  fetchNormalModeData,
  fetchRootWalkModeData,
} from "./utils";

const SUBCLASS_OF_URIS = [
  "http://www.w3.org/2000/01/rdf-schema#subClassOf",
  "hierarchicalParent",
  "directParent",
];
const HAS_PART_EDGE_LABEL = "has part";

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
    parameter,
    stopFullWidth,
    hideLegend
  } = props;

  const [selectedIri, setSelectedIri] = useState(iri);
  const [firstLoad, setFirstLoad] = useState(true);
  const [graphDataIsCalculated, setGraphDataIsCalculated] = useState(false);
  const [dbclicked, setDbclicked] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // needed for useQuery. without it the graph won't get updated on switching berween rootWalk=true and false.
  const [counter, setCounter] = useState(0);

  // for downloading the graph data as json.
  const [graphRawData, setGraphRawData] = useState<VisGraphData>({
    nodes: [],
    edges: [],
  });

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

  const finalClassName = className || "ts4nfdi-graph-style";
  const subClassEdgeLabel =
    !edgeLabel || edgeLabel === "undefined" ? "is a" : edgeLabel;
  const onNodeClickCallbackIdProvided =
    typeof onNodeClick === "function" &&
    !onNodeClick.name.includes("actionHandler");

  const sourceNodeBgColor = "#139ec4";
  const exclusiveToTargetIriColor = "#708238";
  const targetNodeBgColor = "#00a86b";
  const commonNodesBgColor = "#ff991c";
  const nodeTextColor = "white";

  const { data, isLoading, isError, error } = useQuery(
    [
      "termGraph",
      api,
      ontologyId,
      rootWalk,
      hierarchy,
      dbclicked,
      targetIri,
      counter,
    ],
    async () => {
      let sourceIri = iri;
      if (dbclicked) {
        sourceIri = selectedIri;
      }
      if (rootWalk && (firstLoad || dbclicked) && !hierarchy) {
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

  const nodes = useRef(new DataSet([]));
  const edges = useRef(new DataSet([]));
  const graphNetwork = useRef({});
  const container = useRef(null);
  const fullScreenContainerRef = useRef(null);
  // kep a map between a node iri and it's color to avoid recalculating the color in case the node is removed and added again by the user
  const nodeColorMap = useRef<Map<string, string>>(new Map());

  if (hierarchy) {
    graphNetworkConfig["layout"]["hierarchical"] = hierarchicalConfig;
  }

  if (data && (firstLoad || dbclicked)) {
    let gDataForDownload: VisGraphData = { ...graphRawData };
    let gData: VisGraphData = { nodes: [], edges: [] };
    gData = data.termRelations ?? gData;
    if (data.treeData && rootWalk && (firstLoad || dbclicked) && !hierarchy) {
      gData = convertToOlsGraphFormat(
        data.treeData,
        data.termRelations,
        data.targetTreeData,
        data.targetTermRelations,
      );
    } else if (
      data.termRelations &&
      data.treeData &&
      rootWalk &&
      (firstLoad || dbclicked) &&
      hierarchy
    ) {
      gData = convertToOlsGraphFormat(
        data.treeData,
        data.termRelations,
        data?.targetTreeData,
        data?.targetTermRelations,
      );
    }
    if (!rootWalk && !hierarchy) {
      gData.nodes = addTermRelationsNodesToGraph(data);
      gData.edges = addTermRelationsEdgesToGraph(data);
      setGraphDataIsCalculated(true);
    }

    if (firstLoad) {
      gDataForDownload = { nodes: [], edges: [] };
      setFirstLoad(false);
    }
    if (dbclicked) {
      setDbclicked(false);
    }
    setGraphRawData({
      nodes: [...gDataForDownload.nodes, ...(gData?.nodes ?? [])],
      edges: [...gDataForDownload.edges, ...(gData?.edges ?? [])],
    });
    setGraphDataIsCalculated(true);
  }

  function addTermRelationsNodesToGraph(graphData: GraphFetchData) {
    let originalNodeCount = nodes.current.length;
    for (let n of graphData.termRelations?.nodes ?? []) {
      addNewNodeToGraph(n);
    }
    let exclusiveTotargetIriNodes = [];
    if (graphData.targetTermRelations) {
      for (let sn of graphData.targetTermRelations.nodes) {
        if (
          graphData?.termRelations?.nodes.find(
            (n: OlsGraphNode) => n.iri === sn.iri,
          )
        ) {
          addNewNodeToGraph(sn, true);
        } else {
          exclusiveTotargetIriNodes.push(sn);
        }
      }
      for (let n of exclusiveTotargetIriNodes) {
        addNewNodeToGraph(n, false, exclusiveToTargetIriColor, nodeTextColor);
      }
    }
    if (originalNodeCount === nodes.current.length) {
      setShowNothingToAddMessage(true);
    }
    return [
      ...(graphData.termRelations?.nodes ?? []),
      ...exclusiveTotargetIriNodes,
    ];
  }

  function addTermRelationsEdgesToGraph(graphData: GraphFetchData) {
    for (let e of graphData.termRelations?.edges ?? []) {
      if (!SUBCLASS_OF_URIS.includes(e.uri)) {
        addNewEdgeToGraph(e, e.label);
        continue;
      }
      addNewEdgeToGraph(e);
    }
    let targetEdges = [];
    if (graphData.targetTermRelations?.edges) {
      for (let se of graphData.targetTermRelations.edges) {
        if (
          !graphData.termRelations?.edges.find(
            (e: OlsGraphEdge) =>
              e.source === se.source && e.target === se.target,
          )
        ) {
          addNewEdgeToGraph(se);
          targetEdges.push(se);
        }
      }
    }
    return [...(graphData.termRelations?.edges ?? []), ...targetEdges];
  }

  function addNewNodeToGraph(
    node: OlsGraphNode,
    isCommon = false,
    bgColor = "",
    color = "",
  ) {
    let gNode = new GraphNode((node = node));
    if (bgColor && color) {
      // if these colors exist, we are rendering the target iri for comparison. so color has to be different from the
      // default node color.
      gNode = new GraphNode(
        (node = node),
        exclusiveToTargetIriColor,
        nodeTextColor,
      );
    }
    //@ts-ignore
    if (!nodes.current.get(gNode.id)) {
      if (gNode.id === iri) {
        setSourceLabel(gNode.label ?? "");
        gNode.color.background = sourceNodeBgColor;
        gNode.font.color = nodeTextColor;
      } else if (targetIri && gNode.id === targetIri) {
        setTargetLabel(gNode.label ?? "");
        gNode.color.background = targetNodeBgColor;
        gNode.font.color = nodeTextColor;
      } else if (nodeColorMap.current.get(gNode.id!)) {
        gNode.color.background = nodeColorMap.current.get(gNode.id!)!;
      } else if (
        dbclicked &&
        dbClickedColor.bgColor &&
        dbClickedColor.bgColor !== sourceNodeBgColor
      ) {
        gNode.color.background = dbClickedColor.bgColor;
        gNode.font.color = nodeTextColor;
      }
      nodeColorMap.current.set(gNode.id ?? "", gNode.color.background);
      //@ts-ignore
      nodes.current.add(gNode);
    } else if (isCommon && gNode.id !== iri && gNode.id !== targetIri) {
      gNode = new GraphNode((node = node), commonNodesBgColor);
      //@ts-ignore
      nodes.current.remove(gNode.id);
      nodeColorMap.current.set(gNode.id ?? "", gNode.color.background);
      //@ts-ignore
      nodes.current.add(gNode);
    }
  }

  function addNewEdgeToGraph(edge: OlsGraphEdge, label = subClassEdgeLabel) {
    let gEdge = new GraphEdge((edge = edge), label);
    let dashed =
      SUBCLASS_OF_URIS.includes(edge.uri ?? "") || rootWalk ? false : true;
    gEdge.dashes = dashed;
    //@ts-ignore
    if (!edges.current.get(gEdge.id)) {
      if (gEdge.id?.includes(iri) && rootWalk) {
        //@ts-ignore
        gEdge.color.color = "black";
      }
      //@ts-ignore
      edges.current.add(gEdge);
    }
  }

  function addTreeDataToGraphData(
    graphData: VisGraphData,
    treeData: JSTreeNode[],
    istargetIri: boolean = false,
  ) {
    let q = [...treeData];
    let layerq = [];
    let height = 1;
    let leftOverNodesFromtargetIri: OlsGraphNode[] = [];
    let originalGraphNodesCount = nodes.current.length;
    while (true) {
      let node = q[0];
      q = q.slice(1);
      let gnode = { iri: node.iri, label: node.text, level: height };
      if (!istargetIri) {
        if (!graphData.nodes.find((n) => n.iri === gnode.iri)) {
          graphData.nodes.push(gnode);
        }
        addNewNodeToGraph(gnode);
      } else {
        if (graphData.nodes.find((n) => n.iri === gnode.iri)) {
          // in this case, the node is a common node: needs a common node color
          addNewNodeToGraph(
            gnode,
            true,
            exclusiveToTargetIriColor,
            nodeTextColor,
          );
        } else {
          // otherwise the node is exclusive to the target iri. we add it to the graph with it's own color but
          // we do not add it at this point to graph data (we do it in the end of this funciton). reason is:
          // in ols tree structure a node may appears multiple times --> it conflicts with this function logic in
          // detecting the common nodes
          addNewNodeToGraph(
            gnode,
            false,
            exclusiveToTargetIriColor,
            nodeTextColor,
          );
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
          addNewEdgeToGraph(edge);
        });
      }

      if (node.childrenList && node.childrenList.length !== 0) {
        layerq.push(...node.childrenList);
      }
      if (q.length === 0) {
        if (layerq.length === 0) {
          break;
        }
        height += 1;
        q.push(...layerq);
        layerq = [];
      }
    }

    graphData.nodes = [...graphData.nodes, ...leftOverNodesFromtargetIri];
    if (originalGraphNodesCount === nodes.current.length) {
      setShowNothingToAddMessage(true);
    }
    return graphData;
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
      bgColor = exclusiveToTargetIriColor;
      color = nodeTextColor;
    }
    let onlyHasPartRelations: { nodes: any[]; edges: any[] } = {
      nodes: [],
      edges: [],
    };
    for (let edge of nodeRelations["edges"]) {
      if (edge["label"] === HAS_PART_EDGE_LABEL) {
        addNewEdgeToGraph(edge, HAS_PART_EDGE_LABEL);
        addNewNodeToGraph(
          nodeRelations.nodes.find((node) => node.iri === edge.source)!,
          false,
          bgColor,
          color,
        );
        addNewNodeToGraph(
          nodeRelations.nodes.find((node) => node.iri === edge.target)!,
          false,
          bgColor,
          color,
        );
      }
    }
    graphData["nodes"] = graphData["nodes"].concat(
      onlyHasPartRelations["nodes"],
    );
    graphData["edges"] = graphData["edges"].concat(
      onlyHasPartRelations["edges"],
    );
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

    if (targetIri && targetListOfJsTreeNodes) {
      let targetTreeData = convertFlatListToTreeStructure(
        targetListOfJsTreeNodes,
      );
      addTreeDataToGraphData(graphData, targetTreeData, true);
      if (!dbclicked) {
        addHasPartRelationsToGraphData(graphData, targetNodeRelations, true);
      }
    }
    return graphData;
  }

  function downloadGraphData() {
    const jsonString = JSON.stringify(graphRawData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `graphData_${ontologyId}_${iri}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function reset() {
    nodes.current.clear();
    edges.current.clear();
    setSelectedIri(iri);
    setFirstLoad(true);
    setDbclicked(false);
    setCounter(counter + 1);
  }

  function removeNodeFromGraph() {
    if (!clickedNodeIri) {
      setShowNodeNotSelectedMessage(true);
      setTimeout(() => {
        setShowNodeNotSelectedMessage(false);
      }, 3000);
    } else {
      let incommingEdgesSources: string[] = [];
      let outgoingEdgesSources: string[] = [];
      edges.current.forEach((item: GraphEdge, _) => {
        if (item.label === HAS_PART_EDGE_LABEL) {
          return;
        }
        if (item.to === clickedNodeIri) {
          incommingEdgesSources.push(item.from!);
        } else if (item.from === clickedNodeIri) {
          outgoingEdgesSources.push(item.to!);
        }
      });
      for (let source of incommingEdgesSources) {
        for (let target of outgoingEdgesSources) {
          let newEdge = {
            source: source,
            target: target,
            label: subClassEdgeLabel,
            uri: SUBCLASS_OF_URIS[0],
          };
          addNewEdgeToGraph(newEdge);
        }
      }
      nodes.current.remove(clickedNodeIri);

      //@ts-ignore
      graphNetwork.current.setOptions({ physics: true });
      //@ts-ignore
      setTimeout(() => {
        //@ts-ignore
        graphNetwork.current.setOptions({ physics: false });
      }, 4000);
    }
  }


  function renderLegend(){
    if(hideLegend){
      return (<></>);
    }
    const itemStyle = {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      display: "inline-block",
    };
    const itemPadding = { paddingTop: "5px" };
    return(
      <div
        style={{
          position: "absolute",
          display: "inline-block",
          backgroundColor: "#e5e7ea",
          padding: "5px",
          borderRadius: "10px",
          paddingTop: "10px",
          bottom: "20px",
          right: "20px",
        }}
      >
        <ul style={{ padding: "5px" }}>
          <li style={itemPadding}>
            <div
              style={{backgroundColor: sourceNodeBgColor, ...itemStyle}}
            ></div>{" "}
            Source: <i>{sourceLabel}</i>{" "}
          </li>
          {targetIri && (
            <>
              <li style={itemPadding}>
                <div
                  style={{ backgroundColor: "#455469", ...itemStyle}}
                ></div>{" "}
                Subtree exclusive to <i>{sourceLabel}</i>{" "}
              </li>
              <li style={itemPadding}>
                <div
                  style={{ backgroundColor: commonNodesBgColor, ...itemStyle}}
                ></div>{" "}
                Common subtree{" "}
              </li>
              <li style={itemPadding}>
                <div
                  style={{ backgroundColor: targetNodeBgColor, ...itemStyle}}
                ></div>{" "}
                Target: <i>{targetLabel}</i>{" "}
              </li>
              <li style={itemPadding}>
                <div
                  style={{ backgroundColor: exclusiveToTargetIriColor, ...itemStyle}}
                ></div>{" "}
                Subtree exclusive to <i>{targetLabel}</i>{" "}
              </li>
            </>
          )}
        </ul>
      </div>
    );
  }

  useEffect(() => {
    if (!graphDataIsCalculated) {
      return;
    }
    let graphData = { nodes: nodes.current, edges: edges.current };
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
          //@ts-ignore
          setDbClickedColor({
            bgColor: nodes.current.get(nodeIri)?.color?.background,
            color: nodes.current.get(nodeIri)?.font?.color,
          });
          setSelectedIri(nodeIri);
          if (onNodeClickCallbackIdProvided) {
            onNodeClick(nodeIri);
          } else {
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
      nodes.current.clear();
      edges.current.clear();
      setTargetIri(props.targetIri);
      setFirstLoad(true);
      setCounter(counter + 1);
    }
  }, [props.targetIri]);

  useEffect(() => {
    if (hierarchy) {
      graphNetworkConfig["layout"]["hierarchical"] = hierarchicalConfig;
    } else {
      graphNetworkConfig["layout"]["hierarchical"] = { enabled: false };
    }
    setCounter(counter + 1);
  }, [hierarchy]);

  useEffect(() => {
    if (!dbclicked) {
      return;
    }
    //@ts-ignore
    graphNetwork.current.setOptions({ physics: true });
    // Stop physics after the initial layout so users can freely move nodes
    //@ts-ignore
    setTimeout(() => {
      //@ts-ignore
      graphNetwork.current.setOptions({ physics: false });
    }, 4000);
  }, [dbclicked]);

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

  const GuideMeBtn = (
    <EuiButtonEmpty
      iconType="iInCircle"
      iconSide="right"
      onClick={onButtonClick}
    >
      Guide me
    </EuiButtonEmpty>
  );

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

  return (
    <div
      className={finalClassName}
      style={!stopFullWidth ? { width: "100%", height: "100vh", overflow: "hidden" } : {}}
      ref={fullScreenContainerRef}
    >
      <EuiPanel style={{ height: "100vh" }} data-testid="graph-widget">
        {isError && (
          <EuiText>{getErrorMessageToDisplay(error, "graph")}</EuiText>
        )}
        <EuiPanel
          style={{ fontSize: 12 }}
          paddingSize="s"
          borderRadius="none"
          data-testid="graph-view"
        >
          <EuiButton
            size="s"
            onClick={reset}
            aria-label="reset the graph to default view"
            title="Reset the graph to the original state."
            style={{ textDecoration: "none" }}
          >
            Reset
          </EuiButton>
          {!isFullScreen && (
            <EuiPopover
              button={GuideMeBtn}
              isOpen={isPopoverOpen}
              closePopover={closePopover}
            >
              <EuiText style={{ width: 300, padding: 10 }}>
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
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#FBCBC6",
                color: "red",
                padding: "5px",
                borderRadius: "10px",
              }}
            >
              nothing to add
            </div>
          )}

          <div
            style={{ display: "inline-flex", float: "right", paddingTop: 10 }}
          >
            <button
              onClick={removeNodeFromGraph}
              style={{ marginRight: "20px", color: "red" }}
              title="Remove node"
              aria-label="remove the selected node from graph"
            >
              <EuiIcon type="cut" />
            </button>
            {showNodeNotSelectedMessage && (
              <EuiTextColor
                color="red"
                style={{
                  marginTop: "10px",
                  marginRight: "10px",
                  marginLeft: "-10px",
                }}
              >
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
              style={{ marginLeft: "20px" }}
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
          style={!stopFullWidth ? { width: "100%", height: "100vh", margin: "auto" } : {}}
        />

        {renderLegend()}

        {/*the default background color for the reqeustFullscreen browser API is black. so we need this to keep it white. */}
        <style>{`
        .graph-container:fullscreen,
        .graph-container::backdrop {
          background-color: white;
        }
      `}</style>
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
          ontologyId={props.ontologyId}
          rootWalk={props.rootWalk}
          hierarchy={props.hierarchy}
          edgeLabel={props.edgeLabel}
          onNodeClick={props.onNodeClick}
          targetIri={props.targetIri}
          parameter={props.parameter}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { GraphViewWidget, WrappedGraphViewWidget };
