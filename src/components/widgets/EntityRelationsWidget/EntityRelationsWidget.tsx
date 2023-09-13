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
    if (Array.isArray(response.elements[0]["linkedEntities"][iri].label)) {
        return response.elements[0]["linkedEntities"][iri].label[0];
    }
    else {
        return response.elements[0]["linkedEntities"][iri].label;
    }

}

function getManhattanSyntax(response: any, currentResponsePath: any, props: EntityRelationsWidgetProps) {
    let result: {label: string, iri?: string}[] = [];

    for(const label in currentResponsePath) {
        if (label === "http://www.w3.org/2002/07/owl#onProperty") {
            result.push({label: getLabel(response, currentResponsePath[label]), iri: currentResponsePath[label]});
            result.push({label: " "});
        }
        else if (label === "http://www.w3.org/2002/07/owl#someValuesFrom") {
            result.push({label: "some"});
            result.push({label: " "});
            if (typeof currentResponsePath[label] === "string") {
                result.push({label: getLabel(response, currentResponsePath[label]), iri: currentResponsePath[label]});
            }
            else if (typeof currentResponsePath[label] === "object") {
                result = result.concat(getManhattanSyntax(response, currentResponsePath[label], props));
            }
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
                if (typeof currentResponsePath[label][elem] === "string") {
                    result.push({label: getLabel(response, currentResponsePath[label][elem]), iri: elem})
                } else if (typeof currentResponsePath[label][elem] === "object") {
                    result = result.concat(getManhattanSyntax(response, currentResponsePath[label][elem], props));
                }
            }
            result.push({label: ")"});
        }
    }

    return result;
}

function getLabeledJSON(response: any, props: EntityRelationsWidgetProps, sectionLabel: string) {
    if (!Array.isArray(response.elements[0][sectionLabel])) {
        response.elements[0][sectionLabel] = [response.elements[0][sectionLabel]];
    }
    return response.elements[0][sectionLabel].map((elem: any) => {
        if(typeof elem === 'string') {
            return [{
                label: response.elements[0]["linkedEntities"][elem].label,
                iri: elem,
            }]
        }
        else if(typeof elem === 'object') {
            if(elem.value !== undefined) {
                return [{
                    label: response.elements[0]["linkedEntities"][elem.value].label,
                    iri: elem.value,
                }]
            }
            else {
                return getManhattanSyntax(response, elem, props);
            }

        }
    });
}

function getSubEntityOf(response: any, props: EntityRelationsWidgetProps) {
    if(response.elements[0] && response.elements[0]["http://www.w3.org/2000/01/rdf-schema#sub"+getCapitalized(getEntityTypeName(props.entityType))+"Of"] !== undefined) {
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
                                if(item.label === "(" || item.label === ")" || item.label === " ") {
                                    return item.label;
                                }
                                else {
                                    return <i>{item.label}</i>;
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
    if(response.elements[0] && response.elements[0]["http://www.w3.org/2002/07/owl#differentFrom"] !== undefined) {
        const differentFrom = getLabeledJSON(response, props, "http://www.w3.org/2002/07/owl#differentFrom");

        return (<EuiFlexItem>
            {
                differentFrom?.length ?? -1 > 0 ? <b>Different from</b> : ""
            }
            <ul>
                {
                    // TODO Replace href with the link of the semlookp page
                    differentFrom.map((item: { label: string, iri?: string, type?: string }[]) => {
                        if(item.length === 1) {
                            return (<li><a href={item[0].iri}>{item[0].label}</a></li>)
                        }
                        else return (<li>{item.map((item) => {
                            if(item.iri === undefined) {
                                return <i>{item.label} </i>;
                            }
                            else if (item.type !== undefined) {
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
    if (entityType == "term" || entityType == "class") {
        return await api.getClass(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter)
            .catch((error) => console.log(error));
    }
    else if (entityType == "property") {
        return await api.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri})
            .catch((error) => console.log(error));
    }
    else if (entityType == "individual") {
        return await api.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri})
            .catch((error) => console.log(error));
    }
    else {
        throw Error("Unexpected entity type. Has to be one of: 'term', 'class', 'property', 'individual'");
    }
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