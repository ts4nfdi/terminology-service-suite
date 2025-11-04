"use client";

import { useRef, useEffect, useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import {
  EuiProvider,
  EuiLoadingSpinner,
  EuiText,
  EuiButton,
  EuiPanel,
  EuiPopover,
  EuiButtonEmpty,
  EuiIcon,
  EuiTextColor,
  EuiCard
} from "@elastic/eui";
import { Network } from "vis-network";
import { DataSet } from "vis-data";
import { getErrorMessageToDisplay } from "../../../app/util";
import "../../../style/ts4nfdiStyles/ts4nfdiGraphStyle.css";
import { JSTreeNode } from "../../../utils/olsApiTypes";
import { hierarchicalConfig, graphNetworkConfig, GraphNode, GraphEdge } from "./GraphConfigs";
import { OlsGraphNode, OlsGraphEdge, GraphViewWidgetProps } from "../../../app/types";
import { GraphFetchData, VisGraphData } from "./types";
import {
  fetchRootWalkModeData,
  fetchHierarchyModeData,
  fetchNormalModeData,
  convertFlatListToTreeStructure
} from "./utils";



const SUBCLASS_OF_URIS = ["http://www.w3.org/2000/01/rdf-schema#subClassOf", "hierarchicalParent", "directParent"];
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
    secondIri,
    onNodeClick,
  } = props;

  const [selectedIri, setSelectedIri] = useState(iri);
  const [firstLoad, setFirstLoad] = useState(true);
  const [dbclicked, setDbclicked] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // needed for useQuery. without it the graph won't get updated on switching berween rootWalk=true and false.
  const [counter, setCounter] = useState(0);

  // for downloading the graph data as json.
  const [graphRawData, setGraphRawData] = useState<VisGraphData>({ "nodes": [], "edges": [] });

  // track the node that is clicked
  const [clickedNodeIri, setClickedNodeIri] = useState<string>("");

  // track the doubleClicked node color to set for new expanded nodes
  const [dbClickedColor, setDbClickedColor] = useState<{ bgColor: "", color: "" }>({ bgColor: "", color: "" });

  const [showNodeNotSelectedMessage, setShowNodeNotSelectedMessage] = useState<boolean>(false);
  const [showNothingToAddMessage, setShowNothingToAddMessage] = useState<boolean>(false);

  const finalClassName = className || "ts4nfdi-graph-style";
  const subClassEdgeLabel =
    !edgeLabel || edgeLabel === "undefined" ? "is a" : edgeLabel;
  const onNodeClickCallbackIdProvided =
    typeof onNodeClick === "function" &&
    !onNodeClick.name.includes("actionHandler");

  const targetNodeBgColor = "#0BBBEF";
  const secondNodeBgColor = "red";
  const targetNodeTextColor = "black";
  const secondNodeTextColor = "white";
  const commonNodesBgColor = "#800080";


  const { data, isLoading, isError, error } = useQuery(
    [
      "termGraph",
      api,
      selectedIri,
      ontologyId,
      rootWalk,
      dbclicked,
      counter,
    ],
    async () => {
      let targetIri = iri;
      if (dbclicked) {
        targetIri = selectedIri;
      }
      if (rootWalk && (firstLoad || dbclicked) && !hierarchy) {
        // this is for rootWalk mode wihtout hierarchy view
        // only use this call on load. Double ckicking on a node should call the normal getTermRelations function.
        return await fetchRootWalkModeData({ api: api, iri: targetIri, ontologyId: ontologyId, secondIri: secondIri, dbClicked: dbclicked });

      } else if (rootWalk && (firstLoad || dbclicked) && hierarchy) {
        // hierarchy mode: we need the term tree data and it's relation (for "has part" relation that is not part of the tree data )
        return await fetchHierarchyModeData({ api: api, iri: targetIri, ontologyId: ontologyId, secondIri: secondIri, dbClicked: dbclicked });
      } else if (firstLoad || dbclicked) {
        // normal mode graph and,
        // when user double clicks a node --> fetch the clicked node relation
        return await fetchNormalModeData({ api: api, iri: targetIri, ontologyId: ontologyId, secondIri: secondIri, dbClicked: dbclicked });
      }
    },
  );

  const nodes = useRef(new DataSet([]));
  const edges = useRef(new DataSet([]));
  const graphNetwork = useRef({});
  const container = useRef(null);
  // kep a map between a node iri and it's color to avoid recalculating the color in case the node is removed and added again by the user
  const nodeColorMap = useRef<Map<string, string>>(new Map())


  if (hierarchy) {
    graphNetworkConfig["layout"]["hierarchical"] = hierarchicalConfig;
  }

  if (data && (firstLoad || dbclicked)) {
    let gDataForDownload: VisGraphData = { ...graphRawData };
    let gData: VisGraphData = { nodes: [], edges: [] }
    gData = data.termRelations ?? gData;
    if (data.treeData && rootWalk && (firstLoad || dbclicked) && !hierarchy) {
      gData = convertToOlsGraphFormat(data.treeData, data.termRelations, data.secondTreeData, data.secondTermRelations);
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
        data?.secondTreeData,
        data?.secondTermRelations
      );
    }
    if (!rootWalk && !hierarchy) {
      gData.nodes = addTermRelationsNodesToGraph(data);
      gData.edges = addTermRelationsEdgesToGraph(data);
    }

    if (firstLoad) {
      gDataForDownload = { nodes: [], edges: [] };
      setFirstLoad(false);
    }
    if (dbclicked) {
      setDbclicked(false);
    }
    setGraphRawData({ nodes: [...gDataForDownload.nodes, ...(gData?.nodes ?? [])], edges: [...gDataForDownload.edges, ...(gData?.edges ?? [])] });
  }


  function addTermRelationsNodesToGraph(graphData: GraphFetchData) {
    let originalNodeCount = nodes.current.length;
    for (let n of (graphData.termRelations?.nodes ?? [])) {
      addNewNodeToGraph(n);
    }
    let exclusiveToSecondIriNodes = [];
    if (graphData.secondTermRelations) {
      for (let sn of graphData.secondTermRelations.nodes) {
        if (graphData?.termRelations?.nodes.find((n: OlsGraphNode) => n.iri === sn.iri)) {
          addNewNodeToGraph(sn, true);
        } else {
          exclusiveToSecondIriNodes.push(sn);
        }
      }
      for (let n of exclusiveToSecondIriNodes) {
        addNewNodeToGraph(n, false, secondNodeBgColor, secondNodeTextColor);
      }
    }
    if (originalNodeCount === nodes.current.length) {
      setShowNothingToAddMessage(true);
    }
    return [...(graphData.termRelations?.nodes ?? []), ...exclusiveToSecondIriNodes];
  }


  function addTermRelationsEdgesToGraph(graphData: GraphFetchData) {
    for (let e of (graphData.termRelations?.edges ?? [])) {
      if (!SUBCLASS_OF_URIS.includes(e.uri)) {
        addNewEdgeToGraph(e, e.label);
        continue;
      }
      addNewEdgeToGraph(e);
    }
    let secondEdges = [];
    if (graphData.secondTermRelations?.edges) {
      for (let se of graphData.secondTermRelations.edges) {
        if (!graphData.termRelations?.edges.find((e: OlsGraphEdge) => e.source === se.source && e.target === se.target)) {
          addNewEdgeToGraph(se);
          secondEdges.push(se);
        }
      }
    }
    return [...(graphData.termRelations?.edges ?? []), ...secondEdges];
  }



  function addNewNodeToGraph(node: OlsGraphNode, isCommon = false, bgColor = "", color = "") {
    let gNode = new GraphNode(node = node);
    if (bgColor && color) {
      // if these colors exist, we are rendering the second iri for comparison. so color has to  be different from the default node color.
      gNode = new GraphNode(node = node, secondNodeBgColor, secondNodeTextColor);
    }
    //@ts-ignore
    if (!nodes.current.get(gNode.id)) {
      if (gNode.id === iri) {
        gNode.color.background = targetNodeBgColor;
        gNode.font.color = targetNodeTextColor;
      }
      if (nodeColorMap.current.get(gNode.id!)) {
        gNode.color.background = nodeColorMap.current.get(gNode.id!)!;
      } else if (dbclicked && dbClickedColor.bgColor && dbClickedColor.bgColor !== targetNodeBgColor) {
        gNode.color.background = dbClickedColor.bgColor;
        gNode.font.color = "white";
      }
      nodeColorMap.current.set(gNode.id ?? "", gNode.color.background);
      //@ts-ignore
      nodes.current.add(gNode);
    } else if (isCommon) {
      gNode = new GraphNode(node = node, commonNodesBgColor);
      //@ts-ignore
      nodes.current.remove(gNode.id);
      nodeColorMap.current.set(gNode.id ?? "", gNode.color.background);
      //@ts-ignore
      nodes.current.add(gNode);
    }
  }

  function addNewEdgeToGraph(edge: OlsGraphEdge, label = subClassEdgeLabel) {
    let gEdge = new GraphEdge(edge = edge, label);
    let dashed =
      SUBCLASS_OF_URIS.includes(edge.uri ?? "") ||
        rootWalk
        ? false
        : true;
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


  function addTreeDataToGraphData(graphData: VisGraphData, treeData: JSTreeNode[], isSecondIri: boolean = false) {
    let q = [...treeData];
    let layerq = [];
    let height = 1;
    let leftOverNodesFromSecondIri: OlsGraphNode[] = [];
    let originalGraphNodesCount = nodes.current.length;
    while (true) {
      let node = q[0];
      q = q.slice(1);
      let gnode = { iri: node.iri, label: node.text, level: height };
      if (!isSecondIri) {
        if (!graphData.nodes.find(n => n.iri === gnode.iri)) {
          graphData.nodes.push(gnode);
        }
        addNewNodeToGraph(gnode);
      } else {
        if (graphData.nodes.find(n => n.iri === gnode.iri)) {
          // in this case, the node is a common node: needs a common node color
          addNewNodeToGraph(gnode, true, secondNodeBgColor, secondNodeTextColor);
        } else {
          // otherwise the node is exclusive to the second iri. we add it to the graph with it's own color but
          // we do not add it at this point to graph data (we do it in the end of this funciton). reason is:
          // in ols tree structure a node may appears multiple times --> it conflicts with this function logic in detecting the common nodes
          addNewNodeToGraph(gnode, false, secondNodeBgColor, secondNodeTextColor);
          if (!leftOverNodesFromSecondIri.find(n => n.iri === gnode.iri)) {
            leftOverNodesFromSecondIri.push(gnode);
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
          if (!graphData.edges.find(e => e.source === edge.source && e.target === edge.target)) {
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

    graphData.nodes = [...graphData.nodes, ...leftOverNodesFromSecondIri];
    if (originalGraphNodesCount === nodes.current.length) {
      setShowNothingToAddMessage(true);
    }
    return graphData;
  }


  function addHasPartRelationsToGraphData(graphData: VisGraphData, nodeRelations?: VisGraphData, isSecondNode: boolean = false) {
    if (!nodeRelations) {
      return;
    }
    let bgColor = "";
    let color = "";
    if (isSecondNode) {
      bgColor = secondNodeBgColor;
      color = secondNodeTextColor;
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
          false, bgColor, color
        );
        addNewNodeToGraph(
          nodeRelations.nodes.find((node) => node.iri === edge.target)!,
          false, bgColor, color
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
    secondListOfJsTreeNodes?: Array<JSTreeNode>,
    secondNodeRelations?: { nodes: any[]; edges: any[] },
  ) {
    let graphData: VisGraphData = { nodes: [], edges: [] };
    let treeData = convertFlatListToTreeStructure(listOfJsTreeNodes);
    addTreeDataToGraphData(graphData, treeData);
    if (!dbclicked) {
      addHasPartRelationsToGraphData(graphData, nodeRelations);
    }

    if (secondIri && secondListOfJsTreeNodes) {
      let secondTreeData = convertFlatListToTreeStructure(secondListOfJsTreeNodes);
      addTreeDataToGraphData(graphData, secondTreeData, true);
      if (!dbclicked) {
        addHasPartRelationsToGraphData(graphData, secondNodeRelations, true);
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

  useEffect(() => {
    let graphData = { nodes: nodes.current, edges: edges.current };
    graphNetwork.current = new Network(
      //@ts-ignore
      container.current,
      graphData,
      graphNetworkConfig,
    );

    // Stop physics after the initial layout so users can freely move nodes
    //@ts-ignore
    setTimeout(() => {
      //@ts-ignore
      graphNetwork.current.setOptions({ physics: false });
    }, 4000);
  }, []);

  useEffect(() => {
    if (graphNetwork.current) {
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
          setDbClickedColor({ bgColor: nodes.current.get(nodeIri)?.color?.background, color: nodes.current.get(nodeIri)?.font?.color })
          setSelectedIri(nodeIri);
          if (onNodeClickCallbackIdProvided) {
            onNodeClick(nodeIri);
          } else {
            setDbclicked(true);
          }
        }
      });
    }
  }, [graphNetwork]);

  useEffect(() => {
    if (secondIri) {
      reset();
    }
  }, [secondIri]);



  useEffect(() => {
    //@ts-ignore
    graphNetwork.current.setOptions({ physics: true });
    // Stop physics after the initial layout so users can freely move nodes
    //@ts-ignore
    setTimeout(() => {
      //@ts-ignore
      graphNetwork.current.setOptions({ physics: false });
    }, 4000);
  }, [counter]);

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
    }, 3000)
  }, [showNothingToAddMessage])


  const onButtonClick = () =>
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  const GuidmeBtn = (
    <EuiButtonEmpty
      iconType="iInCircle"
      iconSide="right"
      onClick={onButtonClick}
    >
      Guide me
    </EuiButtonEmpty>
  );

  const goFullScreen = () => {
    if (container.current) {
      let graphContainerDiv = container.current as HTMLDivElement;
      graphContainerDiv.requestFullscreen();
    }
  };


  return (
    <div className={finalClassName} style={{ width: '1000px', height: '100vh' }}>
      <EuiPanel style={{ height: "100vh" }} data-testid="graph-widget">
        {isError && <EuiText>{getErrorMessageToDisplay(error, "graph")}</EuiText>}
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
          <EuiPopover
            button={GuidmeBtn}
            isOpen={isPopoverOpen}
            closePopover={closePopover}
          >
            <EuiText style={{ width: 300, padding: 10 }}>
              <li>Expand the nodes by double clicking on them</li>
              <li>Zoom out/in by scrolling on the graph.</li>
              <li>Go to fullscreen mode by clicking the fullscreen icon on the right corner.</li>
              <li>Download the graph data as JSON by clicking the download icon on the right corner.</li>
              <li>
                You can go back to the initial graph by clicking on the Reset
                button.
              </li>
              <li>You can move the nodes and edges around by dragging.</li>
              <li><div style={{ backgroundColor: targetNodeBgColor, width: "10px", height: "10px", borderRadius: "50%", display: "inline-block" }}></div>  Target iri color </li>
              <li><div style={{ backgroundColor: "#455469", width: "10px", height: "10px", borderRadius: "50%", display: "inline-block" }}></div>  Exclusive to target iri node color </li>
              <li><div style={{ backgroundColor: secondNodeBgColor, width: "10px", height: "10px", borderRadius: "50%", display: "inline-block" }}></div>  Exclusive to second iri color </li>
              <li><div style={{ backgroundColor: commonNodesBgColor, width: "10px", height: "10px", borderRadius: "50%", display: "inline-block" }}></div>  Common nodes color </li>
            </EuiText>
          </EuiPopover>

          {showNothingToAddMessage &&
            <div style={{ display: "inline-block", backgroundColor: "#FBCBC6", color: "red", padding: "5px", borderRadius: "10px" }}>nothing to add</div>
          }

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
            {showNodeNotSelectedMessage &&
              <EuiTextColor color="red" style={{ marginTop: "10px", marginRight: "10px", marginLeft: "-10px" }}>Please select a node to remove</EuiTextColor>
            }
            <button
              onClick={downloadGraphData}
              title="Download graph data as json."
              aria-label="download graph data as json"
            >
              <EuiIcon type="download" />
            </button>
            <button
              onClick={goFullScreen}
              style={{ marginLeft: "20px" }}
              title="Fullscreen mode"
              aria-label="go to fullscreen mode"
            >
              <EuiIcon type="fullScreen" />
            </button>
          </div>
        </EuiPanel >


        {isLoading && <EuiLoadingSpinner size="m" />}
        <div
          ref={container}
          className="graph-container"
          style={{ width: "100%", height: "100vh", margin: "auto" }}
        />

        {/*the default background color for the reqeustFullscreen browser API is black. so we need this to keep it white. */}
        <style>{`
        .graph-container:fullscreen, 
        .graph-container::backdrop {
          background-color: white;
        }
      `}</style>
      </EuiPanel>
    </div >
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
          secondIri={props.secondIri}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { GraphViewWidget, WrappedGraphViewWidget };
