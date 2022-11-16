import React from "react";
import { useQuery } from "react-query";
import { EuiLoadingSpinner, EuiText } from "@elastic/eui";
import { OlsApi } from "../../../../api/OlsApi";

export interface TitleWidgetProps {
  iri?: string;
  ontologyID?: string;
  api: string;
  titleText?: string;
  objType:
    | "ontology"
    | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
    | "individual"
    | "property"
    | string;
}

const NO_TITLE = "No title available.";


async function getTitle(olsApi: OlsApi, objType: string, ontologyID?: string, iri?: string): Promise<string> {
  if (objType == "ontology") {
    const response = await olsApi.getOntology(undefined, undefined, {ontologyId: ontologyID})
      .catch((error) => console.log(error));
    return response?.config.title || NO_TITLE
  }
  if (objType == "term") {
    const response = await olsApi.getTerm(undefined, undefined, {ontologyId: ontologyID, termIri: iri})
      .catch((error) => console.log(error));
    return response?._embedded?.terms[0].label || NO_TITLE
  }
  if (objType == "property") {
    const response = await olsApi.getProperty(undefined, undefined, {ontologyId: ontologyID, propertyIri: iri})
      .catch((error) => console.log(error));
    return response?._embedded?.properties[0].label || NO_TITLE
  }
  if (objType == "individual"){
    const response = await olsApi.getIndividual(undefined, undefined, {ontologyId: ontologyID, individualIri: iri})
      .catch((error) => console.log(error));
    return response?._embedded?.individuals[0].label || NO_TITLE
  }
  return NO_TITLE;
}

function TitleWidget(props: TitleWidgetProps) {
  const { iri, ontologyID, api, titleText, objType } = props;
  const fixedObjType = objType == "class" ? "term" : objType
  const olsApi = new OlsApi(api);

  const {data: label,
  isLoading,
  } = useQuery([api, "getTitle", fixedObjType, ontologyID, iri], () => { return getTitle(olsApi, fixedObjType, ontologyID, iri); });

  return (
    <>
      {isLoading ? <EuiLoadingSpinner size="s" /> : <EuiText>{titleText || label}</EuiText>}
    </>
  );
}

export { TitleWidget };
