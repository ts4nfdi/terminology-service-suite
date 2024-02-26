import React from "react";
import { EuiFlexGroup, EuiFlexItem, EuiLink, EuiPanel, EuiText } from "@elastic/eui";

export interface CrossRefPresentationProps {
  crossrefs: any[];
}

function CrossRefTabPresentation(props: CrossRefPresentationProps) {

  // TODO adapt to v2 response if linkedEntites is the same as obo_xref
  function renderCrossRefs(crossrefs: any) {
    if (crossrefs && crossrefs.length > 0) {
      return crossrefs?.map((item: any, index: any) => (
        <EuiFlexItem key={index}>
          {item.database ? (
            item.url ? (
              <EuiLink href={item.url} external target="_blank">
                {item.database}:{item.id}
              </EuiLink>
            ) : (
              `${item.database}:${item.id}`
            )
          ) : (//just show the ID if there is no value for the database
            item.url ? (
              <EuiLink href={item.url} external target="_blank">
                {item.id}
              </EuiLink>
            ) : (
              `${item.id}`
            )
          )}

        </EuiFlexItem>
      ));
    }
    return <EuiText>No cross references exist.</EuiText>;
  }

  // TODO: Should CrossRefTabWidget show the following info message if defining ontology is not available (placed inside EuiPanel span)?
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
      <>
        <EuiFlexGroup style={{ padding: 7 }} direction="column">
          {renderCrossRefs(props.crossrefs)}
        </EuiFlexGroup>
      </>
    </EuiPanel>
  );
}

export { CrossRefTabPresentation };
