import {Thing} from "./interfaces";
import React, {ReactElement} from "react";
import {EuiIconTip, EuiIcon} from "@elastic/eui";
import {asArray, inferTypeFromTypeArray, randomString} from "../app/util";
import LinkedEntities from "./LinkedEntities";
import Reified from "./Reified";
import "../style/semlookp-styles.css";
import {OnNavigates} from "../app/types";

const DEFAULT_SHOW_BADGES = true;

export function getTooltip(text: string) : ReactElement {
    return (
        <EuiIconTip type={"iInCircle"} color={"subdued"} content={text}/>
    );
}

/**
 * ONLY USABLE WITH V2-API ENTITIES
 *
 * Returns Reified axioms as JSX element (similar to MetadataTooltip component in ols4 project)
 * @param parentEntity the surrounding entity of the axioms array (for eventual label fetching)
 * @param axiomsDict the entities axioms in the format returned by Reified::getMetadata()
 * @returns ReactElement the axioms in JSX format to display
 */
export function getAxiomsInformationJSX(parentEntity: Thing, axiomsDict: any | null) : ReactElement {
    const axiomsText = Object.keys(axiomsDict)
        .map((key) => {
            const label = parentEntity.getLinkedEntities().getLabelForIri(key) || key;
            if (label) {
                return (
                    "*" + axiomsDict[key] + " (" + label + ")"
                );
            }
            else return "";
        })
        .join("\n")

    return getTooltip(axiomsText);
}

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
export function getEntityLinkJSX(parentEntity: Thing, linkedEntities: LinkedEntities, iri: string, showBadges : boolean = DEFAULT_SHOW_BADGES, /*TODO: change to using (entity : EntityData) later*/ onNavigates: OnNavigates): ReactElement {
    const label = linkedEntities.getLabelForIri(iri) || iri.split("/").pop() || iri;
    const linkedEntity = linkedEntities.get(iri);
    const localOntology = parentEntity.getOntologyId();

    // reference to self: just display label because we are already on that page
    if (parentEntity.getType() !== "ontology" && iri === parentEntity?.getIri()) {
        return <span className="highlight">{parentEntity.getLabel()}</span>
    }

    if (!linkedEntity) {
        if(iri.startsWith("http")) {
            return <a className="clickable" href={iri}>{label}</a>;
        }
        else {
            // So far only known occurrence of this branch is for owl#Thing
            return <span>{label}</span>;
        }
    }

    const otherDefinedBy = linkedEntity["definedBy"] ? linkedEntity["definedBy"].filter((elem: any) => {return elem !== localOntology}) : [];
    const linkedEntityType = linkedEntity["type"] ? inferTypeFromTypeArray(linkedEntity["type"]) : parentEntity.getType();

    // see https://gitlab.zbmed.de/km/semlookp/ols4/-/blob/dev/frontend/src/components/EntityLink.tsx for original reference
    if(otherDefinedBy.length === 1) {
        if(linkedEntity["hasLocalDefinition"]) {
            // show <label> <ontologyId> where <label> links to the term in this ontology and <ontologyId> links to the term in the defining ontology
            return (
                <>
                    <button className="clickable" onClick={() => {if(onNavigates.onNavigateToEntity) onNavigates.onNavigateToEntity(localOntology, linkedEntityType, {iri, label})}}>{label}</button>
                    {
                        showBadges ?
                            <>
                                &nbsp;
                                <button className="no-decoration" onClick={() => {if(onNavigates.onNavigateToOntology) onNavigates.onNavigateToOntology(otherDefinedBy[0], linkedEntityType, {iri, label})}}>{<span className="ontology-badge">{otherDefinedBy[0].toUpperCase()}</span>}</button>
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
                    <button className="clickable" onClick={() => {if(onNavigates.onNavigateToEntity) onNavigates.onNavigateToEntity(otherDefinedBy[0], linkedEntityType, {iri, label})}}>{label}</button>
                    {
                        showBadges ?
                            <>
                                &nbsp;
                                <button className="no-decoration" onClick={() => {if(onNavigates.onNavigateToOntology) onNavigates.onNavigateToOntology(otherDefinedBy[0], linkedEntityType, {iri, label})}}>{<span className="ontology-badge">{otherDefinedBy[0].toUpperCase()}</span>}</button>
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
                    <button className="clickable" onClick={() => {if(onNavigates.onNavigateToEntity) onNavigates.onNavigateToEntity(localOntology, linkedEntityType, {iri, label})}}>{label}</button>
                    {
                        showBadges ?
                        <>
                            &nbsp;
                            {otherDefinedBy.map((elem: any) => {
                                return (
                                    <button className="no-decoration" key={randomString()} onClick={() => {if(onNavigates.onNavigateToOntology) onNavigates.onNavigateToOntology(elem, linkedEntityType, {iri, label})}}>{<span className="ontology-badge">{elem.toUpperCase()}</span>}</button>
                                );
                            })}
                        </> :
                        <></>
                    }
                </>
            )
        }
        else {
            // show <label><ICON> where <label> links to the terms' iri and <ICON> links to disambiguation page
            return (
                <>
                    <a className="clickable" href={iri}>{label}</a>
                    {
                        showBadges ?
                        <>
                            &nbsp;
                            <button className="no-decoration" key={randomString()} onClick={() => {if(onNavigates.onNavigateToDisambiguate) onNavigates.onNavigateToDisambiguate(linkedEntityType, {iri, label})}}>
                                <span className="ontology-badge">
                                    <EuiIcon type={"search"} size={"s"}/>
                                    &nbsp;
                                    {otherDefinedBy.length}
                                    &nbsp;
                                    {"ontologies"}
                                </span>
                            </button>
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
                    <button className="clickable" onClick={() => {if(onNavigates.onNavigateToEntity) onNavigates.onNavigateToEntity(localOntology, linkedEntityType, {iri, label})}}>{label}</button>
                </>
            )
        }
        else {
            if(parseInt(linkedEntity["numAppearsIn"]) > 0) {
                // show <label><ICON> where <label> links to the terms' iri and <ICON> links to disambiguation page
                return (
                    <>
                        <a className="clickable" href={iri}>{label}</a>
                        {
                            showBadges ?
                                <>
                                    &nbsp;
                                    <button className="no-decoration" key={randomString()} onClick={() => {if(onNavigates.onNavigateToDisambiguate) onNavigates.onNavigateToDisambiguate(linkedEntityType, {iri, label})}}>
                                        <span className="ontology-badge">
                                            <EuiIcon type={"search"} size={"s"}/>
                                            &nbsp;
                                            {linkedEntity["numAppearsIn"]}
                                            &nbsp;
                                            {parseInt(linkedEntity["numAppearsIn"]) > 1
                                                ? "ontologies"
                                                : "ontology"}
                                        </span>
                                    </button>
                                </> :
                                <></>
                        }
                    </>
                )
            }
            else {
                // show raw iri
                return (
                    <>
                        <a className="clickable" href={linkedEntity["url"] || iri}>{label}</a>
                    </>
                )
            }
        }
    }
}

/**
 * ONLY USABLE WITH V2-API ENTITIES
 *
 * Builds and returns one element of a sections' list, possibly in a recursive fashion by parsing the response object at the currentResponsePath to show Manchester syntax.
 * @param parentEntity the entity object possessing the whole response object
 * @param linkedEntities the linkedEntities object (exists as param because it is necessary that the entity has a linkedEntities block in properties)
 * @param currentResponsePath the current sub-object of the parentEntities response object parsed as class expression
 * @param showBadges boolean which indicates if badges should be shown
 * @param onNavigates functions defining the action when clicking clickable items
 * @param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
 * @param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
 * @param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
 * @returns ReactElement the class expression JSX
 */
export function getClassExpressionJSX(parentEntity: Thing, linkedEntities: LinkedEntities, currentResponsePath: any, showBadges: boolean = DEFAULT_SHOW_BADGES, /*TODO: change to using (entity : EntityData) later*/ onNavigates: OnNavigates): ReactElement {
    let result = <></>;

    // merge linkedEntities of currentResponsePath if currentResponsePath.linkedEntities is not undefined
    linkedEntities = linkedEntities.mergeWith(currentResponsePath.linkedEntities);

    if (typeof currentResponsePath === "string") {
        result = getEntityLinkJSX(parentEntity, linkedEntities, currentResponsePath, showBadges, onNavigates);
    }
    else if (typeof currentResponsePath === "object" && !Array.isArray(currentResponsePath) && Array.isArray(currentResponsePath["type"]) && currentResponsePath["type"].indexOf("reification") !== -1) { // TODO: Concat with else part? See relatedFrom (Manchester syntax does not get displayed, but neither in ols4)
        // current response path is reification
        result = getReifiedJSX(parentEntity, Reified.fromJson<any>(currentResponsePath)[0], showBadges, onNavigates);
    }
    else { // type === "object"
        const someValuesFrom = currentResponsePath["http://www.w3.org/2002/07/owl#someValuesFrom"];
        const allValuesFrom = currentResponsePath["http://www.w3.org/2002/07/owl#allValuesFrom"];
        const intersectionOf = asArray(currentResponsePath["http://www.w3.org/2002/07/owl#intersectionOf"]);
        const unionOf = asArray(currentResponsePath["http://www.w3.org/2002/07/owl#unionOf"]);
        const hasValue = currentResponsePath["http://www.w3.org/2002/07/owl#hasValue"];
        const minCardinality = currentResponsePath["http://www.w3.org/2002/07/owl#minCardinality"] || currentResponsePath["http://www.w3.org/2002/07/owl#minQualifiedCardinality"];
        const maxCardinality = currentResponsePath["http://www.w3.org/2002/07/owl#maxCardinality"] || currentResponsePath["http://www.w3.org/2002/07/owl#maxQualifiedCardinality"];
        const cardinality = currentResponsePath["http://www.w3.org/2002/07/owl#cardinality"] || currentResponsePath["http://www.w3.org/2002/07/owl#qualifiedCardinality"];
        const hasSelf = currentResponsePath["http://www.w3.org/2002/07/owl#hasSelf"];
        const complementOf = currentResponsePath["http://www.w3.org/2002/07/owl#complementOf"];
        const oneOf = asArray(currentResponsePath["http://www.w3.org/2002/07/owl#oneOf"]);
        const inverseOf = currentResponsePath["http://www.w3.org/2002/07/owl#inverseOf"];
        const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
        const onDataType = currentResponsePath["http://www.w3.org/2002/07/owl#onDatatype"];

        if(onDataType) {
            const elements: ReactElement[] = [
                getClassExpressionJSX(parentEntity, linkedEntities, onDataType, showBadges, onNavigates)
            ];

            const withRestrictions = asArray(currentResponsePath["http://www.w3.org/2002/07/owl#withRestrictions"]);
            if(withRestrictions.length > 0) {
                elements.push(<>[</>);

                let isFirst = true;
                for(const restriction of withRestrictions) {
                    if(isFirst) isFirst = false;
                    else elements.push(<>,&nbsp;</>);

                    const minExclusive = restriction["http://www.w3.org/2001/XMLSchema#minExclusive"];
                    const minInclusive = restriction["http://www.w3.org/2001/XMLSchema#minInclusive"];
                    const maxExclusive = restriction["http://www.w3.org/2001/XMLSchema#maxExclusive"];
                    const maxInclusive = restriction["http://www.w3.org/2001/XMLSchema#maxInclusive"];

                    if(minExclusive) elements.push(<>&gt; {minExclusive}</>);
                    else if(minInclusive) elements.push(<>&ge; {minInclusive}</>);
                    else if(maxExclusive) elements.push(<>&lt; {maxExclusive}</>);
                    else if(maxInclusive) elements.push(<>&le; {maxInclusive}</>);
                }

                elements.push(<>]</>);
            }

            result = <>{elements.map((elem) => <span key={randomString()}>{elem}</span>)}</>
        }
        else if (someValuesFrom) {
            result = (
                <>
                    {getClassExpressionJSX(parentEntity, linkedEntities, onProperty, showBadges, onNavigates)}
                    <i style={{color: "purple"}}> some </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(someValuesFrom)[0], showBadges, onNavigates)}
                </>
            );
        }
        else if (allValuesFrom) {
            result = (
                <>
                    {getClassExpressionJSX(parentEntity, linkedEntities, onProperty, showBadges, onNavigates)}
                    <i style={{color: "purple"}}> only </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(allValuesFrom)[0], showBadges, onNavigates)}
                </>
            );
        }
        else if (intersectionOf.length > 0) {
            const elements: ReactElement[] = [
                <span key={randomString()} className="text-neutral-default">
                    &#40;
                </span>
            ];
            for (const elem of intersectionOf) {
                if (elements.length > 1) {
                    elements.push(
                        <i> and </i>
                    );
                }
                elements.push(
                    getClassExpressionJSX(parentEntity, linkedEntities, elem, showBadges, onNavigates)
                );
            }
            elements.push(
                <span className="text-neutral-default">
                    &#41;
                </span>
            );
            result = (
                <span>{elements.map((elem) => <span key={randomString()}>{elem}</span>)}</span>
            );
        }
        else if (unionOf.length > 0) {
            const elements: ReactElement[] = [
                <span key={randomString()} className="text-neutral-default">
                    &#40;
                </span>
            ];
            for (const elem of unionOf) {
                if (elements.length > 1) {
                    elements.push(
                        <i> or </i>
                    );
                }
                elements.push(
                    getClassExpressionJSX(parentEntity, linkedEntities, elem, showBadges, onNavigates)
                );
            }
            elements.push(
                <span className="text-neutral-default">
                    &#41;
                </span>
            );
            result = (
                <span>{elements.map((elem) => <span key={randomString()}>{elem}</span>)}</span>
            );
        }
        else if (hasValue) {
            result = (
                <>
                    {getClassExpressionJSX(parentEntity, linkedEntities, onProperty, showBadges, onNavigates)}
                    <i style={{color: "purple"}}> value </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(hasValue)[0], showBadges, onNavigates)}
                </>
            );
        }
        else if (minCardinality) {
            result = (
                <>
                    {getClassExpressionJSX(parentEntity, linkedEntities, onProperty, showBadges, onNavigates)}
                    <i style={{color: "purple"}}> min </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(minCardinality)[0], showBadges, onNavigates)}
                </>
            );
        }
        else if (maxCardinality) {
            result = (
                <>
                    {getClassExpressionJSX(parentEntity, linkedEntities, onProperty, showBadges, onNavigates)}
                    <i style={{color: "purple"}}> max </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(maxCardinality)[0], showBadges, onNavigates)}
                </>
            );
        }
        else if (cardinality) {
            result = (
                <>
                    {getClassExpressionJSX(parentEntity, linkedEntities, onProperty, showBadges, onNavigates)}
                    <i style={{color: "purple"}}> exactly </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(cardinality)[0], showBadges, onNavigates)}
                </>
            );
        }
        else if (hasSelf) {
            result = (
                <>
                    {getClassExpressionJSX(parentEntity, linkedEntities, onProperty, showBadges, onNavigates)}
                    <i style={{color: "purple"}}> Self </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(hasSelf)[0], showBadges, onNavigates)}
                </>
            );
        }
        else if (complementOf) {
            result = (
                <>
                    <i>not </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(complementOf)[0], showBadges, onNavigates)}
                </>
            );
        }
        else if (oneOf.length > 0) {
            const elements: ReactElement[] = [
                <span key={randomString()} className="text-neutral-default">
                    &#123;
                </span>
            ];
            for (const elem of oneOf) {
                if (elements.length > 1) {
                    elements.push(
                        <span key={randomString()} className="text-neutral-default">
                          &#44;&nbsp;
                        </span>
                    );
                }
                elements.push(
                    getClassExpressionJSX(parentEntity, linkedEntities, elem, showBadges, onNavigates)
                );
            }
            elements.push(
                <span className="text-neutral-default">
                    &#125;
                </span>
            );
            result = (
                <span>{elements.map((elem) => <span key={randomString()}>{elem}</span>)}</span>
            );
        }
        else if (inverseOf) {
            result = (
                <>
                    <i style={{color: "purple"}}>inverse </i>
                    <span key={randomString()} className="text-neutral-default">
                      &#40;
                    </span>
                    {getClassExpressionJSX(parentEntity, linkedEntities, inverseOf, showBadges, onNavigates)}
                    <span key={randomString()} className="text-neutral-default">
                      &#41;
                    </span>
                </>
            );
        }
    }

    return result;
}

