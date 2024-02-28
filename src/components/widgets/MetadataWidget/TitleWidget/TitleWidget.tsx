import React from "react";
import {useQuery} from "react-query";
import {EuiLoadingSpinner, EuiText} from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import { getErrorMessageToDisplay, getPreferredOntologyJSON } from "../../../../utils/helper";
import {TitleWidgetProps} from "../../../../utils/types";

const NO_TITLE = "No title available.";

async function getTitle(olsApi: OlsApi, thingType: string, ontologyId?: string, iri?: string, parameter?: string, default_value?: string): Promise<any> {
    if (thingType === "ontology") {
        if(!ontologyId) {
            throw Error("ontology id has to be provided")
        }
        else {
            const response = await olsApi.getOntology(undefined, undefined, {
                ontologyId: ontologyId
            }, parameter)
            return {
                title: response?.config.title || default_value || NO_TITLE
            }
        }
    }
    if (thingType === "term" || thingType === "property" || thingType === "individual") {
        if(!iri) {
            throw Error("iri has to be provided")
        }
        else {
            const response = await getPreferredOntologyJSON(olsApi, thingType, ontologyId, iri, parameter)
            return {
                title: response['label'] || default_value || NO_TITLE,
                inDefiningOntology: response['is_defining_ontology'],
                ontology: response['ontology_name']
            }
        }
    }
    //unacceptable object type
    throw Error("Unexpected entity type. Should be one of 'ontology', 'term', 'class', 'individual', 'property'");
}

function TitleWidget(props: TitleWidgetProps) {
    const {iri, ontologyId, api, titleText, thingType, parameter, default_value} = props;
    const fixedEntityType = thingType == "class" ? "term" : thingType
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

    // TODO: Should TitleWidget show the following info message if defining ontology is not available (placed inside isSuccess span)?
    /*{
        !props.ontologyId && !titleText && !response.inDefiningOntology && fixedEntityType !== "ontology" &&
        <EuiFlexItem>
            <EuiText>
                <i>Defining ontology not available. Showing occurrence inside {response.ontology} instead.</i>
            </EuiText>
        </EuiFlexItem>
    }*/

    return (
        <>
            {isLoading && <EuiLoadingSpinner size="s"/>}
            {isSuccess &&
                <>
                    <EuiText>{titleText || response.title}</EuiText>
                </>}
            {isError && <EuiText>{getErrorMessageToDisplay(error, "title")}</EuiText>}
        </>
    );
}

export {TitleWidget};
