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

function getCapitalized(text: string | undefined) : string | undefined {
    if(text === undefined) return undefined;
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function getEntityTypeName(type: string) : string {
    return type === "term" ? "class" : type;
}

function getLabel(response: any, iri: string) : string {
    if(response["linkedEntities"][iri] === undefined) {
        iri = response["curie"];
    }
    if (Array.isArray(response["linkedEntities"][iri].label)) {
        return response["linkedEntities"][iri].label[0];
    }
    else {
        return response["linkedEntities"][iri].label;
    }
}

function asArray(obj: any) {
    if (Array.isArray(obj)) return obj;
    else if (obj) return [obj];
    else return [];
}

function getManchesterSyntax(response: any, currentResponsePath: any, props: EntityRelationsWidgetProps) {
    if (typeof currentResponsePath === "string") {
        return [{label: getLabel(response, currentResponsePath), iri: currentResponsePath}];
    }
    else if (typeof currentResponsePath === "object" && currentResponsePath["value"]) {
        return [{label: getLabel(response, currentResponsePath["value"]), iri: currentResponsePath["value"]}];
    }
    else { // type === "object"
        let result: {label: string, iri?: string}[] = [];

        for(const label in currentResponsePath) {
            if (label === "http://www.w3.org/2002/07/owl#someValuesFrom") {
                const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
                result = result.concat(getManchesterSyntax(response, onProperty, props));
                result.push({label: " "});
                result.push({label: "some"});
                result.push({label: " "});
                result = result.concat(getManchesterSyntax(response, asArray(currentResponsePath[label])[0], props));
            }
            else if (label === "http://www.w3.org/2002/07/owl#allValuesFrom") {
                const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
                result = result.concat(getManchesterSyntax(response, onProperty, props));
                result.push({label: " "});
                result.push({label: "only"});
                result.push({label: " "});
                result = result.concat(getManchesterSyntax(response, asArray(currentResponsePath[label])[0], props));
            }
            else if (label === "http://www.w3.org/2002/07/owl#hasValue") {
                const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
                result = result.concat(getManchesterSyntax(response, onProperty, props));
                result.push({label: " "});
                result.push({label: "value"});
                result.push({label: " "});
                result = result.concat(getManchesterSyntax(response, asArray(currentResponsePath[label])[0], props));
            }
            else if (label === "http://www.w3.org/2002/07/owl#minCardinality" || label === "http://www.w3.org/2002/07/owl#minQualifiedCardinality") {
                const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
                result = result.concat(getManchesterSyntax(response, onProperty, props));
                result.push({label: " "});
                result.push({label: "min"});
                result.push({label: " "});
                result = result.concat(getManchesterSyntax(response, asArray(currentResponsePath[label])[0], props));
            }
            else if (label === "http://www.w3.org/2002/07/owl#maxCardinality" || label === "http://www.w3.org/2002/07/owl#maxQualifiedCardinality") {
                const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
                result = result.concat(getManchesterSyntax(response, onProperty, props));
                result.push({label: " "});
                result.push({label: "max"});
                result.push({label: " "});
                result = result.concat(getManchesterSyntax(response, asArray(currentResponsePath[label])[0], props));
            }
            else if (label === "http://www.w3.org/2002/07/owl#cardinality" || label === "http://www.w3.org/2002/07/owl#qualifiedCardinality") {
                const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
                result = result.concat(getManchesterSyntax(response, onProperty, props));
                result.push({label: " "});
                result.push({label: "exactly"});
                result.push({label: " "});
                result = result.concat(getManchesterSyntax(response, asArray(currentResponsePath[label])[0], props));
            }
            else if (label === "http://www.w3.org/2002/07/owl#hasSelf") {
                const onProperty = currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
                result = result.concat(getManchesterSyntax(response, onProperty, props));
                result.push({label: " "});
                result.push({label: "Self"});
                result.push({label: " "});
            }
            else if (label === "http://www.w3.org/2002/07/owl#intersectionOf" || label === "http://www.w3.org/2002/07/owl#unionOf") {
                result.push({label: "("});
                let first = true;
                for (const elem in currentResponsePath[label]) {
                    if (!first){
                        result.push({label: " "});
                        result.push({label: label === "http://www.w3.org/2002/07/owl#intersectionOf" ? "and" : "or"});
                        result.push({label: " "});
                    }
                    first = false;
                    result = result.concat(getManchesterSyntax(response, currentResponsePath[label][elem], props));
                }
                result.push({label: ")"});
            }
            else if (label === "http://www.w3.org/2002/07/owl#complementOf") {
                result.push({label: "not"}, {label: " "});
                result = result.concat(getManchesterSyntax(response, currentResponsePath[label], props));
            }
            else if (label === "http://www.w3.org/2002/07/owl#oneOf") {
                if(result.length > 0) result.push({label: " "});
                result.push({label: "{"});
                let first = true;
                for (const elem in currentResponsePath[label]) {
                    if (!first){
                        result.push({label: ","});
                    }
                    first = false;
                    result = result.concat(getManchesterSyntax(response, currentResponsePath[label][elem], props));
                }
                result.push({label: "}"});
            }
            else if (label === "http://www.w3.org/2002/07/owl#inverseOf") {
                result.push({label: "inverse"}, {label: " "});
                result.push({label: "("});
                result = result.concat(getManchesterSyntax(response, currentResponsePath[label], props));
                result.push({label: ")"});
            }
            else if (label === "http://www.w3.org/2002/07/owl#onDatatype") {
                // TODO: What does this do?
            }
        }
        return result;
    }
}

function getLabeledJSON(response: any, props: EntityRelationsWidgetProps, sectionLabel: string) {
    return asArray(response[sectionLabel]).map((elem: any) => {
        return getManchesterSyntax(response, elem, props);
    });
}

function getSubEntityOf(response: any, props: EntityRelationsWidgetProps) {
    if(response && response["http://www.w3.org/2000/01/rdf-schema#sub"+getCapitalized(getEntityTypeName(props.entityType))+"Of"] !== undefined) {
        const subEntityOf = getLabeledJSON(response, props, "http://www.w3.org/2000/01/rdf-schema#sub"+getCapitalized(getEntityTypeName(props.entityType))+"Of");

        return (<EuiFlexItem>
            {
                subEntityOf.length ?? -1 > 0 ? <b>Sub{getEntityTypeName(props.entityType)} of</b> : ""
            }
            <ul>
                {
                    // TODO Replace href with the link of the semlookp page
                    subEntityOf.map((item: { label: string, iri?: string }[]) => {
                        if(item.length === 1) {
                            return (<li><a href={item[0].iri}>{item[0].label}</a></li>)
                        }
                        else return (<li>{item.map((item) => {
                            if(item.iri === undefined) {
                                if(["(", ")", " "].includes(item.label)) {
                                    return item.label;
                                }
                                else {
                                    if (["inverse", "some", "only", "value", "min", "max", "exactly", "Self"].includes(item.label)) {
                                        return <span style={{color: "purple"}}><i>{item.label}</i></span>;
                                    }
                                    else {
                                        return <i>{item.label}</i>;
                                    }
                                }
                            }
                            else {
                                return (<a href={item.iri}>{item.label}</a>);
                            }
                        })}</li>)
                    })
                }
            </ul>
        </EuiFlexItem>);
    }
}

function getDifferentFrom(response: any, props: EntityRelationsWidgetProps) {
    if(response && response["http://www.w3.org/2002/07/owl#differentFrom"] !== undefined) {
        const differentFrom = getLabeledJSON(response, props, "http://www.w3.org/2002/07/owl#differentFrom");

        return (<EuiFlexItem>
            {
                differentFrom?.length ?? -1 > 0 ? <b>Different from</b> : ""
            }
            <ul>
                {
                    // TODO Replace href with the link of the semlookp page
                    differentFrom.map((item: { label: string, iri?: string }[]) => {
                        return (<li>{item.map((item) => {
                            if(item.iri === undefined) {
                                return <i>{item.label}</i>;
                            }
                            else {
                                return (<a href={item.iri}>{item.label}</a> );
                            }
                        })}</li>)
                    })
                }
            </ul>
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
                        {getDifferentFrom(entityJson, props)}
                    </EuiText>
                }
            </EuiCard>
        </>
    );
}

export { EntityRelationsWidget };