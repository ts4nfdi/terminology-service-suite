import React, { useEffect, useState } from "react";
import { EuiFlexGroup, EuiFlexItem, EuiLoadingSpinner, EuiPanel, EuiText } from "@elastic/eui";
import { OlsApi } from '../../../../../api/OlsApi'
import { useQuery } from 'react-query'

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

interface Synonyms {
    synonyms: []
}

async function getSynonyms(olsApi: OlsApi, entityType: string, iri?: string, ontologyId?: string, parameter?: string): Promise<Synonyms> {
    if (entityType == "term" || entityType == "class") {
        const response = await olsApi.getTerm(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter)
          .catch((error) => console.log(error));
        return {
            synonyms: response._embedded.terms[0].synonyms,
        };
    }
    if (entityType == "property") {
        const response = await olsApi.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri}, parameter)
          .catch((error) => console.log(error));
        return {
            synonyms: response._embedded.properties[0].synonyms,
        };
    }
    if (entityType == "individual") {
        const response = await olsApi.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri}, parameter)
          .catch((error) => console.log(error));
        return {
            synonyms: response._embedded.individuals[0].synonyms,
        };
    }
    return {
        synonyms: [],
    };
}

function AlternativeNameTabWidget(props: AlternativeNameTabWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId } = props;
  const olsApi = new OlsApi(api);

  const {
        data,
        isLoading,
        isSuccess,
        isError
    } = useQuery([api, iri, ontologyId, entityType, parameter, "entityInfo"], () => {
        return getSynonyms(olsApi, entityType, iri, ontologyId);
    });

  function renderAltLabel() {
    if (data?.synonyms && data.synonyms.length > 0) {
      return data.synonyms.map((value, index) => (
        <EuiFlexItem key={value + index}>{value}</EuiFlexItem>
      ));
    }
    return <EuiText>No alternative names exist.</EuiText>;
  }

  return (
    <EuiPanel>
      <EuiFlexGroup style={{ padding: 10 }} direction="column">
          {isSuccess && renderAltLabel()}
          {isLoading && <EuiLoadingSpinner></EuiLoadingSpinner>}
          {isError && <EuiText>No cross references available.</EuiText>}
      </EuiFlexGroup>
    </EuiPanel>
  );
}

export { AlternativeNameTabWidget };
