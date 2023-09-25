import React from "react";
import {EuiBadge, EuiLoadingSpinner} from "@elastic/eui";
import {OlsApi} from "../../../../api/OlsApi";
import {useQuery} from "react-query";
import {getErrorMessageToDisplay} from "../../index";

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

async function getShortForm(olsApi: OlsApi, entityType: string, ontologyId?: string, iri?: string, parameter?: string): Promise<string> {
  if (entityType == "term"){
    const response = await olsApi.getTerm(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter)
    return response._embedded.terms[0].short_form.toUpperCase();
  }
  if (entityType == "property"){
    const response = await olsApi.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri}, parameter)
    return response._embedded.properties[0].short_form;
  }
  if (entityType == "individual"){
    const response = await olsApi.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri}, parameter)
    return response._embedded.individuals[0].short_form;
  }
  //unacceptable object type
  throw Error("Unacceptable object type. Should be one of: 'term', 'class', 'property', 'individual'");
}

function BreadcrumbWidget(props: BreadcrumbWidgetProps) {
  const { api, ontologyId, iri, entityType, colorFirst, colorSecond, parameter } = props;
  const fixedEntityType = entityType == "class" ? "term" : entityType
  const olsApi = new OlsApi(api);

  const {
    data: shortForm,
    isLoading: isLoadingShortForm,
    isError: isErrorShortForm,
    error: errorShortForm,
  } = useQuery([api, "short_form", fixedEntityType, ontologyId, iri, parameter], () => { return getShortForm(olsApi, fixedEntityType, ontologyId, iri, parameter); });

  return (
    <span>
      <EuiBadge color={colorFirst || "primary"}>{ontologyId?.toUpperCase()}</EuiBadge>
        {" > "}
      <>{
        isErrorShortForm ? <EuiBadge color={colorSecond || "danger"}>{getErrorMessageToDisplay(errorShortForm)}</EuiBadge> :
            isLoadingShortForm ? <EuiBadge color={colorSecond || "warning"}><EuiLoadingSpinner size="s" /></EuiBadge> :
                <EuiBadge color={colorSecond || "success"}>{shortForm}</EuiBadge>
      }</>
    </span>
  );
}
export { BreadcrumbWidget };
