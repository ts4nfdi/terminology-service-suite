import React from "react";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import {EuiLoadingSpinner, EuiProvider, EuiText} from "@elastic/eui";
import { EuiTextProps } from "@elastic/eui/src/components/text/text";
import { OlsApi } from "../../../../api/OlsApi";
import ReactDOM from "react-dom";

export interface DescriptionWidgetProps extends EuiTextProps {
  iri?: string;
  ontologyId?: string;
  api: string;
  descText?: string;
  entityType:
    | "ontology"
    | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
    | "individual"
    | "property"
    | string;
  parameter?: string
}

const NO_DESCRIPTION = "No description available.";

async function getDescription(olsApi: OlsApi, entityType: string, ontologyId?: string, iri?: string, parameter?: string): Promise<string> {
  if (entityType == "ontology"){
    const response = await olsApi.getOntology(undefined, undefined, {ontologyId: ontologyId}, parameter)
      .catch((error) => console.log(error));
    return response?.config.description || NO_DESCRIPTION;
  }
  if (entityType == "term"){
    const response = await olsApi.getTerm(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter)
      .catch((error) => console.log(error));
    if (response?._embedded?.terms[0].description != null && response._embedded.terms[0].description[0] != null) {
      return response._embedded.terms[0].description[0];
    } else {
      return NO_DESCRIPTION;
    }
  }
  if (entityType == "property"){
    const response = await olsApi.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri}, parameter)
      .catch((error) => console.log(error));
    if (response?._embedded?.properties[0].description != null && response._embedded.properties[0].description[0] != null) {
      return response._embedded.properties[0].description[0];
    } else {
      return NO_DESCRIPTION;
    }
  }
  if (entityType == "individual"){
    const response = await olsApi.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri}, parameter)
      .catch((error) => console.log(error));
    if (response?._embedded?.individuals[0].description != null && response._embedded.individuals[0].description[0] != null) {
      return response._embedded.individuals[0].description[0];
    } else {
      return NO_DESCRIPTION;
    }
  }
  //unacceptable object type
  return NO_DESCRIPTION;
}

function DescriptionWidget(props: DescriptionWidgetProps) {
  const { api, ontologyId, iri, descText, entityType, parameter, ...rest } = props;
  const fixedentityType = entityType == "class" ? "term" : entityType
  const olsApi = new OlsApi(api);

  const {
    data: description,
    isLoading,
  } = useQuery([api, "description", fixedentityType, ontologyId, iri, parameter], () => {return getDescription(olsApi, fixedentityType, ontologyId, iri, parameter); });

  return (
    <>
      {isLoading ? <EuiLoadingSpinner size="s" /> : <EuiText {...rest}>{descText || description }</EuiText>}
    </>
  );
}

function createDescription(props: DescriptionWidgetProps, container: any, callback?:()=>void) {
  ReactDOM.render(WrappedDescriptionWidget(props), container, callback);
}

function WrappedDescriptionWidget(props: DescriptionWidgetProps) {
  const queryClient = new QueryClient();
  return (
      <EuiProvider colorMode="light">
        <QueryClientProvider client={queryClient}>
          <DescriptionWidget
              api={props.api}
              ontologyId={props.ontologyId}
              iri={props.iri}
              descText={props.descText}
              entityType={props.entityType}
              parameter={props.parameter}
              color={props.color}
          />
        </QueryClientProvider>
      </EuiProvider>
  )
}

export { DescriptionWidget, createDescription };
