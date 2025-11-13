import { GraphFetchData, GraphFetchFunctionInput } from "./types";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { JSTreeNode } from "../../../utils/olsApiTypes";


export async function fetchRootWalkModeData(props: GraphFetchFunctionInput): Promise<GraphFetchData> {
  const { api, ontologyId, iri, targetIri, dbClicked } = props;
  const olsEntityApi = new OlsEntityApi(api);
  let termTree = await olsEntityApi.getTermTree(
    { ontologyId: ontologyId, termIri: iri },
    { viewMode: "All", siblings: false },
  )
  if (targetIri && !dbClicked) {
    let targetTermTree = await olsEntityApi.getTermTree(
      { ontologyId: ontologyId, termIri: targetIri },
      { viewMode: "All", siblings: false },
    );
    return { treeData: termTree, targetTreeData: targetTermTree };
  }

  return { treeData: termTree };

}


export async function fetchHierarchyModeData(props: GraphFetchFunctionInput): Promise<GraphFetchData> {
  const { api, ontologyId, iri, targetIri, dbClicked } = props;
  const olsEntityApi = new OlsEntityApi(api);
  let termTree = await olsEntityApi.getTermTree(
    { ontologyId: ontologyId, termIri: iri },
    { viewMode: "All", siblings: false },
  );

  let termRelation = await olsEntityApi.getTermRelations({
    ontologyId: ontologyId,
    termIri: iri,
  });

  if (targetIri && !dbClicked) {
    let targetTermTree = await olsEntityApi.getTermTree(
      { ontologyId: ontologyId, termIri: targetIri },
      { viewMode: "All", siblings: false },
    );

    let targetTermRelation = await olsEntityApi.getTermRelations({
      ontologyId: ontologyId,
      termIri: targetIri,
    });
    return { treeData: termTree, termRelations: termRelation, targetTreeData: targetTermTree, targetTermRelations: targetTermRelation } as GraphFetchData;
  }

  return { treeData: termTree, termRelations: termRelation } as GraphFetchData;
}


export async function fetchNormalModeData(props: GraphFetchFunctionInput): Promise<GraphFetchData> {
  const { api, ontologyId, iri, targetIri, dbClicked } = props;
  const olsEntityApi = new OlsEntityApi(api);
  let termRelations = await olsEntityApi.getTermRelations({
    ontologyId: ontologyId,
    termIri: iri,
  });
  if (targetIri && !dbClicked) {
    let targetTermRelation = await olsEntityApi.getTermRelations({
      ontologyId: ontologyId,
      termIri: targetIri,
    });
    return { termRelations: termRelations, targetTermRelations: targetTermRelation } as GraphFetchData;
  }
  return { termRelations: termRelations } as GraphFetchData;
}



export function convertFlatListToTreeStructure(listOfJsTreeNodes: JSTreeNode[]): JSTreeNode[] {
  let treeData: JSTreeNode[] = [];
  for (let node of listOfJsTreeNodes) {
    if (node.parent === "#") {
      treeData.push(node);
      continue;
    }
    for (let pn of listOfJsTreeNodes) {
      if (pn.id === node.parent) {
        if ("childrenList" in pn) {
          pn.childrenList!.push(node);
        } else {
          pn.childrenList = [node];
        }
        if ("parentList" in node) {
          //@ts-ignore
          node.parentList.push(pn);
        } else {
          node.parentList = [pn];
        }
      }
    }
  }
  return treeData;
  }
