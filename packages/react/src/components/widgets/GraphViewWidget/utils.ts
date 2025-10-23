import { GraphFetchData } from "./types";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { GraphFetchFunctionInput } from "./types";


export async function fetchRootWalkModeData(props: GraphFetchFunctionInput): Promise<GraphFetchData> {
  const { api, ontologyId, iri, secondIri } = props;
  const olsEntityApi = new OlsEntityApi(api);
  let termTree = await olsEntityApi.getTermTree(
    { ontologyId: ontologyId, termIri: iri },
    { viewMode: "All", siblings: false },
  )
  if (secondIri) {
    let secondTermTree = await olsEntityApi.getTermTree(
      { ontologyId: ontologyId, termIri: secondIri },
      { viewMode: "All", siblings: false },
    );
    return { treeData: termTree, secondTreeData: secondTermTree };
  }

  return { treeData: termTree };

}


export async function fetchHierarchyModeData(props: GraphFetchFunctionInput): Promise<GraphFetchData> {
  const { api, ontologyId, iri, secondIri } = props;
  const olsEntityApi = new OlsEntityApi(api);
  let termTree = await olsEntityApi.getTermTree(
    { ontologyId: ontologyId, termIri: iri },
    { viewMode: "All", siblings: false },
  );

  let termRelation = await olsEntityApi.getTermRelations({
    ontologyId: ontologyId,
    termIri: iri,
  });

  if (secondIri) {
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
  const { api, ontologyId, iri, secondIri } = props;
  const olsEntityApi = new OlsEntityApi(api);
  let termRelations = await olsEntityApi.getTermRelations({
    ontologyId: ontologyId,
    termIri: iri,
  });
  if (secondIri) {
    let secondTermRelation = await olsEntityApi.getTermRelations({
      ontologyId: ontologyId,
      termIri: secondIri,
    });
    return { termRelations: termRelations, secondTermRelations: secondTermRelation } as GraphFetchData;
  }
  return { termRelations: termRelations } as GraphFetchData;
}


export async function fetchDoubleClickModeData(props: GraphFetchFunctionInput): Promise<GraphFetchData> {
  const { api, ontologyId, iri } = props;
  const olsEntityApi = new OlsEntityApi(api);
  let termRelations = await olsEntityApi.getTermRelations({
    ontologyId: ontologyId,
    termIri: iri,
  });
  return { termRelations: termRelations } as GraphFetchData;
}
