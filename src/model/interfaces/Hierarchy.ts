import {Entity} from "./Entity";
import {OlsApi} from "../../api/OlsApi";

export class TreeNode {
    entity: Entity;
    children: TreeNode[];
    numDescendants: number;
    expanded: boolean;
    // TODO: Do we need further properties? Are the types of the current ones right and non-optional?

    constructor(entity: Entity) {
        this.entity = entity;
        this.numDescendants = entity.getNumHierarchicalDescendants();
        this.children = [];
        this.expanded = false;
    }

    addChild(child: TreeNode) {
        this.children.push(child)
    }
}

const DEFAULT_INCLUDE_OBSOLETE_ENTITIES: boolean = false as const;

export class Hierarchy {
    parentChildRelations: Map<string, Entity[]>;
    roots: TreeNode[]; // stores the tree hierarchy
    includeObsoleteEntities: boolean = DEFAULT_INCLUDE_OBSOLETE_ENTITIES;
    mainEntityIri?: string; // to highlight it in the hierarchy
    protected api: OlsApi; // TODO: change that later to abstract Api object

    constructor(parentChildRelations: Map<string, Entity[]>, roots: TreeNode[], includeObsoleteEntities: boolean, api: OlsApi, mainEntityIri: string) {
        this.parentChildRelations = parentChildRelations
        this.roots = roots;
        this.includeObsoleteEntities = includeObsoleteEntities;
        this.api = api;
        this.mainEntityIri = mainEntityIri;
    }

    async expandNode(nodeToExpand: TreeNode) {
        if(nodeToExpand.numDescendants <= 0) throw Error(`Node containing iri="${nodeToExpand.entity.getIri()}" could not be expanded: Entity has no descendants.`)

        if(nodeToExpand.children.length == 0) {
            const childRelations = this.parentChildRelations.get(nodeToExpand.entity.getIri()) || [];
            // search for children in parentChildRelations, if nodeToExpand has an entry there, the information needed is already provided, otherwise, it has to be queried
            if(childRelations.length == 0) {
                // dynamically load children from api
                const children: Entity[] = (await this.api.getChildren(nodeToExpand.entity.getIri(), nodeToExpand.entity.getType(), nodeToExpand.entity.getOntologyId(), this.includeObsoleteEntities)).sort(
                    (a, b) => (a.getLabel() || a.getIri()).localeCompare(b.getLabel() || b.getIri())
                );

                // add children to parentChildRelations for iri of nodeToExpand
                this.parentChildRelations.set(nodeToExpand.entity.getIri(), children);
            }

            const children = this.parentChildRelations.get(nodeToExpand.entity.getIri());
            if(children == undefined) throw Error(`parentChildRelations has no entry for key "${nodeToExpand.entity.getIri()}" although this should never happen.`);

            for(const child of children){
                nodeToExpand.addChild(new TreeNode(child));
            }
        }

        // set parent to be expanded
        nodeToExpand.expanded = true;
    }
}