import React, {ReactElement} from "react";
import {Thing} from "./interfaces";
import LinkedEntities from "./LinkedEntities";
import {OnNavigates} from "../app";
import {inferTypeFromTypeArray, randomString} from "../app/util";
import {EuiIcon} from "@elastic/eui";
import {DEFAULT_SHOW_BADGES} from "../app/globals";

/**
 * ONLY USABLE WITH V2-API ENTITIES
 *
 * Returns a labeled entity link as JSX element
 * @param parentEntity the entity object in which the linked entity exists
 * @param linkedEntities the linkedEntities object (exists as param because it is necessary that the entity has a linkedEntities block in properties)
 * @param iri   the entities' iri
 * @param showBadges    boolean which indicates if badges should be shown
 * @param onNavigates functions defining the action when clicking clickable items
 * @param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
 * @param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
 * @param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
 * @returns ReactElement the entity link JSX
 */
export default function EntityLink(
    {
        parentEntity,
        linkedEntities,
        iri,
        showBadges = DEFAULT_SHOW_BADGES,
        onNavigates
    } : {
        parentEntity: Thing,
        linkedEntities: LinkedEntities,
        iri: string,
        showBadges?: boolean
        /*TODO: change to using (entity : EntityData) later*/ onNavigates: OnNavigates
    }
): ReactElement {
    const label =
        linkedEntities.getLabelForIri(iri) || iri.split("/").pop() || iri;
    const linkedEntity = linkedEntities.get(iri);
    const localOntology = parentEntity.getOntologyId();

    // reference to self: just display label because we are already on that page
    if (parentEntity.getType() !== "ontology" && iri === parentEntity?.getIri()) {
        return <span className="highlight">{parentEntity.getLabel()}</span>;
    }

    if (!linkedEntity) {
        if (iri.startsWith("http")) {
            return (
                <a className="clickable" href={iri}>
                    {label}
                </a>
            );
        } else {
            // So far only known occurrence of this branch is for owl#Thing
            return <span>{label}</span>;
        }
    }

    const otherDefinedBy = linkedEntity["definedBy"]
        ? linkedEntity["definedBy"].filter((elem: any) => {
            return elem !== localOntology;
        })
        : [];
    const linkedEntityType = linkedEntity["type"]
        ? inferTypeFromTypeArray(linkedEntity["type"])
        : parentEntity.getType();

    // see https://gitlab.zbmed.de/km/semlookp/ols4/-/blob/dev/frontend/src/components/EntityLink.tsx for original reference
    if (otherDefinedBy.length === 1) {
        if (linkedEntity["hasLocalDefinition"]) {
            // show <label> <ontologyId> where <label> links to the term in this ontology and <ontologyId> links to the term in the defining ontology
            return (
                <>
                    <button
                        className="clickable"
                        onClick={() => {
                            if (typeof onNavigates.onNavigateToEntity === "function")
                                onNavigates.onNavigateToEntity(
                                    localOntology,
                                    linkedEntityType,
                                    { iri, label },
                                );
                        }}
                    >
                        {label}
                    </button>
                    {showBadges ? (
                        <>
                            &nbsp;
                            <button
                                className="no-decoration"
                                onClick={() => {
                                    if (typeof onNavigates.onNavigateToOntology === "function")
                                        onNavigates.onNavigateToOntology(
                                            otherDefinedBy[0],
                                            linkedEntityType,
                                            { iri, label },
                                        );
                                }}
                            >
                                {
                                    <span className="ontology-badge">
                    {otherDefinedBy[0].toUpperCase()}
                  </span>
                                }
                            </button>
                        </>
                    ) : (
                        <></>
                    )}
                </>
            );
        } else {
            // show <label> <ontologyId> linking to the term in the defining ontology
            return (
                <>
                    <button
                        className="clickable"
                        onClick={() => {
                            if (typeof onNavigates.onNavigateToEntity === "function")
                                onNavigates.onNavigateToEntity(
                                    otherDefinedBy[0],
                                    linkedEntityType,
                                    { iri, label },
                                );
                        }}
                    >
                        {label}
                    </button>
                    {showBadges ? (
                        <>
                            &nbsp;
                            <button
                                className="no-decoration"
                                onClick={() => {
                                    if (typeof onNavigates.onNavigateToOntology === "function")
                                        onNavigates.onNavigateToOntology(
                                            otherDefinedBy[0],
                                            linkedEntityType,
                                            { iri, label },
                                        );
                                }}
                            >
                                {
                                    <span className="ontology-badge">
                    {otherDefinedBy[0].toUpperCase()}
                  </span>
                                }
                            </button>
                        </>
                    ) : (
                        <></>
                    )}
                </>
            );
        }
    } else if (otherDefinedBy.length > 1) {
        if (linkedEntity["hasLocalDefinition"]) {
            // show <label> <ontologyId1> <ontologyId2> ... <ontologyIdN> where <label> links to the term in this ontology and <ontologyIdI> links to the term in that defining ontology
            return (
                <>
                    <button
                        className="clickable"
                        onClick={() => {
                            if (typeof onNavigates.onNavigateToEntity === "function")
                                onNavigates.onNavigateToEntity(
                                    localOntology,
                                    linkedEntityType,
                                    { iri, label },
                                );
                        }}
                    >
                        {label}
                    </button>
                    {showBadges ? (
                        <>
                            &nbsp;
                            {otherDefinedBy.map((elem: any) => {
                                return (
                                    <button
                                        className="no-decoration"
                                        key={randomString()}
                                        onClick={() => {
                                            if (
                                                typeof onNavigates.onNavigateToOntology === "function"
                                            )
                                                onNavigates.onNavigateToOntology(
                                                    elem,
                                                    linkedEntityType,
                                                    { iri, label },
                                                );
                                        }}
                                    >
                                        {
                                            <span className="ontology-badge">
                        {elem.toUpperCase()}
                      </span>
                                        }
                                    </button>
                                );
                            })}
                        </>
                    ) : (
                        <></>
                    )}
                </>
            );
        } else {
            // show <label><ICON> where <label> links to the terms' iri and <ICON> links to disambiguation page
            return (
                <>
                    <a className="clickable" href={iri}>
                        {label}
                    </a>
                    {showBadges ? (
                        <>
                            &nbsp;
                            <button
                                className="no-decoration"
                                key={randomString()}
                                onClick={() => {
                                    if (
                                        typeof onNavigates.onNavigateToDisambiguate === "function"
                                    )
                                        onNavigates.onNavigateToDisambiguate(linkedEntityType, {
                                            iri,
                                            label,
                                        });
                                }}
                            >
                <span className="ontology-badge">
                  <EuiIcon type="search" size={"s"} />
                    &nbsp;
                    {otherDefinedBy.length}
                    &nbsp;
                    {"ontologies"}
                </span>
                            </button>
                        </>
                    ) : (
                        <></>
                    )}
                </>
            );
        }
    } else {
        if (linkedEntity["hasLocalDefinition"]) {
            // show <label> where <label> links to the term in this ontology
            return (
                <>
                    <button
                        className="clickable"
                        onClick={() => {
                            if (typeof onNavigates.onNavigateToEntity === "function")
                                onNavigates.onNavigateToEntity(
                                    localOntology,
                                    linkedEntityType,
                                    { iri, label },
                                );
                        }}
                    >
                        {label}
                    </button>
                </>
            );
        } else {
            if (parseInt(linkedEntity["numAppearsIn"]) > 0) {
                // show <label><ICON> where <label> links to the terms' iri and <ICON> links to disambiguation page
                return (
                    <>
                        <a className="clickable" href={iri}>
                            {label}
                        </a>
                        {showBadges ? (
                            <>
                                &nbsp;
                                <button
                                    className="no-decoration"
                                    key={randomString()}
                                    onClick={() => {
                                        if (
                                            typeof onNavigates.onNavigateToDisambiguate === "function"
                                        )
                                            onNavigates.onNavigateToDisambiguate(linkedEntityType, {
                                                iri,
                                                label,
                                            });
                                    }}
                                >
                  <span className="ontology-badge">
                    <EuiIcon type="search" size={"s"} />
                      &nbsp;
                      {linkedEntity["numAppearsIn"]}
                      &nbsp;
                      {parseInt(linkedEntity["numAppearsIn"]) > 1
                          ? "ontologies"
                          : "ontology"}
                  </span>
                                </button>
                            </>
                        ) : (
                            <></>
                        )}
                    </>
                );
            } else {
                // show raw iri
                return (
                    <>
                        <a className="clickable" href={linkedEntity["url"] || iri}>
                            {label}
                        </a>
                    </>
                );
            }
        }
    }
}