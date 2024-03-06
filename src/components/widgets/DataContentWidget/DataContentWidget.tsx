import React, {useState} from "react";
import { EuiText, EuiLoadingSpinner, EuiCard } from "@elastic/eui";
import { useQuery } from 'react-query';
import { apiCallFn, OlsApi } from "../../../api/OlsApi";

export interface DataContentWidgetProps {
  api: string;
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

const NOT_AVAILABLE = "n/a";



async function getTotalAmountOfTerms(apiCall: apiCallFn, parameter?: string): Promise<number> {
  const response = await apiCall({ size: "500" },undefined, undefined, parameter);
  if (response.page.totalElements != null && response._embedded && response._embedded.ontologies) {
    let totalAmount = 0;
    for (const ontology of response._embedded.ontologies) {
      totalAmount += ontology.numberOfTerms;
    }
    return totalAmount;
  } else {
    throw new Error("Unexpected API response");
  }
}

async function getTotalAmountOfProperties(apiCall: apiCallFn, parameter?: string): Promise<number> {
  const response = await apiCall({ size: "500" },undefined,undefined, parameter);
  if (response.page.totalElements != null && response._embedded && response._embedded.ontologies) {
    let totalAmount = 0;
    for (const ontology of response._embedded.ontologies) {
      totalAmount += ontology.numberOfProperties;
    }
    return totalAmount;
  } else {
    throw new Error("Unexpected API response");
  }
}

async function getTotalAmountOfIndividuals(apiCall: apiCallFn, parameter?: string): Promise<number> {
  const response = await apiCall({ size: "500" },undefined,undefined, parameter);
  if (response.page.totalElements != null && response._embedded && response._embedded.ontologies) {
    let totalAmount = 0;
    for (const ontology of response._embedded.ontologies) {
      totalAmount += ontology.numberOfIndividuals;
    }
    return totalAmount;
  } else {
    throw new Error("Unexpected API response");
  }
}

function DataContentWidget(props: DataContentWidgetProps) {
  const { api, parameter, ...rest } = props;
  const olsApi = new OlsApi(api);

  const [totalOntologies, setTotalOntologies] = useState(0);


  const {
    data: getOntologies,
    isLoading: isLoadingOntologies,
    isError: isErrorOntologies,
    error: errorOntologies,
    dataUpdatedAt: dataUpdatedAtOntologies
  } = useQuery(
      [
        api,
        "ontologiesMetadata",
        parameter,
      ],
      async () => {
        return olsApi
            .getOntologies(
                {
                  size: "500",
                },
                undefined,
                undefined,
                props.parameter
            )
            .then((response) => {
              if (
                  response.page.totalElements != null &&
                  response._embedded &&
                  response._embedded.ontologies
              ) {
                // TODO Refactor (code duplication, possibly reuse getTotalElements from DataContentWidget?)
                setTotalOntologies(response.page.totalElements);
                return response._embedded.ontologies;
              } else {
                throw new Error("Unexpected API response");
              }
            });
      }
  );

  const {
    data: totalTerms,
    isLoading: isLoadingTerms,
    isError: isErrorTerms,
    error: errorTerms,
  } = useQuery([api, "getTerms", parameter], () => { return getTotalAmountOfTerms(olsApi.getOntologies, props.parameter); });

  const {
    data: totalProperties,
    isLoading: isLoadingProperties,
    isError: isErrorProperties,
    error: errorProperties,
  } = useQuery([api, "getProperties", parameter], () => { return getTotalAmountOfProperties(olsApi.getOntologies, props.parameter); });

  const {
    data: totalIndividuals,
    isLoading: isLoadingIndividuals,
    isError: isErrorIndividuals,
    error: errorIndividuals,
  } = useQuery([api, "getIndividuals", parameter], () => { return getTotalAmountOfIndividuals(olsApi.getOntologies, props.parameter); });

  return (
    <>
      <EuiCard
        title="Data Content"
        description={dataUpdatedAtOntologies ? `Updated ${new Date(dataUpdatedAtOntologies).toLocaleString()}` : ''}
        layout="horizontal"
      >
        <EuiText {...rest}>
          {(isErrorIndividuals || isErrorProperties || isErrorOntologies || isErrorTerms) ?
            <EuiText>No data content available</EuiText> :
            <ul>
              <li>{isLoadingOntologies ? <EuiLoadingSpinner size="s" /> : (totalOntologies ? totalOntologies.toLocaleString() : NOT_AVAILABLE)} ontologies and terminologies</li>
              <li>{isLoadingTerms ? <EuiLoadingSpinner size="s" /> : (totalTerms ? totalTerms.toLocaleString() : NOT_AVAILABLE)} terms</li>
              <li>{isLoadingProperties ? <EuiLoadingSpinner size="s" /> : (totalProperties ? totalProperties.toLocaleString() : NOT_AVAILABLE)} properties</li>
              <li>{isLoadingIndividuals ? <EuiLoadingSpinner size="s" /> : (totalIndividuals ? totalIndividuals.toLocaleString() : NOT_AVAILABLE)} individuals</li>
              {/* <li>Version {NOT_AVAILABLE}</li> */} {/* TODO how to get API version? */}
            </ul>
          }
        </EuiText>
      </EuiCard>
    </>
  );
}

export { DataContentWidget };
