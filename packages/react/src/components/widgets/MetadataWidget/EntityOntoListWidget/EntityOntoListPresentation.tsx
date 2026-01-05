import React from "react";
import { EuiText } from "@elastic/eui";
import { EntityOntoListPresentationProps } from "../../../../app";
import "../../../../style/ts4nfdiStyles/ts4nfdiEntityOntoListStyle.css";
import ExpandableOntologyBadgeList from "../../../helperComponents/ExpandableOntologyBadgeList";

function EntityOntoListPresentation(props: EntityOntoListPresentationProps) {
  const finalClassName = props.className || "ts4nfdi-entity-onto-list-style";

  return (
    <div className={finalClassName}>
      {props.ontolist && props.ontolist.length > 0 && (
        <EuiText style={{ fontWeight: "normal" }}>
          Also appears in&nbsp;
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

export { EntityOntoListPresentation };
