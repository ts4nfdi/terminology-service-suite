import React from "react";
import { EuiBadge } from "@elastic/eui";
import { OlsApi } from "../../../../api/OlsApi";
import { useQuery } from "react-query";
import { getErrorMessageToDisplay } from "../../../../utils/helper";
import { BreadcrumbPresentation } from "./BreadcrumbPresentation";
import { Thing } from "../../../../model/interfaces";
import { EntityTypeName, isEntity } from "../../../../model/ModelTypeCheck";


export interface BreadcrumbWidgetProps {
  iri: string;
  ontologyId?: string;
  api: string;
  entityType: EntityTypeName;
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
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery<Thing>(
    ["metadata", api, parameter, entityType, iri, ontologyId],
    async () => {
      return olsApi.getEntityObject(iri, entityType, ontologyId, parameter);
    }
  );

  return (
    <>
      {isSuccess && data && isEntity(data) &&
        <BreadcrumbPresentation
          isDefiningOntology={data.getIsDefiningOntology()}
          ontologyName={data.getOntologyId()}
          shortForm={data.getShortForm()}
          ontologyId={ontologyId}
        />
      }
      {isError && data && isEntity(data) &&
        <span>
                <EuiBadge
                  color={colorFirst || ((props.ontologyId || (data && data.getOntologyId())) ? "primary" : "danger")}>{props.ontologyId?.toUpperCase() || (data && data.getOntologyId()?.toUpperCase()) || getErrorMessageToDisplay(error, "ontology")}</EuiBadge>
          {" > "}
          <EuiBadge
            color={colorSecond || ((data && data.getShortForm()) ? "success" : "danger")}>{(data && data.getShortForm()) ? data.getShortForm().toUpperCase() : getErrorMessageToDisplay(error, "short form")}</EuiBadge>
            </span>
      }
    </>
  );
}

export { BreadcrumbWidget };
