import Thing from "./interfaces/Thing";
import React from "react";
import {EuiBadge, EuiIconTip} from "@elastic/eui";
import {asArray, getFrontEndApi, getTermInOntologySuffix, randomString} from "../app/util";
import LinkedEntities from "./LinkedEntities";
import Reified from "./Reified";

export function getTooltip(text: string) : JSX.Element {
    return (
        <EuiIconTip type={"iInCircle"}
                    color={"subdued"}
                    content={text}>
        </EuiIconTip>
    );
}

/**
 * ONLY USABLE WITH V2-API ENTITIES
 *
 * Returns Reified axioms as JSX element (similar to MetadataTooltip component in ols4 project)
 * @param parentEntity the surrounding entity of the axioms array (for eventual label fetching)
 * @param axiomsDict the entities axioms in the format returned by Reified::getMetadata()
 * @returns JSX.Element the axioms in JSX format to display
 */
export function getAxiomsInformationJSX(parentEntity: Thing, axiomsDict: any | null) : JSX.Element {
    let axiomsText = Object.keys(axiomsDict)
        .map((key) => {
            let label = parentEntity.getLinkedEntities().getLabelForIri(key) || key;
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
 * @param api   the api used to extract the frontend api to link to linked entity
 * @param showBadges    boolean which indicates if badges should be shown
 * @returns JSX.Element the entity link JSX
 */
export function getEntityLinkJSX(parentEntity: Thing, linkedEntities: LinkedEntities, iri: string, api: string, showBadges : boolean = true): JSX.Element {
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
            // So far only known occurrence of this branch is for owl#Thing
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

/**
 * ONLY USABLE WITH V2-API ENTITIES
 *
 * Builds and returns one element of a sections' list, possibly in a recursive fashion by parsing the response object at the currentResponsePath to show Manchester syntax.
 * @returns {JSX.Element} the list element
 * @param parentEntity the entity object possessing the whole response object
 * @param linkedEntities the linkedEntities object (exists as param because it is necessary that the entity has a linkedEntities block in properties)
 * @param currentResponsePath the current sub-object of the parentEntities response object parsed as class expression
 * @param api the api used to extract the frontend api to link to linked entity (necessary for call to getEntityLinkJSX())
 * @param showBadges boolean which indicates if badges should be shown
 * @returns JSX.Element the class expression JSX
 */
export function getClassExpressionJSX(parentEntity: Thing, linkedEntities: LinkedEntities, currentResponsePath: any, api: string, showBadges: boolean): JSX.Element {
    let result = <></>;

    // merge linkedEntities of currentResponsePath if currentResponsePath.linkedEntities is not undefined
    linkedEntities = linkedEntities.mergeWith(currentResponsePath.linkedEntities);

    if (typeof currentResponsePath === "string") {
        result = getEntityLinkJSX(parentEntity, linkedEntities, currentResponsePath, api, showBadges);
    }
    else if (typeof currentResponsePath === "object" && !Array.isArray(currentResponsePath) && Array.isArray(currentResponsePath["type"]) && currentResponsePath["type"].indexOf("reification") !== -1) { // TODO: Concat with else part? See relatedFrom (Manchester syntax does not get displayed, but neither in ols4)
        // current response path is reification
        result = getReifiedJSX(parentEntity, Reified.fromJson<any>(currentResponsePath)[0], api, showBadges);
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
            const elements: JSX.Element[] = [
                getClassExpressionJSX(parentEntity, linkedEntities, onDataType, api, showBadges)
            ];

            const withRestrictions = asArray(currentResponsePath["http://www.w3.org/2002/07/owl#withRestrictions"]);
            if(withRestrictions.length > 0) {
                elements.push(<>[</>);

                let isFirst = true;
                for(let restriction of withRestrictions) {
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

            result = <span children={elements}></span>
        }
        else if (someValuesFrom) {
            result = (
                <>
                    {getClassExpressionJSX(parentEntity, linkedEntities, onProperty, api, showBadges)}
                    <i style={{color: "purple"}}> some </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(someValuesFrom)[0], api, showBadges)}
                </>
            );
        }
        else if (allValuesFrom) {
            result = (
                <>
                    {getClassExpressionJSX(parentEntity, linkedEntities, onProperty, api, showBadges)}
                    <i style={{color: "purple"}}> only </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(allValuesFrom)[0], api, showBadges)}
                </>
            );
        }
        else if (intersectionOf.length > 0) {
            const elements: JSX.Element[] = [
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
                    getClassExpressionJSX(parentEntity, linkedEntities, elem, api, showBadges)
                );
            }
            elements.push(
                <span className="text-neutral-default">
                    &#41;
                </span>
            );
            result = (
                <span>{elements}</span>
            );
        }
        else if (unionOf) {
            const elements: JSX.Element[] = [
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
                    getClassExpressionJSX(parentEntity, linkedEntities, elem, api, showBadges)
                );
            }
            elements.push(
                <span className="text-neutral-default">
                    &#41;
                </span>
            );
            result = (
                <span>{elements}</span>
            );
        }
        else if (hasValue) {
            result = (
                <>
                    {getClassExpressionJSX(parentEntity, linkedEntities, onProperty, api, showBadges)}
                    <i style={{color: "purple"}}> value </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(hasValue)[0], api, showBadges)}
                </>
            );
        }
        else if (minCardinality) {
            result = (
                <>
                    {getClassExpressionJSX(parentEntity, linkedEntities, onProperty, api, showBadges)}
                    <i style={{color: "purple"}}> min </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(minCardinality)[0], api, showBadges)}
                </>
            );
        }
        else if (maxCardinality) {
            result = (
                <>
                    {getClassExpressionJSX(parentEntity, linkedEntities, onProperty, api, showBadges)}
                    <i style={{color: "purple"}}> max </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(maxCardinality)[0], api, showBadges)}
                </>
            );
        }
        else if (cardinality) {
            result = (
                <>
                    {getClassExpressionJSX(parentEntity, linkedEntities, onProperty, api, showBadges)}
                    <i style={{color: "purple"}}> exactly </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(cardinality)[0], api, showBadges)}
                </>
            );
        }
        else if (hasSelf) {
            result = (
                <>
                    {getClassExpressionJSX(parentEntity, linkedEntities, onProperty, api, showBadges)}
                    <i style={{color: "purple"}}> Self </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(hasSelf)[0], api, showBadges)}
                </>
            );
        }
        else if (complementOf) {
            result = (
                <>
                    <i>not </i>
                    {getClassExpressionJSX(parentEntity, linkedEntities, asArray(complementOf)[0], api, showBadges)}
                </>
            );
        }
        else if (oneOf.length > 0) {
            const elements: JSX.Element[] = [
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
                    getClassExpressionJSX(parentEntity, linkedEntities, elem, api, showBadges)
                );
            }
            elements.push(
                <span className="text-neutral-default">
                    &#125;
                </span>
            );
            result = (
                <span>{elements}</span>
            );
        }
        else if (inverseOf) {
            result = (
                <>
                    <i style={{color: "purple"}}>inverse </i>
                    <span key={randomString()} className="text-neutral-default">
                      &#40;
                    </span>
                    {getClassExpressionJSX(parentEntity, linkedEntities, inverseOf, api, showBadges)}
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
 * Inserts links into text (potentially with label instead of link displayed if link exists as key inside linkedEntities) and returns the resulting JSX element
 * @param parentEntity the entity object possessing the whole response object
 * @param text the text to insert links into
 * @param linkedEntities the linkedEntities object (if undefined, no labels are inferred)
 * @param api the api used to extract the frontend api to link to linked entity (necessary for call to getEntityLinkJSX())
 * @param showBadges boolean which indicates if badges should be shown
 */
function addLinksToText(parentEntity: Thing, text: string, linkedEntities: LinkedEntities | undefined, api: string, showBadges: boolean) {
    let linksToSplice: Array<{ start: number; end: number; link: JSX.Element }> =
        [];

    if(linkedEntities) {
        for (let entityId of Object.keys(linkedEntities.linkedEntities)) {
            for (
                let n = text.indexOf(entityId, 0);
                n !== -1;
                n = text.indexOf(entityId, n)
            ) {
                linksToSplice.push({
                    start: n,
                    end: n + entityId.length,
                    link: getEntityLinkJSX(parentEntity, linkedEntities, entityId, api, showBadges),
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
                    <a href={url}>{url}</a>
                </span>
            ),
        });
    }

    linksToSplice.sort((a,b) => a.start - b.start);

    removeOverlapping: for (let n = 0; n < linksToSplice.length; ) {
        for (let n2 = n + 1; n2 < linksToSplice.length; ++n2) {
            let spliceA = linksToSplice[n];
            let spliceB = linksToSplice[n2];

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

    let res: JSX.Element[] = [];
    let n = 0;

    for (let link of linksToSplice) {
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
 * @param api the api used to extract the frontend api to link to linked entities
 * @param showBadges boolean which indicates if badges should be shown
 */
export function getReifiedJSX(entity: Thing, reified: Reified<any>, api: string, showBadges: boolean = true): JSX.Element {
    function getValueJSX(value: Reified<any>): JSX.Element {
        const linkedEntities = entity.getLinkedEntities();

        // linkedEntities not existent on entity (-> probably legacy api version)
        if(Object.keys(linkedEntities.linkedEntities).length == 0) {
            if(typeof value.value == "string") {
                return addLinksToText(entity, value.value.toString(), undefined, api, showBadges);
            }
            else {
                // TODO: should not happen, prove that this is never the case
                return <>{JSON.stringify(value.value)}</>;
            }
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
                        return getClassExpressionJSX(entity, linkedEntities, value.value, api, showBadges);
                    }
                }
                else {
                    return addLinksToText(entity, value.value.toString(), linkedEntities, api, showBadges);
                }
            }
        }
    }

    return (
        <>
            {getValueJSX(reified)}
            {reified.hasMetadata() && getAxiomsInformationJSX(entity, reified.getMetadata())}
        </>
    );
}