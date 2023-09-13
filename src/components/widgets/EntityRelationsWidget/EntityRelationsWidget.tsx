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

function getPlural(type: string) : string {
    if (type === "term" || type === "class") return "classes";
    if (type === "property") return "properties";
    if (type === "individual") return "individuals";
    throw Error("Unexpected entity type. Has to be one of: 'term', 'class', 'property', 'individual'");
}

/*function getManhattanSyntax(currentResponsePath: any, props: EntityRelationsWidgetProps) {
    let result = [];

    if(currentResponsePath[])

    return result;
}*/

function getLabeledJSON(response: any, props: EntityRelationsWidgetProps, sectionLabel: string) {
    return !Array.isArray(response.elements[0][sectionLabel]) ?
        [{
            label: response.elements[0]["linkedEntities"][response.elements[0][sectionLabel]].label,
            iri: response.elements[0]["linkedEntities"][response.elements[0][sectionLabel]]
        }] :
        response.elements[0][sectionLabel].map((elem: string) => {
            return {
                label: response.elements[0]["linkedEntities"][elem].label,
                iri: elem,
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
                    subEntityOf.map((item: { label: string, iri: string }) => {return (<li key={item.iri}><a href={"https://www.ebi.ac.uk/ols4/ontologies/"+props.ontologyId+"/"+getPlural(getEntityTypeName(props.entityType))+"/" + encodeURIComponent(encodeURIComponent(item.iri))}>{item.label}</a></li>)})
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
                    differentFrom.map((item: { label: string, iri: string }) => {return (<li key={item.iri}><a href={"https://www.ebi.ac.uk/ols4/ontologies/"+props.ontologyId+"/"+getPlural(getEntityTypeName(props.entityType))+"/" + encodeURIComponent(encodeURIComponent(item.iri))}>{item.label}</a></li>)})
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