import { GraphFetchData, GraphFetchFunctionInput } from "./types";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { JSTreeNode } from "../../../utils/olsApiTypes";


export async function fetchRootWalkModeData(props: GraphFetchFunctionInput): Promise<GraphFetchData> {
  const { api, ontologyId, iri, secondIri, dbClicked } = props;
  const olsEntityApi = new OlsEntityApi(api);
  let termTree = await olsEntityApi.getTermTree(
    { ontologyId: ontologyId, termIri: iri },
    { viewMode: "All", siblings: false },
  )
  if (secondIri && !dbClicked) {
    let secondTermTree = await olsEntityApi.getTermTree(
      { ontologyId: ontologyId, termIri: secondIri },
      { viewMode: "All", siblings: false },
    );
    return { treeData: termTree, secondTreeData: secondTermTree };
  }

  return { treeData: termTree };

}


export async function fetchHierarchyModeData(props: GraphFetchFunctionInput): Promise<GraphFetchData> {
  const { api, ontologyId, iri, secondIri, dbClicked } = props;
  const olsEntityApi = new OlsEntityApi(api);
  let termTree = await olsEntityApi.getTermTree(
    { ontologyId: ontologyId, termIri: iri },
    { viewMode: "All", siblings: false },
  );

  let termRelation = await olsEntityApi.getTermRelations({
    ontologyId: ontologyId,
    termIri: iri,
  });

  if (secondIri && !dbClicked) {
    let secondTermTree = await olsEntityApi.getTermTree(
      { ontologyId: ontologyId, termIri: secondIri },
      { viewMode: "All", siblings: false },
    );

    let secondTermRelation = await olsEntityApi.getTermRelations({
      ontologyId: ontologyId,
      termIri: secondIri,
    });
    return { treeData: termTree, termRelations: termRelation, secondTreeData: secondTermTree, secondTermRelations: secondTermRelation } as GraphFetchData;
  }

  return { treeData: termTree, termRelations: termRelation } as GraphFetchData;
}


export async function fetchNormalModeData(props: GraphFetchFunctionInput): Promise<GraphFetchData> {
  const { api, ontologyId, iri, secondIri, dbClicked } = props;
  const olsEntityApi = new OlsEntityApi(api);
  let termRelations = await olsEntityApi.getTermRelations({
    ontologyId: ontologyId,
    termIri: iri,
  });
  if (secondIri && !dbClicked) {
    let secondTermRelation = await olsEntityApi.getTermRelations({
      ontologyId: ontologyId,
      termIri: secondIri,
    });
    return { termRelations: termRelations, secondTermRelations: secondTermRelation } as GraphFetchData;
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
