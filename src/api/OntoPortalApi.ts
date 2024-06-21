import {HierarchyBuilder} from "./HierarchyBuilder";
import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {EntityTypeName} from "../model/ModelTypeCheck";
import {EntityDataForHierarchy, Hierarchy, TreeNode} from "../model/interfaces/Hierarchy";
import {pluralizeType} from "../app/util";

type HierarchyNode = {
    prefLabel: string
    hasChildren: boolean
    children: HierarchyNode[]
    obsolete: boolean // TODO: use this to enable showing obsoleteTerms?
    ["@id"]: string
    ["@type"]: string
    // links: object - not needed here
    ["@context"]: {
        ["@vocab"]: string
        prefLabel: string
        obsolete: string
        ["@language"]: string
    }
}

function HierarchyNodeToEntityDataForHierarchy(hierarchyNode: HierarchyNode) : EntityDataForHierarchy {
    return {
        iri: hierarchyNode["@id"],
        label: hierarchyNode["prefLabel"],
        hasChildren: hierarchyNode["hasChildren"],
        parents: []
    }
}

export class OntoPortalApi implements HierarchyBuilder{
    private axiosInstance: AxiosInstance;
    private apikey: string;

    constructor(api: string, apikey: string) {
        this.axiosInstance = axios.create({
            baseURL: api,
            headers: {
                Accept: "application/json",
                // Content_Type: "application/json", // leads to preflight error
            },
        });
        this.apikey = apikey;
        this.axiosInstance.interceptors.request.use((config) => {
            config.params = config.params || {};

            // default params
            config.params["apikey"] = this.apikey;
            config.params["format"] = "json";

            return config;
        })
    }

    private async makeCall(url: string, config?: AxiosRequestConfig<never>) {
        return (await this.axiosInstance.get(url, config)).data;
    }

    public async buildHierarchyWithIri(props: {
        iri?: string,
        ontologyId?: string,
        entityType?: EntityTypeName, // is needed in ols for queries ancestors / hierarchicalAncestors / children / hierarchicalChildren
        preferredRoots?: boolean,
        includeObsoleteEntities?: boolean,
        keepExpansionStates?: boolean,
        showSiblingsOnInit?: boolean,
    }) : Promise<Hierarchy> {
        const {
            iri,
            ontologyId,
            entityType,
            showSiblingsOnInit = false,
        } = props;

        if(!ontologyId) throw Error("ontologyId has to be specified for OntoPortal API.");
        if(!entityType) throw Error("entityType has to be specified for OntoPortal API.");

        const rootEntities: EntityDataForHierarchy[] = [];
        const parentChildRelations: Map<string, EntityDataForHierarchy[]> = new Map<string, EntityDataForHierarchy[]>();
        const allChildrenPresent: Set<string> = new Set<string>();
        const onInitialPath: Set<string> = new Set<string>(); // only used if showSiblingsOnInit == false

        function buildRelations(currNode: HierarchyNode) {
            if(currNode.hasChildren && currNode.children.length > 0) {
                const childrenData = currNode.children.map((child) => HierarchyNodeToEntityDataForHierarchy(child)).sort((a,b) => (a.label || a.iri).localeCompare(b.label || b.iri));
                parentChildRelations.set(currNode["@id"], childrenData);

                allChildrenPresent.add(currNode["@id"]);
                onInitialPath.add(currNode["@id"]);

                for(const child of currNode.children) {
                    buildRelations(child);
                }
            }
        }

        if(iri) {
            // TODO: property which is child of multiple properties only is returned in one parent in /tree query (-> do it right manually?) (e.g.: http://sweetontology.net/relaTime/hasNHTime -> has more than one parent, but is only shown in one parent in /tree)
            const api_tree: HierarchyNode[] = await this.makeCall(`/ontologies/${ontologyId.toUpperCase()}/${pluralizeType(entityType, false)}/${encodeURIComponent(iri)}/tree`, {params: {include: "@id,prefLabel,hasChildren,children"}});

            for(const rootNode of api_tree) {
                rootEntities.push(HierarchyNodeToEntityDataForHierarchy(rootNode));
                onInitialPath.add(rootNode["@id"]);
                buildRelations(rootNode);
            }
            onInitialPath.add(iri);
        }
        else {
            const roots : HierarchyNode[] = await this.makeCall(
                `/ontologies/${ontologyId.toUpperCase()}/${pluralizeType(entityType, false)}/roots`,
                {params: {include: "@id,prefLabel,hasChildren"}}
            );

            for(const rootNode of roots) {
                rootEntities.push(HierarchyNodeToEntityDataForHierarchy(rootNode));
                onInitialPath.add(rootNode["@id"]);
            }
        }

        function createTreeNode(entityData: EntityDataForHierarchy): TreeNode {
            const node = new TreeNode(entityData);
            const children = parentChildRelations.get(entityData.iri) || [];

            if(!showSiblingsOnInit) {
                for(const child of children) {
                    if(onInitialPath.has(child.iri)) node.addChild(createTreeNode(child));
                }
            }
            else {
                for(const child of children) {
                    node.addChild(createTreeNode(child));
                }
            }

            if(node.loadedChildren.length > 0) node.expanded = true;

            return node;
        }

        const rootNodes: TreeNode[] = rootEntities.map((rootEntity) => createTreeNode(rootEntity)).sort((a,b) => (a.entityData.label || a.entityData.iri).localeCompare(b.entityData.label || b.entityData.iri));

        return new Hierarchy({
            parentChildRelations: parentChildRelations,
            allChildrenPresent: allChildrenPresent,
            roots: rootNodes,
            api: new OntoPortalApi(this.axiosInstance.getUri(), this.apikey),
            ontologyId: ontologyId,
            mainEntityIri: iri,
            keepExpansionStates: props.keepExpansionStates,
            entityType: entityType
        });
    }

    public async loadHierarchyChildren(props: {
        nodeToExpand: TreeNode,
        entityType?: EntityTypeName,
        ontologyId: string,
        includeObsoleteEntities?: boolean
    }): Promise<EntityDataForHierarchy[]> {
        const {
            nodeToExpand,
            ontologyId,
            entityType
        } = props;

        if(entityType == undefined) throw Error("entityType has to be provided to load children in an OntoPortal hierarchy.");

        const children : HierarchyNode[] = (await this.makeCall(
            `/ontologies/${ontologyId.toUpperCase()}/${pluralizeType(entityType, false)}/${encodeURIComponent(nodeToExpand.entityData.iri)}/children`,
            {params: {include: "@id,prefLabel,hasChildren"}}
        ))["collection"];

        return children.map((child) => HierarchyNodeToEntityDataForHierarchy(child));
    }
}