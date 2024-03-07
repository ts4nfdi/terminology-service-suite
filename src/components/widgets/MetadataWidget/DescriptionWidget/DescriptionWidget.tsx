import React from "react";
import { useQuery } from "react-query";
import {EuiLoadingSpinner, EuiText} from "@elastic/eui";
import { OlsApi } from "../../../../api/OlsApi";
import { getErrorMessageToDisplay } from "../../../../utils/helper";
import {DescriptionWidgetProps} from "../../../../utils/types";
import { Thing } from "../../../../model/interfaces";
import { DescriptionPresentation } from "./DescriptionPresentation";

const NO_DESCRIPTION = "No description available.";

function DescriptionWidget(props: DescriptionWidgetProps) {
  const { api, ontologyId, iri, descText, thingType, parameter, useLegacy, ...rest } = props;
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
      return olsApi.getThingObject(iri, thingType, ontologyId, parameter, useLegacy);
    }
  );

  return (
    <>
      {isLoading && <EuiLoadingSpinner size="s" />}
      {isSuccess && data &&
        <DescriptionPresentation description={descText || data.getDescription() || NO_DESCRIPTION} descText={descText} {...rest}/>
      }
      {isError && <EuiText>{getErrorMessageToDisplay(error, "description")}</EuiText>}
    </>
  );
}

export { DescriptionWidget };
