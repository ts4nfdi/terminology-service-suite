import { OlsGraphEdge, OlsGraphNode } from '../../../app/types';
export declare const hierarchicalConfig: {
    enabled: boolean;
    direction: string;
    sortMethod: string;
};
export declare const graphNetworkConfig: {
    /**
     * for more options have a look at: https://visjs.github.io/vis-network/docs/network/#options
     */
    autoResize: boolean;
    height: string;
    width: string;
    locale: string;
    layout: {
        randomSeed: number;
        improvedLayout: boolean;
        clusterThreshold: number;
        hierarchical: {
            enabled: boolean;
        };
    };
    physics: {
        enabled: boolean;
        barnesHut: {
            gravitationalConstant: number;
            centralGravity: number;
            springLength: number;
            springConstant: number;
            damping: number;
            avoidOverlap: number;
        };
        hierarchicalRepulsion: {
            damping: number;
            avoidOverlap: number;
        };
    };
    interaction: {
        dragNodes: boolean;
        dragView: boolean;
        zoomView: boolean;
    };
};
export declare class GraphNode {
    id?: string;
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
    label?: string;
    constructor(node: OlsGraphNode, bgColor?: string, color?: string);
}
export declare class GraphEdge {
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
    constructor(edge: OlsGraphEdge, edgeLabel?: string);
}
