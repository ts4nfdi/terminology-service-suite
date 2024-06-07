import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {HierarchyBuilder} from "./HierarchyBuilder";
import {EntityTypeName} from "../model/ModelTypeCheck";
import {EntityDataForHierarchy, Hierarchy, TreeNode} from "../model/interfaces/Hierarchy";

type TopConcept = {
    uri: string,
    label?: string,
    topConceptOf?: string,
    hasChildren: boolean,
    notation?: string
}

type LabelAndUriAndChildren = {
    uri: string,
    label: string,
    hasChildren: boolean,
    notation?: string
}

type HierarchyResult = {
    uri: string,
    prefLabel: string;
    top?: string,
    broader?: string[],
    narrower?: LabelAndUriAndChildren[]
};

type PrefAndUriAndChildren = {
    uri: string,
    prefLabel: string,
    hasChildren: boolean
    notation?: string
}

abstract class SkosEntityDataForHierarchyBuilder {
    static fromTopConcept(obj: TopConcept) : EntityDataForHierarchy {
        return  {
            iri: obj.uri,
            label: obj.label,
            hasChildren: obj.hasChildren,
            parents: []
        };
    }

    static fromHierarchyResult(obj: HierarchyResult) : EntityDataForHierarchy {
        return {
            iri: obj.uri,
            label: obj.prefLabel,
            hasChildren: obj.narrower != undefined && obj.narrower.length > 0,
            parents: obj.broader || []
        }
    }

    static fromPrefAndUriAndChildren(obj: PrefAndUriAndChildren, parents?: string[]) : EntityDataForHierarchy {
        return {
            iri: obj.uri,
            label: obj.prefLabel,
            hasChildren: obj.hasChildren,
            parents: parents || []
        };
    }

    static fromLabelAndUriAndChildren(obj: LabelAndUriAndChildren, parents?: string[]) : EntityDataForHierarchy {
        return {
            iri: obj.uri,
            label: obj.label,
            hasChildren: obj.hasChildren,
            parents: parents || []
        }
    }
}

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

    private async makeCall(url: string, config: AxiosRequestConfig<never> | undefined) {
        return (await this.axiosInstance.get(url, config)).data;
    }

    public async buildHierarchyWithIri(props: {
        iri?: string,
        ontologyId?: string,
        entityType?: EntityTypeName, // is needed in ols for queries ancestors / hierarchicalAncestors / children / hierarchicalChildren
        preferredRoots?: boolean,
        includeObsoleteEntities?: boolean
    }) : Promise<Hierarchy> {
        const {
            iri,
            ontologyId,
        } = props;

        if(!ontologyId) throw Error("ontologyId has to be specified for SKOS API.");

        const rootEntities: EntityDataForHierarchy[] = []
        const parentChildRelations: Map<string, EntityDataForHierarchy[]> = new Map<string, EntityDataForHierarchy[]>();
        const onInitialPath: Set<string> = new Set<string>();

        if(iri) {
            const broaderTransitive: HierarchyResult[] = await this.makeCall(`/${ontologyId}/hierarchy`, {params: {uri: iri, lang: "en", format: "application/json"}})
                .then((obj) => Object.keys(obj["broaderTransitive"]).map((key) => obj["broaderTransitive"][key]))

            // stores all entities appearing in broaderTransitive
            const entities: Map<string, EntityDataForHierarchy> = new Map<string, EntityDataForHierarchy>()

            for(const node of broaderTransitive) {
                const nodeData: EntityDataForHierarchy = SkosEntityDataForHierarchyBuilder.fromHierarchyResult(node);

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
                            childNodeData = SkosEntityDataForHierarchyBuilder.fromLabelAndUriAndChildren(childNode, [node.uri]);

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
        }
        else {
            const topconcepts: TopConcept[] = await this.makeCall(`/${ontologyId}/topConcepts`, {params: {lang: "en", format: "application/json"}})
                .then((obj) => obj["topconcepts"])

            for(const concept of topconcepts) {
                rootEntities.push(SkosEntityDataForHierarchyBuilder.fromTopConcept(concept));
            }
        }

        function createTreeNode(entityData: EntityDataForHierarchy): TreeNode {
            const node = new TreeNode(entityData);
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

        return new Hierarchy({
            parentChildRelations: parentChildRelations,
            roots: rootNodes,
            api: new SkosApi(this.axiosInstance.getUri()),
            ontologyId: ontologyId,
            mainEntityIri: iri
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
            ontologyId
        } = props;

        const narrower: PrefAndUriAndChildren[] = (await this.makeCall(`/${ontologyId}/children`, {params: {uri: nodeToExpand.entityData.iri, lang: "en", format: "application/json"}}))["narrower"];

        return narrower.map((obj) => SkosEntityDataForHierarchyBuilder.fromPrefAndUriAndChildren(obj, [nodeToExpand.entityData.iri]));
    }

}