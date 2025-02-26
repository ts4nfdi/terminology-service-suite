import React from "react";
import { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { GraphViewWidgetProps } from "../../../app/types";
import { OlsApi } from "../../../api/OlsApi";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider, EuiLoadingSpinner, EuiText, EuiButton, EuiPanel,EuiSwitch, EuiPopover, EuiButtonEmpty } from "@elastic/eui";
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import { OlsGraphNode, OlsGraphEdge } from "../../../app/types";
import { getErrorMessageToDisplay } from "../../../app/util";
import { JSTreeNode } from "../../../api/OlsApi";
import "../../../style/ts4nfdiStyles/ts4nfdiGraphStyle.css"

function GraphViewWidget(props: GraphViewWidgetProps) {
  const { api, iri, ontologyId, rootWalk, className } = props;

  const [selectedIri, setSelectedIri] = useState(iri);
  const [firstLoad, setFirstLoad] = useState(true);
  const [dbclicked, setDbclicked] = useState(false);
  const [rootWalkIsSelected, setRootWalkIsSelected] = useState(rootWalk ? rootWalk : false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
  // needed for useQuery. without it the graph won't get updated on switching berween rootWalk=true and false.
  const [counter, setCounter] = useState(0); 

  const olsApi = new OlsApi(api);
  const finalClassName = className || "ts4nfdi-graph-style"

  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery(
    ["termGraph", api, selectedIri, ontologyId, rootWalkIsSelected, dbclicked,counter],
    async () => {
      if (rootWalkIsSelected && firstLoad) {
        // only use this call on load. Double ckicking on a node should call the normal getTermRelations function.
        return olsApi.getTermTree({ontologyId: ontologyId, termIri: iri}, {viewMode: "All", siblings: false}, undefined, undefined);
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
        background: '#455469',
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
    dashes?: boolean;

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



  function convertToOlsGraphFormat(listOfJsTreeNodes: Array<JSTreeNode>) {
    // used for converting the list of ancestors to the ols api graph endpoints format. to be consumed by GraphNode and GraphEdge classes constructor.
    // currently used in showing ancestors. Equivalent to is-a relation.
    let data: { nodes: any[]; edges: any[] } = { "nodes": [], "edges": [] };
    listOfJsTreeNodes.map((treeNode: JSTreeNode) => {
      if(!data.nodes.find((obj) => obj.iri === treeNode.iri)){
        let node = { "iri": treeNode.iri, "label": treeNode.text };
        data.nodes.push(node);
      }
      let parentNode = listOfJsTreeNodes.find((obj:JSTreeNode) => obj.id === treeNode.parent);
      if (parentNode){        
        // parent does not exists --> '#' id that indicates a node is a root.
        let edge = { "source": treeNode.iri, "target": parentNode.iri, "label": "subClassOf", "uri": "http://www.w3.org/2000/01/rdf-schema#subClassOf" };
        if(!data.edges.find((obj) => obj.source === edge.source && obj.target === edge.target)){
          data.edges.push(edge);
        }
      }
    });
    return data;
  }

  if (data && (firstLoad || dbclicked)) {
    let gData = data;
    if (rootWalkIsSelected && firstLoad) {
      gData = convertToOlsGraphFormat(data);
    }
    for (let node of gData['nodes']) {
      let gNode = new GraphNode({ node: node });
      //@ts-ignore                
      if (!nodes.current.get(gNode.id)) {
        if(gNode.id === iri && rootWalkIsSelected){
          gNode.color.background = '#0BBBEF';
          gNode.font.color = 'black';
        }
        //@ts-ignore
        nodes.current.add(gNode);
      }
    }
    for (let edge of gData['edges']) {
      let gEdge = new GraphEdge({ edge: edge });
      let dashed = (edge.uri === "http://www.w3.org/2000/01/rdf-schema#subClassOf" || rootWalkIsSelected) ? false : true;
      gEdge.dashes = dashed;
      //@ts-ignore               
      if (!edges.current.get(gEdge.id)) {
        if(gEdge.id?.includes(iri) && rootWalkIsSelected){
          //@ts-ignore
          gEdge.color.color = 'black';
        }
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
    // load the graph data again when the user change the mode to rootWalk and vice versa OR input props changes.
    reset();
  }, [rootWalkIsSelected, api, ontologyId, iri]);
  
  useEffect(() => {
    // when user change the storybook rootWalk value
    setRootWalkIsSelected(rootWalk ? rootWalk : false);
  }, [rootWalk]);



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


  return (
    <div className={finalClassName}>
      {isError && <EuiText>{getErrorMessageToDisplay(error, "graph")}</EuiText>}
      <EuiPanel style={{ fontSize: 12 }} paddingSize='s' borderRadius="none">
        <EuiButton size="s" onClick={reset}>Reset</EuiButton>
        <EuiPopover
          button={button}
          isOpen={isPopoverOpen}
          closePopover={closePopover}
          >
          <EuiText style={{ width: 300, padding: 10 }}>
            <li>You can expand the nodes by double clicking on them</li>
            <li>You can zoom out/in by scrolling on the graph.</li>
            <li>You can go back to the initial graph by clicking on the Reset button.</li>
            <li>You can move the nodes and edges around by dragging.</li>
            <li>Rootwalk toggle enable the root walk mode in the graph, where you can see the path from roots to the target node.</li>          
          </EuiText>
        </EuiPopover>
        <div style={{display: 'inline-block', float: 'right', paddingTop: 10}}>
          <EuiSwitch 
            label="root walk" 
            checked={rootWalkIsSelected} 
            onChange={() => {setRootWalkIsSelected(!rootWalkIsSelected)}}
            title="Enable the root walk mode in the graph: You can see the path from roots to the target node"
          />
        </div>
      </EuiPanel>
      
      <EuiPanel style={{ width: 900, height: 900 }} hasShadow={false} hasBorder={true} borderRadius="none" >
        {isLoading && <EuiLoadingSpinner size="m" />}
        <div ref={container} className='graph-container' style={{ width: "850px", height: "850px", margin:'auto' }} />
      </EuiPanel>
    </div>
  );
}


function createGraphView(props: GraphViewWidgetProps, container: Element, callback?: () => void) {
  ReactDOM.render(WrappedGraphViewWidget(props), container, callback);
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
        />
      </QueryClientProvider>
    </EuiProvider>
  )
}


export { createGraphView, GraphViewWidget }
