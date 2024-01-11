import Thing from "./interfaces/Thing";
import React from "react";
import {EuiBadge} from "@elastic/eui";
import {getFrontEndApi, getTermInOntologySuffix} from "../app/util";
import LinkedEntities from "./LinkedEntities";
import Reified from "./Reified";

/**
 *
 * @param entity the surrounding entity of the axioms array (for eventual label fetching)
 * @param axioms the entities axioms
 * @returns JSX.Element the axioms in JSX format to display
 */
export function getAxiomsInformationJSX(entity: Thing, axioms: any[] | null) : JSX.Element {
    // TODO
    return (<></>);
}

/**
 * Returns a labeled entity link as JSX element
 * @param parentEntity the entity object in which the linked entity exists
 * @param linkedEntities the linkedEntities object (exists as param because it is necessary that the entity has a linkedEntities block in properties)
 * @param iri   the entities' iri
 * @param api   the api used to extract the frontend api to link to linked entity
 * @param showBadges    boolean which indicates if badges should be shown
 * @returns JSX.Element the entity link
 */
export function getEntityLinkJSX(parentEntity: Thing, linkedEntities: LinkedEntities, iri: string, api: string, showBadges : boolean = true) {
    const frontendApi = getFrontEndApi(api);
    const label = linkedEntities.getLabelForIri(iri) || iri.split("/").pop() || iri;
    const linkedEntity = linkedEntities.get(iri);
    const localOntology = parentEntity.getOntologyId();

    // reference to self: just display label because we are already on that page
    if (parentEntity.getType() !== "ontology" && iri === parentEntity?.getIri()) {
        return <b>{parentEntity.getIri()}</b>
    }

    if (!linkedEntity) {
        if(iri.includes("http")) {
            return <a href={iri}>{label}</a>;
        }
        else {
            // So far only known occurrence of this branch is for owl#StandardThing
            return <span>{label}</span>;
        }
    }

    let otherDefinedBy = linkedEntity["definedBy"] ? linkedEntity["definedBy"].filter((elem: any) => {return elem !== localOntology}) : [];
    const linkedEntityType = linkedEntity["type"]; // TODO: does type key always exist in linkedEntity relevant for relationsWidget?

    // see https://gitlab.zbmed.de/km/semlookp/ols4/-/blob/dev/frontend/src/components/EntityLink.tsx for original reference
    if(otherDefinedBy.length === 1) {
        if(linkedEntity["hasLocalDefinition"]) {
            // show <label> <ontologyId> where <label> links to the term in this ontology and <ontologyId> links to the term in the defining ontology
            return (
                <>
                    <a href={frontendApi + getTermInOntologySuffix(localOntology, iri, linkedEntityType)}>{label}</a>
                    {
                        showBadges ?
                            <>
                                &nbsp;
                                <a href={frontendApi + getTermInOntologySuffix(otherDefinedBy[0], iri, linkedEntityType)}>{<EuiBadge color={"success"}>{otherDefinedBy[0].toUpperCase()}</EuiBadge>}</a>
                            </> :
                            <></>
                    }
                </>
            )
        }
        else {
            // show <label> <ontologyId> linking to the term in the defining ontology
            return (
                <>
                    <a href={frontendApi + getTermInOntologySuffix(otherDefinedBy[0], iri, linkedEntityType)}>{label}</a>
                    {
                        showBadges ?
                            <>
                                &nbsp;
                                <a href={frontendApi + getTermInOntologySuffix(otherDefinedBy[0], iri, linkedEntityType)}>{<EuiBadge color={"success"}>{otherDefinedBy[0].toUpperCase()}</EuiBadge>}</a>
                            </> :
                            <></>
                    }
                </>
            )
        }
    }
    else if(otherDefinedBy.length > 1) {
        if(linkedEntity["hasLocalDefinition"]) {
            // show <label> <ontologyId1> <ontologyId2> ... <ontologyIdN> where <label> links to the term in this ontology and <ontologyIdI> links to the term in that defining ontology
            return (
                <>
                    <a href={frontendApi + getTermInOntologySuffix(localOntology, iri, linkedEntityType)}>{label}</a>
                    {
                        showBadges ?
                            <>
                                &nbsp;
                                {otherDefinedBy.map((elem: any) => {
                                    return (
                                        <a href={frontendApi + getTermInOntologySuffix(elem, iri, linkedEntityType)}>{<EuiBadge color={"success"}>{elem.toUpperCase()}</EuiBadge>}</a>
                                    );
                                })}
                            </> :
                            <></>
                    }
                </>
            )
        }
        else {
            // show <label><ICON> linking to disambiguation page
            // TODO: link correct urls, show disambiguation page?
            return (
                <>
                    <a href={iri}>{label}</a>
                    {
                        showBadges ?
                            <>
                                &nbsp;
                                {otherDefinedBy.map((elem: any) => {
                                    return (
                                        <a href={iri}>{<EuiBadge color={"success"}>{elem.toUpperCase()}</EuiBadge>}</a>
                                    );
                                })}
                            </> :
                            <></>
                    }
                </>
            );
        }
    }
    else {
        if(linkedEntity["hasLocalDefinition"]) {
            // show <label> where <label> links to the term in this ontology
            return (
                <>
                    <a href={frontendApi + getTermInOntologySuffix(localOntology, iri, linkedEntityType)}>{label}</a>
                </>
            )
        }
        else {
            if(parseInt(linkedEntity["numAppearsIn"]) > 0) {
                // show <label><ICON> linking to disambiguation page
                // TODO: link correct urls, show disambiguation page?
                return (
                    <>
                        <a href={iri}>{label}</a>
                    </>
                )
            }
            else {
                // show raw iri
                return (
                    <>
                        <a href={iri}>{label}</a>
                    </>
                )
            }
        }
    }
}

