import React from "react";
import {EuiFlexGroup, EuiFlexItem, EuiLoadingSpinner, EuiPanel, EuiText} from "@elastic/eui";
import { OlsApi } from '../../../../../api/OlsApi'
import { useQuery } from 'react-query'
import { getErrorMessageToDisplay, getPreferredOntologyJSON } from "../../../../../utils/helper";
import {AlternativeNameTabWidgetProps} from "../../../../../utils/types";

function AlternativeNameTabWidget(props: AlternativeNameTabWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId } = props;
  const olsApi = new OlsApi(api);

  const {
        data: ontologyJSON,
        isLoading: isLoading,
        isSuccess: isSuccess,
        isError: isError,
        error: error,
    } = useQuery([api, iri, ontologyId, entityType, parameter, "entityInfo"], () => {
        return getPreferredOntologyJSON(olsApi, entityType, ontologyId, iri, parameter);
    });

  function renderAltLabel() {
    if (ontologyJSON['synonyms'] && ontologyJSON['synonyms'].length > 0) {
      return ontologyJSON['synonyms'].map((value: string, index: number) => (
        <EuiFlexItem key={value + index}>{value}</EuiFlexItem>
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
      <EuiFlexGroup style={{ padding: 10 }} direction="column">
          {isSuccess && renderAltLabel()}
          {isLoading && <EuiLoadingSpinner></EuiLoadingSpinner>}
          {isError && <EuiText>{getErrorMessageToDisplay(error, "alternative names")}</EuiText>}
      </EuiFlexGroup>
    </EuiPanel>
  );
}

export { AlternativeNameTabWidget };
