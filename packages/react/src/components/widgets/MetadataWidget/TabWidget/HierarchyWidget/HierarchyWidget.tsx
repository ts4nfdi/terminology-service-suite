"use client";

import React, { useCallback, useMemo, useReducer } from "react";
import {
    EuiLoadingSpinner,
    EuiText,
    EuiIcon,
    EuiProvider,
    EuiPanel, EuiSpacer, EuiHealth, EuiButton,
    EuiAccordion, EuiTitle, EuiFlexGroup, EuiFlexItem
} from "@elastic/eui";
import {compareHierarchies, Hierarchy, TreeNode} from "../../../../../model/interfaces/Hierarchy";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { SkosApi } from "../../../../../api/SkosApi";
import { HierarchyBuilder } from "../../../../../api/HierarchyBuilder";
import { OntoPortalApi } from "../../../../../api/OntoPortalApi";
import "../../../../../style/tssStyles.css";
import {randomString, withAlpha} from "../../../../../app/util";
import { HierarchyWidgetProps, EntityData } from "../../../../../app";
import { isIndividualTypeName } from "../../../../../model/ModelTypeCheck";
import "../../../../../style/ts4nfdiStyles/ts4nfdiHierarchyStyle.css";
import {HIERARCHY_WIDGET_DEFAULT_VALUES, OlsHierarchyApi} from "../../../../../api/ols/OlsHierarchyApi";

