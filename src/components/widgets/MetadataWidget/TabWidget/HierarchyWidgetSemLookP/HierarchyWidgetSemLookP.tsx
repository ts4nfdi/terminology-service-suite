import React, {useCallback, useMemo, useReducer} from "react";
import {EuiLoadingSpinner, EuiText, EuiIcon, EuiTextColor, EuiProvider, EuiCard, EuiBadge} from "@elastic/eui";
import {OlsApi} from "../../../../../api/OlsApi";
import {EntityTypeName} from "../../../../../model/ModelTypeCheck";
import {EntityDataForHierarchy, Hierarchy, TreeNode} from "../../../../../model/interfaces/Hierarchy";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import ReactDOM from "react-dom";
import {SkosApi} from "../../../../../api/SkosApi";
import {HierarchyBuilder} from "../../../../../api/HierarchyBuilder";

export type HierarchyWidgetSemLookPProps = {
    iri: string;
    entityType?: EntityTypeName;
    ontologyId?: string;
    onNavigateToEntity?: (entity: EntityDataForHierarchy) => void;
    onNavigateToOntology?: (ontologyId: string, entity: EntityDataForHierarchy) => void;
    backend_type?: string,
    apiUrl: string,
    includeObsoleteEntities?: boolean,
    preferredRoots?: boolean,
    keepExpansionStates?: boolean
}

function TreeLink(props: {entityData: EntityDataForHierarchy, ontologyId: string, onNavigateToEntity?: (entity: EntityDataForHierarchy) => void, onNavigateToOntology?: (ontologyId: string, entity: EntityDataForHierarchy) => void, highlight: boolean}) {
    let definedBy: string[] = props.entityData.definedBy || [];
    if(definedBy.includes(props.ontologyId)) definedBy = [];

    return (
        <>
            <button
                onClick={() => {if(props.onNavigateToEntity) props.onNavigateToEntity(props.entityData)}}
            >
                <EuiTextColor color={props.highlight ? "slateblue" : "default"}> {props.entityData.label || props.entityData.iri} </EuiTextColor>
            </button>
            {definedBy.length > 0 &&
                <>
                    &nbsp;
                    {definedBy.map((definingOntology) => {
                        return (
                            <button
                                key={`${props.entityData.iri}:${definingOntology}`}
                                onClick={() => {if(props.onNavigateToOntology) props.onNavigateToOntology(definingOntology, props.entityData)}}
                            >
                                <EuiBadge color={"success"}>{definingOntology.toUpperCase()}</EuiBadge>
                            </button>
                        )
                    })}
                </>
            }
        </>
    );
}

function HierarchyWidgetSemLookP(props: HierarchyWidgetSemLookPProps) {
    const {
        apiUrl,
        backend_type = "ols",
        onNavigateToEntity,
        onNavigateToOntology,

        iri,
        ontologyId,
        entityType,
        includeObsoleteEntities = false,
        preferredRoots = false,
        keepExpansionStates = true
    } = props;

    // used to manually rerender the component on update of hierarchy (as hierarchy object is nested and cannot be used as state variable itself)
    const [, forceUpdate] = useReducer(x => x + 1 % Number.MAX_SAFE_INTEGER, 0);

    const api : HierarchyBuilder = useMemo(
        () => {
            switch (backend_type) {
                case "ols":
                    return new OlsApi(apiUrl);
                case "skos":
                    return new SkosApi(apiUrl);
                default:
                    return new OlsApi(apiUrl);
            }
        },
        [apiUrl, backend_type]
    );

    const {
        data: hierarchy,
        isSuccess: isSuccessHierarchy,
    } = useQuery(
      [iri, entityType, ontologyId],
      async function getNewHierarchy() {
          return await api.buildHierarchyWithIri({
              ontologyId: ontologyId,
              iri: iri,
              entityType: entityType,
              preferredRoots: preferredRoots,
              includeObsoleteEntities: includeObsoleteEntities,
              keepExpansionStates: keepExpansionStates
          });
      }
    );

    const toggleNode = useCallback((node: TreeNode) => {
        if(!(hierarchy instanceof Hierarchy)) throw Error("Hierarchy object was undefined while trying to expand a tree node. This should never happen.");

        // toggle expansion state and force component to rerender afterward
        node.expanded = !node.expanded;

        // fetch needed information and rerender again if needed
        if(node.expanded){
            node.loading = true;
            forceUpdate();

            hierarchy.fetchInformationForExpansion(node).then(() => {
                node.loading = false;
                forceUpdate();
            })
        }
        else {
            forceUpdate();
            hierarchy.closeNode(node);
        }
    },[hierarchy])

    function renderTreeNode(hierarchy: Hierarchy, node: TreeNode) {
        return (
            <>
                <EuiText>
                    {
                        !node.entityData.hasChildren ?
                            <EuiIcon type={"empty"}/> :
                            <button onClick={() => {toggleNode(node)}}>
                                <EuiIcon type={node.expanded ? "arrowDown" : "arrowRight"}/>
                            </button>
                    }
                    &nbsp;
                    <TreeLink entityData={node.entityData} ontologyId={hierarchy.ontologyId} onNavigateToEntity={onNavigateToEntity} onNavigateToOntology={onNavigateToOntology} highlight={node.entityData.iri == hierarchy?.mainEntityIri}/>
                    &nbsp;
                    {node.entityData.numDescendants != undefined && node.entityData.numDescendants > 0 && <span style={{color: "gray"}}>({node.entityData.numDescendants.toLocaleString()})</span>}
                </EuiText>
                {node.expanded &&
                    <ul style={{whiteSpace: "nowrap", marginBlockEnd: "0", marginInlineStart: "1.5rem"}}>
                        {node.loading ?
                            <EuiLoadingSpinner/> :
                            node.loadedChildren.map((child) => renderTreeNode(hierarchy, child))
                        }
                    </ul>
                }
            </>
        );
    }

    return (
        <EuiCard title={""} layout={"horizontal"}>
            {(isSuccessHierarchy && hierarchy != undefined) ?
                <EuiText>
                    {hierarchy.roots.map((rootNode) => renderTreeNode(hierarchy, rootNode))}
                </EuiText>
                : <EuiLoadingSpinner/>}
        </EuiCard>
    );
}

function createHierarchySemLookP(props: HierarchyWidgetSemLookPProps, container: Element, callback?: ()=>void) {
    ReactDOM.render(WrappedHierarchyWidgetSemLookP(props), container, callback);
}

function WrappedHierarchyWidgetSemLookP(props: HierarchyWidgetSemLookPProps) {
    const queryClient = new QueryClient();
    return (
        <EuiProvider colorMode="light">
            <QueryClientProvider client={queryClient}>
                <HierarchyWidgetSemLookP
                    apiUrl={props.apiUrl}
                    backend_type={props.backend_type}
                    iri={props.iri}
                    entityType={props.entityType}
                    ontologyId={props.ontologyId}
                    onNavigateToEntity={props.onNavigateToEntity}
                    onNavigateToOntology={props.onNavigateToOntology}
                />
            </QueryClientProvider>
        </EuiProvider>
    )
}

export {HierarchyWidgetSemLookP, createHierarchySemLookP};