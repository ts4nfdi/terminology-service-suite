import React from "react";
import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiLink, EuiLoadingSpinner,
    EuiPanel,
    EuiText,
} from "@elastic/eui";
import { OlsApi } from '../../../../../api/OlsApi'
import { useQuery } from 'react-query'
import {getPreferredOntologyJSON} from "../../index";
import {getErrorMessageToDisplay} from "../../../index";

export interface CrossRefWidgetProps {
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

function getCrossRefs(response: any) {
    if (response && response['obo_xref']) {
        return {
            crossrefs: response['obo_xref'],
        };
    }
    else {
        return {
            crossrefs : [],
        };
    }
}

function CrossRefTabWidget(props: CrossRefWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId } = props;
  const olsApi = new OlsApi(api);

  const {
        data: ontologyJSON,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useQuery([api, iri, ontologyId, entityType, parameter, "entityInfo"], () => {
        return getPreferredOntologyJSON(olsApi, entityType, ontologyId, iri, parameter);
    });

  function renderCrossRefs(data: any) {
    if (data?.crossrefs && data.crossrefs.length > 0) {
      return data?.crossrefs.map((item: any, index: any) => (
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
                {isSuccess && renderCrossRefs(getCrossRefs(ontologyJSON))}
                {isLoading && <EuiLoadingSpinner/>}
                {isError && <EuiText>{getErrorMessageToDisplay(error, "cross references")}</EuiText>}
            </EuiFlexGroup>
        </>
    </EuiPanel>
  );
}

export { CrossRefTabWidget };
