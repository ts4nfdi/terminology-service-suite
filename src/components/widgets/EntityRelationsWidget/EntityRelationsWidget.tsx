import React from "react";
import { OlsApi } from "../../../api/OlsApi";
import { useQuery } from "react-query";
import {EuiCard, EuiFlexItem, EuiLoadingSpinner, EuiText, EuiIconTip, EuiBadge} from "@elastic/eui";

export interface EntityRelationsWidgetProps {
    api: string;
    iri: string;
    ontologyId?: string;
    hasTitle?: boolean;
    entityType:
        | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
        | "individual"
        | "property";
    parameter?: string;
    showBadges?: boolean;
}

const DEFAULT_HAS_TITLE = true;
const DEFAULT_SHOW_BADGES = true;

/**
 * Returns {@link type}. If {@link type} equals 'term', 'class' gets returned instead.
 */
function getEntityTypeName(type: string) : string {
    return type === "term" ? "class" : type;
}

/**
 * Returns "/ontologies/{ontologyId}/{entityType}?iri={termIri}", which can be concatenated with frontendApi to get full link
 * @param ontologyId the entities' ontologyId
 * @param termIri the entities' iri
 * @param entityTypeArray the entities' type array (from api JSON linkedEntities)
 */
function getTermInOntologySuffix(ontologyId: string, termIri: string, entityTypeArray: string[]) : string {
    return "/ontologies/" + ontologyId + "/" + pluralizeType(entityTypeArray) + "?iri=" + termIri;
}

/**
 * Returns trimmed api (omits /api/v2 at the end)
 * @param api
 */
function getFrontEndApi(api: string) : string {
    return api.replace("/api/", "").replace("/api", "");
}

/**
 * Capitalizes {@link text}.
 */
function getCapitalized(text: string) : string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Fetches an iri's label inside the response object and returns the label or undefined if not found.
 * @param response  an entities' data JSON as JS-object
 * @param iri   an entities' iri
 * @returns {string | undefined} the label or undefined if not found
 */
function getLabel(response: any, iri: string) : string | undefined {
    if(response["linkedEntities"][iri]) {
        return asArray(response["linkedEntities"][iri]["label"])[0];
    }
    else return undefined;
}

/**
 * Returns an array version of the given object.
 * @param obj   the given object
 * @returns {any[]} the array
 */
function asArray(obj: any): any[] {
    if (Array.isArray(obj)) return obj;
    else if (obj) return [obj];
    else return [];
}

function pluralizeType(typeArray: string[]) : string | undefined {
    let plural = undefined;
    for(let type of typeArray) {
        plural = {
            "class": "classes",
            "property": "properties",
            "individual": "individuals",
            "term": "classes" // just for convenience reasons
        }[type];

        if (plural !== undefined) return plural;
    }
    return undefined;
}

/**
 * Returns a random string used mainly for component keys.
 */
function randomString() {
    return (Math.random() * Math.pow(2, 54)).toString(36);
}

/**
 * Returns a labeled entity link as JSX element
 * @param response  the entities' data JSON as JS-object
 * @param iri   the entities' iri
 * @param props     the entities' properties
 * @returns {JSX.Element} the entity link
 */
