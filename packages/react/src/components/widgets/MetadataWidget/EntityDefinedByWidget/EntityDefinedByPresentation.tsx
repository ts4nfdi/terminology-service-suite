import React, { useState } from "react";
import { EuiText } from "@elastic/eui";
import { EntityOntoListPresentationProps } from "../../../../app/types";
import { randomString } from "../../../../app/util";
import "../../../../style/ts4nfdiStyles/ts4nfdiEntityDefinedByStyle.css";

const MAX_ONTOLOGIES_ON_DISPLAY = 5 as const;

function EntityDefinedByPresentation(props: EntityOntoListPresentationProps) {
  const [appearsInExpanded, setAppearsInExpanded] = useState<boolean>(false);
  const finalClassName = props.className || "ts4nfdi-entity-defined-by-style";

  function renderOntoBadge(ontology: string) {
    return (
      <button
        key={randomString()}
        onClick={() => {
          if (typeof props.onNavigateToOntology === "function")
            props.onNavigateToOntology(ontology, props.entityType || "", {
              iri: props.iri,
              label: props.label,
            });
        }}
      >
        <span className="ontology-badge">{ontology.toUpperCase()}</span>
      </button>
    );
  }

  function renderOntoBadges() {
    return props.ontolist.length > MAX_ONTOLOGIES_ON_DISPLAY &&
      !appearsInExpanded ? (
      <>
        {props.ontolist
          .slice(0, MAX_ONTOLOGIES_ON_DISPLAY)
          .map((ontology: string) => (
            <span key={randomString()}>
              {renderOntoBadge(ontology)}
              &nbsp;
            </span>
          ))}
        <button
          className="expand-onto-list"
          onClick={() => setAppearsInExpanded(true)}
        >
          + {props.ontolist.length - MAX_ONTOLOGIES_ON_DISPLAY}
        </button>
      </>
    ) : (
      props.ontolist.map((ontology: string) => (
        <span key={randomString()}>
          {renderOntoBadge(ontology)}
          &nbsp;
        </span>
      ))
    );
  }

  return (
    <div className={finalClassName}>
      {props.ontolist && props.ontolist.length > 0 && (
        <EuiText style={{ fontWeight: "normal" }}>
          Defined by&nbsp;
          {renderOntoBadges()}
        </EuiText>
      )}
    </div>
  );
}

export { EntityDefinedByPresentation };
