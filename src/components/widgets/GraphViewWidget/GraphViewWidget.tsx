import React from "react";
import { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { GraphViewWidgetProps } from "../../../app/types";
import { OlsApi } from "../../../api/OlsApi";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider, EuiLoadingSpinner, EuiText, EuiButton, EuiIcon } from "@elastic/eui";
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import { OlsGraphNode, OlsGraphEdge } from "../../../app/types";
import { getErrorMessageToDisplay } from "../../../app/util";
import { Entity } from "../../../model/interfaces";


function GraphViewWidget(props: GraphViewWidgetProps) {
  const { api, iri, ontologyId, useLegacy, rootWalk } = props;

  const [selectedIri, setSelectedIri] = useState(iri);
  const [firstLoad, setFirstLoad] = useState(true);
  const [dbclicked, setDbclicked] = useState(false);
  
  // needed for useQuery. without it the graph won't get updated on switching berween rootWalk=true and false.
  const [counter, setCounter] = useState(0); 

  const olsApi = new OlsApi(api);

  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["termGraph", api, selectedIri, ontologyId, useLegacy, rootWalk, dbclicked,counter],
    async () => {
      if (rootWalk && firstLoad) {
        // only use this call on load. Double ckicking on a node should call the normal getTermRelations function.
        return olsApi.getAncestors(selectedIri, "class", ontologyId, useLegacy);
      }else if(firstLoad || dbclicked){
        return olsApi.getTermRelations({ ontologyId: ontologyId, termIri: selectedIri });
      }
    }
  );


  const nodes = useRef(new DataSet([]));
  const edges = useRef(new DataSet([]));
  const graphNetwork = useRef({});
  const container = useRef(null);

  const graphNetworkConfig = {
    /**
     * for more options have a look at: https://visjs.github.io/vis-network/docs/network/#options
     */
    autoResize: true,
    height: '100%',
    width: '100%',
    locale: 'en',
    layout: {
      randomSeed: 1,
      improvedLayout: true,
      clusterThreshold: 150,
    },
    physics: {
      enabled: true,
      barnesHut: {
        gravitationalConstant: -20000,
        centralGravity: 0.3,
        springLength: 10,
        springConstant: 0.04,
        damping: 0.09,
        avoidOverlap: 0,
      }
    }
  };


  class GraphNode {
    id?: string;
    label?: string;
    color: {
      background: string;
      highlight: {
        border: string;
        background: string;
      };
    };
    shape: string;
    font: {
      color: string;
    };

    constructor({ node }: OlsGraphNode) {
      /**
       * for more options have a look at: https://visjs.github.io/vis-network/docs/network/nodes.html
       */
      this.id = node['iri'];
      this.label = node['label'];
      this.color = {
        background: '#0E6668',
        highlight: {
          border: '#404040',
          background: '#404040'
        }
      };
      this.shape = 'box';
      this.font = {
        color: 'white',
      };

    }
  }

  class GraphEdge {
    id?: string;
    from?: string;
    to?: string;
    label?: string;
    arrows?: {
      to?: boolean;
    };
    width?: number;
    color?: {
      color?: string;
      highlight?: string;
    };
    font?: {
      size?: number;
    };

    constructor({ edge }: OlsGraphEdge) {
      if (edge['source'] && edge['target'] && edge['uri']) {
        /**
         * for more options have a look at: https://visjs.github.io/vis-network/docs/network/edges.html
         */
        this.id = edge['source'] + edge['target'] + "&uri=" + edge['uri'];
        this.from = edge['source'];
        this.to = edge['target'];
        this.label = edge['label'];
        this.arrows = { to: true };
        this.width = 2;
        this.color = {
          color: 'gray',
          highlight: '#00617C'
        };
        this.font = {
          size: 16
        };
      }
    }
  }

  function convertToOlsGraphFormat(listOfEntities: Array<Entity>) {
    // used for converting the list of ancestors to the ols api graph endpoints format. to be consumed by GraphNode and GraphEdge classes constructor.
    // currently used in showing ancestors. Equivalent to is-a relation.
    let data: { nodes: any[]; edges: any[] } = { "nodes": [], "edges": [] };
    data.nodes.push({ "iri": iri, "label": "testLabel" });
    let childIri = iri;
    listOfEntities.map((obj: any) => {
      let node = { "iri": obj.properties.iri, "label": obj.properties.label };
      let edge = { "source": childIri, "target": obj.properties.iri, "label": "is a", "uri": "http://www.w3.org/2000/01/rdf-schema#subClassOf" };
      data.nodes.push(node);
      data.edges.push(edge);
      childIri = obj.properties.iri;
    });
    return data;
  }


  if (data && (firstLoad || dbclicked)) {
    let gData = data;
    if (rootWalk && firstLoad) {
      gData = convertToOlsGraphFormat(data);
    }
    for (let node of gData['nodes']) {
      let gNode = new GraphNode({ node: node });
      //@ts-ignore                
      if (!nodes.current.get(gNode.id)) {
        //@ts-ignore
        nodes.current.add(gNode);
      }
    }
    for (let edge of gData['edges']) {
      let gEdge = new GraphEdge({ edge: edge });
      //@ts-ignore               
      if (!edges.current.get(gEdge.id)) {
        //@ts-ignore
        edges.current.add(gEdge);
      }
    }
    if (firstLoad) {
      setFirstLoad(false);
    }
    if(dbclicked){
      setDbclicked(false);
    }
  }


  function reset() {
    nodes.current.clear();
    edges.current.clear();
    setSelectedIri(iri);
    setFirstLoad(true);
    setDbclicked(false);
    setCounter(counter+1);
  }


  useEffect(() => {
    let graphData = { nodes: nodes.current, edges: edges.current };
    //@ts-ignore
    graphNetwork.current = new Network(container.current, graphData, graphNetworkConfig);
  }, []);



  useEffect(() => {
    if (graphNetwork.current) {
      //@ts-ignore                   
      graphNetwork.current.on("doubleClick", function(params) {
        if (params.nodes.length > 0) {
          let nodeIri = params.nodes[0];
          setSelectedIri(nodeIri);
          setDbclicked(true);
        }
      });
    }

  }, [graphNetwork]);


  useEffect(() => {
    // load the graph data again when the user change the mode to rootWalk and vice versa.
    reset();
  }, [rootWalk]);


  const hintText = `
      - You can expand the nodes by double clicking on them.\n
      - You can zoom out/in by scrolling on the graph. \n
      - You can go back to the initial graph by clicking on the Reset button.
      `;


  return (
    <>
      {isLoading && <EuiLoadingSpinner size="s" />}
      {isError && <EuiText>{getErrorMessageToDisplay(error, "graph")}</EuiText>}
      <div style={{ fontSize: 12 }}>
        <EuiButton size="s" onClick={reset}>Reset</EuiButton>
        <EuiIcon
          type={"iInCircle"}
          style={{ marginLeft: 5 }}
          size="l"
          title={hintText}
        />
      </div>
      <div style={{ width: "800px", height: "800px" }}>
        <div ref={container} className='graph-container' style={{ width: "700px", height: "700px" }} />
      </div>
    </>
  );
}


function createGraphView(props: GraphViewWidgetProps, container: Element, callback?: () => void) {
  ReactDOM.render(WrappedGraphViewWidget(props), container, callback);
}

function WrappedGraphViewWidget(props: GraphViewWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <GraphViewWidget
          api={props.api}
          iri={props.iri}
          ontologyId={props.ontologyId}
          useLegacy={props.useLegacy}
        />
      </QueryClientProvider>
    </EuiProvider>
  )
}


export { createGraphView, GraphViewWidget }
