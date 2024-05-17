import React, {useEffect, useState} from "react";
import {EuiLoadingSpinner, EuiText, EuiIcon, EuiPanel} from "@elastic/eui";
import {OlsApi} from "../../../../../api/OlsApi";
import {EntityTypeName} from "../../../../../model/ModelTypeCheck";
import {Hierarchy, TreeNode} from "../../../../../model/interfaces/Hierarchy";

export type HierarchyWidgetSemLookPProps = {
    iri: string;
    entityType: EntityTypeName;
    ontologyId: string;
}

function HierarchyWidgetSemLookP(props: HierarchyWidgetSemLookPProps) {
    // TODO: Refactor state variables and hooks. Status quo of manually updating hierarchyStr is unacceptable!
    const api = new OlsApi("https://www.ebi.ac.uk/ols4/api/");
    const [hierarchy, setHierarchy] = useState<Hierarchy | undefined>(undefined);
    const [hierarchyStr, setHierarchyStr] = useState<string>("");

    useEffect(() => {
        async function getNewHierarchy() {
            const response = await api.getEntityObject(props.iri, props.entityType, props.ontologyId, "", false).then((entity) => api.buildHierarchy(entity, false));
            setHierarchy(response);
            setHierarchyStr(JSON.stringify(hierarchy));
        }

        setHierarchy(undefined);
        getNewHierarchy().then();
    }, [props]);

    async function toggleNode(node: TreeNode) {
        if(hierarchy != undefined) {
            await hierarchy.toggleNode(node);
            setHierarchyStr(JSON.stringify(hierarchy));
        }
    }

    function renderTreeNode(node: TreeNode) {
        return (
            <>
                <EuiText>
                    {
                        node.numDescendants <= 0 ?
                            <EuiIcon type={"empty"}/> :
                            <button onClick={() => {toggleNode(node)}}>
                                <EuiIcon type={node.expanded ? "arrowDown" : "arrowRight"}/>
                            </button>
                    }
                    <span> {node.entity.getLabel() || node.entity.getIri()} </span>
                    {node.numDescendants > 0 && <span style={{color: "gray"}}>({node.numDescendants})</span>}
                </EuiText>
                {node.expanded && <ul>
                    {node.children.map((child) => renderTreeNode(child))}
                </ul>}
            </>
        );
    }

    return (
        <EuiPanel grow={false}>
            <div>
                {(hierarchy != undefined) ? <EuiText>
                    <ul>
                        {hierarchy.roots.map((rootNode) => renderTreeNode(rootNode))}
                    </ul>
                </EuiText> : <EuiLoadingSpinner/>}
            </div>
        </EuiPanel>
    );
}

export {HierarchyWidgetSemLookP};