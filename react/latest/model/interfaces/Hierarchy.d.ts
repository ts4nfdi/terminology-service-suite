import { EntityTypeName } from '../ModelTypeCheck';
import { HierarchyBuilder } from './HierarchyBuilder';
import { EntityData } from '../../app';
export type ParentChildRelation = {
    childIri: string;
    childRelationToParent?: string;
};
export declare class TreeNode {
    entityData: EntityData;
    childRelationToParent?: string;
    loadedChildren: TreeNode[];
    expanded: boolean;
    loading: boolean;
    /**
     * @param entityData
     * @param childRelationToParent
     */
    constructor(entityData: EntityData, childRelationToParent?: string);
    addChild(child: TreeNode): void;
}
export declare class Hierarchy {
    parentChildRelations: Map<string, ParentChildRelation[]>;
    entitiesData: Map<string, EntityData>;
    allChildrenPresent: Set<string>;
    roots: TreeNode[];
    protected api: HierarchyBuilder;
    ontologyId: string;
    includeObsoleteEntities: boolean;
    entityType?: EntityTypeName;
    keepExpansionStates: boolean;
    protected useLegacy?: boolean;
    protected parameter?: string;
    mainEntityIri?: string;
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
    });
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
    private mergeChildrenIntoLoadedChildren;
    closeNode(nodeToClose: TreeNode): void;
    /**
     * Checks if all the information needed for expansion of `nodeToExpand` is available (i.e. there are already children loaded) and fetches it if not.
     * @return boolean `true` if information had to be fetched, `false` otherwise
     */
    fetchInformationForExpansion(nodeToExpand: TreeNode): Promise<boolean>;
}
