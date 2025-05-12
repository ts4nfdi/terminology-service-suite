import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  BuildHierarchyProps,
  HierarchyBuilder,
  HierarchyIriProp,
  LoadHierarchyChildrenProps,
} from "./HierarchyBuilder";
import {
  Hierarchy,
  ParentChildRelation,
  TreeNode,
} from "../model/interfaces/Hierarchy";
import Reified from "../model/Reified";
import { EntityData } from "../app/types";
import {removeDuplicateEntities} from "../app/util";

type TopConcept = {
  uri: string;
  label?: string;
  topConceptOf?: string;
  hasChildren: boolean;
  notation?: string;
};

type LabelAndUriAndChildren = {
  uri: string;
  label: string;
  hasChildren: boolean;
  notation?: string;
};

type HierarchyResult = {
  uri: string;
  prefLabel: string;
  top?: string;
  broader?: string[];
  narrower?: LabelAndUriAndChildren[];
};

type PrefAndUriAndChildren = {
  uri: string;
  prefLabel: string;
  hasChildren: boolean;
  notation?: string;
};

abstract class SkosEntityDataBuilder {
  static fromTopConcept(obj: TopConcept): EntityData {
    return {
      iri: obj.uri,
      label: obj.label,
      hasChildren: obj.hasChildren,
      parents: [],
    };
  }

  static fromHierarchyResult(obj: HierarchyResult): EntityData {
    return {
      iri: obj.uri,
      label: obj.prefLabel,
      hasChildren: obj.narrower != undefined && obj.narrower.length > 0,
      parents: Reified.fromJson(obj.broader),
    };
  }

  static fromPrefAndUriAndChildren(
    obj: PrefAndUriAndChildren,
    parents?: string[]
  ): EntityData {
    return {
      iri: obj.uri,
      label: obj.prefLabel,
      hasChildren: obj.hasChildren,
      parents: Reified.fromJson(parents),
    };
  }

  static fromLabelAndUriAndChildren(
    obj: LabelAndUriAndChildren,
    parents?: string[]
  ): EntityData {
    return {
      iri: obj.uri,
      label: obj.label,
      hasChildren: obj.hasChildren,
      parents: Reified.fromJson(parents),
    };
  }
}

export class SkosApi implements HierarchyBuilder {
  private axiosInstance: AxiosInstance;

  constructor(api: string) {
    this.axiosInstance = axios.create({
      baseURL: api,
      headers: {
        Accept: "application/json",
        // Content_Type: "application/json", // leads to preflight error
      },
    });
  }

  private async makeCall(
    url: string,
    config: AxiosRequestConfig<never> | undefined
  ) {
    return (await this.axiosInstance.get(url, config)).data;
  }

