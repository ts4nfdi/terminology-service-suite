import React from "react";
import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { GraphViewWidgetProps } from "../../../app/types";
import { OlsApi } from "../../../api/OlsApi";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { EuiProvider } from "@elastic/eui";
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import { OlsGraphNode, OlsGraphEdge } from "../../../app/types";


function GraphViewWidget(props:GraphViewWidgetProps){
    const {api, iri, ontologyId, useLegacy} = props;

    const olsApi = new OlsApi(api);

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
      } = useQuery(
        ["termGraph", api, iri, ontologyId, useLegacy],
        async () => {
          return olsApi.getTermRelations({ontologyId: ontologyId, termIri: iri});          
        }
      );


    const nodes = useRef(new DataSet([]));
    const edges = useRef(new DataSet([]));
    const graphNetwork = useRef({});
    const container = useRef(null);

    const graphNetworkConfig = {
      autoResize: true,
      height: '100%',
      width: '100%',
      locale: 'en',
      layout: {
          randomSeed: 1,
          improvedLayout:true,
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

    
    class GraphNode{
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
    
      constructor({node}:OlsGraphNode){
          this.id = node['iri'];
          this.label= node['label'];
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
    
    class GraphEdge{
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
    
      constructor({edge}: OlsGraphEdge){
        if(edge['source'] && edge['target'] && edge['uri']){
          this.id = edge['source'] + edge['target'] + "&uri=" + edge['uri'];
          this.from = edge['source'];
          this.to = edge['target'];
          this.label = edge['label'];
          this.arrows = {to:true};
          this.width = 2;          
          this.color = {
              color: 'gray',
              highlight:'#00617C'
          };
          this.font = {
              size:16
          };
        }
      }
    }


    if(data){
      for (let node of data['nodes']){
          let gNode = new GraphNode({node:node});
          //@ts-ignore                
          if(!nodes.current.get(gNode.id)){
              //@ts-ignore
              nodes.current.add(gNode);
          }                
      }
      for (let edge of data['edges']){                
          let gEdge = new GraphEdge({edge:edge}); 
          //@ts-ignore               
          if(!edges.current.get(gEdge.id)){
              //@ts-ignore
              edges.current.add(gEdge);
          }                
      }
    }

    useEffect(()=>{
      let graphData = {nodes: nodes.current, edges: edges.current}; 
      //@ts-ignore
      graphNetwork.current = new Network(container.current, graphData, graphNetworkConfig); 
    }, []); 
      
      
    return(
      <>
        <div style={{width: "800px", height: "800px"}}>
          <div ref={container} className='graph-container' style={{width: "700px", height: "700px"}}/>
        </div>
      </>
    );
}


function createGraphView(props: GraphViewWidgetProps, container: Element, callback?: ()=>void) {
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


export {createGraphView, GraphViewWidget}