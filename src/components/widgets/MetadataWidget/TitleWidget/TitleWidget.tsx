import React from "react";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import {EuiLoadingSpinner, EuiProvider, EuiText} from "@elastic/eui";
import { OlsApi } from "../../../../api/OlsApi";
import {AutocompleteWidget} from "../../AutocompleteWidget";
import ReactDOM from "react-dom";

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
}

const NO_TITLE = "No title available.";


async function getTitle(olsApi: OlsApi, entityType: string, ontologyId?: string, iri?: string, parameter?: string): Promise<string> {
    if (entityType == "ontology") {
        const response = await olsApi.getOntology(undefined, undefined, {
            ontologyId: ontologyId
        }, parameter)
            .catch((error) => console.log(error));
        return response?.config.title || NO_TITLE
    }
    if (entityType == "term") {
        const response = await olsApi.getTerm(undefined, undefined, {
            ontologyId: ontologyId,
            termIri: iri
        }, parameter)
            .catch((error) => console.log(error));
        return response?._embedded?.terms[0].label || NO_TITLE
    }
    if (entityType == "property") {
        const response = await olsApi.getProperty(undefined, undefined, {
            ontologyId: ontologyId,
            propertyIri: iri
        }, parameter)
            .catch((error) => console.log(error));
        return response?._embedded?.properties[0].label || NO_TITLE
    }
    if (entityType == "individual") {
        const response = await olsApi.getIndividual(undefined, undefined, {
            ontologyId: ontologyId,
            individualIri: iri
        }, parameter)
            .catch((error) => console.log(error));
        return response?._embedded?.individuals[0].label || NO_TITLE
    }
    return NO_TITLE;
}

function TitleWidget(props: TitleWidgetProps) {
    const { iri, ontologyId, api, titleText, entityType, parameter } = props;
    const fixedEntityType = entityType == "class" ? "term" : entityType
    const olsApi = new OlsApi(api);

    const {
        data: label,
        isLoading,
    } = useQuery([api, "getTitle", fixedEntityType, ontologyId, iri, parameter], () => {
        return getTitle(olsApi, fixedEntityType, ontologyId, iri, parameter);
    });

    return (
        <>
            {isLoading ? <EuiLoadingSpinner size="s"/> : <EuiText>{titleText || label}</EuiText>}
        </>
    );
}

function createTitle(props: TitleWidgetProps, container: any, callback?: ()=>void) {
    ReactDOM.render(WrappedTitleWidget(props), container, callback);
}

function WrappedTitleWidget(props: TitleWidgetProps) {
    const queryClient = new QueryClient();
    return (
        <EuiProvider colorMode="light">
            <QueryClientProvider client={queryClient}>
                <TitleWidget
                    api={props.api}
                    entityType={props.entityType}
                    iri={props.iri}
                    ontologyId={props.ontologyId}
                    titleText={props.titleText}
                    parameter={props.parameter}
                />
            </QueryClientProvider>
        </EuiProvider>
    )
}

export { TitleWidget, createTitle };