  public async buildHierarchyWithIri(
    props: BuildHierarchyProps & HierarchyIriProp
  ): Promise<Hierarchy> {
    const { iri, ontologyId, showSiblingsOnInit } = props;

    if (!ontologyId)
      throw Error("ontologyId has to be specified for SKOS API.");

    let rootEntities: string[] = [];
    const parentChildRelations: Map<string, ParentChildRelation[]> = new Map<
      string,
      ParentChildRelation[]
    >();
    const entitiesData: Map<string, EntityData> = new Map<string, EntityData>();
    const allChildrenPresent: Set<string> = new Set<string>();
    const onInitialPath: Set<string> = new Set<string>(); // only used if showSiblingsOnInit == false

    if (iri) {
      const broaderTransitive: HierarchyResult[] = await this.makeCall(
        `/${ontologyId}/hierarchy`,
        { params: { uri: iri, lang: "en", format: "application/json" } }
      ).then((obj) =>
        Object.keys(obj["broaderTransitive"]).map(
          (key) => obj["broaderTransitive"][key]
        )
      );

      // stores all entities appearing in broaderTransitive
      //const entities: Map<string, EntityData> = new Map<string, EntityData>()

      for (const node of broaderTransitive) {
        const nodeData: EntityData =
          SkosEntityDataBuilder.fromHierarchyResult(node);

        entitiesData.set(nodeData.iri, nodeData);
        if (node.top) rootEntities.push(nodeData.iri);

        if (!showSiblingsOnInit) onInitialPath.add(nodeData.iri);
      }
      for (const node of broaderTransitive) {
        if (node.narrower != undefined) {
          let children: EntityData[] = [];

          for (const childNode of node.narrower) {
            let childNodeData = entitiesData.get(childNode.uri);
            if (childNodeData == undefined) {
              childNodeData = SkosEntityDataBuilder.fromLabelAndUriAndChildren(
                childNode,
                [node.uri]
              );

              entitiesData.set(childNodeData.iri, childNodeData);
            } else {
              // @ts-ignore
              if (!childNodeData.parents.map((r) => r.value).includes(node.uri))
                if (childNodeData.parents) {
                  childNodeData.parents.push(
                    ...Reified.fromJson<string>(node.uri)
                  );
                }
            }
            children.push(childNodeData);
          }

          children.sort((a, b) =>
            (a.label || a.iri).localeCompare(b.label || b.iri)
          );

          children = removeDuplicateEntities(
              children,
              (elem: EntityData) => elem.iri
          );

          parentChildRelations.set(
            node.uri,
            children.map((c) => {
              return { childIri: c.iri };
            })
          );
          allChildrenPresent.add(node.uri); // in skos, all children are loaded if any are
        }
      }
    } else {
      const topconcepts: TopConcept[] = await this.makeCall(
        `/${ontologyId}/topConcepts`,
        { params: { lang: "en", format: "application/json" } }
      ).then((obj) => obj["topconcepts"]);

      for (const concept of topconcepts) {
        rootEntities.push(concept.uri);
      }
    }

    function createTreeNode(
      entityData: EntityData,
      cycleCheck: Set<string>
    ): TreeNode {
      cycleCheck.add(entityData.iri); // add current entity to cycle check set

      const node = new TreeNode(entityData);
      const children = parentChildRelations.get(entityData.iri) || [];

      if (!showSiblingsOnInit) {
        for (const child of children) {
          if (cycleCheck.has(child.childIri)) {
            // cyclic tree, skip cycle
            console.error(`Cyclic tree at entity "${child.childIri}".`);
            continue;
          }

          const childData = entitiesData.get(child.childIri);
          if (childData != undefined && onInitialPath.has(child.childIri)) {
            node.addChild(createTreeNode(childData, cycleCheck));
          }
        }
      } else {
        for (const child of children) {
          if (cycleCheck.has(child.childIri)) {
            // cyclic tree, skip cycle
            console.error(`Cyclic tree at entity "${child.childIri}".`);
            continue;
          }

          const childData = entitiesData.get(child.childIri);
          if (childData != undefined)
            node.addChild(createTreeNode(childData, cycleCheck));
        }
      }

      if (node.loadedChildren.length > 0) node.expanded = true;

      cycleCheck.delete(entityData.iri);
      return node;
    }

    const cycleCheck: Set<string> = new Set<string>(); // Contains iris of all entities that have occurred within the current recursion branch. Is used to check for cycles.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

    // remove duplicates
    rootEntities = removeDuplicateEntities(
        rootEntities,
        (elem: string) => elem
    )

    const rootNodes: TreeNode[] = rootEntities
      .map((rootEntity) =>
        createTreeNode(entitiesData.get(rootEntity)!, cycleCheck)
      )
      .sort((a, b) =>
        (a.entityData.label || a.entityData.iri).localeCompare(
          b.entityData.label || b.entityData.iri
        )
      );

    return new Hierarchy({
      parentChildRelations: parentChildRelations,
      entitiesData: entitiesData,
      allChildrenPresent: allChildrenPresent,
      roots: rootNodes,
      api: new SkosApi(this.axiosInstance.getUri()),
      ontologyId: ontologyId,
      mainEntityIri: iri,
      keepExpansionStates: props.keepExpansionStates,
    });
  }

  public async loadHierarchyChildren(
    props: LoadHierarchyChildrenProps
  ): Promise<EntityData[]> {
    const { nodeToExpand, ontologyId } = props;

    const narrower: PrefAndUriAndChildren[] = (
      await this.makeCall(`/${ontologyId}/children`, {
        params: {
          uri: nodeToExpand.entityData.iri,
          lang: "en",
          format: "application/json",
        },
      })
    )["narrower"];

    return narrower.map((obj) =>
      SkosEntityDataBuilder.fromPrefAndUriAndChildren(obj, [
        nodeToExpand.entityData.iri,
      ])
    );
  }
}
