import { EuiTabbedContent } from "@elastic/eui";
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

function TabPresentation(props: TabPresentationProps) {
  function render(data: Entity) {
    const finalClassName = props.className || "ts4nfdi-tab-style";
    const tabs = [];
    /**
     * The default behaviour is to show the tabs. Therefore, undefined gets treated as truthy.
     */
    if (props.altNamesTab === undefined || props.altNamesTab) {
      tabs.push({
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
        id: "synonyms",
        name: "Alternative Names",
      });
    }

    if (props.hierarchyTab === undefined || props.hierarchyTab) {
      tabs.push({
        content: (
          <>
            {/* TODO: Is overflow: "auto" wanted? */}
            <div style={{ overflow: "auto" }}>
              <HierarchyWidget
                // backend_type and apiKey missing here. If TabWidget/ MetadataWidget shall be used for other backend types later, this has to be provided
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
                targetIri={props.hierarchyTargetIri}
                showHeader={props.showHeader}
                showComparisonTitleInHeader={props.showComparisonInputField}
                showComparisonInputField={props.showComparisonInputField}
              />
            </div>
          </>
        ),
        id: "hierarchy",
        name: "Hierarchy",
      });
    }

    if (props.crossRefTab === undefined || props.crossRefTab) {
      tabs.push({
        content: (
          <CrossRefTabPresentation
            crossrefs={
              data
                ? Reified.fromJson(data.getCrossReferences()).map((value) => {
                    return value.value;
                  })
                : []
            }
            isLoading={props.isLoading}
            error={props.error}
            className={`${finalClassName}-crossRef`}
          />
        ),
        id: "crossref",
        name: "Cross References",
      });
    }

    if (props.terminologyInfoTab === undefined || props.terminologyInfoTab) {
      tabs.push({
        content: (
          <OntologyInfoWidget
            ontologyId={props.ontologyId || data.getOntologyId()}
            api={props.api}
            parameter={""}
            useLegacy={props.useLegacy}
            showBadges={true}
            hasTitle={false}
          />
        ),
        id: "ontology",
        name: `About ${props.ontologyId?.toUpperCase()}`,
      });
    }

    if (props.graphViewTab === undefined || props.graphViewTab) {
      tabs.push({
        content: (
          <GraphViewWidget
            api={props.api}
            ontologyId={props.ontologyId || data.getOntologyId()}
            iri={props.iri}
            rootWalk={props.rootWalk}
            targetIri={props.graphTargetIri}
            hierarchy={props.graphHierarchy}
            edgeLabel={props.edgeLabel}
            onNodeClick={props.onNodeClick}
          />
        ),
        id: "graphview",
        name: "Graph View",
      });
    }

    if (props.termDepictionTab === undefined || props.termDepictionTab) {
      tabs.push({
        content: (
          <TermDepictionWidget
            api={props.api}
            ontologyId={props.ontologyId || data.getOntologyId()}
            iri={props.iri}
            useLegacy={props.useLegacy}
          />
        ),
        id: "depiction",
        name: "Depiction",
      });
    }

    if (props.entityInfoTab === undefined || props.entityInfoTab) {
      tabs.push({
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
        id: "entityinfo",
        name: "Entity Info",
      });
    }

    if (props.entityRelationTab === undefined || props.entityRelationTab) {
      tabs.push({
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
        id: "entityrelations",
        name: "Entity Relations",
      });
    }

    if (tabs.length === 0) {
      /**
       * EuiTabbedContent component raises exception if no tab is provided.
       */
      return "";
    }

    const initialSelectedTab =
      (props.initialSelectedTab &&
        tabs.find((t) => t.id === props.initialSelectedTab)) ||
      tabs[0];

    return (
      <div className={finalClassName}>
        <EuiTabbedContent
          size="s"
          tabs={tabs}
          initialSelectedTab={initialSelectedTab}
        />
      </div>
    );
  }

  return (
    <>
      {isEntity(props.data) ||
      isProperty(props.data) ||
      isIndividual(props.data)
        ? render(props.data)
        : null}
    </>
  );
}

export { TabPresentation };
