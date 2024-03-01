import React from "react";
import {EuiLoadingSpinner, EuiPanel, EuiText} from "@elastic/eui";
import { OlsApi } from '../../../../../api/OlsApi'
import { useQuery } from 'react-query'
import { getErrorMessageToDisplay } from "../../../../../utils/helper";
import {AlternativeNameTabWidgetProps} from "../../../../../utils/types";
import {Entity} from "../../../../../model/interfaces";
import Reified from "../../../../../model/Reified";
import {getReifiedJSX} from "../../../../../model/StructureRendering";

function AlternativeNameTabWidget(props: AlternativeNameTabWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId, useLegacy } = props;
  const olsApi = new OlsApi(api);

  const {
        data: entity,
        isLoading: isLoading,
        isSuccess: isSuccess,
        isError: isError,
        error: error,
    } = useQuery([api, iri, ontologyId, entityType, parameter, useLegacy, "entityInfo"], () => {
        return olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy);
    });

  function renderAltLabel(entity: Entity) {
    if (entity.getSynonyms().length > 0) {
      return entity.getSynonyms().map((rf: Reified<any>, index: number) => (
        <p key={rf.value + index}>{getReifiedJSX(entity, rf, api)}</p>
      ));
    }
    return <EuiText>No alternative names exist.</EuiText>;
  }

    // TODO: Should AlternativeNameTabWidget show the following info message if defining ontology is not available (placed inside EuiPanel span)?
    /*{
        isSuccess && !props.ontologyId && !ontologyJSON["is_defining_ontology"] &&
        <EuiFlexItem>
            <EuiText>
                <i>Defining ontology not available. Showing occurrence inside {ontologyJSON["ontology_name"]} instead.</i>
            </EuiText>
            <EuiSpacer size={"s"}></EuiSpacer>
        </EuiFlexItem>
    }*/

  return (
    <EuiPanel>
      <EuiText style={{ padding: 10 }}>
          {isSuccess && entity && renderAltLabel(entity)}
          {isLoading && <EuiLoadingSpinner></EuiLoadingSpinner>}
          {isError && <EuiText>{getErrorMessageToDisplay(error, "alternative names")}</EuiText>}
      </EuiText>
    </EuiPanel>
  );
}

export { AlternativeNameTabWidget };
