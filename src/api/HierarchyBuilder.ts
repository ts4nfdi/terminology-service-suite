import {EntityTypeName} from "../model/ModelTypeCheck";
import {EntityDataForHierarchy, Hierarchy, TreeNode} from "../model/interfaces/Hierarchy";

export interface HierarchyBuilder {
    buildHierarchyWithIri(props: {
        iri?: string,
        ontologyId?: string,
        entityType?: EntityTypeName, // is needed in ols for queries ancestors / hierarchicalAncestors / children / hierarchicalChildren
        preferredRoots?: boolean,
        includeObsoleteEntities?: boolean,
        keepExpansionStates?: boolean,
        showSiblingsOnInit?: boolean,
    }) : Promise<Hierarchy>;
    loadHierarchyChildren(props: {
        nodeToExpand: TreeNode,
        entityType?: EntityTypeName,
        ontologyId: string,
        includeObsoleteEntities?: boolean
    }): Promise<EntityDataForHierarchy[]>
}