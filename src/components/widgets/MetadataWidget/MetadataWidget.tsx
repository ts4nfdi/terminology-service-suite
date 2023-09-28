import React from "react";
import {EuiFlexGroup, EuiFlexItem, EuiLoadingSpinner, EuiText} from "@elastic/eui";
import { BreadcrumbWidget } from "./BreadcrumbWidget";
import { IriWidget } from "./IriWidget";
import { TitleWidget } from "./TitleWidget";
import { DescriptionWidget } from "./DescriptionWidget";
import { TabWidget } from "./TabWidget";
import {useQuery} from "react-query";
import {OlsApi} from "../../../api/OlsApi";

export interface MetadataWidgetProps {
  iri: string;
  ontologyId?: string;
  api: string;
  entityType:
    | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
    | "individual"
    | "property"
    | string;
  parameter?: string
}

/**
 * returns JSON of defining ontology or of first ontology if defining ontology is not found
 */
async function getPreferredOntologyJSON(olsApi: OlsApi, entityType: string, iri: string, parameter: string) {
    if(entityType === "term" || entityType === "class") {
        const response = await olsApi.getTerm(undefined, undefined, {termIri: iri}, parameter)
            .catch((error) => console.log(error));
        const definingOntologyArr = response["_embedded"]["terms"].filter((term: any) => {return term["is_defining_ontology"]});
        if(definingOntologyArr.length > 0) return definingOntologyArr[0];
        else return response["_embedded"]["terms"][0];
    }
    else if(entityType === "property") {
        const response = await olsApi.getProperty(undefined, undefined, {propertyIri: iri}, parameter)
            .catch((error) => console.log(error));
        const definingOntologyArr = response["_embedded"]["terms"].filter((term: any) => {return term["is_defining_ontology"]});
        if(definingOntologyArr.length > 0) return definingOntologyArr[0];
        else return response["_embedded"]["terms"][0];
    }
    else if(entityType === "individual") {
        const response = await olsApi.getIndividual(undefined, undefined, {individualIri: iri}, parameter)
            .catch((error) => console.log(error));
        const definingOntologyArr = response["_embedded"]["terms"].filter((term: any) => {return term["is_defining_ontology"]});
        if(definingOntologyArr.length > 0) return definingOntologyArr[0];
        else return response["_embedded"]["terms"][0];
    }
    else {
        throw Error("Unexpected entity type. Should be one of: 'term', 'class', 'property', 'individual'");
    }
}

function MetadataWidget(props: MetadataWidgetProps) {
    const { iri, api, entityType, parameter } = props;

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
            return getPreferredOntologyJSON(olsApi, entityType, iri, parameter || "");
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
                          <EuiText color="danger">
                              Defining ontology not available. Showing occurrence inside {ontologyJSON["ontology_name"]} instead.
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
