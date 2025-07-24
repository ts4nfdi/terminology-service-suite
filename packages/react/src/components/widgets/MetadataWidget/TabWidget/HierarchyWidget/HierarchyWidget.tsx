import React, { useCallback, useMemo, useReducer } from "react";
import {
  EuiLoadingSpinner,
  EuiText,
  EuiIcon,
  EuiProvider,
  EuiCard,
} from "@elastic/eui";
import { OlsApi } from "../../../../../api/OlsApi";
import { Hierarchy, TreeNode } from "../../../../../model/interfaces/Hierarchy";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import ReactDOM from "react-dom";
import { SkosApi } from "../../../../../api/SkosApi";
import { HierarchyBuilder } from "../../../../../api/HierarchyBuilder";
import { OntoPortalApi } from "../../../../../api/OntoPortalApi";
import "../../../../../style/tssStyles.css";
import { randomString } from "../../../../../app/util";
import { HierarchyWidgetProps, EntityData } from "../../../../../app/types";
import { isIndividualTypeName } from "../../../../../model/ModelTypeCheck";
import "../../../../../style/ts4nfdiStyles/ts4nfdiHierarchyStyle.css";

export const HIERARCHY_WIDGET_DEFAULT_VALUES = {
  INCLUDE_OBSOLETE_ENTITIES: false,
  PREFERRED_ROOTS: false,
  KEEP_EXPANSION_STATES: false,
  SHOW_SIBLINGS_ON_INIT: false,
  USE_LEGACY: false,
} as const;

// TODO: use of entityType has to be reviewed. Currently it is assumed that the entityType of the hierarchy and the specific entity inside it always match (not necessarily true for individual hierarchies, but these have to be reviewed anyways)
function TreeLink(props: {
  entityData: EntityData;
  childRelationToParent?: string;
  ontologyId: string;
  entityType?: string;
  onNavigateToEntity?: (
    ontologyId: string,
    entityType?: string,
    entity?: EntityData
  ) => void;
  onNavigateToOntology?: (
    ontologyId: string,
    entityType?: string,
    entity?: EntityData
  ) => void;
  highlight: boolean;
}) {
  let definedBy: string[] = props.entityData.definedBy || [];
  if (definedBy.includes(props.ontologyId)) definedBy = [];

  return (
    <>
      <span className={props.highlight ? "highlight" : undefined}>
        {props.childRelationToParent ==
          "http://purl.obolibrary.org/obo/BFO_0000050" && (
          <>
            <span
              style={{ marginInlineStart: "1.5px", marginTop: "2.5px" }}
              className="surroundCircle"
            >
              &nbsp;P&nbsp;
            </span>
            &nbsp;
          </>
        )}
        {props.childRelationToParent ==
          "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" && (
          <>
            <span
              style={{ marginInlineStart: "1.5px", marginTop: "2.5px" }}
              className="surroundCircle"
            >
              I
            </span>
            &nbsp;
          </>
        )}
        <button
          onClick={() => {
            if (props.onNavigateToEntity)
              props.onNavigateToEntity(
                props.ontologyId,
                props.entityType || "",
                props.entityData
              );
          }}
        >
          <span> {props.entityData.label || props.entityData.iri} </span>
        </button>
      </span>
      {definedBy.length > 0 && (
        <>
          &nbsp;
          {definedBy.map((definingOntology) => {
            return (
              <button
                key={`${props.entityData.iri}:${definingOntology}`}
                onClick={() => {
                  if (props.onNavigateToOntology)
                    props.onNavigateToOntology(
                      definingOntology,
                      props.entityType || "",
                      props.entityData
                    );
                }}
              >
                <span className="ontology-badge">
                  {definingOntology.toUpperCase()}
                </span>
              </button>
            );
          })}
        </>
      )}
    </>
  );
}

