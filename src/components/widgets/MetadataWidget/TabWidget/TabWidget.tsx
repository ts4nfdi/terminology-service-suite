import React from "react";
import { EuiLoadingSpinner, EuiText } from "@elastic/eui";
import {useQuery} from "react-query";
import {OlsApi} from "../../../../api/OlsApi";
import {TabWidgetProps} from "../../../../utils/types";
import { Entity, Thing } from "../../../../model/interfaces";
import { TabPresentation } from "./TabPresentation";
import { getErrorMessageToDisplay } from "../../../../utils/helper";
import { isEntity } from "../../../../model/ModelTypeCheck";

function TabWidget(props: TabWidgetProps) {
  const { iri, api, ontologyId, entityType, parameter, useLegacy, ...rest } = props;
  const olsApi = new OlsApi(api);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery<Thing>(
    ["tabdata", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy);
    }
  );

  function render(data: Entity) {
    return (
      <TabPresentation
        data={data}
        iri={iri}
        api={api}
        useLegacy={useLegacy}
        entityType={data.getTypePlural()}
      />
    );
  }

  return (
    <>
      {isLoading && <EuiLoadingSpinner />}
      {isError && <EuiText>{getErrorMessageToDisplay(error, "description")}</EuiText>}
      {isSuccess && data &&
        <>
          {isEntity(data) ? render(data) : null}
        </>
      }
    </>
  );
}

export { TabWidget };
