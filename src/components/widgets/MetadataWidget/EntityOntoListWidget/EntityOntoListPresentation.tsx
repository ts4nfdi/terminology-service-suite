import React from "react";
import { EuiFlexGroup, EuiPanel, EuiText } from "@elastic/eui";
import {EntityOntoListPresentationProps} from "../../../../app/types";
import {randomString} from "../../../../app/util";

function EntityOntoListPresentation(props: EntityOntoListPresentationProps) {

  function renderOntoBadges() {
    if (props.ontolist && props.ontolist.length > 0) {
      return props.ontolist.map((ontology: string, index: number) => (
          <>
            <button
                key={randomString()}
                onClick={() => {if(props.onNavigateToOntology) props.onNavigateToOntology(ontology, props.entityType || "", props.iri)}}
            >
              <span className="defining-ontology-badge">{ontology.toUpperCase()}</span>
            </button>
            &nbsp;
          </>
      ));
    }
    return <EuiText>No alternative names exist.</EuiText>;
  }

  return (
    <EuiPanel>
      <EuiFlexGroup style={{ padding: 10 }} direction="column">
        <span>
          <EuiText>
            Also appears in
            &nbsp;
            {renderOntoBadges()}
          </EuiText>
        </span>
      </EuiFlexGroup>
    </EuiPanel>
  );
}

export { EntityOntoListPresentation };
