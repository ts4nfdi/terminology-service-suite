import React from "react";
import { OlsApi } from "../../../api/OlsApi";
import { useQuery } from "react-query";
import {EuiCard, EuiFlexItem, EuiLoadingSpinner, EuiText} from "@elastic/eui";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";

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

function getCapitalized(text: string | undefined) : string | undefined {
    if(text === undefined) return undefined;
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function getEntityTypeName(type: string) : string {
    return type === "term" ? "class" : type;
}

function getLabel(response: any, iri: string) : string | undefined {
    if(response["linkedEntities"][iri]) {
        return asArray(response["linkedEntities"][iri]["label"])[0];
    }
    else return undefined;

}

function asArray(obj: any) {
    if (Array.isArray(obj)) return obj;
    else if (obj) return [obj];
    else return [];
}

function randomString() {
    return (Math.random() * Math.pow(2, 54)).toString(36);
}

function getEntityLink(response: any, iri: string) {
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

function getSectionListElement(response: any, currentResponsePath: any, props: EntityRelationsWidgetProps): ReactJSXElement | undefined {
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
                  {getSectionListElement(response, onProperty, props)}
                  <i style={{color: "purple"}}> some </i>
                  {getSectionListElement(response, asArray(someValuesFrom)[0], props)}
              </>
            );
        }

        const allValuesFrom = currentResponsePath["http://www.w3.org/2002/07/owl#allValuesFrom"];
        if (allValuesFrom) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            return (
                <>
                    {getSectionListElement(response, onProperty, props)}
                    <i style={{color: "purple"}}> only </i>
                    {getSectionListElement(response, asArray(allValuesFrom)[0], props)}
                </>
            );
        }

        const intersectionOf = currentResponsePath["http://www.w3.org/2002/07/owl#intersectionOf"];
        if (intersectionOf) {
            const elements: (ReactJSXElement | undefined)[] = [
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
            return (
                <span>{elements}</span>
            );
        }

        const unionOf = currentResponsePath["http://www.w3.org/2002/07/owl#unionOf"];
        if (unionOf) {
            const elements: (ReactJSXElement | undefined)[] = [
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
            return (
                <span>{elements}</span>
            );
        }

        const hasValue = currentResponsePath["http://www.w3.org/2002/07/owl#hasValue"];
        if (hasValue) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            return (
                <>
                    {getSectionListElement(response, onProperty, props)}
                    <i style={{color: "purple"}}> value </i>
                    {getSectionListElement(response, asArray(hasValue)[0], props)}
                </>
            );
        }

        const minCardinality = currentResponsePath["http://www.w3.org/2002/07/owl#minCardinality"] || currentResponsePath["http://www.w3.org/2002/07/owl#minQualifiedCardinality"];
        if (minCardinality) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            return (
                <>
                    {getSectionListElement(response, onProperty, props)}
                    <i style={{color: "purple"}}> min </i>
                    {getSectionListElement(response, asArray(minCardinality)[0], props)}
                </>
            );
        }

        const maxCardinality = currentResponsePath["http://www.w3.org/2002/07/owl#maxCardinality"] || currentResponsePath["http://www.w3.org/2002/07/owl#maxQualifiedCardinality"];
        if (maxCardinality) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            return (
                <>
                    {getSectionListElement(response, onProperty, props)}
                    <i style={{color: "purple"}}> max </i>
                    {getSectionListElement(response, asArray(maxCardinality)[0], props)}
                </>
            );
        }

        const cardinality = currentResponsePath["http://www.w3.org/2002/07/owl#cardinality"] || currentResponsePath["http://www.w3.org/2002/07/owl#cualifiedCardinality"];
        if (cardinality) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            return (
                <>
                    {getSectionListElement(response, onProperty, props)}
                    <i style={{color: "purple"}}> exactly </i>
                    {getSectionListElement(response, asArray(cardinality)[0], props)}
                </>
            );
        }

        const hasSelf = currentResponsePath["http://www.w3.org/2002/07/owl#hasSelf"];
        if (hasSelf) {
            const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
            return (
                <>
                    {getSectionListElement(response, onProperty, props)}
                    <i style={{color: "purple"}}> Self </i>
                    {getSectionListElement(response, asArray(hasSelf)[0], props)}
                </>
            );
        }

        const complementOf = currentResponsePath["http://www.w3.org/2002/07/owl#complementOf"];
        if (complementOf) {
            return (
                <>
                    <i>not </i>
                    {getSectionListElement(response, hasSelf, props)}
                </>
            );
        }

        const oneOf = currentResponsePath["http://www.w3.org/2002/07/owl#oneOf"];
        if (oneOf) {
            const elements: (ReactJSXElement | undefined)[] = [
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
                    getSectionListElement(response, elem, props)
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
                    <span key={randomString()} className="text-neutral-default">
                      &#40;
                    </span>
                    <i>inverse </i>
                    {getSectionListElement(response, inverseOf, props)}
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
    }
}

