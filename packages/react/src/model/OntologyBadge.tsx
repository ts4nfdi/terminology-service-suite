import React, {ReactElement} from "react";
import Badge from "./Badge";
import {OntologyBadgeProps} from "../app";

export default function OntologyBadge(props: OntologyBadgeProps): ReactElement {
    return (
        <Badge
            onClick={(typeof props.onNavigateToOntology === "function" && props.ontologyId) ?
                () => {
                    if (typeof props.onNavigateToOntology === "function" && props.ontologyId)
                        props.onNavigateToOntology(
                            props.ontologyId,
                            props.entityType || "",
                            props.iri ? {
                                iri: props.iri,
                                label: props.label,
                            } : undefined
                        );
                } : undefined}
            color={props.color}
        >
            {props.ontologyId ? props.ontologyId.toUpperCase() : "No ontology name available"}
        </Badge>
    );
}