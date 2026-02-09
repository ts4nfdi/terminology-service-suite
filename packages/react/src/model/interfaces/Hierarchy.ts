import { HIERARCHY_WIDGET_DEFAULT_VALUES } from "../../api/ols/OlsHierarchyApi";
import { EntityData } from "../../app";
import { EntityTypeName } from "../ModelTypeCheck";
import { HierarchyBuilder } from "./HierarchyBuilder";

export type ParentChildRelation = {
  childIri: string;
  childRelationToParent?: string;
};

export class TreeNode {
  entityData: EntityData;
  childRelationToParent?: string;
  loadedChildren: TreeNode[];
  expanded: boolean;
  loading: boolean;

  /**
   * @param entityData
   * @param childRelationToParent
   */
  constructor(entityData: EntityData, childRelationToParent?: string) {
    this.entityData = entityData;
    this.loadedChildren = [];
    this.expanded = false;
    this.loading = false;
    this.childRelationToParent = childRelationToParent;
  }

  addChild(child: TreeNode) {
    this.loadedChildren.push(child);
  }
}

const DEFAULT_INCLUDE_OBSOLETE_ENTITIES: boolean = false as const;
const DEFAULT_KEEP_EXPANSION_STATE: boolean = true as const;

export class Hierarchy {
  parentChildRelations: Map<string, ParentChildRelation[]>;
  entitiesData: Map<string, EntityData>;
  allChildrenPresent: Set<string>;
  roots: TreeNode[]; // stores the tree hierarchy
  api: HierarchyBuilder;
  ontologyId: string;

  includeObsoleteEntities: boolean = DEFAULT_INCLUDE_OBSOLETE_ENTITIES;
  entityType?: EntityTypeName;
  keepExpansionStates: boolean = DEFAULT_KEEP_EXPANSION_STATE;
  useLegacy?: boolean;
  parameter?: string;

  mainEntityIri?: string; // to highlight it in the hierarchy

  constructor(props: {
    parentChildRelations: Map<string, ParentChildRelation[]>;
    entitiesData: Map<string, EntityData>;
    allChildrenPresent: Set<string>;
    roots: TreeNode[];
    api: HierarchyBuilder;
    ontologyId: string;
    includeObsoleteEntities?: boolean;
    entityType?: EntityTypeName;
    mainEntityIri?: string;
    keepExpansionStates?: boolean;
    useLegacy?: boolean;
    parameter?: string;
  }) {
    const {
      parentChildRelations,
      entitiesData,
      allChildrenPresent,
      roots,
      includeObsoleteEntities,
      keepExpansionStates,
      api,
      mainEntityIri,
      entityType,
      ontologyId,
      useLegacy,
      parameter,
    } = props;

    this.parentChildRelations = parentChildRelations;
    this.entitiesData = entitiesData;
    this.allChildrenPresent = allChildrenPresent;
    this.roots = roots;
    if (includeObsoleteEntities != undefined)
      this.includeObsoleteEntities = includeObsoleteEntities;
    if (keepExpansionStates != undefined)
      this.keepExpansionStates = keepExpansionStates;
    this.api = api;
    this.mainEntityIri = mainEntityIri;
    this.entityType = entityType;
    this.ontologyId = ontologyId;
    if (useLegacy != undefined) this.useLegacy = useLegacy;
    this.parameter = parameter;
  }

  /**
   * Merges the entries of `this.parentChildRelations(nodeToExpand.entityData.iri)` into `nodeToExpand.loadedChildren`. Here,
   * only not already present children are added to keep the expansion state of the already loaded children.
   * `nodeToExpand.loadedChildren` is sorted alphabetically by displayed labels afterward.
   *
   * ASSUMPTIONS:
   * 1. `this.parentChildRelations.get(nodeToExpand)` is sorted alphabetically by displayed labels
   *
   * @param nodeToExpand the node inside the hierarchy (`this.roots`) to merge the children into
   */
  private mergeChildrenIntoLoadedChildren(nodeToExpand: TreeNode) {
    const children = this.parentChildRelations.get(nodeToExpand.entityData.iri);
    if (children == undefined)
      throw Error(
        `parentChildRelations has no entry for key "${nodeToExpand.entityData.iri}" although this should never happen.`,
      );

    let iLoadedChildren = 0;
    const numLoadedChildren = nodeToExpand.loadedChildren.length; // initial length
    let iChildren = 0;

    while (iChildren < children.length && iLoadedChildren < numLoadedChildren) {
      if (
        nodeToExpand.loadedChildren[iLoadedChildren].entityData.iri ==
        children[iChildren].childIri
      ) {
        iLoadedChildren++;
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        nodeToExpand.addChild(
          new TreeNode(
            this.entitiesData.get(children[iChildren].childIri)!,
            children[iChildren].childRelationToParent,
          ),
        );
      }
      iChildren++;
    }
    while (iChildren < children.length) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      nodeToExpand.addChild(
        new TreeNode(
          this.entitiesData.get(children[iChildren].childIri)!,
          children[iChildren].childRelationToParent,
        ),
      );
      iChildren++;
    }

