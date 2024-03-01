import React from "react";
import { useQuery } from "react-query";
import {EuiLoadingSpinner, EuiText} from "@elastic/eui";
import { OlsApi } from "../../../../api/OlsApi";
import { getErrorMessageToDisplay } from "../../../../utils/helper";
import {DescriptionWidgetProps} from "../../../../utils/types";

const NO_DESCRIPTION = "No description available.";

function DescriptionWidget(props: DescriptionWidgetProps) {
  const { api, ontologyId, iri, descText, thingType, parameter, useLegacy, ...rest } = props;
  const olsApi = new OlsApi(api);

  const {
    data: thing,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery([api, "description", thingType, ontologyId, iri, parameter, useLegacy], () => {return olsApi.getThingObject(iri, thingType, ontologyId, parameter, useLegacy); });

    // TODO: Should DescriptionWidget show the following info message if defining ontology is not available (placed inside isSuccess span)?
    /*{
      !props.ontologyId && !descText && !response.inDefiningOntology && fixedThingType !== "ontology" &&
      <EuiFlexItem>
        <EuiText>
          <i>Defining ontology not available. Showing occurrence inside {response.ontology} instead.</i>
        </EuiText>
      </EuiFlexItem>
    }*/

  return (
    <>
      {isLoading && <EuiLoadingSpinner size="s" />}
      {isSuccess && thing &&
          <>
            <EuiText {...rest}>{descText || thing.getDescription() || NO_DESCRIPTION}</EuiText>
          </>
      }
      {isError && <EuiText>{getErrorMessageToDisplay(error, "description")}</EuiText>}
    </>
  );
}

export { DescriptionWidget };
