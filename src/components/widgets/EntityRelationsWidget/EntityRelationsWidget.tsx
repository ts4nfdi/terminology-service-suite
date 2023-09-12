import React from "react";
import { OlsApi } from "../../../api/OlsApi";
import { useQuery } from "react-query";
import {EuiCard, EuiFlexItem, EuiLoadingSpinner, EuiText} from "@elastic/eui";

export interface EntityRelationsWidgetProps {
    api: string;
    iri?: string;
    ontologyId?: string;
    hasTitle?: boolean;
    entityType:
        | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
        | "individual"
        | "property";
    parameter?: string;
}

interface EntityRelation {
    subEntityOf?: {
        label: string,
        iri: string
    }[],
    relatedFrom?: {
        label: string,
        category: string,
    }[],
    equivalentTo?: {
        label: string,
        category: string,
    }[],
    differentFrom?: {
        label: string,
        iri: string
    }[],
    entityTypeName: string
}

const DEFAULT_HAS_TITLE = true;

function getCapitalized(text: string | undefined) : string | undefined {
    if(text === undefined) return undefined;
    return text.charAt(0).toUpperCase() + text.slice(1);
}

async function getEntityRelation(api: OlsApi, entityType: string, iri: string, ontologyId?: string, parameter?: string) {
    const returnVal: EntityRelation = {entityTypeName: entityType === "term" ? "class" : entityType};

    let response: any = "";

    if (entityType == "term" || entityType == "class") {
        response = await api.getClass(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter)
            .catch((error) => console.log(error));
    }
    else if (entityType == "property") {
        response = await api.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri})
            .catch((error) => console.log(error));
    }
    else if (entityType == "individual") {
        response = await api.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri})
            .catch((error) => console.log(error));
    }

    if(response.elements[0]) {
        if(response.elements[0]["http://www.w3.org/2000/01/rdf-schema#sub"+getCapitalized(returnVal.entityTypeName)+"Of"] !== undefined) {
            returnVal.subEntityOf = !Array.isArray(response.elements[0]["http://www.w3.org/2000/01/rdf-schema#sub"+getCapitalized(returnVal.entityTypeName)+"Of"]) ?
                [{
                    label: response.elements[0]["linkedEntities"][response.elements[0]["http://www.w3.org/2000/01/rdf-schema#sub"+getCapitalized(returnVal.entityTypeName)+"Of"]].label,
                    iri: response.elements[0]["linkedEntities"][response.elements[0]["http://www.w3.org/2000/01/rdf-schema#sub"+getCapitalized(returnVal.entityTypeName)+"Of"]]
                }] :
                response.elements[0]["http://www.w3.org/2000/01/rdf-schema#sub"+getCapitalized(returnVal.entityTypeName)+"Of"].map((elem: string) => {
                    return {
                        label: response.elements[0]["linkedEntities"][elem].label,
                        iri: elem,
                    }
                });
        }
        returnVal.differentFrom = response.elements[0]["http://www.w3.org/2002/07/owl#differentFrom"];
    }


    return returnVal;
}

function EntityRelationsWidget(props: EntityRelationsWidgetProps) {
    const { api, iri, ontologyId, hasTitle = DEFAULT_HAS_TITLE, entityType, parameter, ...rest } = props;
    const olsApi = new OlsApi(api);

    const {
        data: entityRelation,
        isLoading: isLoadingEntityRelation,
        isSuccess: isSuccessEntityRelation,
    } = useQuery(
        [
            "entityRelation",
            api,
            iri,
            ontologyId,
            entityType,
            parameter
        ],
        async () => {
            return getEntityRelation(olsApi, entityType, iri, ontologyId, parameter);
        }
    );

    return (
        <>
            <EuiCard
                title={hasTitle ? (getCapitalized(entityRelation?.entityTypeName) +" Relations") : ""}
                layout="horizontal"
            >
                {isLoadingEntityRelation && <EuiLoadingSpinner size={'s'}/>}
                {isSuccessEntityRelation &&
                    <EuiText {...rest}>
                        {entityRelation?.subEntityOf &&
                            <EuiFlexItem>
                                {
                                    entityRelation?.subEntityOf?.length ?? -1 > 0 ? <b>Sub{entityRelation?.entityTypeName} of</b> : ""
                                }
                                <ul>
                                    {entityRelation?.subEntityOf &&
                                        entityRelation?.subEntityOf.map((item) => {return (<li>{item.label}</li>)})
                                    }
                                </ul>
                            </EuiFlexItem>
                        }
                        {entityRelation?.differentFrom &&
                            <EuiFlexItem>
                                {
                                    entityRelation?.differentFrom?.length ?? -1 > 0 ? <b>Different from</b> : ""
                                }
                                <ul>
                                    {entityRelation?.differentFrom &&
                                        entityRelation?.differentFrom.map((item) => {return (<li>{item}</li>)})
                                    }
                                </ul>
                            </EuiFlexItem>
                        }
                    </EuiText>
                }
            </EuiCard>
        </>
    );
}

export { EntityRelationsWidget };