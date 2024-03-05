import React from "react";
import {
    EuiLoadingSpinner,
    EuiText,
} from "@elastic/eui";
import { OlsApi } from '../../../../../api/OlsApi'
import { useQuery } from 'react-query'
import { getErrorMessageToDisplay } from "../../../../../utils/helper";
import {CrossRefWidgetProps} from "../../../../../utils/types";
import { Thing } from "../../../../../model/interfaces";
import { isEntity } from "../../../../../model/ModelTypeCheck";
import { CrossRefTabPresentation } from "./CrossRefTabPresentation";

function CrossRefTabWidget(props: CrossRefWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId, useLegacy } = props;
  const olsApi = new OlsApi(api);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery<Thing>(
    ["metadata", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy);
    }
  );

  return (
    <>
      {isSuccess && data && isEntity(data) && <CrossRefTabPresentation crossrefs={data.getCrossReferences()} />}
      {isLoading && <EuiLoadingSpinner />}
      {isError && <EuiText>{getErrorMessageToDisplay(error, "cross references")}</EuiText>}
    </>
  );
}

export { CrossRefTabWidget };
