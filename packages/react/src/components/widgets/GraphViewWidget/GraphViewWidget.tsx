"use client";

import { useRef, useEffect, useState } from "react";
import { GraphViewWidgetProps } from "../../../app/types";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import {
  EuiProvider,
  EuiLoadingSpinner,
  EuiText,
  EuiButton,
  EuiPanel,
  EuiPopover,
  EuiButtonEmpty,
  EuiIcon
} from "@elastic/eui";
import { Network } from "vis-network";
import { DataSet } from "vis-data";
import { getErrorMessageToDisplay } from "../../../app/util";
import "../../../style/ts4nfdiStyles/ts4nfdiGraphStyle.css";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { JSTreeNode } from "../../../utils/olsApiTypes";
import { hierarchicalConfig, graphNetworkConfig, GraphNode, GraphEdge } from "./GraphConfigs";

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
  const [graphRawData, setGraphRawData] = useState();

  const olsEntityApi = new OlsEntityApi(api);
  const finalClassName = className || "ts4nfdi-graph-style";
  const subClassEdgeLabel =
    !edgeLabel || edgeLabel === "undefined" ? "is a" : edgeLabel;
  const onNodeClickCallbackIdProvided =
    typeof onNodeClick === "function" &&
    !onNodeClick.name.includes("mockConstructor");

  const targetNodeBgColor = "#0BBBEF";
  const secondNodeBgColor = "red";
  const targetNodeTextColor = "black";
  const secondNodeTextColor = "white";


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
      if (rootWalk && firstLoad && !hierarchy) {
        // only use this call on load. Double ckicking on a node should call the normal getTermRelations function.
        // this is for rootWalk mode wihtout hierarchy view
        return {
          treeData: await olsEntityApi.getTermTree(
            { ontologyId: ontologyId, termIri: iri },
            { viewMode: "All", siblings: false },
          ),
        };
      } else if (rootWalk && firstLoad && hierarchy) {
        // hierarchy mode: we need the term tree data and it's relation (for "has part" relation that is not part of the tree data )
        let termTree = await olsEntityApi.getTermTree(
          { ontologyId: ontologyId, termIri: iri },
          { viewMode: "All", siblings: false },
        );

        let termRelation = await olsEntityApi.getTermRelations({
          ontologyId: ontologyId,
          termIri: iri,
        });

        if (secondIri) {
          let secondTermTree = await olsEntityApi.getTermTree(
            { ontologyId: ontologyId, termIri: secondIri },
            { viewMode: "All", siblings: false },
          );

          let secondTermRelation = await olsEntityApi.getTermRelations({
            ontologyId: ontologyId,
            termIri: selectedIri,
          });
          return { treeData: termTree, termRelations: termRelation, secondTreeData: secondTermTree, secondTermRelations: secondTermRelation };
        }

        return { treeData: termTree, termRelations: termRelation };
      } else if (firstLoad || dbclicked) {
        // normal mode graph and,
        // when user double clicks a node --> fetch the clicked node relation
        return {
          termRelations: await olsEntityApi.getTermRelations({
            ontologyId: ontologyId,
            termIri: selectedIri,
          }),
        };
      }
    },
  );

  const nodes = useRef(new DataSet([]));
  const edges = useRef(new DataSet([]));
  const graphNetwork = useRef({});
  const container = useRef(null);

  if (hierarchy) {
    graphNetworkConfig["layout"]["hierarchical"] = hierarchicalConfig;
  }

  if (data && (firstLoad || dbclicked)) {
    let gData = data.termRelations;
    if (data.treeData && rootWalk && firstLoad && !hierarchy) {
      gData = convertToOlsGraphFormat(data.treeData as JSTreeNode[], undefined, undefined, undefined);
    } else if (
      data.termRelations &&
      data.treeData &&
      rootWalk &&
      firstLoad &&
      hierarchy
    ) {
      gData = convertToOlsGraphFormat(
        data.treeData as JSTreeNode[],
        data.termRelations,
        data?.secondTreeData,
        data?.secondTermRelations
      );
    }
    if (!rootWalk && !hierarchy) {
      for (let node of gData["nodes"]) {
        addNewNodeToGraph(node);
      }
      for (let edge of gData["edges"]) {
        addNewEdgeToGraph(edge);
      }
    }
    if (firstLoad) {
      setFirstLoad(false);
    }
    if (dbclicked) {
      setDbclicked(false);
    }
    setGraphRawData(gData);
  }


  function addNewNodeToGraph(node, bgColor = "", color = "") {
    let gNode = new GraphNode({ node: node });
    if (bgColor && color) {
      // if these colors exist, we are rendering the second iri for comparison. so color has to  be different from the default node color.
      gNode = new GraphNode({ node: node }, secondNodeBgColor, secondNodeTextColor);
    }
    //@ts-ignore
    if (!nodes.current.get(gNode.id)) {
      if (gNode.id === iri) {
        gNode.color.background = targetNodeBgColor;
        gNode.font.color = targetNodeTextColor;
      }
      //@ts-ignore
      nodes.current.add(gNode);
    }
  }

  function addNewEdgeToGraph(edge) {
    let gEdge = new GraphEdge({ edge: edge });
    let dashed =
      edge.uri === "http://www.w3.org/2000/01/rdf-schema#subClassOf" ||
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


  function convertFlatListToTreeStructure(listOfJsTreeNodes: Array<JSTreeNode>) {
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


  function addTreeDataToGraphData(graphData, treeData, isSecondIri: boolean = false) {
    let q = [...treeData];
    let layerq = [];
    let height = 1;
    while (true) {
      let node = q[0];
      q = q.slice(1);
      if (!graphData.nodes.find((obj) => obj.iri === node.iri)) {
        let gnode = { iri: node.iri, label: node.text, level: height };
        graphData.nodes.push(gnode);
        if (!isSecondIri) {
          addNewNodeToGraph(gnode);
        } else {
          addNewNodeToGraph(gnode, secondNodeBgColor, secondNodeTextColor);
        }
      }

      if (node.parentList && node.parentList.length !== 0) {
        node.parentList.forEach((pn) => {
          let edge = {
            source: node.iri,
            target: pn.iri,
            label: subClassEdgeLabel,
            uri: "http://www.w3.org/2000/01/rdf-schema#subClassOf",
          };
          if (
            !graphData.edges.find(
              (obj) => obj.source === edge.source && obj.target === edge.target,
            )
          ) {
            graphData.edges.push(edge);
            addNewEdgeToGraph(edge);
          }
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
    return graphData;
  }


  function addHasPartRelationsToGraphData(graphData, nodeRelations?: { nodes: any[]; edges: any[] }, isSecondNode: boolean = false) {
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
      if (edge["label"] === "has part") {
        addNewEdgeToGraph(edge);
        addNewNodeToGraph(
          nodeRelations.nodes.find((node) => node.iri === edge.source),
          bgColor, color
        );
        addNewNodeToGraph(
          nodeRelations.nodes.find((node) => node.iri === edge.target),
          bgColor, color
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
    secondListOfJsTreeNodes: Array<JSTreeNode>,
    secondNodeRelations?: { nodes: any[]; edges: any[] },
  ) {
    let graphData: { nodes: any[]; edges: any[] } = { nodes: [], edges: [] };
    let treeData = convertFlatListToTreeStructure(listOfJsTreeNodes);
    addTreeDataToGraphData(graphData, treeData);
    addHasPartRelationsToGraphData(graphData, nodeRelations);

    if (secondIri) {
      let secondTreeData = convertFlatListToTreeStructure(secondListOfJsTreeNodes);
      addTreeDataToGraphData(graphData, secondTreeData, true);
      addHasPartRelationsToGraphData(graphData, secondNodeRelations, true);
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
    }, 2000);
  }, []);

  useEffect(() => {
    if (graphNetwork.current) {
      //@ts-ignore
      graphNetwork.current.on("doubleClick", function (params) {
        if (params.nodes.length > 0) {
          let nodeIri = params.nodes[0];
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
    //@ts-ignore
    graphNetwork.current.setOptions({ physics: true });
    // Stop physics after the initial layout so users can freely move nodes
    //@ts-ignore
    setTimeout(() => {
      //@ts-ignore
      graphNetwork.current.setOptions({ physics: false });
    }, 2000);
  }, [counter]);


  const onButtonClick = () =>
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  const button = (
    <EuiButtonEmpty
      iconType="iInCircle"
      iconSide="right"
      onClick={onButtonClick}
    >
      Guide me
    </EuiButtonEmpty>
  );

  const goFullScreen = () => {
    if (container.current?.requestFullscreen) {
      container.current.requestFullscreen();
    }
  };

  return (
    <div className={finalClassName}>
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
          button={button}
          isOpen={isPopoverOpen}
          closePopover={closePopover}
        >
          <EuiText style={{ width: 300, padding: 10 }}>
            <li>You can expand the nodes by double clicking on them</li>
            <li>You can zoom out/in by scrolling on the graph.</li>
            <li>
              You can go back to the initial graph by clicking on the Reset
              button.
            </li>
            <li>You can move the nodes and edges around by dragging.</li>
            <li>
              Rootwalk toggle enable the root walk mode in the graph, where you
              can see the path from roots to the target node.
            </li>
          </EuiText>
        </EuiPopover>
        <div
          style={{ display: "inline-block", float: "right", paddingTop: 10 }}
        >
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
      </EuiPanel>

      <EuiPanel
        style={{ width: 1000, height: 1000 }}
        hasShadow={false}
        hasBorder={true}
        borderRadius="none"
      >
        {isLoading && <EuiLoadingSpinner size="m" />}
        <div
          ref={container}
          className="graph-container"
          style={{ width: "95%", height: "95%", margin: "auto" }}
        />
      </EuiPanel>

      {/*the default background color for the reqeustFullscreen browser API is black. so we need this to keep it white. */}
      <style>{`
        .graph-container:fullscreen, 
        .graph-container::backdrop {
          background-color: white;
        }
      `}</style>
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
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { GraphViewWidget, WrappedGraphViewWidget };
