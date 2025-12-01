import { JSTreeNode } from '../../../utils/olsApiTypes';
import { OlsGraphNode } from '../../../app';
export type GraphFetchData = {
    treeData: JSTreeNode[];
    termRelations?: VisGraphData;
    targetTreeData?: JSTreeNode[];
    targetTermRelations?: VisGraphData;
};
export type VisGraphData = {
    nodes: OlsGraphNode[];
    edges: any[];
};
export type GraphFetchFunctionInput = {
    api: string;
    ontologyId: string;
    iri: string;
    targetIri?: string;
    dbClicked?: boolean;
};
