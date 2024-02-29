import React from "react";
import { EuiFlexItem, EuiTabbedContent } from "@elastic/eui";
import { HierarchyWidget } from "./HierarchyWidget";
import { Entity, Ontology, Thing } from "../../../../model/interfaces";
import { isEntity, isIndividual, isOntology, isProperty } from "../../../../model/ModelTypeCheck";
import { AlternativeNameTabPresentation } from "./AlternativeNameTabWidget/AlternativeNameTabPresentation";
import { CrossRefTabPresentation } from "./CrossRefWidget/CrossRefTabPresentation";
import { HierarchyWidgetDeprecated } from "./HierarchyWidgetDeprecated";

export interface TabPresentationProps {
  data: Thing;
  iri: string;
  api: string;
  ontologyId?: string;
  useLegacy?: boolean;
  entityType: "entities" | "classes" | "properties" | "individuals";
}

function TabPresentation(props: TabPresentationProps) {
  function render(data: Entity) {
    return (
      <>
        <EuiFlexItem>
          <EuiTabbedContent size="s" tabs={
            [
              {
                content: (
                  <AlternativeNameTabPresentation synonyms={data.getSynonyms().map(synonym => synonym.value)} />
                ),
                id: "tab1",
                name: "Alternative Names"
              },
              {
                content: (
                  <>
                    {props.useLegacy == undefined
                      ? <HierarchyWidgetDeprecated
                        ontologyId={props.ontologyId || ((data && data.getOntologyId() !== undefined) ? data.getOntologyId() : "")}
                        api={props.api}
                        iri={props.iri}

                      />
                      : props.useLegacy
                        ? <HierarchyWidgetDeprecated
                          ontologyId={props.ontologyId || ((data && data.getOntologyId() !== undefined) ? data.getOntologyId() : "")}
                          api={props.api}
                          iri={props.iri}
                        />
                        :
                        <HierarchyWidget
                          api={props.api}
                          iri={props.iri}
                          ontologyId={props.ontologyId || ((data && data.getOntologyId() !== undefined) ? data.getOntologyId() : "")}
                          entityType={props.entityType}
                        />
                    }
                  </>
                ),
                id: "tab2",
                name: "Hierarchy"
              },
              {
                content:
                  <CrossRefTabPresentation crossrefs={data.getCrossReferences()} />,
                id: "tab3",
                name: "Cross references"
              }
            ]
          } />
        </EuiFlexItem>
      </>
    );
  }

  return (
    <>
      {isEntity(props.data) || isProperty(props.data) || isIndividual(props.data) ? render(props.data) : null}
    </>
  );
}

export { TabPresentation };
