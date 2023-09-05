import React from "react";
import {useQuery} from "react-query";
import {EuiLoadingSpinner, EuiText} from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";

export interface TitleWidgetProps {
    iri?: string;
    ontologyId?: string;
    api: string;
    titleText?: string;
    entityType:
        | "ontology"
        | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
        | "individual"
        | "property"
        | string;
    parameter?: string
    default_value?: string
}

const NO_TITLE = "No title available.";


async function getTitle(olsApi: OlsApi, entityType: string, ontologyId?: string, iri?: string, parameter?: string, default_value?: string): Promise<string> {
    if (entityType == "ontology") {
        const response = await olsApi.getOntology(undefined, undefined, {
            ontologyId: ontologyId
        }, parameter)
            .catch((error) => console.log(error));
        return response?.config.title || default_value || NO_TITLE
    }
    if (entityType == "term") {
        const response = await olsApi.getTerm(undefined, undefined, {
            ontologyId: ontologyId,
            termIri: iri
        }, parameter)
            .catch((error) => console.log(error));
        return response?._embedded?.terms[0].label ||  default_value || NO_TITLE
    }
    if (entityType == "property") {
        const response = await olsApi.getProperty(undefined, undefined, {
            ontologyId: ontologyId,
            propertyIri: iri
        }, parameter)
            .catch((error) => console.log(error));
        return response?._embedded?.properties[0].label ||  default_value || NO_TITLE
    }
    if (entityType == "individual") {
        const response = await olsApi.getIndividual(undefined, undefined, {
            ontologyId: ontologyId,
            individualIri: iri
        }, parameter)
            .catch((error) => console.log(error));
        return response?._embedded?.individuals[0].label ||  default_value || NO_TITLE
    }
    return  default_value || NO_TITLE;
}

function TitleWidget(props: TitleWidgetProps) {
    const {iri, ontologyId, api, titleText, entityType, parameter, default_value} = props;
    const fixedEntityType = entityType == "class" ? "term" : entityType
    const olsApi = new OlsApi(api);

    const {
        data: label,
        isLoading,
    } = useQuery([api, "getTitle", fixedEntityType, ontologyId, iri, parameter], () => {
        return getTitle(olsApi, fixedEntityType, ontologyId, iri, parameter, default_value);
    });

    return (
        <>
            {isLoading ? <EuiLoadingSpinner size="s"/> : <EuiText>{titleText || label}</EuiText>}
        </>
    );
}

export {TitleWidget};
