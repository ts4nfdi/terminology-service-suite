import React, {ReactElement} from "react";
import OntologyBadge from "./OntologyBadge";
import {ExpandableOntologyBadgeListProps} from "../app";
import {randomString} from "../app/util";

export default function ExpandableOntologyBadgeList(props: ExpandableOntologyBadgeListProps): ReactElement {
    const MAX_ONTOLOGIES_ON_DISPLAY = 5 as const;
    const [expanded, setExpanded] = React.useState<boolean>(false);

    function renderOntologyBadge(ontology: string): ReactElement {
        return (
            <OntologyBadge
                text={ontology.toUpperCase()}
                onClick={() => {
                    if (typeof props.onNavigateToOntology === "function")
                        props.onNavigateToOntology(ontology, props.entityType || "", {
                            iri: props.iri,
                            label: props.label,
                        });
                }}
            />
        );
    }

    return props.ontolist.length > MAX_ONTOLOGIES_ON_DISPLAY &&
        !expanded ? (
            <>
                {props.ontolist
                    .slice(0, MAX_ONTOLOGIES_ON_DISPLAY)
                    .map((ontology: string, index: number) => (
                        <span key={randomString()}>
                          {renderOntologyBadge(ontology)}
                          {index < MAX_ONTOLOGIES_ON_DISPLAY - 1 && <>&nbsp;</>}
                        </span>
                    ))}
                <button className="expand-onto-list" onClick={() => setExpanded(true)}>
                    + {props.ontolist.length - MAX_ONTOLOGIES_ON_DISPLAY}
                </button>
            </>
        ) : (
            <>
                {props.ontolist.map((ontology: string, index: number) => (
                    <span key={randomString()}>
                      {renderOntologyBadge(ontology)}
                        {index < props.ontolist.length - 1 && <>&nbsp;</>}
                    </span>
                ))}
            </>
        );
}