function getSectionListJSX(response: any, props: EntityRelationsWidgetProps, sectionLabel: string) {
    return asArray(response[sectionLabel]).map((elem: any) => {
        return getSectionListElement(response, elem, props);
    });
}

function getSubEntityOf(response: any, props: EntityRelationsWidgetProps) {
    if(response && response["http://www.w3.org/2000/01/rdf-schema#sub"+getCapitalized(getEntityTypeName(props.entityType))+"Of"] !== undefined) {
        const subEntityOf = getSectionListJSX(response, props, "http://www.w3.org/2000/01/rdf-schema#sub" + getCapitalized(getEntityTypeName(props.entityType)) + "Of");

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
}

function getEquivalentTo(response: any, props: EntityRelationsWidgetProps) {
    if(response && response["http://www.w3.org/2002/07/owl#equivalentClass"] !== undefined) {
        const equivalents = getSectionListJSX(response, props, "http://www.w3.org/2002/07/owl#equivalentClass");

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
}

function getRelatedFrom(response: any, props: EntityRelationsWidgetProps) {
    if(response && response["relatedFrom"] !== undefined) {
        const relatedFrom= response["relatedFrom"];

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
                                    <i>{label || p}</i>
                                </div>
                                <ul>
                                    {relatedFrom.filter((elem: any) => {return elem["property"] === p})
                                        .map((elem: object) => {
                                            return(
                                                <li key={randomString()}>{getSectionListElement(response, elem, props)}</li>
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
}

function getTypes(response: any, props: EntityRelationsWidgetProps) {
    if(response && props.entityType === "individual" && response["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"] !== undefined) {
        const types = asArray(response["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]).filter((elem: any) => elem !== "http://www.w3.org/2002/07/owl#NamedIndividual" && elem !== "http://www.w3.org/2002/07/owl#Thing" && (!(typeof elem === "string") || !elem.startsWith("http://www.w3.org/2000/01/rdf-schema#")));

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
}

function getDifferentFrom(response: any, props: EntityRelationsWidgetProps) {
    if(response && response["http://www.w3.org/2002/07/owl#differentFrom"] !== undefined) {
        const differentFrom = getSectionListJSX(response, props, "http://www.w3.org/2002/07/owl#differentFrom");

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
}

async function getEntityJson(api: OlsApi, entityType: string, iri: string, ontologyId?: string, parameter?: string) {
    const response = await api.getEntity(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter)
        .catch((error) => console.log(error));
    return response["elements"][0];
}

function EntityRelationsWidget(props: EntityRelationsWidgetProps) {
    const { api, iri, ontologyId, hasTitle = DEFAULT_HAS_TITLE, entityType, parameter, ...rest } = props;
    const olsApi = new OlsApi(api);

    const {
        data: entityJson,
        isLoading: isLoadingEntityRelation,
        isSuccess: isSuccessEntityRelation,
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
            return getEntityJson(olsApi, entityType, iri, ontologyId, parameter);
        }
    );

    return (
        <>
            <EuiCard
                title={hasTitle ? (getCapitalized(getEntityTypeName(entityType)) +" Relations") : ""}
                layout="horizontal"
            >
                {isLoadingEntityRelation && <EuiLoadingSpinner size={'s'}/>}
                {isSuccessEntityRelation &&
                    <EuiText {...rest}>
                        {getSubEntityOf(entityJson, props)}
                        {getTypes(entityJson, props)}
                        {getDifferentFrom(entityJson, props)}
                        {getRelatedFrom(entityJson, props)}
                        {getEquivalentTo(entityJson, props)}
                    </EuiText>
                }
            </EuiCard>
        </>
    );
}

export { EntityRelationsWidget };