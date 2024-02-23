import React from "react";
import {EuiFlexGroup, EuiFlexItem, EuiIconTip, EuiLoadingSpinner, EuiText} from "@elastic/eui";
import { BreadcrumbWidget } from "./BreadcrumbWidget";
import { IriWidget } from "./IriWidget";
import { TitleWidget } from "./TitleWidget";
import { DescriptionWidget } from "./DescriptionWidget";
import { TabWidget } from "./TabWidget";
import {useQuery} from "react-query";
import {OlsApi} from "../../../api/OlsApi";
import { getPreferredOntologyJSON } from "../../../utils/helper";

export interface MetadataWidgetProps {
  iri: string;
  ontologyId?: string;
  api: string;
  entityType:
    | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
    | "individual"
    | "property"
    | string;
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
  parameter?: string
}

function MetadataWidget(props: MetadataWidgetProps) {
    const { iri, api, ontologyId, entityType, parameter } = props;

    const olsApi = new OlsApi(api);

    const {
        data: ontologyJSON,
        isLoading: isLoadingOntologyId,
        isSuccess: isSuccessOntologyId,
        isError: isErrorOntologyId,
        error: errorOntologyId
    } = useQuery(
        [
            "ontologyId",
            iri,
            api,
            entityType,
            parameter,
            props.ontologyId
        ],
        async () => {
            return getPreferredOntologyJSON(olsApi, entityType, ontologyId, iri, parameter);
        },
        {

        }
    )

  return (
      <>
          {isLoadingOntologyId && <EuiLoadingSpinner size="s"></EuiLoadingSpinner>}
          {(props.ontologyId || isSuccessOntologyId) &&
              <EuiFlexGroup direction="column" style={{ maxWidth: 600 }}>
                  {
                      !props.ontologyId && !ontologyJSON["is_defining_ontology"] &&
                      <EuiFlexItem>
                          <EuiText size={"m"}>
                              <i>Defining ontology not available </i>
                              <EuiIconTip type={"iInCircle"} color={"subdued"} content={`Showing occurence inside ${ontologyJSON["ontology_name"]} instead.`}/>
                          </EuiText>
                      </EuiFlexItem>
                  }
                  <EuiFlexItem grow={false}>
                <span>
                  <BreadcrumbWidget api={api} iri={iri} entityType={entityType} ontologyId={props.ontologyId ? props.ontologyId : ontologyJSON["ontology_name"]} parameter={parameter}/>
                </span>
                  </EuiFlexItem>
                  <EuiFlexItem>
                      <EuiFlexGroup direction="column">
                          <EuiFlexItem>
                              <EuiFlexGroup>
                                  <EuiFlexItem grow={false}>
                                      <IriWidget iri={iri} parameter={parameter}/>
                                  </EuiFlexItem>
                              </EuiFlexGroup>
                          </EuiFlexItem>

                          <EuiFlexItem grow={false}>
                              <TitleWidget iri={iri} api={api} ontologyId={props.ontologyId ? props.ontologyId : ontologyJSON["ontology_name"]} entityType={entityType} parameter={parameter} />
                          </EuiFlexItem>
                      </EuiFlexGroup>
                  </EuiFlexItem>
                  <EuiFlexItem>
                      <DescriptionWidget iri={iri} api={api} ontologyId={props.ontologyId ? props.ontologyId : ontologyJSON["ontology_name"]} entityType={entityType} parameter={parameter}/>
                  </EuiFlexItem>
                  <EuiFlexItem>
                      <TabWidget
                          iri={iri}
                          ontologyId={props.ontologyId ? props.ontologyId : ontologyJSON["ontology_name"]}
                          api={api}
                          parameter={parameter}
                          entityType={entityType}/>
                  </EuiFlexItem>
              </EuiFlexGroup>
          }
      </>
  );
}
export { MetadataWidget };
