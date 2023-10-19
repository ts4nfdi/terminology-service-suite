import React from "react";
import { useQuery } from "react-query";
import { EuiLoadingSpinner, EuiText } from "@elastic/eui";
import { EuiTextProps } from "@elastic/eui/src/components/text/text";
import { OlsApi } from "../../../../api/OlsApi";
import {getErrorMessageToDisplay} from "../../index";

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

async function getDescription(olsApi: OlsApi, entityType: string, ontologyId?: string, iri?: string, parameter?: string): Promise<string> {
  if (entityType == "ontology"){
    const response = await olsApi.getOntology(undefined, undefined, {ontologyId: ontologyId}, parameter)
    return response?.config.description
  }
  if (entityType == "term"){
    const response = await olsApi.getTerm(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter)
    return response._embedded.terms[0].description[0];
  }
  if (entityType == "property"){
    const response = await olsApi.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri}, parameter)
    return response._embedded.properties[0].description[0];
  }
  if (entityType == "individual"){
    const response = await olsApi.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri}, parameter)
    return response._embedded.individuals[0].description[0];
  }
  //unacceptable object type
  throw Error("Unacceptable object type. Should be one of: 'term', 'class', 'property', 'individual'");
}

function DescriptionWidget(props: DescriptionWidgetProps) {
  const { api, ontologyId, iri, descText, entityType, parameter, ...rest } = props;
  const fixedentityType = entityType == "class" ? "term" : entityType
  const olsApi = new OlsApi(api);

  const {
    data: description,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery([api, "description", fixedentityType, ontologyId, iri, parameter], () => {return getDescription(olsApi, fixedentityType, ontologyId, iri, parameter); });

  return (
    <>
      {isSuccess && <EuiText {...rest}>{descText || description}</EuiText>}
      {isLoading && <EuiLoadingSpinner size="s" />}
      {isError && <EuiText>{getErrorMessageToDisplay(error, "description")}</EuiText>}
    </>
  );
}

export { DescriptionWidget };
