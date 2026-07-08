import { OlsGraphEdge, OlsGraphNode } from "../../../app";
import { JSTreeNode } from "../../../utils/olsApiTypes";

export type GraphFetchData = {
  treeData: JSTreeNode[];
  termRelations?: VisGraphData;
  targetTreeData?: JSTreeNode[];
  targetTermRelations?: VisGraphData;
};

export type VisGraphData = {
  nodes: VisGraphNode[];
  edges: VisGraphEdge[];
};

export type VisGraphDataMap = {
  nodes: Map<string, VisGraphNode>;
  edges: Map<string, VisGraphEdge>;
};

export type VisGraphNode = OlsGraphNode & {
  color?: string;
  backgroundColor?: string;
  isCommon?: boolean;
  exclusiveToTargetIri?: boolean;
};

export type VisGraphEdge = OlsGraphEdge & {
  notOriginal?: boolean; // this is used to mark the edges that are not part of the original tree data and added upon removing the node from the graph.
};

export type GraphFetchFunctionInput = {
  api: string;
  ontologyId: string;
  iri: string;
  targetIri?: string;
  dbClicked?: boolean;
  parameter?: string;
};

export type HierarchyConfigT = {
  enabled: boolean;
  direction: "DU" | "UD" | "LR" | "RL";
  sortMethod: string;
  levelSeparation: number;
  nodeSpacing: number;
};
