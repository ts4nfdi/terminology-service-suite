import React from "react";
import {useQuery} from "react-query";
import {EuiLoadingSpinner, EuiText} from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import { getErrorMessageToDisplay } from "../../../../utils/helper";
import {TitleWidgetProps} from "../../../../utils/types";
import {isOntology} from "../../../../model/ModelTypeCheck";

const NO_TITLE = "No title available.";

function TitleWidget(props: TitleWidgetProps) {
    const {iri, ontologyId, api, titleText, thingType, parameter, useLegacy, default_value} = props;
    const olsApi = new OlsApi(api);

    const {
        data: thing,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useQuery([api, "getTitle", thingType, ontologyId, iri, parameter, useLegacy], () => {
        return olsApi.getThingObject(iri, thingType, ontologyId, parameter, useLegacy);
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
            {isSuccess && thing &&
                <>
                    <EuiText>{titleText || (isOntology(thing) ? thing.getName() : thing.getLabel()) || default_value || NO_TITLE}</EuiText>
                </>}
            {isError && <EuiText>{getErrorMessageToDisplay(error, "title")}</EuiText>}
        </>
    );
}

export {TitleWidget};
