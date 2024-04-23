import React from "react";
import { EuiFlexItem, EuiTabbedContent } from "@elastic/eui";
import { HierarchyWidget } from "./HierarchyWidget";
import { Entity } from "../../../../model/interfaces";
import { isEntity, isIndividual, isProperty } from "../../../../model/ModelTypeCheck";
import { AlternativeNameTabPresentation } from "./AlternativeNameTabWidget/AlternativeNameTabPresentation";
import { CrossRefTabPresentation } from "./CrossRefWidget/CrossRefTabPresentation";
import { HierarchyWidgetDeprecated } from "./HierarchyWidgetDeprecated";
import Reified from "../../../../model/Reified";
import {TabPresentationProps} from "../../../../app/types";

function TabPresentation(props: TabPresentationProps) {
  function render(data: Entity) {
    return (
      <>
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
                    <div style={{ overflow: "auto"}}>
                    {props.useLegacy == undefined || props.useLegacy
                      ? <HierarchyWidgetDeprecated
                        ontologyId={props.ontologyId || ((data && data.getOntologyId() !== undefined) ? data.getOntologyId() : "")}
                        api={props.api}
                        iri={props.iri}

                      />
                      : <HierarchyWidget
                        api={props.api}
                        iri={props.iri}
                        ontologyId={props.ontologyId || ((data && data.getOntologyId() !== undefined) ? data.getOntologyId() : "")}
                        entityType={props.entityType}
                      />
                    }
                    </div>
                  </>
                ),
                id: "tab2",
                name: "Hierarchy"
              },
              {
                content:
                  <CrossRefTabPresentation crossrefs={Reified.fromJson(data.getCrossReferences()).map((value) => {
                    return value.value;
                  })} />,
                id: "tab3",
                name: "Cross references"
              }
            ]
          } />
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
