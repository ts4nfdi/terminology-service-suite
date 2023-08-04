import React from "react";
import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiLink, EuiLoadingSpinner,
    EuiPanel, EuiProvider,
    EuiText,
} from "@elastic/eui";
import { OlsApi } from '../../../../../api/OlsApi'
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import {TabWidget} from "../TabWidget";
import ReactDOM from "react-dom";

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

interface CrossRefs {
    crossrefs: [{
      database: string,
      id: string,
      url: string
    }]
}

async function getCorssRefs(olsApi: OlsApi, entityType: string, iri?: string, ontologyId?: string, parameter?: string): Promise<CrossRefs> {
    if (entityType == "term" || entityType == "class") {
        const response = await olsApi.getTerm(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter)
          .catch((error) => console.log(error));
        return {
            crossrefs: response._embedded.terms[0].obo_xref,
        };
    }
    if (entityType == "property") {
        const response = await olsApi.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri}, parameter)
          .catch((error) => console.log(error));
        return {
            crossrefs: response._embedded.properties[0].obo_xref,
        };
    }
    if (entityType == "individual") {
        const response = await olsApi.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri}, parameter)
          .catch((error) => console.log(error));
        return {
            crossrefs: response._embedded.individuals[0].obo_xref,
        };
    }
    return {
       crossrefs : [{
         database: "",
         id: "",
         url: ""
       }],
    };
}

function CrossRefTabWidget(props: CrossRefWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId } = props;
  const olsApi = new OlsApi(api);

  const {
        data,
        isLoading,
        isSuccess,
        isError,
    } = useQuery([api, iri, ontologyId, entityType, parameter, "entityInfo"], () => {
        return getCorssRefs(olsApi, entityType, iri, ontologyId);
    });

  function renderCrossRefs() {
    if (data?.crossrefs && data.crossrefs.length > 0) {
      return data?.crossrefs.map((item, index) => (
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

  return (
    <EuiPanel>
      <EuiFlexGroup style={{ padding: 7 }} direction="column">
        {isSuccess && renderCrossRefs()}
        {isLoading && <EuiLoadingSpinner/>}
        {isError && <EuiText>No cross references available.</EuiText>}
      </EuiFlexGroup>
    </EuiPanel>
  );
}

function createCrossRefTab(props: CrossRefWidgetProps, container: any, callback?: ()=>void) {
    ReactDOM.render(WrappedCrossRefTabWidget(props), container, callback);
}

function WrappedCrossRefTabWidget(props: CrossRefWidgetProps) {
    const queryClient = new QueryClient();
    return (
        <EuiProvider colorMode="light">
            <QueryClientProvider client={queryClient}>
                <CrossRefTabWidget
                    iri={props.iri}
                    api={props.api}
                    ontologyId={props.ontologyId}
                    entityType={props.entityType}
                    parameter={props.parameter}
                />
            </QueryClientProvider>
        </EuiProvider>
    )
}

export { CrossRefTabWidget, createCrossRefTab };
