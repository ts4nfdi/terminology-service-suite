import { GraphFetchData, GraphFetchFunctionInput } from './types';
import { JSTreeNode } from '../../../utils/olsApiTypes';
export declare function fetchRootWalkModeData(props: GraphFetchFunctionInput): Promise<GraphFetchData>;
export declare function fetchHierarchyModeData(props: GraphFetchFunctionInput): Promise<GraphFetchData>;
export declare function fetchNormalModeData(props: GraphFetchFunctionInput): Promise<GraphFetchData>;
export declare function convertFlatListToTreeStructure(listOfJsTreeNodes: JSTreeNode[]): JSTreeNode[];
