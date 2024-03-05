import React from "react";
import {useQuery} from "react-query";
import {EuiLoadingSpinner, EuiText} from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import { getErrorMessageToDisplay } from "../../../../utils/helper";
import {TitleWidgetProps} from "../../../../utils/types";
import {isOntology} from "../../../../model/ModelTypeCheck";
import { Thing } from "../../../../model/interfaces";
import { TitlePresentation } from "./TitlePresentation";

const NO_TITLE = "No title available.";

function TitleWidget(props: TitleWidgetProps) {
    const {iri, ontologyId, api, titleText, thingType, parameter, useLegacy, default_value} = props;
    const olsApi = new OlsApi(api);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery<Thing>(
    ["metadata", api, parameter, thingType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getThingObject(iri, thingType, ontologyId, parameter);
    }
  );



  return (
    <>
      {isLoading && <EuiLoadingSpinner size="s" />}
      {isSuccess && data &&
        <TitlePresentation title={titleText || (isOntology(data) ? data.getName() : data.getLabel()) || default_value || NO_TITLE} />
      }
      {isError && <EuiText>{getErrorMessageToDisplay(error, "title")}</EuiText>}
    </>
  );
}

export {TitleWidget};
