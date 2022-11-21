import React from "react";
import { EuiText, EuiLoadingSpinner, EuiCard } from "@elastic/eui";
import { useQuery } from 'react-query';
import { apiCallFn, OlsApi } from "../../../api/OlsApi";

export interface DataContentWidgetProps {
  api: string;
  /**
   * This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'
   */
  frontend?: string;
}

const NOT_AVAILABLE = "n/a";

async function getTotalElements(apiCall: apiCallFn, frontend: string | undefined): Promise<number> {
  const response = await apiCall({ size: "1" },undefined,{ frontend: frontend });

  if (response.page.totalElements != null) {
    return response.page.totalElements;
  } else {
    throw new Error("page.totalElements is null in API response");
  }
}

async function getTotalAmountOfTerms(apiCall: apiCallFn, frontend: string | undefined): Promise<number> {
  const response = await apiCall({ size: "500" },undefined,{frontend:frontend});
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

async function getTotalAmountOfProperties(apiCall: apiCallFn, frontend: string | undefined): Promise<number> {
  const response = await apiCall({ size: "500" },undefined,{frontend:frontend});
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

async function getTotalAmountOfIndividuals(apiCall: apiCallFn, frontend: string | undefined): Promise<number> {
  const response = await apiCall({ size: "500" },undefined,{frontend:frontend});
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
  const { api, frontend, ...rest } = props;
  const olsApi = new OlsApi(api);

  const {
    data: totalOntologies,
    isLoading: isLoadingOntologies,
    dataUpdatedAt: dataUpdatedAtOntologies
  } = useQuery([api, "getOntologies", frontend], () => { return getTotalElements(olsApi.getOntologies, frontend); });

  const {
    data: totalTerms,
    isLoading: isLoadingTerms
  } = useQuery([api, "getTerms", frontend], () => { return getTotalAmountOfTerms(olsApi.getOntologies, frontend); });

  const {
    data: totalProperties,
    isLoading: isLoadingProperties
  } = useQuery([api, "getProperties", frontend], () => { return getTotalAmountOfProperties(olsApi.getOntologies, frontend); });

  const {
    data: totalIndividuals,
    isLoading: isLoadingIndividuals
  } = useQuery([api, "getIndividuals", frontend], () => { return getTotalAmountOfIndividuals(olsApi.getOntologies, frontend); });

  return (
    <>
      <EuiCard
        title="Data Content"
        description={dataUpdatedAtOntologies ? `Updated ${new Date(dataUpdatedAtOntologies).toLocaleString()}` : ''}
        layout="horizontal"
      >
        <EuiText {...rest}>
          <ul>
            <li>{isLoadingOntologies ? <EuiLoadingSpinner size="s" /> : (totalOntologies ? totalOntologies.toLocaleString() : NOT_AVAILABLE)} ontologies and terminologies</li>
            <li>{isLoadingTerms ? <EuiLoadingSpinner size="s" /> : (totalTerms ? totalTerms.toLocaleString() : NOT_AVAILABLE)} terms</li>
            <li>{isLoadingProperties ? <EuiLoadingSpinner size="s" /> : (totalProperties ? totalProperties.toLocaleString() : NOT_AVAILABLE)} properties</li>
            <li>{isLoadingIndividuals ? <EuiLoadingSpinner size="s" /> : (totalIndividuals ? totalIndividuals.toLocaleString() : NOT_AVAILABLE)} individuals</li>
            {/* <li>Version {NOT_AVAILABLE}</li> */} {/* TODO how to get API version? */}
          </ul>
        </EuiText>
      </EuiCard>
    </>
  );
}

export { DataContentWidget };
