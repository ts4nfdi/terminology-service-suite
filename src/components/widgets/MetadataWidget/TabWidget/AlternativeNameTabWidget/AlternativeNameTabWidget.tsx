import React from "react";
import {EuiFlexGroup, EuiFlexItem, EuiLoadingSpinner, EuiPanel, EuiSpacer, EuiText} from "@elastic/eui";
import { OlsApi } from '../../../../../api/OlsApi'
import { useQuery } from 'react-query'
import {getPreferredOntologyJSON} from "../../index";

export interface AlternativeNameTabWidgetProps {
  iri: string;
  api: string;
  ontologyId?: string;
  entityType:
      | "ontology"
      | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
      | "individual"
      | "property"
      | string;
  parameter?: string;
}


function AlternativeNameTabWidget(props: AlternativeNameTabWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId } = props;
  const olsApi = new OlsApi(api);

  const {
        data: ontologyJSON,
        isLoading: isLoading,
        isSuccess: isSuccess,
        isError: isError
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

  return (
    <EuiPanel>
      <>
        {
          isSuccess && !props.ontologyId && !ontologyJSON["is_defining_ontology"] &&
          <EuiFlexItem>
            <EuiText>
              <i>Defining ontology not available. Showing occurrence inside {ontologyJSON["ontology_name"]} instead.</i>
            </EuiText>
            <EuiSpacer size={"s"}></EuiSpacer>
          </EuiFlexItem>
        }
        <EuiFlexGroup style={{ padding: 10 }} direction="column">
          {isSuccess && renderAltLabel()}
          {isLoading && <EuiLoadingSpinner></EuiLoadingSpinner>}
          {isError && <EuiText>No cross references available.</EuiText>}
        </EuiFlexGroup>
      </>

    </EuiPanel>
  );
}

export { AlternativeNameTabWidget };
