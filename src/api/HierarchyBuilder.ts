import {EntityTypeName} from "../model/ModelTypeCheck";
import {EntityDataForHierarchy, Hierarchy, TreeNode} from "../model/interfaces/Hierarchy";

export type HierarchyQueryProps = {
    /**
     * Mandatory: OntoPortal
     * Optional: OLS
     * Unused: Skosmos
     */
    entityType?: EntityTypeName
    /**
     * Mandatory: OntoPortal, Skosmos
     * Optional: OLS (however, it is still strongly recommended to provide)
     */
    ontologyId?: string
    /**
     * Only affecting OLS hierarchies
     */
    includeObsoleteEntities?: boolean
    /**
     * Specify API version when using OLS
     */
    useLegacy?: boolean
}

export type HierarchyIriProp = {
    /**
     * If provided, a hierarchy for the corresponding entity will be displayed, in which this entity is highlighted.
     * Otherwise, the root entities for the specified ontology and entityType will be displayed.
     */
    iri?: string
}

export type BuildHierarchyProps = HierarchyQueryProps & {
    /**
     * Only affecting OLS hierarchies
     */
    preferredRoots?: boolean
    /**
     * If true, the expanded subtree of a node which gets closed stays expanded on re-expansion of this node.
     * Otherwise, if a node is closed, only the direct children will be shown on re-expansion.
     */
    keepExpansionStates?: boolean
    /**
     * If false, only the entity with specified iri and its ancestors are displayed in a hierarchy.
     * If true, the siblings of every entity mentioned above is displayed as well (NOTE: this might, but does not have to, need more queries to the API).
     */
    showSiblingsOnInit?: boolean
}

export type LoadHierarchyChildrenProps = HierarchyQueryProps & {
    nodeToExpand: TreeNode
    ontologyId: string // is now mandatory
}

export interface HierarchyBuilder {
    buildHierarchyWithIri(props: BuildHierarchyProps & HierarchyIriProp): Promise<Hierarchy>
    loadHierarchyChildren(props: LoadHierarchyChildrenProps): Promise<EntityDataForHierarchy[]>
}