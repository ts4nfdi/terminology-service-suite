import React from "react";
import { EuiText } from "@elastic/eui";
import { EntityOntoListPresentationProps } from "../../../../app";
import "../../../../style/ts4nfdiStyles/ts4nfdiEntityDefinedByStyle.css";
import ExpandableOntologyBadgeList from "../../../../model/ExpandableOntologyBadgeList";

function EntityDefinedByPresentation(props: EntityOntoListPresentationProps) {
  const finalClassName = props.className || "ts4nfdi-entity-defined-by-style";

  return (
    <div className={finalClassName}>
      {props.ontolist && props.ontolist.length > 0 && (
        <EuiText style={{ fontWeight: "normal" }}>
          Defined by&nbsp;
          <ExpandableOntologyBadgeList
              iri={props.iri}
              label={props.label}
              ontolist={props.ontolist}
              onNavigateToOntology={props.onNavigateToOntology}
              entityType={props.entityType}
          />
        </EuiText>
      )}
    </div>
  );
}

export { EntityDefinedByPresentation };
