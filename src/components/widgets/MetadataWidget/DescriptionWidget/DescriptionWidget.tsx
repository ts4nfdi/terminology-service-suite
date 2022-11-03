import React from "react";
import { useQuery } from "react-query";
import { EuiLoadingSpinner, EuiText } from "@elastic/eui";
import { EuiTextProps } from "@elastic/eui/src/components/text/text";
import { OlsApi } from "../../../../api/OlsApi";

export interface DescriptionWidgetProps extends EuiTextProps {
  iri?: string;
  onto?: string;
  api: string;
  descText?: string;
  objType:
    | "ontology"
    | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
    | "individual"
    | "property"
    | string;
}

const NO_DESCRIPTION = "No description available.";

async function getDescription(olsApi: OlsApi, objType: string, onto?: string, iri?: string): Promise<string> {
  if (objType == "ontology"){
    const response = await olsApi.getOntology(undefined, undefined, {ontologyId: onto})
      .catch((error) => console.log(error));
    return response?.config.description || NO_DESCRIPTION;
  }
  if (objType == "term"){
    const response = await olsApi.getTerm(undefined, undefined, {ontologyId: onto, termIri: iri})
      .catch((error) => console.log(error));
    if (response?._embedded?.terms[0].description != null && response._embedded.terms[0].description[0] != null) {
      return response._embedded.terms[0].description[0];
    } else {
      return NO_DESCRIPTION;
    }
  }
  if (objType == "property"){
    const response = await olsApi.getProperty(undefined, undefined, {ontologyId: onto, propertyIri: iri})
      .catch((error) => console.log(error));
    if (response?._embedded?.properties[0].description != null && response._embedded.properties[0].description[0] != null) {
      return response._embedded.properties[0].description[0];
    } else {
      return NO_DESCRIPTION;
    }
  }
  if (objType == "individual"){
    const response = await olsApi.getIndividual(undefined, undefined, {ontologyId: onto, individualIri: iri})
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
  const { api, onto, iri, descText, objType, ...rest } = props;
  const fixedObjType = objType == "class" ? "term" : objType
  const olsApi = new OlsApi(api);

  const {
    data: description,
    isLoading,
  } = useQuery([api, "getDescription", fixedObjType, onto, iri], () => { return getDescription(olsApi, fixedObjType, onto, iri); });

  return (
    <>
      {isLoading ? <EuiLoadingSpinner size="s" /> : <EuiText {...rest}>{descText || description}</EuiText>}
    </>
  );
}

export { DescriptionWidget };
