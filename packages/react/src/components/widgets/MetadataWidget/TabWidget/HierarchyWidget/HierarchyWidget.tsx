"use client";

import React, { useCallback, useMemo, useReducer } from "react";
import {
    EuiLoadingSpinner,
    EuiText,
    EuiIcon,
    EuiProvider,
    EuiPanel,
} from "@elastic/eui";
import { Hierarchy, TreeNode } from "../../../../../model/interfaces/Hierarchy";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { SkosApi } from "../../../../../api/skosmos/SkosApi";
import { HierarchyBuilder} from "../../../../../model/interfaces/HierarchyBuilder";
import { OntoPortalApi } from "../../../../../api/ontoportal/OntoPortalApi";
import "../../../../../style/tssStyles.css";
import { randomString } from "../../../../../app/util";
import {HierarchyWidgetProps, EntityData, OnNavigateToOntology, OnNavigateToEntity} from "../../../../../app";
import {EntityTypeName, isIndividualTypeName} from "../../../../../model/ModelTypeCheck";
import "../../../../../style/ts4nfdiStyles/ts4nfdiHierarchyStyle.css";
import {HIERARCHY_WIDGET_DEFAULT_VALUES, OlsHierarchyApi} from "../../../../../api/ols/OlsHierarchyApi";
import ExpandableOntologyBadgeList from "../../../../helperComponents/ExpandableOntologyBadgeList";

// TODO: use of entityType has to be reviewed. Currently it is assumed that the entityType of the hierarchy and the specific entity inside it always match (not necessarily true for individual hierarchies, but these have to be reviewed anyways)
function TreeLink(props: {
    entityData: EntityData;
    childRelationToParent?: string;
    ontologyId: string;
    entityType?: EntityTypeName;
    } & OnNavigateToOntology & OnNavigateToEntity & {
    highlight: boolean;
}) {
  let definedBy: string[] = props.entityData.definedBy || [];
  if (definedBy.includes(props.ontologyId)) definedBy = [];

  return (
    <span style={{position: "relative", left: "16px", lineHeight: "20px"}}>
      <span className={props.highlight ? "highlight" : undefined}>
        {props.childRelationToParent ==
          "http://purl.obolibrary.org/obo/BFO_0000050" && (
          <>
            <span className="surroundCircle">&nbsp;P&nbsp;</span>
            {" "}
          </>
        )}
        {props.childRelationToParent ==
          "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" && (
          <>
            <span className="surroundCircle">I</span>
            {" "}
          </>
        )}
        <a
          onClick={() => {
            if (typeof props.onNavigateToEntity === "function")
              props.onNavigateToEntity(
                props.ontologyId,
                props.entityType || "",
                props.entityData,
              );
          }}
          style={{
              textAlign: "left",
              color: "unset", // a little lighter than black
              cursor: "pointer"
          }}
        >
          <span>{props.entityData.label || props.entityData.iri}</span>
        </a>
      </span>
      <span>
          &nbsp;
          <ExpandableOntologyBadgeList
              iri={props.entityData.iri}
              ontolist={definedBy}
              label={props.entityData.label || ""}
              entityType={props.entityType}
              onNavigateToOntology={props.onNavigateToOntology}
          />
          {
              // number of descendants
              props.entityData.numDescendants != undefined &&
              props.entityData.numDescendants > 0 && (
                  <span style={{ color: "gray" }}>
                {" "}({props.entityData.numDescendants.toLocaleString()})
            </span>
              )
          }
      </span>
    </span>
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
    hierarchyWrap = HIERARCHY_WIDGET_DEFAULT_VALUES.WRAP,
    className,
    parameter,
  } = props;
  const finalClassName = className || "ts4nfdi-hierarchy-style";

  // used to manually rerender the component on update of hierarchy (as hierarchy object is nested and cannot be used as state variable itself)
  const [, forceUpdate] = useReducer(
    (x) => x + (1 % Number.MAX_SAFE_INTEGER),
    0,
  );

  const api: HierarchyBuilder = useMemo(() => {
    switch (backendType) {
      case "ols":
        return new OlsHierarchyApi(apiUrl);
      case "skosmos":
        return new SkosApi(apiUrl);
      case "ontoportal":
        return new OntoPortalApi(apiUrl, apiKey || "");
      default:
        return new OlsHierarchyApi(apiUrl);
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
      parameter,
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
        parameter: parameter,
      });
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  const toggleNode = useCallback(
    (node: TreeNode) => {
      if (!(hierarchy instanceof Hierarchy))
        throw Error(
          "Hierarchy object was undefined while trying to expand a tree node. This should never happen.",
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
    [hierarchy],
  );

  function renderTreeNode(
    hierarchy: Hierarchy,
    node: TreeNode,
    drawLine?: boolean,
  ) {
    return (
      <div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute" }}>{
            // arrows
            !node.entityData.hasChildren ? (
                <EuiIcon type={"empty"} />
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
                    &nbsp;
                </button>
            )
          }</div>
          <div // L-shaped inlet line to tree node
              className="lineNodeInlet"
          />
          <div // vertical line directly after inlet to tree node
              className={drawLine ? "lineAfterNodeInlet" : ""}
          />
          <TreeLink
            entityData={node.entityData}
            childRelationToParent={node.childRelationToParent}
            ontologyId={hierarchy.ontologyId}
            entityType={hierarchy.entityType}
            onNavigateToEntity={
              typeof onNavigateToEntity === "function"
                ? onNavigateToEntity
                : () => {}
            }
            onNavigateToOntology={
              typeof onNavigateToOntology === "function"
                ? onNavigateToOntology
                : () => {}
            }
            highlight={node.entityData.iri == hierarchy?.mainEntityIri}
          />
        </div>
        {node.expanded && (
          <ul style={{ marginBlockEnd: "0", marginInlineStart: "5px" }}>
            {node.loading ? (
              <EuiLoadingSpinner
                  style={{ position: "relative", left: "13px", top: "5px" }}
              />
            ) : (
              node.loadedChildren.map((child, idx) => {
                return (
                  <div
                    key={randomString()}
                    className={drawLine ? "outerLine" : ""}
                    style={{ paddingLeft: "1rem" }}
                  >
                    {renderTreeNode(
                      hierarchy,
                      child,
                      idx < node.loadedChildren.length - 1,
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
      <EuiPanel
        data-testid="hierarchy"
        style={{ overflowX: "auto", overflowY: "hidden" }}
      >
        {isSuccessHierarchy && hierarchy != undefined ? (
          <EuiText style={{ whiteSpace: hierarchyWrap ? "wrap" : "nowrap" }}>
            {hierarchy.roots.map((rootNode, idx) =>
              renderTreeNode(
                hierarchy,
                rootNode,
                idx < hierarchy.roots.length - 1,
              ),
            )}
          </EuiText>
        ) : (
          <EuiLoadingSpinner />
        )}
      </EuiPanel>
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
          parameter={props.parameter}
          hierarchyWrap={props.hierarchyWrap}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { HierarchyWidget, WrappedHierarchyWidget };
