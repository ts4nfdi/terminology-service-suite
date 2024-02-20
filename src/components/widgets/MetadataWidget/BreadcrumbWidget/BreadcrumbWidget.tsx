import React from "react";
import { EuiBadge } from "@elastic/eui";
import { OlsApi } from "../../../../api/OlsApi";
import { useQuery } from "react-query";
import { getErrorMessageToDisplay, getPreferredOntologyJSON } from "../../../../utils/helper";
import { BreadcrumbPresentation } from "./BreadcrumbPresentation";


export interface BreadcrumbWidgetProps {
  iri: string;
  ontologyId?: string;
  api: string;
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
  /**
   * Additional parameters to pass to the API.
   *
   * This parameters can be used to filter the search results. Each parameter can be combined via
   * the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign
   * <i><b>,</b></i>. The following keys could be used:<br/> <br/>
   *  <table>
   *  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
   *  <tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>
   *  <tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>
   *  <tr><td>slim</td><td>Restrict a search to a particular set of slims by name</td></tr>
   *  <tr><td>fieldList</td><td>Specify the fields to return. Defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td></tr>
   *  <tr><td>obsoletes</td><td>Set to true to include obsolete terms in the results</td></tr>
   *  <tr><td>local</td><td>Set to true to only return terms that are in a defining ontology, e.g. only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>
   *  <tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>
   *  <tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>
   *  <tr><td>rows</td><td>Set results per page</td></tr>
   *  <tr><td>start</td><td>Set the results page number</td></tr>
   *  <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. collection=nfdi4health</td></tr>
   * </table>
   */
  parameter?: string;
}

function BreadcrumbWidget(props: BreadcrumbWidgetProps) {
  const { api, ontologyId, iri, entityType, colorFirst, colorSecond, parameter } = props;
  const fixedEntityType = entityType == "class" ? "term" : entityType;
  const olsApi = new OlsApi(api);

  const {
    data: ontologyJSON,
    isLoading: isLoading,
    isSuccess: isSuccess,
    isError: isError,
    error: error
  } = useQuery([api, "short_form", fixedEntityType, ontologyId, iri, parameter], () => {
    return getPreferredOntologyJSON(olsApi, fixedEntityType, ontologyId, iri, parameter);
  });

  console.log(ontologyJSON);
  return (
    <>
      {isSuccess &&
        <BreadcrumbPresentation
          isDefiningOntology={ontologyJSON["is_defining_ontology"]}
          ontologyName={ontologyJSON["ontology_name"]}
          shortForm={ontologyJSON["short_form"]}
          ontologyId={ontologyId}
        />
      }
      {isError &&
        <span>
                <EuiBadge
                  color={colorFirst || ((props.ontologyId || (ontologyJSON && ontologyJSON["ontology_name"])) ? "primary" : "danger")}>{props.ontologyId?.toUpperCase() || (ontologyJSON && ontologyJSON["ontology_name"]?.toUpperCase()) || getErrorMessageToDisplay(error, "ontology")}</EuiBadge>
          {" > "}
          <EuiBadge
            color={colorSecond || ((ontologyJSON && ontologyJSON["short_form"]) ? "success" : "danger")}>{(ontologyJSON && ontologyJSON["short_form"]) ? ontologyJSON["short_form"].toUpperCase() : getErrorMessageToDisplay(error, "short form")}</EuiBadge>
            </span>
      }
    </>
  );
}

export { BreadcrumbWidget };
