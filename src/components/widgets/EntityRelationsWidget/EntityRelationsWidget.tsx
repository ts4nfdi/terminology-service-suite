import React from "react";
import { OlsApi } from "../../../api/OlsApi";
import { useQuery } from "react-query";
import {EuiCard, EuiFlexItem, EuiLoadingSpinner, EuiText} from "@elastic/eui";

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
}

const DEFAULT_HAS_TITLE = true;

/**
 * Capitalizes {@link text}.
 */
function getCapitalized(text: string) : string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Returns {@link type}. If {@link type} equals 'term', 'class' gets returned instead.
 */
function getEntityTypeName(type: string) : string {
    return type === "term" ? "class" : type;
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
 * @returns {JSX.Element} the entity link
 */
function getEntityLink(response: any, iri: string): JSX.Element {
    // reference to self; just display label because we are already on that page
    if (iri === response["iri"]) {
        return <b>{response["label"]}</b>
    }

    const label = getLabel(response, iri) || iri.split("/").pop() || iri;
    const linkedEntity = response["linkedEntities"][iri];

    if (!linkedEntity) {
        // So far only known occurrence of this branch is for owl#Thing
        return iri.includes("http") ? (
            <a href={iri}>{label}</a>
        ) : (
            <span>{label}</span>
        );
    }

    return <a href={iri}>{label}</a>;

    // TODO: Badges for defined by etc.
}

/**
 * Builds and returns one element of a sections' list, possibly in a recursive fashion by parsing the response object at the currentResponsePath to show Manchester syntax.
 * @param response  the entities' data JSON as JS-object
 * @param currentResponsePath   the currently parsed subpart of the response object
 * @returns {JSX.Element} the list element
 */
function getSectionListElement(response: any, currentResponsePath: any): JSX.Element {
    if (typeof currentResponsePath === "string") {
        return getEntityLink(response, currentResponsePath);
    }
    else if (typeof currentResponsePath === "object" && currentResponsePath["value"]) { // TODO: Concat with else part? See relatedFrom (Manchester syntax does not get displayed, but neither in ols4)
        return getEntityLink(response, currentResponsePath["value"]);
    }
    else { // type === "object"
        const someValuesFrom = currentResponsePath["http://www.w3.org/2002/07/owl#someValuesFrom"];
        if (someValuesFrom) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            return (
              <>
                  {getSectionListElement(response, onProperty)}
                  <i style={{color: "purple"}}> some </i>
                  {getSectionListElement(response, asArray(someValuesFrom)[0])}
              </>
            );
        }

        const allValuesFrom = currentResponsePath["http://www.w3.org/2002/07/owl#allValuesFrom"];
        if (allValuesFrom) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            return (
                <>
                    {getSectionListElement(response, onProperty)}
                    <i style={{color: "purple"}}> only </i>
                    {getSectionListElement(response, asArray(allValuesFrom)[0])}
                </>
            );
        }

        const intersectionOf = currentResponsePath["http://www.w3.org/2002/07/owl#intersectionOf"];
        if (intersectionOf) {
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
                    getSectionListElement(response, elem)
                );
            }
            elements.push(
                <span className="text-neutral-default">
                    &#41;
                </span>
            );
            return (
                <span>{elements}</span>
            );
        }

        const unionOf = currentResponsePath["http://www.w3.org/2002/07/owl#unionOf"];
        if (unionOf) {
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
                    getSectionListElement(response, elem)
                );
            }
            elements.push(
                <span className="text-neutral-default">
                    &#41;
                </span>
            );
            return (
                <span>{elements}</span>
            );
        }

        const hasValue = currentResponsePath["http://www.w3.org/2002/07/owl#hasValue"];
        if (hasValue) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            return (
                <>
                    {getSectionListElement(response, onProperty)}
                    <i style={{color: "purple"}}> value </i>
                    {getSectionListElement(response, asArray(hasValue)[0])}
                </>
            );
        }

        const minCardinality = currentResponsePath["http://www.w3.org/2002/07/owl#minCardinality"] || currentResponsePath["http://www.w3.org/2002/07/owl#minQualifiedCardinality"];
        if (minCardinality) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            return (
                <>
                    {getSectionListElement(response, onProperty)}
                    <i style={{color: "purple"}}> min </i>
                    {getSectionListElement(response, asArray(minCardinality)[0])}
                </>
            );
        }

        const maxCardinality = currentResponsePath["http://www.w3.org/2002/07/owl#maxCardinality"] || currentResponsePath["http://www.w3.org/2002/07/owl#maxQualifiedCardinality"];
        if (maxCardinality) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            return (
                <>
                    {getSectionListElement(response, onProperty)}
                    <i style={{color: "purple"}}> max </i>
                    {getSectionListElement(response, asArray(maxCardinality)[0])}
                </>
            );
        }

        const cardinality = currentResponsePath["http://www.w3.org/2002/07/owl#cardinality"] || currentResponsePath["http://www.w3.org/2002/07/owl#cualifiedCardinality"];
        if (cardinality) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            return (
                <>
                    {getSectionListElement(response, onProperty)}
                    <i style={{color: "purple"}}> exactly </i>
                    {getSectionListElement(response, asArray(cardinality)[0])}
                </>
            );
        }

        const hasSelf = currentResponsePath["http://www.w3.org/2002/07/owl#hasSelf"];
        if (hasSelf) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            return (
                <>
                    {getSectionListElement(response, onProperty)}
                    <i style={{color: "purple"}}> Self </i>
                    {getSectionListElement(response, asArray(hasSelf)[0])}
                </>
            );
        }

        const complementOf = currentResponsePath["http://www.w3.org/2002/07/owl#complementOf"];
        if (complementOf) {
            return (
                <>
                    <i>not </i>
                    {getSectionListElement(response, hasSelf)}
                </>
            );
        }

        const oneOf = currentResponsePath["http://www.w3.org/2002/07/owl#oneOf"];
        if (oneOf) {
            const elements: JSX.Element[] = [
                <span key={randomString()} className="text-neutral-default">
                    &#123;
                </span>
            ];
            for (const elem of unionOf) {
                if (elements.length > 1) {
                    elements.push(
                        <span key={randomString()} className="text-neutral-default">
                          &#44;&nbsp;
                        </span>
                    );
                }
                elements.push(
                    getSectionListElement(response, elem)
                );
            }
            elements.push(
                <span className="text-neutral-default">
                    &#125;
                </span>
            );
            return (
                <span>{elements}</span>
            );
        }

        const inverseOf = currentResponsePath["http://www.w3.org/2002/07/owl#inverseOf"];
        if (inverseOf) {
            return (
                <>
                    <i style={{color: "purple"}}>inverse </i>
                    <span key={randomString()} className="text-neutral-default">
                      &#40;
                    </span>
                    {getSectionListElement(response, inverseOf)}
                    <span key={randomString()} className="text-neutral-default">
                      &#41;
                    </span>
                </>
            );
        }

        const onDataType = currentResponsePath["http://www.w3.org/2002/07/owl#onDatatype"];
        if (onDataType) {
            // TODO: What does this do?
            return <></>;
        }

        return <></>;
    }
}