function getEntityLink(response: any, iri: string, props: EntityRelationsWidgetProps): JSX.Element {
    const frontendApi = getFrontEndApi(props.api);
    const label = getLabel(response, iri) || iri.split("/").pop() || iri;
    const linkedEntity = response["linkedEntities"][iri];
    const localOntology = response["ontologyId"];

    // reference to self: just display label because we are already on that page
    if (iri === response["iri"]) {
        return <b>{response["label"]}</b>
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

    let otherDefinedBy = linkedEntity["definedBy"] ? linkedEntity["definedBy"].filter((elem: any) => {return elem !== response["ontologyId"]}) : [];
    const linkedEntityType = linkedEntity["type"]; // TODO: does type key always exist in linkedEntity relevant for relationsWidget?

    // see https://gitlab.zbmed.de/km/semlookp/ols4/-/blob/dev/frontend/src/components/EntityLink.tsx for original reference
    if(otherDefinedBy.length === 1) {
        if(linkedEntity["hasLocalDefinition"]) {
            // show <label> <ontologyId> where <label> links to the term in this ontology and <ontologyId> links to the term in the defining ontology
            return (
                <>
                    <a href={frontendApi + getTermInOntologySuffix(localOntology, iri, linkedEntityType)}>{label}</a>
                    {
                        props.showBadges ?
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
                        props.showBadges ?
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
                        props.showBadges ?
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
                        props.showBadges ?
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
 * Builds and returns one element of a sections' list, possibly in a recursive fashion by parsing the response object at the currentResponsePath to show Manchester syntax.
 * @param response  the entities' data JSON as JS-object
 * @param currentResponsePath   the currently parsed subpart of the response object
 * @param props     the entities' properties
 * @returns {JSX.Element} the list element
 */
function getSectionListElement(response: any, currentResponsePath: any, props: EntityRelationsWidgetProps): JSX.Element {
    let result = <></>;

    if (typeof currentResponsePath === "string") {
        result = getEntityLink(response, currentResponsePath, props);
    }
    else if (typeof currentResponsePath === "object" && currentResponsePath["value"]) { // TODO: Concat with else part? See relatedFrom (Manchester syntax does not get displayed, but neither in ols4)
        result = getSectionListElement(response, currentResponsePath["value"], props);
    }
    else { // type === "object"
        const someValuesFrom = currentResponsePath["http://www.w3.org/2002/07/owl#someValuesFrom"];
        const allValuesFrom = currentResponsePath["http://www.w3.org/2002/07/owl#allValuesFrom"];
        const intersectionOf = currentResponsePath["http://www.w3.org/2002/07/owl#intersectionOf"];
        const unionOf = currentResponsePath["http://www.w3.org/2002/07/owl#unionOf"];
        const hasValue = currentResponsePath["http://www.w3.org/2002/07/owl#hasValue"];
        const minCardinality = currentResponsePath["http://www.w3.org/2002/07/owl#minCardinality"] || currentResponsePath["http://www.w3.org/2002/07/owl#minQualifiedCardinality"];
        const maxCardinality = currentResponsePath["http://www.w3.org/2002/07/owl#maxCardinality"] || currentResponsePath["http://www.w3.org/2002/07/owl#maxQualifiedCardinality"];
        const cardinality = currentResponsePath["http://www.w3.org/2002/07/owl#cardinality"] || currentResponsePath["http://www.w3.org/2002/07/owl#qualifiedCardinality"];
        const hasSelf = currentResponsePath["http://www.w3.org/2002/07/owl#hasSelf"];
        const complementOf = currentResponsePath["http://www.w3.org/2002/07/owl#complementOf"];
        const oneOf = currentResponsePath["http://www.w3.org/2002/07/owl#oneOf"];
        const inverseOf = currentResponsePath["http://www.w3.org/2002/07/owl#inverseOf"];
        // not relevant for relations widget, only for information widget
        // const onDataType = currentResponsePath["http://www.w3.org/2002/07/owl#onDatatype"];

        if (someValuesFrom) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            result = (
              <>
                  {getSectionListElement(response, onProperty, props)}
                  <i style={{color: "purple"}}> some </i>
                  {getSectionListElement(response, asArray(someValuesFrom)[0], props)}
              </>
            );
        }
        else if (allValuesFrom) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            result = (
                <>
                    {getSectionListElement(response, onProperty, props)}
                    <i style={{color: "purple"}}> only </i>
                    {getSectionListElement(response, asArray(allValuesFrom)[0], props)}
                </>
            );
        }
        else if (intersectionOf) {
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
                    getSectionListElement(response, elem, props)
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
                    getSectionListElement(response, elem, props)
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
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            result = (
                <>
                    {getSectionListElement(response, onProperty, props)}
                    <i style={{color: "purple"}}> value </i>
                    {getSectionListElement(response, asArray(hasValue)[0], props)}
                </>
            );
        }
        else if (minCardinality) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            result = (
                <>
                    {getSectionListElement(response, onProperty, props)}
                    <i style={{color: "purple"}}> min </i>
                    {getSectionListElement(response, asArray(minCardinality)[0], props)}
                </>
            );
        }
        else if (maxCardinality) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            result = (
                <>
                    {getSectionListElement(response, onProperty, props)}
                    <i style={{color: "purple"}}> max </i>
                    {getSectionListElement(response, asArray(maxCardinality)[0], props)}
                </>
            );
        }
        else if (cardinality) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            result = (
                <>
                    {getSectionListElement(response, onProperty, props)}
                    <i style={{color: "purple"}}> exactly </i>
                    {getSectionListElement(response, asArray(cardinality)[0], props)}
                </>
            );
        }
        else if (hasSelf) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            result = (
                <>
                    {getSectionListElement(response, onProperty, props)}
                    <i style={{color: "purple"}}> Self </i>
                    {getSectionListElement(response, asArray(hasSelf)[0], props)}
                </>
            );
        }
        else if (complementOf) {
            result = (
                <>
                    <i>not </i>
                    {getSectionListElement(response, hasSelf, props)}
                </>
            );
        }
        else if (oneOf) {
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
                    getSectionListElement(response, elem, props)
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
                    {getSectionListElement(response, inverseOf, props)}
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
 * Builds and returns the axioms section of a section list element as EuiIconTip
 * @param response  the entities' data JSON as JS-object
 * @param currentResponsePath   the sub-element of response of the current section list element
 */
function getAxiomsJSX(response: any, currentResponsePath: any): JSX.Element {
    if(currentResponsePath["axioms"]) {
        let axioms: any = {}

        for(const elem of currentResponsePath["axioms"]) {
            for(const key of Object.keys(elem)){
                const value = elem[key];
                let exists = axioms[key] !== undefined;
                if(exists) {
                    axioms[key].push(value);
                } else {
                    axioms[key] = asArray(value);
                }
            }
        }

        let axiomsText = Object.keys(axioms).map((key) => {
            let label = response["linkedEntities"][key]["label"] || key;
            if (label) {
                return (
                    "*" + axioms[key] + " (" + label + ")"
                );
            }
            else return "";
        }).join("\n")

        return (
            <EuiIconTip type={"iInCircle"}
                        color={"subdued"}
                        content={axiomsText}></EuiIconTip>
        );
    }
    return <></>;
}

/**
 * Builds and returns a sections list as JSX element array. Is useful if the whole section inside the response object can be parsed via Manchester syntax as done in {@link getSectionListElement}.
 * @param response  the entities' data JSON as JS-object
 * @param sectionLabel  the label of the current section
 * @param props     the entities' properties
 * @returns {JSX.Element[]} the sections' list
 */
function getSectionListJSX(response: any, sectionLabel: string, props: EntityRelationsWidgetProps): JSX.Element[] {
    return asArray(response[sectionLabel]).map((elem: any) => {
        return (<>
            {getSectionListElement(response, elem, props)}{" "}
            {getAxiomsJSX(response, elem)}
        </>)
    });
}

/**
 * Builds and returns the type section JSX element.
 * @param response  the entities' data JSON as JS-object
 * @param props the entities' properties
 * @returns {JSX.Element} the sections' JSX element
 */
function getIndividualTypesSectionJSX(response: any, props: EntityRelationsWidgetProps): JSX.Element {
    if(props.entityType === "individual" && response["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"] !== undefined) {
        const types = asArray(response["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]).filter((elem: any) => elem !== "http://www.w3.org/2002/07/owl#NamedIndividual" && (!(typeof elem === "string") || !elem.startsWith("http://www.w3.org/2000/01/rdf-schema#")));

        return (<EuiFlexItem>
            {
                types?.length ?? -1 > 0 ? <b>Type</b> : ""
            }
            {types.length === 1 ? (
                    <p>{getSectionListElement(response, types[0], props)}</p>
                ) :
                <ul>
                    {
                        types.map((item: any) => {
                            return (<li key={randomString()} >{getSectionListElement(response, item, props)}</li>);
                        })
                    }
                </ul>}
        </EuiFlexItem>);
    }
    else {
        return <></>;
    }
}

/**
 * Builds and returns the same as section JSX element.
 * @param response  the entities' data JSON as JS-object
 * @param props the entities' properties
 * @returns {JSX.Element} the sections' JSX element
 */
function getIndividualSameAsSectionJSX(response: any, props: EntityRelationsWidgetProps): JSX.Element {
    if(props.entityType === "individual" && response["http://www.w3.org/2002/07/owl#sameAs"] !== undefined) {
        const sameAs = getSectionListJSX(response, "http://www.w3.org/2002/07/owl#sameAs", props);

        return (<EuiFlexItem>
            {
                sameAs?.length ?? -1 > 0 ? <b>Same As</b> : ""
            }
            {sameAs.length === 1 ? (
                    <p>{sameAs[0]}</p>
                ) :
                <ul>
                    {
                        sameAs.map((item: any) => {
                            return (<li key={randomString()} >{item}</li>);
                        })
                    }
                </ul>}
        </EuiFlexItem>);
    }
    else {
        return <></>;
    }
}

/**
 * Builds and returns the different from section JSX element.
 * @param response  the entities' data JSON as JS-object
 * @param props the entities' properties
 * @returns {JSX.Element} the sections' JSX element
 */
function getIndividualDifferentFromSectionJSX(response: any, props: EntityRelationsWidgetProps): JSX.Element {
    if(props.entityType === "individual" && response["http://www.w3.org/2002/07/owl#differentFrom"] !== undefined) {
        const differentFrom = getSectionListJSX(response, "http://www.w3.org/2002/07/owl#differentFrom", props);

        return (<EuiFlexItem>
            {
                differentFrom?.length ?? -1 > 0 ? <b>Different from</b> : ""
            }
            {differentFrom.length === 1 ? (
                    <p>{differentFrom[0]}</p>
                ) :
                <ul>
                    {
                        differentFrom.map((item) => {
                            return (<li key={randomString()} >{item}</li>);
                        })
                    }
                </ul>}
        </EuiFlexItem>);
    }
    else {
        return <></>;
    }
}

/**
 * Builds and returns the disjoint with section JSX element.
 * @param response  the entities' data JSON as JS-object
 * @param props the entities' properties
 * @returns {JSX.Element} the sections' JSX element
 */
function getDisjointWithSectionJSX(response: any, props: EntityRelationsWidgetProps): JSX.Element {
    if(["property", "class"].includes(getEntityTypeName(props.entityType)) && response["http://www.w3.org/2002/07/owl#disjointWith"] !== undefined) {
        const disjointWiths = getSectionListJSX(response, "http://www.w3.org/2002/07/owl#disjointWith", props);

        return (<EuiFlexItem>
            {
                disjointWiths.length ?? -1 > 0 ? <b>Disjoint with</b> : ""
            }
            {disjointWiths.length === 1 ? (
                    <p>{disjointWiths[0]}</p>
                ):
                <ul>
                    {
                        disjointWiths.map((item) => {
                            return (<li key={randomString()} >{item}</li>);
                        })
                    }
                </ul>}
        </EuiFlexItem>);
    }
    else {
        return <></>;
    }
}

/**
 * Builds and returns the inverse of section JSX element.
 * @param response  the entities' data JSON as JS-object
 * @param props the entities' properties
 * @returns {JSX.Element} the sections' JSX element
 */
function getPropertyInverseOfSectionJSX(response: any, props: EntityRelationsWidgetProps): JSX.Element {
    if(["property"].includes(getEntityTypeName(props.entityType)) && response["http://www.w3.org/2002/07/owl#inverseOf"] !== undefined) {
        const inverseOfs = getSectionListJSX(response, "http://www.w3.org/2002/07/owl#inverseOf", props);

        return (<EuiFlexItem>
            {
                inverseOfs.length ?? -1 > 0 ? <b>Inverse of</b> : ""
            }
            {inverseOfs.length === 1 ? (
                    <p>{inverseOfs[0]}</p>
                ):
                <ul>
                    {
                        inverseOfs.map((item) => {
                            return (<li key={randomString()} >{item}</li>);
                        })
                    }
                </ul>}
        </EuiFlexItem>);
    }
    else {
        return <></>;
    }
}

/**
 * Builds and returns one property chain JSX element. Is used for {@link getPropertyChainSectionJSX}.
 * @param propertyChain the property chain
 * @param response  the entities' data JSON as JS-object
 * @param props     the entities' properties
 * @returns {JSX.Element[]} the chains JSX element
 */
function getPropertyChainJSX(propertyChain: any[], response: any, props: EntityRelationsWidgetProps): JSX.Element[] {
    return asArray(propertyChain).slice().reverse().map((propertyExpr, i) => { // using .slice() here is important because a mutation of propertyChain would trigger a useQuery()
        return (
            <span key={propertyExpr}>
                {getSectionListElement(response, propertyExpr, props)}
                <>
                    {i < asArray(propertyChain).length - 1 && (
                        <span style={{ color: "gray", fontSize: "small"}}>
                          {" "}◂{" "}
                        </span>
                    )}
                </>
            </span>
        );
    });
}

/**
 * Builds and returns the property chains section JSX element.
 * @param response  the entities' data JSON as JS-object
 * @param props the entities' properties
 * @returns {JSX.Element} the sections' JSX element
 */
function getPropertyChainSectionJSX(response: any, props: EntityRelationsWidgetProps): JSX.Element {
    if(["property"].includes(getEntityTypeName(props.entityType)) && response["http://www.w3.org/2002/07/owl#propertyChainAxiom"] !== undefined) {
        const propertyChains = response["http://www.w3.org/2002/07/owl#propertyChainAxiom"];

        const hasMultipleChains = propertyChains.filter((elem: any) => Array.isArray(elem)).length > 0;

        return (<EuiFlexItem>
            {
                propertyChains.length ?? -1 > 0 ? <b>{!hasMultipleChains ? "Property chain" : "Property chains"}</b> : ""
            }
            {!hasMultipleChains ? (
                    <p>{getPropertyChainJSX(propertyChains, response, props)}</p>
                ):
                <ul>
                    {
                        propertyChains.map((item: any) => {
                            return (<li key={randomString()}>{getPropertyChainJSX(item, response, props)}</li>);
                        })
                    }
                </ul>}
        </EuiFlexItem>);
    }
    else {
        return <></>;
    }
}

/**
 * Builds and returns the equivalent to section JSX element.
 * @param response  the entities' data JSON as JS-object
 * @param props the entities' properties
 * @returns {JSX.Element} the sections' JSX element
 */
function getEntityEquivalentToSectionJSX(response: any, props: EntityRelationsWidgetProps): JSX.Element {
    if(["property", "class"].includes(getEntityTypeName(props.entityType)) && response["http://www.w3.org/2002/07/owl#equivalentClass"] !== undefined) {
        const equivalents = getSectionListJSX(response, "http://www.w3.org/2002/07/owl#equivalentClass", props);

        return (<EuiFlexItem>
            {
                equivalents.length ?? -1 > 0 ? <b>Equivalent to</b> : ""
            }
            <ul>
                {equivalents.map((elem) => {
                    return (<li key={randomString()}>{elem}</li>);
                })}
            </ul>
        </EuiFlexItem>);
    }
    else {
        return <></>;
    }
}

/**
 * Builds and returns the subentity of section JSX element.
 * @param response  the entities' data JSON as JS-object
 * @param props the entities' properties
 * @returns {JSX.Element} the sections' JSX element
 */
function getSubentityOfSectionJSX(response: any, props: EntityRelationsWidgetProps): JSX.Element {
    if(["property", "class"].includes(getEntityTypeName(props.entityType)) && response["http://www.w3.org/2000/01/rdf-schema#sub"+getCapitalized(getEntityTypeName(props.entityType))+"Of"] !== undefined) {
        const subEntityOf = getSectionListJSX(response, "http://www.w3.org/2000/01/rdf-schema#sub" + getCapitalized(getEntityTypeName(props.entityType)) + "Of", props);

        return (<EuiFlexItem>
            {
                subEntityOf.length ?? -1 > 0 ? <b>Sub{getEntityTypeName(props.entityType)} of</b> : ""
            }
            {subEntityOf.length === 1 ? (
                <p>{subEntityOf[0]}</p>
            ):
            <ul>
                {
                    subEntityOf.map((item) => {
                        return (<li key={randomString()} >{item}</li>);
                    })
                }
            </ul>}
        </EuiFlexItem>);
    }
    else {
        return <></>;
    }
}

/**
 * Builds and returns the related from section JSX element.
 * @param response  the entities' data JSON as JS-object
 * @param props the entities' properties
 * @returns {JSX.Element} the sections' JSX element
 */
function getEntityRelatedFromSectionJSX(response: any, props: EntityRelationsWidgetProps): JSX.Element {
    if(["property", "class"].includes(getEntityTypeName(props.entityType)) && response["relatedFrom"] !== undefined) {
        const relatedFrom = response["relatedFrom"];

        const predicates: string[] = Array.from(new Set(response["relatedFrom"].map((elem: any) => {return elem["property"]})));

        return (<EuiFlexItem>
            {
                relatedFrom.length ?? -1 > 0 ? <b>Related from</b> : ""
            }
                {
                    predicates.map((p) => {
                        const label = getLabel(response, p);
                        return (
                            <div key={p.toString() + randomString()}>
                                <div>
                                    <a style={{color: "black"}} href={p}><i>{label || p}</i></a>
                                </div>
                                <ul style={{marginBottom: 0}}>
                                    {relatedFrom.filter((elem: any) => {return elem["property"] === p})
                                        .map((elem: object) => {
                                            return(
                                                <li key={randomString()}>{getSectionListElement(response, elem, props)}</li>
                                            )
                                        })}
                                </ul>
                                <p></p> {/* Works as empty space left to next section */}
                            </div>
                        );
                    })
                }
        </EuiFlexItem>);
    }
    else {
        return <></>;
    }
}

/**
 * Builds and returns the class instances section JSX element.
 * @param instances an array of the classes' instances
 * @returns {JSX.Element} the sections' JSX element
 */
function getClassInstancesSectionJSX(instances: any): JSX.Element {
    if(instances.length > 0) {
        return (<EuiFlexItem>
            {
                <b>Instances</b>
            }
            <ul>
                {
                    instances.map((item: any) => {
                        return (<li key={randomString()} ><a href={item["iri"]}>{item["label"]}</a></li>);
                    })
                }
            </ul>
        </EuiFlexItem>);
    }
    else {
        return <></>;
    }
}

/**
 * Fetches a classes instances from the JSON api.
 * @param api   a reference to the api
 * @param props the classes' properties
 */
async function fetchInstances(api: OlsApi, props: EntityRelationsWidgetProps) {
    if(getEntityTypeName(props.entityType) === "class") {
        const doubleEncodedTermIri = encodeURIComponent(encodeURIComponent(props.iri));
        const response = await api.getClassInstances(undefined, undefined, {ontologyId: props.ontologyId, termIri: doubleEncodedTermIri}, props.parameter)
            .catch((error) => console.log(error));
        if (response["elements"] !== undefined) {
            return asArray(response["elements"]);
        }
        else {
            throw Error("Error fetching instances of '" + props.iri + "'");
        }
    }
    else {
        return [];
    }
}

/**
 * Fetches an entities data from the JSON api.
 * @param api   a reference to the api
 * @param props the entities' properties
 */
async function fetchEntityJson(api: OlsApi, props: EntityRelationsWidgetProps) {
    const response = await api.getEntity(undefined, undefined, {ontologyId: props.ontologyId, termIri: props.iri}, props.parameter, false)
        .catch((error) => console.log(error));
    if (response["elements"][0] !== undefined) {
        return response["elements"][0];
    }
    else {
        throw Error("Requested entity '" + props.iri + "' could not be resolved");
    }
}

function EntityRelationsWidget(props: EntityRelationsWidgetProps) {
    const { api, iri, ontologyId, hasTitle = DEFAULT_HAS_TITLE, showBadges = DEFAULT_SHOW_BADGES, entityType, parameter, ...rest } = props;

    const olsApi = new OlsApi(api);

    /**
     * Used to fetch an entities' data to be shown in different sections
     */
    const {
        data: entityJson,
        isLoading: isLoadingEntityRelation,
        isSuccess: isSuccessEntityRelation,
        isError: isErrorEntityRelation,
    } = useQuery(
        [
            "entityJson",
            props.api,
            props.iri,
            props.ontologyId,
            props.entityType,
            props.parameter,
            props.showBadges
        ],
        async () => {
            return fetchEntityJson(olsApi, props);
        },
    );

    /**
     * Used to fetch a classes instances to be shown in class instances section
     */
    const {
        data: instancesJson,
        isLoading: isLoadingInstances,
        isSuccess: isSuccessInstances,
    } = useQuery({
        queryKey: [
            "instancesJson",
            entityJson
        ],
        queryFn: async () => {
            return (getEntityTypeName(props.entityType) === "class" && entityJson["hasDirectChildren"]) ? fetchInstances(olsApi, props) : [];
        },
        enabled: !!entityJson },
    );

    return (
        <>
            <EuiCard
                title={props.hasTitle ? (getCapitalized(getEntityTypeName(props.entityType)) +" Relations") : ""}
                layout="horizontal"
            >
                {(isLoadingEntityRelation || isLoadingInstances) && <EuiLoadingSpinner size={'s'}/>}
                {isErrorEntityRelation && <EuiText>Requested resource not available</EuiText>}
                {(isSuccessEntityRelation && isSuccessInstances) &&
                    <EuiText>
                        {getIndividualTypesSectionJSX(entityJson, props)}
                        {getIndividualSameAsSectionJSX(entityJson, props)}
                        {getIndividualDifferentFromSectionJSX(entityJson, props)}
                        {getDisjointWithSectionJSX(entityJson, props)}
                        {getPropertyInverseOfSectionJSX(entityJson, props)}
                        {getPropertyChainSectionJSX(entityJson, props)}
                        {getEntityEquivalentToSectionJSX(entityJson, props)}
                        {getSubentityOfSectionJSX(entityJson, props)}
                        {getEntityRelatedFromSectionJSX(entityJson, props)}
                        {getClassInstancesSectionJSX(instancesJson)}
                    </EuiText>
                }
            </EuiCard>
        </>
    );
}

export { EntityRelationsWidget };