    // sort already loaded children in correctly
    for (
      let iLoadedChildren = numLoadedChildren - 1;
      iLoadedChildren >= 0;
      iLoadedChildren--
    ) {
      for (
        let currIdx = iLoadedChildren + 1;
        currIdx < nodeToExpand.loadedChildren.length;
        currIdx++
      ) {
        const currNode = nodeToExpand.loadedChildren[currIdx];
        const prevNode = nodeToExpand.loadedChildren[currIdx - 1];

        if (
          (currNode.entityData.label || currNode.entityData.iri).localeCompare(
            prevNode.entityData.label || prevNode.entityData.iri,
          ) < 0
        ) {
          nodeToExpand.loadedChildren[currIdx] = prevNode;
          nodeToExpand.loadedChildren[currIdx - 1] = currNode;
        } else {
          break;
        }
      }
    }
  }

  closeNode(nodeToClose: TreeNode) {
    if (!this.keepExpansionStates) {
      nodeToClose.loadedChildren = [];
    }
  }

  /**
   * Checks if all the information needed for expansion of `nodeToExpand` is available (i.e. there are already children loaded) and fetches it if not.
   * @return boolean `true` if information had to be fetched, `false` otherwise
   */
  async fetchInformationForExpansion(nodeToExpand: TreeNode) {
    if (!nodeToExpand.entityData.hasChildren)
      throw Error(
        `Node containing iri="${nodeToExpand.entityData.iri}" could not be expanded: Entity is not expandable.`,
      );

    const allChildrenPresent = this.allChildrenPresent.has(
      nodeToExpand.entityData.iri,
    );
    const nodeParentChildRelations =
      this.parentChildRelations.get(nodeToExpand.entityData.iri) || [];
    if (
      !allChildrenPresent ||
      nodeToExpand.loadedChildren.length <= nodeParentChildRelations.length
    ) {
      if (!allChildrenPresent) {
        // dynamically load children from api
        const children: EntityData[] = (
          await this.api.loadHierarchyChildren({
            nodeToExpand: nodeToExpand,
            entityType: this.entityType,
            ontologyId: this.ontologyId,
            includeObsoleteEntities: this.includeObsoleteEntities,
            useLegacy: this.useLegacy,
            parameter: this.parameter,
          })
        ).sort((a, b) => (a.label || a.iri).localeCompare(b.label || b.iri));

        // add children to parentChildRelations for iri of nodeToExpand
        const parChildRel: ParentChildRelation[] = [];
        for (const child of children) {
          if (this.entitiesData.get(child.iri) == undefined) {
            this.entitiesData.set(child.iri, child);
          } // should not be updated as color could be overridden
          if (child.parents) {
            const parRelation = child.parents.filter(
              (par) => par.value == nodeToExpand.entityData.iri,
            );
            parChildRel.push({
              childIri: child.iri,
              childRelationToParent:
                parRelation.length > 0 && parRelation[0].getMetadata()
                  ? parRelation[0].getMetadata()["childRelationToParent"]
                  : undefined,
            });
          } // should have exactly one element
        }
        this.parentChildRelations.set(nodeToExpand.entityData.iri, parChildRel);
      }

      this.mergeChildrenIntoLoadedChildren(nodeToExpand);

      this.allChildrenPresent.add(nodeToExpand.entityData.iri);
      return true;
    } else return false;
  }

  colorEntity(node: TreeNode, color?: string) {
    node.entityData.color = color;
    this.entitiesData.set(node.entityData.iri, node.entityData);
  }
}

