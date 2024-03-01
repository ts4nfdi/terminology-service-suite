import React from "react";
import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiLoadingSpinner,
    EuiPanel,
    EuiText,
} from "@elastic/eui";
import { OlsApi } from '../../../../../api/OlsApi'
import { useQuery } from 'react-query'
import { getErrorMessageToDisplay } from "../../../../../utils/helper";
import {CrossRefWidgetProps} from "../../../../../utils/types";
import {randomString} from "../../../../../app/util";
import {getReifiedJSX} from "../../../../../model/StructureRendering";
import Reified from "../../../../../model/Reified";
import {Entity} from "../../../../../model/interfaces";

function CrossRefTabWidget(props: CrossRefWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId, useLegacy } = props;
  const olsApi = new OlsApi(api);

  const {
        data: entity,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useQuery([api, iri, ontologyId, entityType, parameter, useLegacy, "entityInfo"], () => {
        return olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy);
    });

  function renderCrossRefs(entity: Entity) {
      const crossRefs = Reified.fromJson<string>(entity.getCrossReferences())
      if(crossRefs.length == 0) return <EuiText>No cross references exist.</EuiText>;

      return crossRefs.map((crossRef) => {
          return <p key={randomString()}>{getReifiedJSX(entity, crossRef, api)}</p>;
      })
  }

    // TODO: Should CrossRefTabWidget show the following info message if defining ontology is not available (placed inside EuiPanel span)?
    /*{
        isSuccess && !props.ontologyId && !entity["is_defining_ontology"] &&
        <EuiFlexItem>
            <EuiText>
                <i>Defining ontology not available. Showing occurrence inside {entity["ontology_name"]} instead.</i>
            </EuiText>
            <EuiSpacer size={"s"}></EuiSpacer>
        </EuiFlexItem>
    }*/

  return (
    <EuiPanel>
        <>
            <EuiText style={{ padding: 7 }}>
                {isSuccess && entity && renderCrossRefs(entity)}
                {isLoading && <EuiLoadingSpinner/>}
                {isError && <EuiText>{getErrorMessageToDisplay(error, "cross references")}</EuiText>}
            </EuiText>
        </>
    </EuiPanel>
  );
}

export { CrossRefTabWidget };
