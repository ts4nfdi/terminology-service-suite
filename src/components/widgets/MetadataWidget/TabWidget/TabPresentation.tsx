import React from "react";
import { EuiTabbedContent } from "@elastic/eui";
import { HierarchyWidgetOLS } from "./HierarchyWidget";
import { Entity } from "../../../../model/interfaces";
import { isEntity, isIndividual, isProperty } from "../../../../model/ModelTypeCheck";
import { AlternativeNameTabPresentation } from "./AlternativeNameTabWidget/AlternativeNameTabPresentation";
import { CrossRefTabPresentation } from "./CrossRefWidget/CrossRefTabPresentation";
import { HierarchyWidgetDeprecated } from "./HierarchyWidgetDeprecated";
import Reified from "../../../../model/Reified";
import {TabPresentationProps} from "../../../../app/types";
import { OntologyInfoWidget } from "../../OntologyInfoWidget";

function TabPresentation(props: TabPresentationProps) {
  function render(data: Entity) {
    const tabs = [];
     /**
     * The default behaviour is to show the tabs. Therefore, undefined gets treated as truthy.
     */
    if(props.altNamesTab === undefined || props.altNamesTab){
      tabs.push(
            {
              content: (
                <AlternativeNameTabPresentation synonyms={data.getSynonyms().map(synonym => synonym.value)} />
              ),
              id: "tab1",
              name: "Alternative Names"
            }
        );
    }

    if (props.hierarchyTab === undefined || props.hierarchyTab){
      tabs.push(
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
                      : <HierarchyWidgetOLS
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
          }
      );
    }

    if(props.crossRefTab === undefined || props.crossRefTab ){
      tabs.push(
          {
              content:
                <CrossRefTabPresentation crossrefs={Reified.fromJson(data.getCrossReferences()).map((value) => {
                  return value.value;
                })} />,
              id: "tab3",
              name: "Cross references"
          }
      );
    }

    if(props.terminologyInfoTab === undefined || props.terminologyInfoTab){
      tabs.push(
        {
            content:
              <OntologyInfoWidget
                ontologyId={props.ontologyId || data.getOntologyId()}
                api={props.api}
                parameter={""}
                useLegacy={props.useLegacy}
                showBadges={false}
                hasTitle={false}
                width={600}
              />,
              id: "tab4",
              name: `About ${props.ontologyId?.toUpperCase()}`
        }
      );
    }


    if(tabs.length === 0){
      /**
       * EuiTabbedContent component raises exception if no tab is provided.
       */
      return "";
    }

    return (
      <>
          <EuiTabbedContent size="s" tabs={tabs} />
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
