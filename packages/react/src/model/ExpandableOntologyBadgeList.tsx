import React, {ReactElement} from "react";
import {ExpandableOntologyBadgeListProps} from "../app";
import {randomString} from "../app/util";
import OntologyBadge from "./OntologyBadge";

export default function ExpandableOntologyBadgeList(props: ExpandableOntologyBadgeListProps): ReactElement {
    const MAX_ONTOLOGIES_ON_DISPLAY = 5 as const;
    const [expanded, setExpanded] = React.useState<boolean>(false);

    return props.ontolist.length > MAX_ONTOLOGIES_ON_DISPLAY && !expanded ? (
        <>
            {props.ontolist
                .slice(0, MAX_ONTOLOGIES_ON_DISPLAY)
                .map((ontology: string, index: number) => (
                    <span key={randomString()}>
                      <OntologyBadge
                          ontologyId={ontology}
                          iri={props.iri}
                          label={props.label}
                          color={props.color}
                          className={props.className}
                          onNavigateToOntology={props.onNavigateToOntology}
                      />
                      {index < MAX_ONTOLOGIES_ON_DISPLAY - 1 && <>&nbsp;</>}
                    </span>
                ))}
            &nbsp;
            <button className="expand-onto-list" onClick={() => setExpanded(true)}>
                + {props.ontolist.length - MAX_ONTOLOGIES_ON_DISPLAY}
            </button>
        </>
    ) : (
        <>
            {props.ontolist.map((ontology: string, index: number) => (
                <span key={randomString()}>
                  <OntologyBadge
                      ontologyId={ontology}
                      iri={props.iri}
                      label={props.label}
                      color={props.color}
                      className={props.className}
                      onNavigateToOntology={props.onNavigateToOntology}
                  />
                  {index < props.ontolist.length - 1 && <>&nbsp;</>}
                </span>
            ))}
        </>
    );
}