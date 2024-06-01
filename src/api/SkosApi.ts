import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {HierarchyBuilder} from "./HierarchyBuilder";
import {EntityTypeName} from "../model/ModelTypeCheck";
import {EntityDataForHierarchy, Hierarchy, TreeNode} from "../model/interfaces/Hierarchy";

export class SkosApi implements HierarchyBuilder{
    private axiosInstance: AxiosInstance;

    constructor(api: string) {
        this.axiosInstance = axios.create({
            baseURL: api,
            headers: {
                Accept: "application/json",
                // Content_Type: "application/json", // leads to preflight error
            },
        });
    }

    private async makeCall(url: string, config: AxiosRequestConfig<any> | undefined) {
        const response = (await this.axiosInstance.get(url, config)).data;
        return response;
    }

    public async buildHierarchyWithIri(includeObsoleteEntities: boolean, preferredRoots: boolean, entityType?: EntityTypeName, ontologyId?: string, iri?: string): Promise<Hierarchy> {
        if(!ontologyId) throw Error("ontologyId has to be specified for Skosmos API.");

        const rootEntities: EntityDataForHierarchy[] = []
        const parentChildRelations: Map<string, EntityDataForHierarchy[]> = new Map<string, EntityDataForHierarchy[]>();
        const onInitialPath: Set<string> = new Set<string>();

        if(iri) {
            type ResponseNode = {
                uri: string,
                prefLabel: string;
                top?: string,
                broader?: string[],
                narrower?: {
                    uri: string,
                    label: string,
                    hasChildren: boolean,
                    // notation?: any
                }[]
            };

            const broaderTransitive: ResponseNode[] = await this.makeCall(`/${ontologyId}/hierarchy`, {params: {uri: iri, lang: "en", format: "application/json"}})
                .then((obj) => Object.keys(obj["broaderTransitive"]).map((key) => obj["broaderTransitive"][key]))

            // stores all entities appearing in broaderTransitive
            const entities: Map<string, EntityDataForHierarchy> = new Map<string, EntityDataForHierarchy>()

            for(const node of broaderTransitive) {
                const nodeData: EntityDataForHierarchy = {
                    iri: node.uri,
                    label: node.prefLabel,
                    hasChildren: node.narrower != undefined && node.narrower.length > 0,
                    parents: node.broader || []
                }

                entities.set(nodeData.iri, nodeData);
                if(node.top) rootEntities.push(nodeData);

                onInitialPath.add(nodeData.iri);
            }
            for(const node of broaderTransitive) {
                if(node.narrower != undefined) {
                    const children: EntityDataForHierarchy[] = [];

                    for(const childNode of node.narrower) {
                        let childNodeData = entities.get(childNode.uri);
                        if(childNodeData == undefined) {
                            childNodeData = {
                                iri: childNode.uri,
                                label: childNode.label,
                                hasChildren: childNode.hasChildren,
                                parents: [node.uri]
                            }

                            entities.set(childNodeData.iri, childNodeData);
                        }
                        else {
                            if(!childNodeData.parents.includes(node.uri)) childNodeData.parents.push(node.uri);
                        }
                        children.push(childNodeData);
                    }

                    parentChildRelations.set(node.uri, children);
                }
            }

            // for(const key of parentChildRelations.keys()) console.log(key, entities.get(key)?.label, "\n", JSON.stringify(parentChildRelations.get(key)?.map((e) => e.label)), "\n\n")
        }
        else {
            // TODO: Query /vocid/topConcepts (see https://finto.fi/yso/en/?clang=en for example)
        }

        function createTreeNode(entityData: EntityDataForHierarchy): TreeNode {
            const node = new TreeNode(entityData, "class"); // entityType is redundant here
            const children = parentChildRelations.get(entityData.iri)?.sort((a, b) => (a.label || a.iri).localeCompare(b.label || b.iri)) || [];

            for(const child of children) {
                // TODO: Do we want to hide siblings on initial render even if they are already available?
                //       + makes the hierarchy better to grasp
                //       - if siblings are desired to be shown, this is rather inconvenient (maybe introduce widget parameter "showSiblingsOnInitialRender"?)
                if(onInitialPath.has(child.iri)) node.addChild(createTreeNode(child))
            }

            if(node.loadedChildren.length > 0) node.expanded = true;

            return node;
        }

        const rootNodes: TreeNode[] = rootEntities.map((rootEntity) => createTreeNode(rootEntity)).sort((a,b) => (a.entityData.label || a.entityData.iri).localeCompare(b.entityData.label || b.entityData.iri));

        return new Hierarchy(parentChildRelations, rootNodes, includeObsoleteEntities, new SkosApi(this.axiosInstance.getUri()), "class" /* redundant here */, ontologyId, iri);
    }

    public async loadHierarchyChildren(nodeToExpand: TreeNode, entityType: EntityTypeName, ontologyId: string, includeObsoleteEntities?: boolean): Promise<EntityDataForHierarchy[]> {
        type NarrowerObj = {
            uri: string,
            prefLabel: string,
            hasChildren: boolean
            // notation?: any
        }

        const narrower: NarrowerObj[] = (await this.makeCall(`/${ontologyId}/children`, {params: {uri: nodeToExpand.entityData.iri, lang: "en", format: "application/json"}}))["narrower"];

        return narrower.map((obj) => {
            const childData: EntityDataForHierarchy = {
                iri: obj.uri,
                label: obj.prefLabel,
                hasChildren: obj.hasChildren,
                parents: [nodeToExpand.entityData.iri],
            };
            return childData;
        });
    }

}