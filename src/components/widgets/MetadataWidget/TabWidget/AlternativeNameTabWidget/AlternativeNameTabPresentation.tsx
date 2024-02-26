import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiText } from "@elastic/eui";

export interface AlternativeNameTabWidgetPresentationProps {
  synonyms: any[];
}


function AlternativeNameTabPresentation(props: AlternativeNameTabWidgetPresentationProps) {

  function renderAltLabel() {
    if (props.synonyms && props.synonyms.length > 0) {
      return props.synonyms.map((value: string, index: number) => (
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
        {renderAltLabel()}
      </EuiFlexGroup>
    </EuiPanel>
  );
}

export { AlternativeNameTabPresentation };
