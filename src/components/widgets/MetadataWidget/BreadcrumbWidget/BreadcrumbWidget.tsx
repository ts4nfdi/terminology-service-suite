import React, { useEffect, useState } from "react";
import { EuiBadge, EuiFlexItem } from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import {useQuery} from "react-query";

export interface BreadcrumbWidgetProps {
  iri?: string;
  ontologyId?: string;
  api: string;
  /**
   * This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'
   */
  entityType:
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
  parameter?: string
}

const NO_SHORTFORM = "No short form available.";

async function getShortForm(olsApi: OlsApi, entityType: string, ontologyId?: string, iri?: string, parameter?: string): Promise<string> {
  if (entityType == "term"){
    const response = await olsApi.getTerm(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter)
        .catch((error) => console.log(error));
    if (response?._embedded?.terms[0].short_form != null && response._embedded.terms[0].short_form != null) {
      return response._embedded.terms[0].short_form.toUpperCase();
    } else {
      return NO_SHORTFORM;
    }
  }
  if (entityType == "property"){
    const response = await olsApi.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri}, parameter)
        .catch((error) => console.log(error));
    if (response?._embedded?.properties[0].short_form != null && response._embedded.properties[0].short_form != null) {
      return response._embedded.properties[0].short_form;
    } else {
      return NO_SHORTFORM;
    }
  }
  if (entityType == "individual"){
    const response = await olsApi.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri}, parameter)
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
  const { api, ontologyId, iri, entityType, colorFirst, colorSecond, parameter } = props;
  const fixedEntityType = entityType == "class" ? "term" : entityType
  const olsApi = new OlsApi(api);

  const {
    data: shortForm,
    isLoading,
  } = useQuery([api, "getDescription", fixedEntityType, ontologyId, iri, parameter], () => { return getShortForm(olsApi, fixedEntityType, ontologyId, iri, parameter); });

  return (
    <EuiFlexItem>
      <span>
        <EuiBadge color={colorFirst || "primary"}>{ontologyId?.toUpperCase()}</EuiBadge>
        {" > "}
        <EuiBadge color={colorSecond || "success"}>{shortForm}</EuiBadge>
      </span>
    </EuiFlexItem>
  );
}
export { BreadcrumbWidget };
