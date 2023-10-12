import React from "react";
import {useQuery} from "react-query";
import {EuiFlexItem, EuiLoadingSpinner, EuiText} from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import {getPreferredOntologyJSON} from "../index";

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


async function getTitle(olsApi: OlsApi, entityType: string, ontologyId?: string, iri?: string, parameter?: string, default_value?: string): Promise<any> {
    if (entityType === "ontology") {
        if(!ontologyId) {
            console.error(Error("ontology id has to be provided"))
            return {
                title: default_value || NO_TITLE
            }
        }
        else {
            const response = await olsApi.getOntology(undefined, undefined, {
                ontologyId: ontologyId
            }, parameter)
                .catch((error) => console.log(error));
            return {
                title: response?.config.title || default_value || NO_TITLE
            }
        }
    }
    if (entityType === "term" || entityType === "property" || entityType === "individual") {
        if(!iri) {
            console.error(Error("iri has to be provided"))
            return {
                title: default_value || NO_TITLE
            }
        }
        else {
            const response = await getPreferredOntologyJSON(olsApi, entityType, ontologyId, iri, parameter)
            return {
                title: response['label'] || default_value || NO_TITLE,
                inDefiningOntology: response['is_defining_ontology'],
                ontology: response['ontology_name']
            }
        }
    }
    //unacceptable object type
    console.error(Error("Unexpected entity type. Should be one of 'ontology', 'term', 'class', 'individual', 'property'"));
    return {
         title: default_value || NO_TITLE
    }
}

function TitleWidget(props: TitleWidgetProps) {
    const {iri, ontologyId, api, titleText, entityType, parameter, default_value} = props;
    const fixedEntityType = entityType == "class" ? "term" : entityType
    const olsApi = new OlsApi(api);

    const {
        data: response,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useQuery([api, "getTitle", fixedEntityType, ontologyId, iri, parameter], () => {
        return getTitle(olsApi, fixedEntityType, ontologyId, iri, parameter, default_value);
    });

    return (
        <>
            {isLoading && <EuiLoadingSpinner size="s"/>}
            {isSuccess &&
                <>
                    {
                        !props.ontologyId && !titleText && !response.inDefiningOntology && fixedEntityType !== "ontology" &&
                        <EuiFlexItem>
                            <EuiText>
                                <i>Defining ontology not available. Showing occurrence inside {response.ontology} instead.</i>
                            </EuiText>
                        </EuiFlexItem>
                    }
                    <EuiText>{titleText || response.title}</EuiText>
                </>}
            {isError && <EuiText>{NO_TITLE}</EuiText>}
        </>
    );
}

export {TitleWidget};