function HierarchyWidget(props: HierarchyWidgetProps) {
  const {
    apiUrl,
    backendType,
    apiKey,
    onNavigateToEntity,
    onNavigateToOntology,
    iri,
    targetIri,
    ontologyId,
    entityType,
    includeObsoleteEntities = HIERARCHY_WIDGET_DEFAULT_VALUES.INCLUDE_OBSOLETE_ENTITIES,
    preferredRoots = HIERARCHY_WIDGET_DEFAULT_VALUES.PREFERRED_ROOTS,
    keepExpansionStates = HIERARCHY_WIDGET_DEFAULT_VALUES.KEEP_EXPANSION_STATES,
    showSiblingsOnInit = HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT,
    useLegacy = HIERARCHY_WIDGET_DEFAULT_VALUES.USE_LEGACY,
    hierarchyWrap = HIERARCHY_WIDGET_DEFAULT_VALUES.WRAP,
    showHeader = HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_HEADER,
    showComparisonTitleInHeader = HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_COMPARISON_TITLE_IN_HEADER,
    className,
    parameter,
  } = props;
  const finalClassName = className || "ts4nfdi-hierarchy-style";

    // TODO: use of entityType has to be reviewed. Currently it is assumed that the entityType of the hierarchy and the specific entity inside it always match (not necessarily true for individual hierarchies, but these have to be reviewed anyways)
    function TreeLink(props: {
        entityData: EntityData;
        childRelationToParent?: string;
        ontologyId: string;
        entityType?: string;
        onNavigateToEntity?: (
            ontologyId: string,
            entityType?: string,
            entity?: EntityData,
        ) => void;
        onNavigateToOntology?: (
            ontologyId: string,
            entityType?: string,
            entity?: EntityData,
        ) => void;
        highlightColor: string;
    }) {
        let definedBy: string[] = props.entityData.definedBy || [];
        if (definedBy.includes(props.ontologyId)) definedBy = [];

        return (
            <span style={{position: "relative", left: "16px", lineHeight: "20px"}}>
      <span
          className={props.highlightColor ? "highlight" : undefined}
          style={{ background: withAlpha(props.highlightColor, 0.2) }}
      >
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
                  if (props.onNavigateToEntity)
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
          <span style={{ color: props.entityData.color }}>{props.entityData.label || props.entityData.iri}</span>
        </a>
      </span>
      <span>
          {definedBy.length > 0 && (
              <>
                  {definedBy.map((definingOntology) => {
                      return (
                          <span key={randomString()}>
                              {" "}
                              <button
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
              </span>
                      );
                  })}
              </>
          )}
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

  // used to manually rerender the component on update of hierarchy (as hierarchy object is nested and cannot be used as state variable itself)
  const [, forceUpdate] = useReducer(
    (x) => x + (1 % Number.MAX_SAFE_INTEGER),
    0,
  );

  const [resetToggle, setResetToggle] = React.useState(false);
  const [legendToggle, setLegendToggle] = React.useState(false);

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
      targetIri,
      resetToggle
    ],
    async function getNewHierarchy() {
      if (targetIri) {
          return compareHierarchies(
              await api.buildHierarchyWithIri({
                  ontologyId: ontologyId,
                  iri: iri,
                  entityType: entityType,
                  preferredRoots: preferredRoots,
                  includeObsoleteEntities: includeObsoleteEntities,
                  keepExpansionStates: keepExpansionStates,
                  showSiblingsOnInit: false,
                  useLegacy: useLegacy,
                  parameter: parameter,
              }),
              await api.buildHierarchyWithIri({
                  ontologyId: ontologyId,
                  iri: targetIri,
                  entityType: entityType,
                  preferredRoots: preferredRoots,
                  includeObsoleteEntities: includeObsoleteEntities,
                  keepExpansionStates: keepExpansionStates,
                  showSiblingsOnInit: false,
                  useLegacy: useLegacy,
                  parameter: parameter,
              })
          )
      }
      else {
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
      }
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
          <div style={{ position: "absolute", top: node.expanded ? "-2px" : "0", left: node.expanded ? "-1px" : "-3px" }}>{
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
            highlightColor={node.entityData.iri == iri          ? HIERARCHY_WIDGET_DEFAULT_VALUES.COLOR_A
                            : node.entityData.iri == targetIri ? HIERARCHY_WIDGET_DEFAULT_VALUES.COLOR_B
                            : ""}
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
      {isSuccessHierarchy && hierarchy != undefined ?
          <span>
              {showHeader &&
                  <EuiPanel
                    style={{ overflowX: "auto", overflowY: "hidden" }}
                    borderRadius="none"
                    paddingSize="s"
                  >
                      <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                          <span>
                              { iri && targetIri && showComparisonTitleInHeader &&
                                  <EuiTitle size={"s"} >
                                      <h2 style={{ maxWidth: '350px', whiteSpace: 'normal', wordBreak: "break-word" }}>Comparison of <i>{hierarchy.entitiesData.get(iri)?.label || iri}</i> and <i>{hierarchy.entitiesData.get(targetIri)?.label || targetIri}</i></h2>
                                  </EuiTitle>
                              }
                              {iri && targetIri &&
                                  <span>
                                      <EuiSpacer size="s" />
                                      <EuiAccordion buttonContent={legendToggle ? "Hide Legend" : "Show Legend"} id={""} onToggle={(isOpen) => setLegendToggle(isOpen)}>
                                        <EuiText style={{ paddingLeft: ".3em" }}>
                                          <EuiHealth color={HIERARCHY_WIDGET_DEFAULT_VALUES.COLOR_UNION}>
                                              Common subtree
                                          </EuiHealth>
                                          <br/>
                                          <EuiHealth color={HIERARCHY_WIDGET_DEFAULT_VALUES.COLOR_A}>
                                              Subtree exclusive to {'"'}{hierarchy.entitiesData.get(iri)?.label || iri}{'"'}
                                          </EuiHealth>
                                          <br/>
                                          <EuiHealth color={HIERARCHY_WIDGET_DEFAULT_VALUES.COLOR_B}>
                                              Subtree exclusive to {'"'}{hierarchy.entitiesData.get(targetIri)?.label || targetIri}{'"'}
                                          </EuiHealth>
                                          <br/>
                                          <EuiHealth>
                                              Subtree independent of both
                                          </EuiHealth>
                                      </EuiText>
                                      </EuiAccordion>
                                  </span>
                              }
                          </span>
                          <EuiButton
                              size="s"
                              onClick={() => setResetToggle(!resetToggle)}
                          >
                              Reset
                          </EuiButton>
                      </span>
                  </EuiPanel>
              }
              <EuiPanel
                  data-testid="hierarchy"
                  style={{ overflowX: "auto", overflowY: "hidden" }}
                  hasShadow={false}
                  hasBorder={true}
                  borderRadius="none"
              >
                <span>
                  <EuiText style={{ whiteSpace: hierarchyWrap ? "wrap" : "nowrap" }}>
                    {hierarchy.roots.map((rootNode, idx) =>
                      renderTreeNode(
                        hierarchy,
                        rootNode,
                        idx < hierarchy.roots.length - 1,
                      ),
                    )}
                  </EuiText>
                </span>
              </EuiPanel>
          </span> :
          <EuiPanel>
              <EuiLoadingSpinner />
          </EuiPanel>
      }
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
          showHeader={props.showHeader}
          showComparisonTitleInHeader={props.showComparisonTitleInHeader}
          className={props.className}
          targetIri={props.targetIri}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { HierarchyWidget, WrappedHierarchyWidget };