/**
 * Builds and returns an array of section list elements specified at `currentResponsePath`
 * @param parentEntity
 * @param linkedEntities
 * @param array
 * @param showBadges
 * @param onNavigates functions defining the action when clicking clickable items
 * @param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
 * @param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
 * @param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
 */
export function getSectionListJSX(parentEntity: Thing, linkedEntities: LinkedEntities, array: any[], showBadges: boolean = DEFAULT_SHOW_BADGES, /*TODO: change to using (entity : EntityData) later*/ onNavigates: OnNavigates): ReactElement {
    return (
        <>
            {array.length === 1 ? (
                <p>{getClassExpressionJSX(parentEntity, parentEntity.getLinkedEntities(), array[0], showBadges, onNavigates)}</p>
            ) :
            <ul>
                {
                    array.map((item: any) => {
                        return (<li key={randomString()} >{getClassExpressionJSX(parentEntity, parentEntity.getLinkedEntities(), item, showBadges, onNavigates)}</li>);
                    })
                }
            </ul>}
        </>
    );
}

/**
 * Inserts links into text (potentially with label instead of link displayed if link exists as key inside linkedEntities) and returns the resulting JSX element
 * @param parentEntity the entity object possessing the whole response object
 * @param text the text to insert links into
 * @param linkedEntities the linkedEntities object (if undefined, no labels are inferred)
 * @param showBadges boolean which indicates if badges should be shown
 * @param onNavigates functions defining the action when clicking clickable items
 * @param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
 * @param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
 * @param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
 */
