import React, {useState} from "react";
import { EuiText, EuiLoadingSpinner, EuiCard } from "@elastic/eui";
import { useQuery } from 'react-query';
import { apiCallFn, OlsApi } from "../../../api/OlsApi";

export interface DataContentWidgetProps {
  api: string;
  /**
   * This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'
   */
  parameter: string;
}

const NOT_AVAILABLE = "n/a";



async function getTotalAmountOfTerms(apiCall: apiCallFn, parameter: string): Promise<number> {
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

async function getTotalAmountOfProperties(apiCall: apiCallFn, parameter: string): Promise<number> {
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

async function getTotalAmountOfIndividuals(apiCall: apiCallFn, parameter: string): Promise<number> {
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
    isLoading: isLoadingTerms
  } = useQuery([api, "getTerms", parameter], () => { return getTotalAmountOfTerms(olsApi.getOntologies, props.parameter); });

  const {
    data: totalProperties,
    isLoading: isLoadingProperties
  } = useQuery([api, "getProperties", parameter], () => { return getTotalAmountOfProperties(olsApi.getOntologies, props.parameter); });

  const {
    data: totalIndividuals,
    isLoading: isLoadingIndividuals
  } = useQuery([api, "getIndividuals", parameter], () => { return getTotalAmountOfIndividuals(olsApi.getOntologies, props.parameter); });

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