// TODO: ClassExpression (probably best to take it from EBI OLS4 and insert own JSX design from getSectionListElement() function in EntityRelationsWidget)

/**
 * Renders a given Reified
 * @param entity the entity the Reified exists in
 * @param reified the Reified
 * @param api the api used to extract the frontend api to link to linked entities
 * @param showBadges boolean which indicates if badges should be shown
 */
export function getReifiedJSX(entity: Thing, reified: Reified<any>, api: string, showBadges: boolean = true): JSX.Element {
    function getValueJSX(value: Reified<any>): JSX.Element {
        const linkedEntities = entity.getLinkedEntities();

        // linkedEntities not existent on entity (-> probably legacy api version)
        if(Object.keys(linkedEntities.linkedEntities).length == 0) {
            return <>{JSON.stringify(value.value)}</>;
        }
        else {
            let linkedEntity = linkedEntities.get(value.value);

            if (linkedEntity) {
                return getEntityLinkJSX(entity, linkedEntities, value.value, api, showBadges);
            }
            else {
                if (typeof value.value !== "string") {
                    if(entity.getType() == "ontology") {
                        return <>{JSON.stringify(value.value)}</>;
                    }
                    else {
                        /*
                        return (
                            <ClassExpression
                                ontologyId={entity.getOntologyId()}
                                currentEntity={entity}
                                expr={value.value}
                                entityType={entity.getTypePlural() as any}
                                linkedEntities={linkedEntities}
                            />
                        );
                        */
                        return <></>;
                    }
                }
                else {
                    /*
                    return (
                        <span>
                          {addLinksToText(
                              value.value.toString(),
                              linkedEntities,
                              entity.getOntologyId(),
                              entity,
                              entity.getTypePlural()
                          )}
                        </span>
                    );
                    */
                    return <></>;
                }
            }
        }
    }

    return (
        <>
            {getValueJSX(reified)}
            {reified.hasMetadata() && getAxiomsInformationJSX(entity, reified.axioms)}
        </>
    );
}