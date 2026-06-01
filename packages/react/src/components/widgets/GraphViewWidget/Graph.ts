import {
  GraphFetchData,
  VisGraphDataMap,
  VisGraphEdge,
  VisGraphNode,
} from "./types";

import {
  EXCLUSIVE_TO_TARGET_IRI_COLOR,
  NODE_TEXT_COLOR,
  SUBCLASS_OF_EDGE_LABEL,
  SUBCLASS_OF_URIS,
} from "./vars";

import { generateEdgeId } from "./GraphConfigs";

type GraphProps = {
  data?: GraphFetchData;
};

class Graph {
  data?: GraphFetchData;
  graphData: VisGraphDataMap;
  constructor(props: GraphProps) {
    this.data = props.data;
    this.graphData = {
      nodes: new Map<string, VisGraphNode>(),
      edges: new Map<string, VisGraphEdge>(),
    };
  }

  addTermRelationsNodesToGraph() {
    if (!this.data) {
      return;
    }
    let graphData = { ...this.graphData };
    for (let n of this.data.termRelations?.nodes ?? []) {
      if (!graphData.nodes.has(n.iri as string)) {
        graphData.nodes.set(n.iri as string, n);
      }
    }
    if (this.data.targetTermRelations) {
      // when targetIri is given for comparison
      for (let sn of this.data.targetTermRelations.nodes) {
        if (graphData.nodes.has(sn.iri as string)) {
          let existingNode = graphData.nodes.get(sn.iri as string)!;
          existingNode.isCommon = true;
        } else {
          sn.isCommon = false;
          sn.backgroundColor = EXCLUSIVE_TO_TARGET_IRI_COLOR;
          sn.color = NODE_TEXT_COLOR;
          sn.exclusiveToTargetIri = true;
          graphData.nodes.set(sn.iri as string, sn);
        }
      }
    }
    this.graphData = graphData;
  }

  addTermRelationsEdgesToGraph() {
    if (!this.data) {
      return;
    }
    let graphData = { ...this.graphData };
    for (let e of this.data.termRelations?.edges ?? []) {
      let eId = generateEdgeId(e);
      if (graphData.edges.has(eId)) continue;
      if (SUBCLASS_OF_URIS.includes(e.uri!)) {
        e.label = SUBCLASS_OF_EDGE_LABEL;
      }
      graphData.edges.set(eId, e);
    }
    if (this.data.targetTermRelations?.edges) {
      for (let se of this.data.targetTermRelations.edges) {
        let eId = generateEdgeId(se);
        if (!graphData.edges.has(eId)) {
          graphData.edges.set(eId, se);
        }
      }
    }
    this.graphData = graphData;
  }
}

export default Graph;
