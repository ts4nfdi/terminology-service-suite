import {EntityTypeName} from "../model/ModelTypeCheck";
import {EntityDataForHierarchy, Hierarchy, TreeNode} from "../model/interfaces/Hierarchy";

export interface HierarchyBuilder {
    buildHierarchyWithIri(includeObsoleteEntities: boolean, preferredRoots: boolean, entityType?: EntityTypeName, ontologyId?: string, iri?: string) : Promise<Hierarchy>;
    loadHierarchyChildren(nodeToExpand: TreeNode, entityType: EntityTypeName, ontologyId: string, includeObsoleteEntities?: boolean): Promise<EntityDataForHierarchy[]>
}