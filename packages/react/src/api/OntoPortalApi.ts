import {
  BuildHierarchyProps,
  HierarchyBuilder,
  HierarchyIriProp,
  LoadHierarchyChildrenProps,
} from "./HierarchyBuilder";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  Hierarchy,
  ParentChildRelation,
  TreeNode,
} from "../model/interfaces/Hierarchy";
import { pluralizeType } from "../app/util";
import { EntityData } from "../app/types";

type HierarchyNode = {
  prefLabel: string;
  hasChildren: boolean;
  children: HierarchyNode[];
  obsolete: boolean; // TODO: use this to enable showing obsoleteTerms?
  ["@id"]: string;
  ["@type"]: string;
  // links: object - not needed here
  ["@context"]: {
    ["@vocab"]: string;
    prefLabel: string;
    obsolete: string;
    ["@language"]: string;
  };
};

function HierarchyNodeToEntityData(hierarchyNode: HierarchyNode): EntityData {
  return {
    iri: hierarchyNode["@id"],
    label: hierarchyNode["prefLabel"],
    hasChildren: hierarchyNode["hasChildren"],
    parents: [],
  };
}

export class OntoPortalApi implements HierarchyBuilder {
  private axiosInstance: AxiosInstance;
  private apiKey: string;

  constructor(api: string, apiKey: string) {
    this.axiosInstance = axios.create({
      baseURL: api,
      headers: {
        Accept: "application/json",
        // Content_Type: "application/json", // leads to preflight error
      },
    });
    this.apiKey = apiKey;
    this.axiosInstance.interceptors.request.use((config) => {
      config.params = config.params || {};

      // default params
      config.params["apikey"] = this.apiKey;
      config.params["format"] = "json";

      return config;
    });
  }

  private async makeCall(url: string, config?: AxiosRequestConfig<never>) {
    return (await this.axiosInstance.get(url, config)).data;
  }

  public async buildHierarchyWithIri(
    props: BuildHierarchyProps & HierarchyIriProp
  ): Promise<Hierarchy> {
    const { iri, ontologyId, entityType, showSiblingsOnInit } = props;

    if (!ontologyId)
      throw Error("ontologyId has to be specified for OntoPortal API.");
    if (!entityType)
      throw Error("entityType has to be specified for OntoPortal API.");

    const rootEntities: string[] = [];
    const entitiesData: Map<string, EntityData> = new Map<string, EntityData>();
    const parentChildRelations: Map<string, ParentChildRelation[]> = new Map<
      string,
      ParentChildRelation[]
    >();
    const allChildrenPresent: Set<string> = new Set<string>();
    const onInitialPath: Set<string> = new Set<string>(); // only used if showSiblingsOnInit == false

    function buildRelations(currNode: HierarchyNode) {
      entitiesData.set(currNode["@id"], HierarchyNodeToEntityData(currNode));
      if (currNode.hasChildren && currNode.children.length > 0) {
        parentChildRelations.set(
          currNode["@id"],
          currNode.children.map((c) => {
            return { childIri: c["@id"] };
          })
        );

        allChildrenPresent.add(currNode["@id"]);
        onInitialPath.add(currNode["@id"]);

        for (const child of currNode.children) {
          buildRelations(child);
        }
      }
    }

    if (iri) {
      // TODO: property which is child of multiple properties only is returned in one parent in /tree query (-> do it right manually?) (e.g.: http://sweetontology.net/relaTime/hasNHTime -> has more than one parent, but is only shown in one parent in /tree)
      const api_tree: HierarchyNode[] = await this.makeCall(
        `/ontologies/${ontologyId.toUpperCase()}/${pluralizeType(
          entityType,
          false
        )}/${encodeURIComponent(iri)}/tree`,
        { params: { include: "@id,prefLabel,hasChildren,children" } }
      );

      for (const rootNode of api_tree) {
        rootEntities.push(rootNode["@id"]);
        onInitialPath.add(rootNode["@id"]);
        buildRelations(rootNode);
      }
      onInitialPath.add(iri);
    } else {
      const roots: HierarchyNode[] = await this.makeCall(
        `/ontologies/${ontologyId.toUpperCase()}/${pluralizeType(
          entityType,
          false
        )}/roots`,
        { params: { include: "@id,prefLabel,hasChildren" } }
      );

      for (const rootNode of roots) {
        rootEntities.push(rootNode["@id"]);
        onInitialPath.add(rootNode["@id"]);
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

          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          if (onInitialPath.has(child.childIri))
            node.addChild(
              createTreeNode(entitiesData.get(child.childIri)!, cycleCheck)
            );
        }
      } else {
        for (const child of children) {
          if (cycleCheck.has(child.childIri)) {
            // cyclic tree, skip cycle
            console.error(`Cyclic tree at entity "${child.childIri}".`);
            continue;
          }

          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          node.addChild(
            createTreeNode(entitiesData.get(child.childIri)!, cycleCheck)
          );
        }
      }

      if (node.loadedChildren.length > 0) node.expanded = true;

      cycleCheck.delete(entityData.iri);
      return node;
    }

    const cycleCheck: Set<string> = new Set<string>(); // Contains iris of all entities that have occurred within the current recursion branch. Is used to check for cycles.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
      api: new OntoPortalApi(this.axiosInstance.getUri(), this.apiKey),
      ontologyId: ontologyId,
      mainEntityIri: iri,
      keepExpansionStates: props.keepExpansionStates,
      entityType: entityType,
    });
  }

  public async loadHierarchyChildren(
    props: LoadHierarchyChildrenProps
  ): Promise<EntityData[]> {
    const { nodeToExpand, ontologyId, entityType } = props;

    if (entityType == undefined)
      throw Error(
        "entityType has to be provided to load children in an OntoPortal hierarchy."
      );

    const children: HierarchyNode[] = (
      await this.makeCall(
        `/ontologies/${ontologyId.toUpperCase()}/${pluralizeType(
          entityType,
          false
        )}/${encodeURIComponent(nodeToExpand.entityData.iri)}/children`,
        { params: { include: "@id,prefLabel,hasChildren" } }
      )
    )["collection"];

    return children.map((child) => HierarchyNodeToEntityData(child));
  }
}
