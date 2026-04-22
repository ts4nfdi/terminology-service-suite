import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiSwitch,
  EuiTab,
  EuiTabs,
} from "@elastic/eui";
import { useMemo, useRef, useState } from "react";
import { TabPresentationProps } from "../../../../app/types";
import { Entity } from "../../../../model/interfaces";
import {
  isEntity,
  isIndividual,
  isProperty,
} from "../../../../model/ModelTypeCheck";
import Reified from "../../../../model/Reified";
import "../../../../style/ts4nfdiStyles/ts4nfdiTabStyle.css";
import { EntityInfoWidget } from "../../EntityInfoWidget";
import { EntityRelationsWidget } from "../../EntityRelationsWidget";
import { GraphViewWidget } from "../../GraphViewWidget";
import { OntologyInfoWidget } from "../../OntologyInfoWidget";
import { TermDepictionWidget } from "../../TermDepictionWidget";
import { AlternativeNameTabPresentation } from "./AlternativeNameTabWidget/AlternativeNameTabPresentation";
import { CrossRefTabPresentation } from "./CrossRefWidget/CrossRefTabPresentation";
import { HierarchyWidget } from "./HierarchyWidget";
import { ComparisonInput } from "./HierarchyWidget/ComparisonInput";

type TabItem = {
  id: string;
  name: React.ReactNode;
  content: React.ReactNode;
};

