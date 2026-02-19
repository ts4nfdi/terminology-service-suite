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
        id: "tab1",
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
              />
            </div>
          </>
        ),
        id: "tab2",
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
        id: "tab3",
        name: "Cross references",
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
        id: "tab4",
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
        id: "tab5",
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
        id: "tab6",
        name: "Depiction",
      });
    }

    if (tabs.length === 0) {
      /**
       * EuiTabbedContent component raises exception if no tab is provided.
       */
      return "";
    }

    return (
      <div className={finalClassName}>
        <EuiTabbedContent size="s" tabs={tabs} />
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
