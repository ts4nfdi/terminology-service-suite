import React, {useState} from "react";
import { EuiFlexGroup, EuiPanel, EuiText } from "@elastic/eui";
import {EntityOntoListPresentationProps} from "../../../../app/types";
import {randomString} from "../../../../app/util";

const MAX_ONTOLOGIES_ON_DISPLAY = 5 as const;

function EntityDefinedByPresentation(props: EntityOntoListPresentationProps) {

    const [appearsInExpanded, setAppearsInExpanded] = useState<boolean>(false);

  function renderOntoBadge(ontology: string) {
      return (
          <button
              key={randomString()}
              onClick={() => {if(props.onNavigateToOntology) props.onNavigateToOntology(ontology, props.entityType || "", props.iri)}}
          >
              <span className="ontology-badge">{ontology.toUpperCase()}</span>
          </button>
      );
  }

  function renderOntoBadges() {
    if (props.ontolist && props.ontolist.length > 0) {
      return (
          props.ontolist.length > MAX_ONTOLOGIES_ON_DISPLAY && !appearsInExpanded?
              <>
                  {props.ontolist.slice(0, MAX_ONTOLOGIES_ON_DISPLAY).map((ontology: string) => (
                      <span key={randomString()}>
                          {renderOntoBadge(ontology)}
                          &nbsp;
                      </span>
                  ))}
                  <button className="expand-onto-list" onClick={() => setAppearsInExpanded(true)}>
                      + {props.ontolist.length - MAX_ONTOLOGIES_ON_DISPLAY}
                  </button>
              </> :

              props.ontolist.map((ontology: string) => (
                  <span key={randomString()}>
                      {renderOntoBadge(ontology)}
                      &nbsp;
                  </span>
              ))
      );
    }
    return <>: No definition exists.</>;
  }

  return (
    <EuiPanel>
      <EuiFlexGroup style={{ padding: 10 }} direction="column">
        <span>
          <EuiText style={{fontWeight: "normal"}}>
            Defined by&nbsp;
            {renderOntoBadges()}
          </EuiText>
        </span>
      </EuiFlexGroup>
    </EuiPanel>
  );
}

export { EntityDefinedByPresentation };
