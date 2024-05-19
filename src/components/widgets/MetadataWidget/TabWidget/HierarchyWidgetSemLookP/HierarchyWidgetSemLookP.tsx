import React, {useCallback, useReducer} from "react";
import {EuiLoadingSpinner, EuiText, EuiIcon, EuiTextColor, EuiProvider, EuiCard, EuiBadge} from "@elastic/eui";
import {OlsApi} from "../../../../../api/OlsApi";
import {EntityTypeName} from "../../../../../model/ModelTypeCheck";
import {Hierarchy, TreeNode} from "../../../../../model/interfaces/Hierarchy";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import ReactDOM from "react-dom";
import {Entity} from "../../../../../model/interfaces";

export type HierarchyWidgetSemLookPProps = {
    iri: string;
    entityType?: EntityTypeName;
    ontologyId?: string;
    onNavigateToEntity: (entity: Entity) => void;
    onNavigateToOntology: (ontologyId: string, entity: Entity) => void;
}

function TreeLink(props: {entity: Entity, onNavigateToEntity: (entity: Entity) => void, onNavigateToOntology: (ontologyId: string, entity: Entity) => void, highlight: boolean}) {
    let definedBy: string[] = props.entity.getDefinedBy();
    if(definedBy.includes(props.entity.getOntologyId())) definedBy = [];

    return (
        <>
            <button
                onClick={() => {props.onNavigateToEntity(props.entity)}}
            >
                <EuiTextColor color={props.highlight ? "slateblue" : "default"}> {props.entity.getLabel() || props.entity.getIri()} </EuiTextColor>
            </button>
            {definedBy.length > 0 &&
                <>
                    &nbsp;
                    {definedBy.map((definingOntology) => {
                        return (
                            <button
                                key={`${props.entity.getIri()}:${definingOntology}`}
                                onClick={() => {props.onNavigateToOntology(definingOntology, props.entity)}}
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
        iri,
        ontologyId,
        entityType,
        onNavigateToEntity,
        onNavigateToOntology,
    } = props;

    // used to manually rerender the component on update of hierarchy (as hierarchy object is nested and cannot be used as state variable itself)
    const [, forceUpdate] = useReducer(x => x + 1 % Number.MAX_SAFE_INTEGER, 0);

    const api = new OlsApi("https://www.ebi.ac.uk/ols4/api/");
    const {
        data: hierarchy,
        isSuccess: isSuccessHierarchy,
    } = useQuery(
      [iri, entityType, ontologyId],
      async function getNewHierarchy() {
          return await api.getEntityObject(iri, entityType, ontologyId, "", false).then((entity) => api.buildHierarchy(entity, false));
      }
    );

    const toggleNode = useCallback((node: TreeNode) => {
        if(!(hierarchy instanceof Hierarchy)) throw Error("Hierarchy object was undefined while trying to expand a tree node. This should never happen.");

        // toggle expansion state and force component to rerender afterward
        node.expanded = !node.expanded;
        forceUpdate();

        // fetch needed information and rerender again
        if(node.expanded) hierarchy.expandNode(node).then(() => forceUpdate())
    },[hierarchy])

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
                    &nbsp;
                    <TreeLink entity={node.entity} onNavigateToEntity={onNavigateToEntity} onNavigateToOntology={onNavigateToOntology} highlight={node.entity.getIri() == hierarchy?.mainEntityIri}/>
                    &nbsp;
                    {node.numDescendants > 0 && <span style={{color: "gray"}}>({node.numDescendants.toLocaleString()})</span>}
                </EuiText>
                {node.expanded &&
                    <ul style={{whiteSpace: "nowrap", marginBlockEnd: "0", marginInlineStart: "1.5rem"}}>
                        {node.children.length > 0 ?
                            node.children.map((child) => renderTreeNode(child)) :
                            <EuiLoadingSpinner/>
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
                    {hierarchy.roots.map((rootNode) => renderTreeNode(rootNode))}
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