function addLinksToText(parentEntity: Thing, text: string, linkedEntities: LinkedEntities | undefined, showBadges: boolean = DEFAULT_SHOW_BADGES, /*TODO: change to using (entity : EntityData) later*/ onNavigates: OnNavigates) {
    const linksToSplice: Array<{ start: number; end: number; link: ReactElement }> =
        [];

    if(linkedEntities) {
        for (const entityId of Object.keys(linkedEntities.linkedEntities)) {
            for (
                let n = text.indexOf(entityId, 0);
                n !== -1;
                n = text.indexOf(entityId, n)
            ) {
                linksToSplice.push({
                    start: n,
                    end: n + entityId.length,
                    link: getEntityLinkJSX(parentEntity, linkedEntities, entityId, showBadges, onNavigates),
                });

                n += entityId.length;
            }
        }
    }

    const urlRe = /[A-z]+:\/\/[^\s]+/g;
    for (let match = urlRe.exec(text); match; match = urlRe.exec(text)) {
        const url = match[0];
        // console.log("found match " + url);

        linksToSplice.push({
            start: match.index,
            end: match.index + url.length,
            link: (
                <span key={randomString()}>
                    <a className="clickable" href={url}>{url}</a>
                </span>
            ),
        });
    }

    linksToSplice.sort((a,b) => a.start - b.start);

    removeOverlapping: for (let n = 0; n < linksToSplice.length; ) {
        for (let n2 = n + 1; n2 < linksToSplice.length; ++n2) {
            const spliceA = linksToSplice[n];
            const spliceB = linksToSplice[n2];

            if (spliceA === spliceB) continue;

            // The splices overlap if neither ends before the other starts
            if (spliceA.end >= spliceB.start && spliceB.end >= spliceA.start) {
                // console.log("Removing overlapping");

                // remove the shorter link of both
                if(spliceA.end - spliceA.start < spliceB.end - spliceB.start) {
                    linksToSplice.splice(n, 1);
                }
                else {
                    linksToSplice.splice(n2, 1);
                }
                continue removeOverlapping;
            }
        }
        ++n;
    }

    if (linksToSplice.length === 0) return <>{text}</>;

    const res: ReactElement[] = [];
    let n = 0;

    for (const link of linksToSplice) {
        res.push(
            <span key={randomString()}>
                {text.substring(n, link.start)}
            </span>
        );
        res.push(link.link);
        n = link.end;
    }
    res.push(
        <span key={randomString()}>{text.slice(n)}</span>
    );

    return <>{res}</>;
}