function TabPresentation(props: TabPresentationProps) {
  const finalClassName = props.className || "ts4nfdi-tab-style";

  const [hasComparisonMode, setHasComparisonMode] = useState(false);
  const [selectedTabId, setSelectedTabId] = useState<string | undefined>(
    props.initialSelectedTab,
  );

  const tabsScrollRef = useRef<HTMLDivElement | null>(null);

  const onComparisonModeChange = (e: any) => {
    setHasComparisonMode(e.target.checked);
  };

  if (
    !isEntity(props.data) &&
    !isProperty(props.data) &&
    !isIndividual(props.data)
  ) {
    return null;
  }

  const data: Entity = props.data;

  const tabs: TabItem[] = useMemo(() => {
    const nextTabs: TabItem[] = [];

    if (props.altNamesTab === undefined || props.altNamesTab) {
      nextTabs.push({
        id: "synonyms",
        name: "Alternative Names",
        content: (
          <AlternativeNameTabPresentation
            synonyms={
              data ? data.getSynonyms().map((synonym) => synonym.value) : []
            }
            isLoading={props.isLoading}
            error={props.error}
            className={`${finalClassName}-altNameTab`}
          />
        ),
      });
    }

    if (props.hierarchyTab === undefined || props.hierarchyTab) {
      nextTabs.push({
        id: "hierarchy",
        name: "Hierarchy",
        content: (
          <EuiFlexGroup direction="column" gutterSize="xs">
            <EuiFlexItem>
              <EuiFlexGroup justifyContent="flexEnd" responsive={false}>
                <EuiFlexItem grow={false}>
                  {props.enableComparisonMode && (
                    <>
                      <EuiSpacer size="s" />
                      <EuiSwitch
                        label="Comparison mode"
                        checked={hasComparisonMode}
                        onChange={onComparisonModeChange}
                      />
                      <EuiSpacer size="s" />
                    </>
                  )}
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>

            <EuiFlexItem>
              {props.enableComparisonMode && hasComparisonMode && (
                <ComparisonInput
                  entityLabel={data.getLabel?.()}
                  initialTargetIri={props.targetIri}
                  onTargetIriChange={props.onTargetIriChange!}
                />
              )}
            </EuiFlexItem>

            <EuiFlexItem>
              <div style={{ overflow: "auto", width: "100%" }}>
                <HierarchyWidget
                  apiUrl={props.api}
                  iri={props.iri}
                  ontologyId={
                    props.ontologyId ||
                    (data && data.getOntologyId() !== undefined
                      ? data.getOntologyId()
                      : "")
                  }
                  entityType={props.entityType}
                  useLegacy={props.useLegacy}
                  onNavigateToEntity={props.onNavigateToEntity}
                  onNavigateToOntology={props.onNavigateToOntology}
                  preferredRoots={props.hierarchyPreferredRoots}
                  showSiblingsOnInit={props.hierarchyShowSiblingsOnInit}
                  keepExpansionStates={props.hierarchyKeepExpansionStates}
                  className={`${finalClassName}-hierarchy`}
                  hierarchyWrap={props.hierarchyWrap}
                  targetIri={props.targetIri}
                  showHeader={props.showHeader}
                  showComparisonTitleInHeader={
                    props.showComparisonTitleInHeader
                  }
                />
              </div>
            </EuiFlexItem>
          </EuiFlexGroup>
        ),
      });
    }

    if (props.crossRefTab === undefined || props.crossRefTab) {
      nextTabs.push({
        id: "crossref",
        name: "Cross References",
        content: (
          <CrossRefTabPresentation
            crossrefs={
              data
                ? Reified.fromJson(data.getCrossReferences()).map(
                    (value) => value.value,
                  )
                : []
            }
            isLoading={props.isLoading}
            error={props.error}
            className={`${finalClassName}-crossRef`}
          />
        ),
      });
    }

    if (props.terminologyInfoTab === undefined || props.terminologyInfoTab) {
      nextTabs.push({
        id: "ontology",
        name: `About ${props.ontologyId?.toUpperCase()}`,
        content: (
          <OntologyInfoWidget
            ontologyId={props.ontologyId || data.getOntologyId()}
            api={props.api}
            parameter=""
            useLegacy={props.useLegacy}
            showBadges={true}
            hasTitle={false}
          />
        ),
      });
    }

    if (props.graphViewTab === undefined || props.graphViewTab) {
      nextTabs.push({
        id: "graphview",
        name: "Graph View",
        content: (
          <EuiFlexGroup direction="column" gutterSize="xs">
            <EuiFlexItem>
              <EuiFlexGroup justifyContent="flexEnd" responsive={false}>
                <EuiFlexItem grow={false}>
                  {props.enableComparisonMode && (
                    <>
                      <EuiSpacer size="s" />
                      <EuiSwitch
                        label="Comparison mode"
                        checked={hasComparisonMode}
                        onChange={onComparisonModeChange}
                      />
                      <EuiSpacer size="s" />
                    </>
                  )}
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>

            <EuiFlexItem>
              {props.enableComparisonMode && hasComparisonMode && (
                <ComparisonInput
                  entityLabel={data.getLabel?.()}
                  initialTargetIri={props.targetIri}
                  onTargetIriChange={props.onTargetIriChange!}
                />
              )}
            </EuiFlexItem>

            <EuiFlexItem>
              <GraphViewWidget
                api={props.api}
                ontologyId={props.ontologyId || data.getOntologyId()}
                iri={props.iri}
                rootWalk={props.rootWalk}
                targetIri={props.targetIri}
                hierarchy={props.graphHierarchy}
                edgeLabel={props.edgeLabel}
                onNodeClick={props.onNodeClick}
                stopFullWidth={props.stopFullWidth}
                hideLegend={props.hideLegend}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        ),
      });
    }

    if (props.termDepictionTab === undefined || props.termDepictionTab) {
      nextTabs.push({
        id: "depiction",
        name: "Depiction",
        content: (
          <TermDepictionWidget
            api={props.api}
            ontologyId={props.ontologyId || data.getOntologyId()}
            iri={props.iri}
            useLegacy={props.useLegacy}
          />
        ),
      });
    }

    if (props.entityInfoTab === undefined || props.entityInfoTab) {
      nextTabs.push({
        id: "entityinfo",
        name: "Entity Info",
        content: (
          <EntityInfoWidget
            api={props.api}
            iri={props.iri}
            useLegacy={props.useLegacy}
            ontologyId={props.ontologyId || data.getOntologyId()}
            entityType={props.entityType}
            hasTitle={false}
            showBadges={true}
            parameter={props.parameter}
            onNavigateToEntity={props.onNavigateToEntity}
            onNavigateToOntology={props.onNavigateToOntology}
            onNavigateToDisambiguate={props.onNavigateToDisambiguate}
          />
        ),
      });
    }

    if (props.entityRelationTab === undefined || props.entityRelationTab) {
      nextTabs.push({
        id: "entityrelations",
        name: "Entity Relations",
        content: (
          <EntityRelationsWidget
            api={props.api}
            iri={props.iri}
            ontologyId={props.ontologyId || data.getOntologyId()}
            entityType={props.entityType}
            hasTitle={false}
            showBadges={true}
            parameter={props.parameter}
            onNavigateToEntity={props.onNavigateToEntity}
            onNavigateToDisambiguate={props.onNavigateToDisambiguate}
            onNavigateToOntology={props.onNavigateToOntology}
          />
        ),
      });
    }

    return nextTabs;
  }, [props, data, finalClassName, hasComparisonMode]);

  if (tabs.length === 0) {
    return null;
  }

  const activeTab =
    tabs.find((tab) => tab.id === selectedTabId) ||
    tabs.find((tab) => tab.id === props.initialSelectedTab) ||
    tabs[0];

  return (
    <div>
      <div
        ref={tabsScrollRef}
        tabIndex={0}
        aria-label="Entity detail tabs"
        className={finalClassName}
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          borderBottom: "1px solid #D3DAE6",
        }}
      >
        <EuiTabs size="s" bottomBorder={false}>
          {tabs.map((tab) => (
            <EuiTab
              key={tab.id}
              isSelected={tab.id === activeTab.id}
              onClick={() => setSelectedTabId(tab.id)}
            >
              {tab.name}
            </EuiTab>
          ))}
        </EuiTabs>
      </div>

      <div style={{ width: "100%" }}>{activeTab.content}</div>
    </div>
  );
}

export { TabPresentation };
