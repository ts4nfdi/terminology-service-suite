import { EntityTypeName } from "../ModelTypeCheck";
import { HierarchyBuilder } from "../../api/HierarchyBuilder";
import { EntityData } from "../../app";
import {HIERARCHY_WIDGET_DEFAULT_VALUES} from "../../api/ols/OlsHierarchyApi";

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
  protected api: HierarchyBuilder;
  ontologyId: string;

  includeObsoleteEntities: boolean = DEFAULT_INCLUDE_OBSOLETE_ENTITIES;
  entityType?: EntityTypeName;
  keepExpansionStates: boolean = DEFAULT_KEEP_EXPANSION_STATE;
  protected useLegacy?: boolean;
  protected parameter?: string;

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
          if(this.entitiesData.get(child.iri) == undefined) {
              console.log(this.entitiesData.get(child.iri));
              this.entitiesData.set(child.iri, child);
              console.log(`Set ${child.iri}`)
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

    colorSubtree(node: TreeNode, color?: string) {
      this.colorEntity(node, color);

      for (const child of node.loadedChildren) {
          this.colorSubtree(child, color);
      }
    }
}

export function compareHierarchies(
    hierarchyA: Hierarchy,
    hierarchyB: Hierarchy
): Hierarchy {

    const stackA: (TreeNode[])[] = [hierarchyA.roots];
    const stackB: (TreeNode[])[] = [hierarchyB.roots];

    while (stackA.length > 0 && stackB.length > 0) {
        const currA: TreeNode[] = stackA[stackA.length - 1];
        stackA.pop();
        const currB : TreeNode[] = stackB[stackB.length - 1];
        stackB.pop();

        // Assuming that TreeNode arrays are sorted alphabetically by entityData.label | entityData.iri
        let iA = 0;
        let iB = 0;
        let nodeA: TreeNode;
        let nodeB: TreeNode;

        function onlyInAProcedure() {
            // contained in A, but not in B
            hierarchyA.colorSubtree(nodeA, HIERARCHY_WIDGET_DEFAULT_VALUES.COLOR_A);
            iA++;
        }
        function onlyInBProcedure() {
            // contained in B, but not in A

            // add node into A list -> gets injected into hierarchyA
            iA++;
            currA.splice(iA, 0, nodeB);

            // add parentChildRelation
            for (const parIri of (nodeB.entityData.parents || []).map((elem) => elem.value)) {
                if (hierarchyA.entitiesData.get(parIri)) {
                    const parChildRelB = hierarchyB.parentChildRelations.get(parIri)!.filter((elem) => elem.childIri == nodeB.entityData.iri)[0];

                    const parChildRelsA = hierarchyA.parentChildRelations.get(parIri) || [];
                    parChildRelsA.push(parChildRelB);

                    hierarchyA.parentChildRelations.set(parIri, parChildRelsA);
                }
            }

            hierarchyA.colorSubtree(nodeB, HIERARCHY_WIDGET_DEFAULT_VALUES.COLOR_B);
            iB++;
        }

        while (iA < currA.length && iB < currB.length) {
            nodeA = currA[iA];
            nodeB = currB[iB];

            const compareValue: number = (nodeA.entityData.label || nodeA.entityData.iri).localeCompare(nodeB.entityData.label || nodeB.entityData.iri)

            if (compareValue == 0) {
                // contained in union
                hierarchyA.colorEntity(nodeA, HIERARCHY_WIDGET_DEFAULT_VALUES.COLOR_UNION);

                // children have to be compared further
                stackA.push(nodeA.loadedChildren);
                stackB.push(nodeB.loadedChildren);

                iA++;
                iB++;
            }
            else if (compareValue < 0) onlyInAProcedure();
            else onlyInBProcedure();
        }
        while (iA < currA.length) {
            nodeA = currA[iA];
            onlyInAProcedure();
        }
        while (iB < currB.length) {
            nodeB = currB[iB];
            onlyInBProcedure();
        }
    }

    return hierarchyA;
}