import { OlsGraphNode, OlsGraphEdge } from "../../../app/types";


export const hierarchicalConfig = {
  enabled: true,
  //@ts-ignore
  direction: "DU",
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

  constructor({ node }: OlsGraphNode, bgColor = "#455469", color = "white") {
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

  constructor({ edge }: OlsGraphEdge) {
    if (edge["source"] && edge["target"] && edge["uri"]) {
      /**
       * for more options have a look at: https://visjs.github.io/vis-network/docs/network/edges.html
       */
      this.id = edge["source"] + edge["target"] + "&uri=" + edge["uri"];
      this.from = edge["source"];
      this.to = edge["target"];
      this.label = edge["label"];
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
