import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiPanel, EuiText } from "@elastic/eui";
import {AlternativeNameTabWidgetPresentationProps} from "../../../../../utils/types";

function AlternativeNameTabPresentation(props: AlternativeNameTabWidgetPresentationProps) {

  function renderAltLabel() {
    if (props.synonyms && props.synonyms.length > 0) {
      return props.synonyms.map((value: string, index: number) => (
        <EuiFlexItem key={value + index}>{value}</EuiFlexItem>
      ));
    }
    return <EuiText>No alternative names exist.</EuiText>;
  }

  // Using reification/passing the Entity class could provide more information
  // function renderAltLabel(entity: Entity) {
  //   if (entity.getSynonyms().length > 0) {
  //     return entity.getSynonyms().map((rf: Reified<any>, index: number) => (
  //       <p key={rf.value + index}>{getReifiedJSX(entity, rf, api)}</p>
  //     ));
  //   }
  //   return <EuiText>No alternative names exist.</EuiText>;
  // }

  return (
    <EuiPanel>
      <EuiFlexGroup style={{ padding: 10 }} direction="column">
        {renderAltLabel()}
      </EuiFlexGroup>
    </EuiPanel>
  );
}

export { AlternativeNameTabPresentation };