function HierarchyWidget(props: HierarchyWidgetProps) {
  const {
    apiUrl,
    backendType,
    apiKey,
    onNavigateToEntity,
    onNavigateToOntology,
    iri,
    ontologyId,
    entityType,
    includeObsoleteEntities = HIERARCHY_WIDGET_DEFAULT_VALUES.INCLUDE_OBSOLETE_ENTITIES,
    preferredRoots = HIERARCHY_WIDGET_DEFAULT_VALUES.PREFERRED_ROOTS,
    keepExpansionStates = HIERARCHY_WIDGET_DEFAULT_VALUES.KEEP_EXPANSION_STATES,
    showSiblingsOnInit = HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT,
    useLegacy = HIERARCHY_WIDGET_DEFAULT_VALUES.USE_LEGACY,
    className,
  } = props;
  const finalClassName = className || "ts4nfdi-hierarchy-style";

  // used to manually rerender the component on update of hierarchy (as hierarchy object is nested and cannot be used as state variable itself)
  const [, forceUpdate] = useReducer(
    (x) => x + (1 % Number.MAX_SAFE_INTEGER),
    0
  );

  const api: HierarchyBuilder = useMemo(() => {
    switch (backendType) {
      case "ols":
        return new OlsApi(apiUrl);
      case "skosmos":
        return new SkosApi(apiUrl);
      case "ontoportal":
        return new OntoPortalApi(apiUrl, apiKey || "");
      default:
        return new OlsApi(apiUrl);
    }
  }, [apiUrl, backendType, apiKey]);

  const { data: hierarchy, isSuccess: isSuccessHierarchy } = useQuery(
    [
      "hierarchySemLookP",
      iri,
      entityType,
      ontologyId,
      preferredRoots,
      includeObsoleteEntities,
      keepExpansionStates,
      showSiblingsOnInit,
      useLegacy,
    ],
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

  const toggleNode = useCallback(
    (node: TreeNode) => {
      if (!(hierarchy instanceof Hierarchy))
        throw Error(
          "Hierarchy object was undefined while trying to expand a tree node. This should never happen."
        );

      // TODO: individual hierarchies are frozen for now (before undoing, correct child loading has to be implemented for individual hierarchies)
      if (hierarchy.entityType && isIndividualTypeName(hierarchy.entityType))
        return;

      // toggle expansion state and force component to rerender afterward
      node.expanded = !node.expanded;

      // fetch needed information and rerender again if needed
      if (node.expanded) {
        node.loading = true;
        forceUpdate();

        hierarchy.fetchInformationForExpansion(node).then(() => {
          node.loading = false;
          forceUpdate();
        });
      } else {
        forceUpdate();
        hierarchy.closeNode(node);
      }
    },
    [hierarchy]
  );

  function renderTreeNode(
    hierarchy: Hierarchy,
    node: TreeNode,
    drawLine?: boolean
  ) {
    return (
      <div key={randomString()}>
        <EuiText>
          <div style={{ height: "24px" }}>
            <div
              style={{
                position: "relative",
                borderLeft: "1px dotted black",
                borderBottom: "1px dotted black",
                width: "12px",
                height: "16px",
                left: "5.5px",
                top: "-1px",
              }}
            ></div>
            <div
              style={{
                position: "relative",
                borderLeft: drawLine ? "1px dotted black" : "",
                width: "12px",
                height: "9px",
                left: "5.5px",
                top: "0px",
              }}
            ></div>
            <div style={{ position: "relative", top: "-22px" }}>
              <span>
                {!node.entityData.hasChildren ? (
                  <EuiIcon type="empty" />
                ) : (
                  <button
                    style={{}}
                    onClick={() => {
                      toggleNode(node);
                    }}
                  >
                    <EuiIcon
                      type={node.expanded ? "arrowDown" : "arrowRight"}
                      size={"s"}
                    />
                  </button>
                )}
              </span>
              &nbsp;
              <TreeLink
                entityData={node.entityData}
                childRelationToParent={node.childRelationToParent}
                ontologyId={hierarchy.ontologyId}
                entityType={hierarchy.entityType}
                onNavigateToEntity={onNavigateToEntity}
                onNavigateToOntology={onNavigateToOntology}
                highlight={node.entityData.iri == hierarchy?.mainEntityIri}
              />
              &nbsp;
              {node.entityData.numDescendants != undefined &&
                node.entityData.numDescendants > 0 && (
                  <span style={{ color: "gray" }}>
                    ({node.entityData.numDescendants.toLocaleString()})
                  </span>
                )}
            </div>
          </div>
        </EuiText>
        {node.expanded && (
          <ul style={{ marginBlockEnd: "0", marginInlineStart: "5.5px" }}>
            {node.loading ? (
              <EuiLoadingSpinner
                style={{ position: "relative", left: "13px", top: "5px" }}
              />
            ) : (
              node.loadedChildren.map((child, idx) => {
                return (
                  <div
                    key={randomString()}
                    style={{
                      borderLeft: drawLine ? "1px dotted black" : "",
                      paddingLeft: "1rem",
                    }}
                  >
                    {renderTreeNode(
                      hierarchy,
                      child,
                      idx < node.loadedChildren.length - 1
                    )}
                  </div>
                );
              })
            )}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className={finalClassName}>
      <EuiCard
        data-testid="hierarchy"
        title={""}
        layout={"horizontal"}
        style={{ overflowX: "auto", overflowY: "hidden" }}
      >
        {isSuccessHierarchy && hierarchy != undefined ? (
          <EuiText style={{ whiteSpace: "nowrap" }}>
            {" "}
            {/* // TODO: Does not get displayed correctly on storybook main page */}
            {hierarchy.roots.map((rootNode, idx) =>
              renderTreeNode(
                hierarchy,
                rootNode,
                idx < hierarchy.roots.length - 1
              )
            )}
          </EuiText>
        ) : (
          <EuiLoadingSpinner />
        )}
      </EuiCard>
    </div>
  );
}

function WrappedHierarchyWidget(props: HierarchyWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <HierarchyWidget
          apiUrl={props.apiUrl}
          apiKey={props.apiKey}
          backendType={props.backendType}
          iri={props.iri}
          entityType={props.entityType}
          ontologyId={props.ontologyId}
          includeObsoleteEntities={props.includeObsoleteEntities}
          useLegacy={props.useLegacy}
          preferredRoots={props.preferredRoots}
          keepExpansionStates={props.keepExpansionStates}
          showSiblingsOnInit={props.showSiblingsOnInit}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { HierarchyWidget, WrappedHierarchyWidget };