/**
 * Builds and returns a sections list as JSX element array. Is useful if the whole section inside the response object can be parsed via Manchester syntax as done in {@link getSectionListElement}.
 * @param response  the entities' data JSON as JS-object
 * @param sectionLabel  the label of the current section
 * @returns {JSX.Element[]} the sections' list
 */
function getSectionListJSX(response: any, sectionLabel: string): JSX.Element[] {
    return asArray(response[sectionLabel]).map((elem: any) => {
        return getSectionListElement(response, elem);
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
                    <p>{getSectionListElement(response, types[0])}</p>
                ) :
                <ul>
                    {
                        types.map((item: any) => {
                            return (<li key={randomString()} >{getSectionListElement(response, item)}</li>);
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
        const sameAs = getSectionListJSX(response, "http://www.w3.org/2002/07/owl#sameAs");

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
        const differentFrom = getSectionListJSX(response, "http://www.w3.org/2002/07/owl#differentFrom");

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
        const disjointWiths = getSectionListJSX(response, "http://www.w3.org/2002/07/owl#disjointWith");

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
        const inverseOfs = getSectionListJSX(response, "http://www.w3.org/2002/07/owl#inverseOf");

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
 * @returns {JSX.Element[]} the chains JSX element
 */
function getPropertyChainJSX(propertyChain: any[], response: any): JSX.Element[] {
    return asArray(propertyChain).slice().reverse().map((propertyExpr, i) => { // using .slice() here is important because a mutation of propertyChain would trigger a useQuery()
        return (
            <span key={propertyExpr}>
                {getSectionListElement(response, propertyExpr)}
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
                    <p>{getPropertyChainJSX(propertyChains, response)}</p>
                ):
                <ul>
                    {
                        propertyChains.map((item: any) => {
                            return (<li key={randomString()}>{getPropertyChainJSX(item, response)}</li>);
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
        const equivalents = getSectionListJSX(response, "http://www.w3.org/2002/07/owl#equivalentClass");

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
        const subEntityOf = getSectionListJSX(response, "http://www.w3.org/2000/01/rdf-schema#sub" + getCapitalized(getEntityTypeName(props.entityType)) + "Of");

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
            <ul>
                {
                    predicates.map((p) => {
                        const label = getLabel(response, p);
                        return (
                            <div key={p.toString() + randomString()}>
                                <div>
                                    <a style={{color: "black"}} href={p}><i>{label || p}</i></a>
                                </div>
                                <ul>
                                    {relatedFrom.filter((elem: any) => {return elem["property"] === p})
                                        .map((elem: object) => {
                                            return(
                                                <li key={randomString()}>{getSectionListElement(response, elem)}</li>
                                            )
                                        })}
                                </ul>
                            </div>
                        );
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
    const response = await api.getEntity(undefined, undefined, {ontologyId: props.ontologyId, termIri: props.iri}, props.parameter)
        .catch((error) => console.log(error));
    if (response["elements"][0] !== undefined) {
        return response["elements"][0];
    }
    else {
        throw Error("Requested entity '" + props.iri + "' could not be resolved");
    }
}

function EntityRelationsWidget(props: EntityRelationsWidgetProps) {
    const { api, iri, ontologyId, hasTitle = DEFAULT_HAS_TITLE, entityType, parameter, ...rest } = props;
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
            api,
            iri,
            ontologyId,
            entityType,
            parameter
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
            return (getEntityTypeName(entityType) === "class" && entityJson["hasDirectChildren"]) ? fetchInstances(olsApi, props) : [];
        },
        enabled: !!entityJson },
    );

    return (
        <>
            <EuiCard
                title={hasTitle ? (getCapitalized(getEntityTypeName(entityType)) +" Relations") : ""}
                layout="horizontal"
            >
                {(isLoadingEntityRelation || isLoadingInstances) && <EuiLoadingSpinner size={'s'}/>}
                {isErrorEntityRelation && <EuiText>Requested resource not available</EuiText>}
                {(isSuccessEntityRelation && isSuccessInstances) &&
                    <EuiText {...rest}>
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