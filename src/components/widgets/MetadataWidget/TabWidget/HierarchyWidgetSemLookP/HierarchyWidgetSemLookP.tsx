import React, {useCallback, useMemo, useReducer} from "react";
import {EuiLoadingSpinner, EuiText, EuiIcon, EuiProvider, EuiCard} from "@elastic/eui";
import {OlsApi} from "../../../../../api/OlsApi";
import {EntityDataForHierarchy, Hierarchy, TreeNode} from "../../../../../model/interfaces/Hierarchy";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import ReactDOM from "react-dom";
import {SkosApi} from "../../../../../api/SkosApi";
import {BuildHierarchyProps, HierarchyBuilder, HierarchyIriProp} from "../../../../../api/HierarchyBuilder";
import {OntoPortalApi} from "../../../../../api/OntoPortalApi";
import "../../../../../style/hierarchysemlookp.css";
import {randomString} from "../../../../../app/util";

export type HierarchyWidgetSemLookPProps = {
    apiUrl: string
    apikey?: string
    backend_type?: string
} & BuildHierarchyProps & HierarchyIriProp & {
    onNavigateToEntity?: (entity: EntityDataForHierarchy) => void
    onNavigateToOntology?: (ontologyId: string, entity: EntityDataForHierarchy) => void
};

export const HIERARCHY_WIDGET_SEMLOOKP_DEFAULT_VALUES = {
    INCLUDE_OBSOLETE_ENTITIES: false,
    PREFERRED_ROOTS: false,
    KEEP_EXPANSION_STATES: false,
    SHOW_SIBLINGS_ON_INIT: false,
    USE_LEGACY: false
} as const;

function TreeLink(props: {entityData: EntityDataForHierarchy, childRelationToParent?: string, ontologyId: string, onNavigateToEntity?: (entity: EntityDataForHierarchy) => void, onNavigateToOntology?: (ontologyId: string, entity: EntityDataForHierarchy) => void, highlight: boolean}) {
    let definedBy: string[] = props.entityData.definedBy || [];
    if(definedBy.includes(props.ontologyId)) definedBy = [];

    return (
        <>
            <span style={props.highlight ? {backgroundColor: "lightblue", padding: "3px", paddingTop: "4px", paddingBottom: "1px", borderRadius: "6px"} : {}}>
                {props.childRelationToParent == "http://purl.obolibrary.org/obo/BFO_0000050" &&
                    <>
                        <span className="surroundCircle">&nbsp;P&nbsp;</span>
                        &nbsp;
                    </>
                }
                {props.childRelationToParent == "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" &&
                    <>
                        <span className="surroundCircle">I</span>
                        &nbsp;
                    </>
                }
                <button
                    onClick={() => {if(props.onNavigateToEntity) props.onNavigateToEntity(props.entityData)}}
                >
                    <span> {props.entityData.label || props.entityData.iri} </span>
                </button>
            </span>
            {definedBy.length > 0 &&
                <>
                    &nbsp;
                    {definedBy.map((definingOntology) => {
                        return (
                            <button
                                key={`${props.entityData.iri}:${definingOntology}`}
                                onClick={() => {if(props.onNavigateToOntology) props.onNavigateToOntology(definingOntology, props.entityData)}}
                            >
                                <span style={{fontSize: "13px", backgroundColor: "#6dccb1", padding: "5px", paddingTop: "5px", paddingBottom: "2px", borderRadius: "6px"}}>{definingOntology.toUpperCase()}</span>
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
        backend_type,
        apikey,
        onNavigateToEntity,
        onNavigateToOntology,

        iri,
        ontologyId,
        entityType,
        includeObsoleteEntities = HIERARCHY_WIDGET_SEMLOOKP_DEFAULT_VALUES.INCLUDE_OBSOLETE_ENTITIES,
        preferredRoots = HIERARCHY_WIDGET_SEMLOOKP_DEFAULT_VALUES.PREFERRED_ROOTS,
        keepExpansionStates = HIERARCHY_WIDGET_SEMLOOKP_DEFAULT_VALUES.KEEP_EXPANSION_STATES,
        showSiblingsOnInit = HIERARCHY_WIDGET_SEMLOOKP_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT,
        useLegacy = HIERARCHY_WIDGET_SEMLOOKP_DEFAULT_VALUES.USE_LEGACY,
    } = props;

    // used to manually rerender the component on update of hierarchy (as hierarchy object is nested and cannot be used as state variable itself)
    const [, forceUpdate] = useReducer(x => x + 1 % Number.MAX_SAFE_INTEGER, 0);

    const api : HierarchyBuilder = useMemo(
        () => {
            switch (backend_type) {
                case "ols":
                    return new OlsApi(apiUrl);
                case "skosmos":
                    return new SkosApi(apiUrl);
                case "ontoportal":
                    return new OntoPortalApi(apiUrl, apikey || "");
                default:
                    return new OlsApi(apiUrl);
            }
        },
        [apiUrl, backend_type, apikey]
    );

    const {
        data: hierarchy,
        isSuccess: isSuccessHierarchy,
    } = useQuery(
      [iri, entityType, ontologyId, preferredRoots, includeObsoleteEntities, keepExpansionStates, showSiblingsOnInit, useLegacy],
      async function getNewHierarchy() {
          return await api.buildHierarchyWithIri({
              ontologyId: ontologyId,
              iri: iri,
              entityType: entityType,
              preferredRoots: preferredRoots,
              includeObsoleteEntities: includeObsoleteEntities,
              keepExpansionStates: keepExpansionStates,
              showSiblingsOnInit: showSiblingsOnInit,
              useLegacy: useLegacy,
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

    function renderTreeNode(hierarchy: Hierarchy, node: TreeNode, drawLine?: boolean) {
        return (
            <span /*style={{borderLeft: node.expanded ? "2px dotted grey" : undefined}}*/>
                <EuiText>
                    {
                        !node.entityData.hasChildren ?
                            <EuiIcon type={"empty"}/> :
                            <button onClick={() => {toggleNode(node)}}>
                                <EuiIcon type={node.expanded ? "arrowDown" : "arrowRight"}/>
                            </button>
                    }
                    &nbsp;
                    <TreeLink entityData={node.entityData} childRelationToParent={node.childRelationToParent} ontologyId={hierarchy.ontologyId} onNavigateToEntity={onNavigateToEntity} onNavigateToOntology={onNavigateToOntology} highlight={node.entityData.iri == hierarchy?.mainEntityIri}/>
                    &nbsp;
                    {node.entityData.numDescendants != undefined && node.entityData.numDescendants > 0 && <span style={{color: "gray"}}>({node.entityData.numDescendants.toLocaleString()})</span>}
                </EuiText>
                {node.expanded &&
                    <ul style={{whiteSpace: "nowrap", marginBlockEnd: "0", marginInlineStart: "0.5rem"}}>
                        {node.loading ?
                            <EuiLoadingSpinner/> :
                            node.loadedChildren.map((child, idx) => {
                                return <div key={randomString()} style={{borderLeft: drawLine ? "2px dotted grey":"", paddingLeft: "1rem"}}>
                                    {renderTreeNode(hierarchy, child, idx < node.loadedChildren.length - 1)}
                                </div>
                            })
                        }
                    </ul>
                }
            </span>
        );
    }

    return (
        <EuiCard title={""} layout={"horizontal"}>
            {(isSuccessHierarchy && hierarchy != undefined) ?
                <EuiText>
                    {hierarchy.roots.map((rootNode, idx) => renderTreeNode(hierarchy, rootNode, idx < hierarchy.roots.length - 1))}
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