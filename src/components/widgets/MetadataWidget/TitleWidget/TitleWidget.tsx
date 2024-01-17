import React from "react";
import {useQuery} from "react-query";
import {EuiLoadingSpinner, EuiText} from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import { getErrorMessageToDisplay, getPreferredOntologyJSON } from "../../../../utils/helper";

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
    /**
     * Additional parameters to pass to the API.
     *
     * This parameters can be used to filter the search results. Each parameter can be combined via
     * the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign
     * <i><b>,</b></i>. The following keys could be used:<br/> <br/>
     *  <table>
     *  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
     *  <tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>
     *  <tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>
     *  <tr><td>slim</td><td>Restrict a search to a particular set of slims by name</td></tr>
     *  <tr><td>fieldList</td><td>Specify the fields to return. Defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td></tr>
     *  <tr><td>obsoletes</td><td>Set to true to include obsolete terms in the results</td></tr>
     *  <tr><td>local</td><td>Set to true to only return terms that are in a defining ontology, e.g. only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>
     *  <tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>
     *  <tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>
     *  <tr><td>rows</td><td>Set results per page</td></tr>
     *  <tr><td>start</td><td>Set the results page number</td></tr>
     *  <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. collection=nfdi4health</td></tr>
     * </table>
     */
    parameter?: string
    default_value?: string
}

const NO_TITLE = "No title available.";

async function getTitle(olsApi: OlsApi, entityType: string, ontologyId?: string, iri?: string, parameter?: string, default_value?: string): Promise<any> {
    if (entityType === "ontology") {
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
    if (entityType === "term" || entityType === "property" || entityType === "individual") {
        if(!iri) {
            throw Error("iri has to be provided")
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
    throw Error("Unexpected entity type. Should be one of 'ontology', 'term', 'class', 'individual', 'property'");
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
