import { OlsGraphEdge, OlsGraphNode } from "../../../app/types";
import {
  DEFAULT_HIERARCHY_DIRECTION,
  DEFAULT_NODE_BG_COLOR,
  NODE_TEXT_COLOR,
} from "./vars";

export const hierarchicalConfig = {
  enabled: true,
  //@ts-ignore
  direction: DEFAULT_HIERARCHY_DIRECTION,
  //@ts-ignore
  sortMethod: "directed",
};

export const graphNetworkConfig = {
  /**
   * for more options have a look at: https://visjs.github.io/vis-network/docs/network/#options
   */
  autoResize: true,
  height: "100%",
  width: "100%",
  locale: "en",
  layout: {
    randomSeed: 1,
    improvedLayout: true,
    clusterThreshold: 150,
    hierarchical: {
      enabled: false,
    },
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
    },
    hierarchicalRepulsion: {
      damping: 0.09,
      avoidOverlap: 0.9,
    },
  },
  interaction: {
    dragNodes: true,
    dragView: true,
    zoomView: true,
  },
};

export class GraphNode {
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

  constructor(
    node: OlsGraphNode,
    bgColor = DEFAULT_NODE_BG_COLOR,
    color = NODE_TEXT_COLOR,
  ) {
    /**
     * for more options have a look at: https://visjs.github.io/vis-network/docs/network/nodes.html
     */
    this.id = node["iri"];
    this.label = node["label"];
    this.color = {
      background: bgColor,
      highlight: {
        border: "#404040",
        background: "#404040",
      },
    };
    this.shape = "box";
    this.font = {
      color: color,
    };
  }
}

export class GraphEdge {
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

  constructor(edge: OlsGraphEdge, edgeLabel = "is a") {
    if (edge["source"] && edge["target"] && edge["uri"]) {
      /**
       * for more options have a look at: https://visjs.github.io/vis-network/docs/network/edges.html
       */
      this.id = edge["source"] + edge["target"] + "&uri=" + edge["uri"];
      this.from = edge["source"];
      this.to = edge["target"];
      this.label = edgeLabel;
      this.arrows = { to: true };
      this.width = 2;
      this.color = {
        color: "gray",
        highlight: "#00617C",
      };
      this.font = {
        size: 16,
      };
    }
  }
}
