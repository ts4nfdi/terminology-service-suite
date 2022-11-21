import React, { useEffect, useState } from "react";
import { EuiBadge, EuiFlexItem } from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import {useQuery} from "react-query";

export interface BreadcrumbWidgetProps {
  iri?: string;
  ontologyID?: string;
  api: string;
  /**
   * This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'
   */
  frontend?: string;
  objType:
      | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
      | "individual"
      | "property"
      | string;
  colorFirst?:
    | "primary"
    | "accent"
    | "success"
    | "warning"
    | "danger"
    | "ghost"
    | "text"
    | "subdued"
    | string;
  colorSecond?: string;
}

const NO_SHORTFORM = "No short form available.";

async function getShortForm(olsApi: OlsApi, objType: string, ontologyID?: string, iri?: string, frontend?: string): Promise<string> {
  if (objType == "term"){
    const response = await olsApi.getTerm(undefined, undefined, {ontologyId: ontologyID, termIri: iri, frontend: frontend})
        .catch((error) => console.log(error));
    if (response?._embedded?.terms[0].short_form != null && response._embedded.terms[0].short_form != null) {
      return response._embedded.terms[0].short_form.toUpperCase();
    } else {
      return NO_SHORTFORM;
    }
  }
  if (objType == "property"){
    const response = await olsApi.getProperty(undefined, undefined, {ontologyId: ontologyID, propertyIri: iri, frontend: frontend})
        .catch((error) => console.log(error));
    if (response?._embedded?.properties[0].short_form != null && response._embedded.properties[0].short_form != null) {
      return response._embedded.properties[0].short_form;
    } else {
      return NO_SHORTFORM;
    }
  }
  if (objType == "individual"){
    const response = await olsApi.getIndividual(undefined, undefined, {ontologyId: ontologyID, individualIri: iri, frontend: frontend})
        .catch((error) => console.log(error));
    if (response?._embedded?.individuals[0].short_form != null && response._embedded.individuals[0].short_form != null) {
      return response._embedded.individuals[0].short_form;
    } else {
      return NO_SHORTFORM;
    }
  }
  //unacceptable object type
  return NO_SHORTFORM;
}

function BreadcrumbWidget(props: BreadcrumbWidgetProps) {
  const { api, ontologyID, iri, frontend, objType, colorFirst, colorSecond } = props;
  const fixedObjType = objType == "class" ? "term" : objType
  const olsApi = new OlsApi(api);

  const {
    data: shortForm,
    isLoading,
  } = useQuery([api, "getDescription", fixedObjType, ontologyID, iri, frontend], () => { return getShortForm(olsApi, fixedObjType, ontologyID, iri, frontend); });

  return (
    <EuiFlexItem>
      <span>
        <EuiBadge color={colorFirst || "primary"}>{ontologyID?.toUpperCase()}</EuiBadge>
        {" > "}
        <EuiBadge color={colorSecond || "success"}>{shortForm}</EuiBadge>
      </span>
    </EuiFlexItem>
  );
}
export { BreadcrumbWidget };