export function compareHierarchies(
  hierarchyA: Hierarchy,
  hierarchyB: Hierarchy,
): Hierarchy {
  // Step 1 — Clone A's data
  const entitiesData = new Map<string, EntityData>();
  const parentChildRelations = new Map<string, ParentChildRelation[]>();

  for (const [iri, entity] of hierarchyA.entitiesData.entries()) {
    entitiesData.set(iri, { ...entity });
  }

  for (const [parentIri, rels] of hierarchyA.parentChildRelations.entries()) {
    parentChildRelations.set(parentIri, [...rels]);
  }

  // Step 2 — Merge B → A
  for (const [iri, entityB] of hierarchyB.entitiesData.entries()) {
    if (entitiesData.has(iri)) {
      // Exists in both → mark union
      entitiesData.get(iri)!.color =
        HIERARCHY_WIDGET_DEFAULT_VALUES.COLOR_UNION;
    } else {
      // Only in B → mark COLOR_B
      entitiesData.set(iri, {
        ...entityB,
        color: HIERARCHY_WIDGET_DEFAULT_VALUES.COLOR_B,
      });
    }
  }

  // Merge parent-child relations
  for (const [parentIri, rels] of hierarchyB.parentChildRelations.entries()) {
    if (!parentChildRelations.has(parentIri)) {
      parentChildRelations.set(parentIri, []);
    }

    const target = parentChildRelations.get(parentIri)!;
    for (const rel of rels) {
      if (!target.some((r) => r.childIri === rel.childIri)) {
        target.push(rel);
      }
    }
  }

  // Step 3 — Apply color for nodes only in A (if not already set)
  for (const [iri, entity] of entitiesData.entries()) {
    if (!entity.color) {
      if (hierarchyA.entitiesData.has(iri)) {
        entity.color = HIERARCHY_WIDGET_DEFAULT_VALUES.COLOR_A;
      }
    }
  }

  // Step 4 — Rebuild tree
  return rebuildHierarchyWithColor(
    hierarchyA,
    entitiesData,
    parentChildRelations,
  );
}

function rebuildHierarchyWithColor(
  base: Hierarchy,
  entitiesData: Map<string, EntityData>,
  parentChildRelations: Map<string, ParentChildRelation[]>,
): Hierarchy {
  function createTreeNode(
    entityData: EntityData,
    cycleCheck: Set<string>,
    childRelationToParent?: string,
  ): TreeNode {
    cycleCheck.add(entityData.iri);

    const node = new TreeNode(entityData);
    node.childRelationToParent = childRelationToParent;

    if (entityData.color) {
      base.colorEntity(node, entityData.color);
    }

    const children = parentChildRelations.get(entityData.iri) || [];
    for (const child of children) {
      if (cycleCheck.has(child.childIri)) continue;

      const childData = entitiesData.get(child.childIri);
      if (childData) {
        node.addChild(
          createTreeNode(childData, cycleCheck, child.childRelationToParent),
        );
      }
    }

    if (node.loadedChildren.length > 0) node.expanded = true;

    cycleCheck.delete(entityData.iri);
    return node;
  }

  const hasParent = new Set<string>();
  for (const rels of parentChildRelations.values()) {
    for (const r of rels) hasParent.add(r.childIri);
  }

  const roots: TreeNode[] = [];
  for (const [iri, entity] of entitiesData.entries()) {
    if (!hasParent.has(iri)) {
      roots.push(createTreeNode(entity, new Set()));
    }
  }

  return new Hierarchy({
    parentChildRelations,
    entitiesData,
    allChildrenPresent: base.allChildrenPresent,
    roots: roots.sort((a, b) =>
      (a.entityData.label || a.entityData.iri).localeCompare(
        b.entityData.label || b.entityData.iri,
      ),
    ),
    api: base.api,
    ontologyId: base.ontologyId,
    entityType: base.entityType,
    includeObsoleteEntities: base.includeObsoleteEntities,
    keepExpansionStates: base.keepExpansionStates,
    useLegacy: base.useLegacy,
    parameter: base.parameter,
    mainEntityIri: base.mainEntityIri,
  });
}
