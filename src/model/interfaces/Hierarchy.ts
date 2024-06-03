import {EntityTypeName} from "../ModelTypeCheck";
import {HierarchyBuilder} from "../../api/HierarchyBuilder";

export type EntityDataForHierarchy = {
    iri: string;
    label?: string;
    definedBy?: string[];
    hasChildren: boolean;
    numDescendants?: number;
    parents: string[];
}

export class TreeNode {
    entityData: EntityDataForHierarchy;
    loadedChildren: TreeNode[];
    expanded: boolean;
    manuallyExpanded: boolean;

    /**
     * @param entityData
     * @param entityType The type of hierarchy (relevant for `this.expandable`)
     */
    constructor(entityData: EntityDataForHierarchy, entityType: EntityTypeName) {
        this.entityData = entityData;
        this.loadedChildren = [];
        this.expanded = false;
        this.manuallyExpanded = false;
    }

    addChild(child: TreeNode) {
        this.loadedChildren.push(child)
    }
}

const DEFAULT_INCLUDE_OBSOLETE_ENTITIES: boolean = false as const;

export class Hierarchy {
    parentChildRelations: Map<string, EntityDataForHierarchy[]>;
    roots: TreeNode[]; // stores the tree hierarchy
    includeObsoleteEntities: boolean = DEFAULT_INCLUDE_OBSOLETE_ENTITIES;
    mainEntityIri?: string; // to highlight it in the hierarchy
    protected api: HierarchyBuilder;
    protected entityType: EntityTypeName;
    ontologyId: string;

    constructor(parentChildRelations: Map<string, EntityDataForHierarchy[]>, roots: TreeNode[], includeObsoleteEntities: boolean, api: HierarchyBuilder, entityType: EntityTypeName, ontologyId: string, mainEntityIri?: string) {
        this.parentChildRelations = parentChildRelations
        this.roots = roots;
        this.includeObsoleteEntities = includeObsoleteEntities;
        this.api = api;
        this.mainEntityIri = mainEntityIri;
        this.entityType = entityType;
        this.ontologyId = ontologyId;
    }

    /**
     * Checks if all the information needed for expansion of `nodeToExpand` is available (i.e. there are already children loaded) and fetches it if not.
     * @return boolean `true` if information had to be fetched, `false` otherwise
     */
    async fetchInformationForExpansion(nodeToExpand: TreeNode) {
        if(!nodeToExpand.entityData.hasChildren) throw Error(`Node containing iri="${nodeToExpand.entityData.iri}" could not be expanded: Entity is not expandable.`)

        if(!nodeToExpand.manuallyExpanded) {
            const childRelations = this.parentChildRelations.get(nodeToExpand.entityData.iri) || [];

            // If there are already more children inside parentChildRelations, all information is already available. Otherwise, query the missing information
            if(childRelations.length <= nodeToExpand.loadedChildren.length) {
                // dynamically load children from api
                const children: EntityDataForHierarchy[] = await this.api.loadHierarchyChildren(nodeToExpand, this.entityType, this.ontologyId, this.includeObsoleteEntities);

                // add children to parentChildRelations for iri of nodeToExpand
                this.parentChildRelations.set(nodeToExpand.entityData.iri, children);
            }

            const children = this.parentChildRelations.get(nodeToExpand.entityData.iri);
            if(children == undefined) throw Error(`parentChildRelations has no entry for key "${nodeToExpand.entityData.iri}" although this should never happen.`);

            for(const child of children){
                if(nodeToExpand.loadedChildren.filter((loadedChild) => loadedChild.entityData.iri == child.iri).length == 0)
                    nodeToExpand.addChild(new TreeNode(child, this.entityType));
            }

            nodeToExpand.manuallyExpanded = true;
            return true;
        }
        else return false;
    }
}