/**
 * Renders a given Reified
 * @param entity the entity the Reified exists in
 * @param reified the Reified
 * @param showBadges boolean which indicates if badges should be shown
 * @param onNavigates functions defining the action when clicking clickable items
 * @param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
 * @param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
 * @param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
 */
export function getReifiedJSX(entity: Thing, reified: Reified<any>, showBadges: boolean = DEFAULT_SHOW_BADGES, /*TODO: change to using (entity : EntityData) later*/ onNavigates: OnNavigates): ReactElement {
    function getValueJSX(value: Reified<any>): ReactElement {
        const linkedEntities = entity.getLinkedEntities();

        // linkedEntities not existent on entity (-> probably legacy api version)
        if(Object.keys(linkedEntities.linkedEntities).length == 0) {
            if(typeof value.value == "string") {
                return addLinksToText(entity, value.value.toString(), undefined, showBadges, onNavigates);
            }
            else {
                // TODO: should not happen, prove that this is never the case
                return <>{JSON.stringify(value.value)}</>;
            }
        }
        else {
            const linkedEntity = linkedEntities.get(value.value);

            if (linkedEntity) {
                return getEntityLinkJSX(entity, linkedEntities, value.value, showBadges, onNavigates);
            }
            else {
                if (typeof value.value !== "string") {
                    if(entity.getType() == "ontology") {
                        return <>{JSON.stringify(value.value)}</>;
                    }
                    else {
                        return getClassExpressionJSX(entity, linkedEntities, value.value, showBadges, onNavigates);
                    }
                }
                else {
                    return addLinksToText(entity, value.value.toString(), linkedEntities, showBadges, onNavigates);
                }
            }
        }
    }

    return (
        <>
            {getValueJSX(reified)}
            &nbsp;
            {reified.hasMetadata() && getAxiomsInformationJSX(entity, reified.getMetadata())}
        </>
    );
}