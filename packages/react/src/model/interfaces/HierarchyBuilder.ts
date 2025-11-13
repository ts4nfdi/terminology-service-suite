import { EntityTypeName } from "../ModelTypeCheck";
import { Hierarchy, TreeNode } from "./Hierarchy";
import { EntityData } from "../../app";

export type HierarchyQueryProps = {
  entityType?: EntityTypeName;
  ontologyId?: string;
  includeObsoleteEntities?: boolean;
  useLegacy?: boolean;
  parameter?: string;
};

export type HierarchyIriProp = {
  iri?: string;
};

export type BuildHierarchyProps = HierarchyQueryProps & {
  preferredRoots?: boolean;
  keepExpansionStates?: boolean;
  showSiblingsOnInit?: boolean;
};

export type LoadHierarchyChildrenProps = HierarchyQueryProps & {
  nodeToExpand: TreeNode;
  ontologyId: string; // is now mandatory
};

export interface HierarchyBuilder {
  buildHierarchyWithIri(
    props: BuildHierarchyProps & HierarchyIriProp,
  ): Promise<Hierarchy>;
  loadHierarchyChildren(
    props: LoadHierarchyChildrenProps,
  ): Promise<EntityData[]>;
}
