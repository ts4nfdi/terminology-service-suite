import React, { useEffect, useState } from "react";
import { EuiText, EuiLoadingSpinner, EuiCard } from "@elastic/eui";
import { useQuery } from 'react-query'

export interface DataContentWidgetProps {
  api: string;
}

const NOT_AVAILABLE = "n/a";

const getTotalElements = (url: string) => {
  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Content_Type: "application/json",
    },
  })
  .then(response => response.json())
  .then(response => {
    if (response.page.totalElements != null) {
      return response.page.totalElements;
    } else {
      return NOT_AVAILABLE;
    }
  });
};

function DataContentWidget(props: DataContentWidgetProps) {
  const { api, ...rest } = props;
  const [totalOntologies, setTotalOntologies] = useState<string | number>(NOT_AVAILABLE);
  const [totalTerms, setTotalTerms] = useState<string | number>(NOT_AVAILABLE);
  const [totalProperties, setTotalProperties] = useState<string | number>(NOT_AVAILABLE);
  const [totalIndividuals, setTotalIndividuals] = useState<string | number>(NOT_AVAILABLE);

  useEffect(() => {
    // Reset to initial state when API changes
    setTotalOntologies(NOT_AVAILABLE);
    setTotalTerms(NOT_AVAILABLE);
    setTotalProperties(NOT_AVAILABLE);
    setTotalIndividuals(NOT_AVAILABLE);
  }, [api]);


  /* TODO Remove code duplication? */

  const {
    data: ontologiesData,
    isSuccess: isSuccessOntologies,
    isLoading: isLoadingOntologies,
    dataUpdatedAt: dataUpdatedAt
  } = useQuery(
    ["ontologiesData", api],
    () => getTotalElements(`${api}ontologies?size=1`),
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if (isSuccessOntologies) {
      setTotalOntologies(ontologiesData);
    }
  }, [ontologiesData]);


  const {
    data: termsData,
    isSuccess: isSuccessTerms,
    isLoading: isLoadingTerms
  } = useQuery(
    ["termsData", api],
    () => getTotalElements(`${api}terms?size=1`),
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if (isSuccessTerms) {
      setTotalTerms(termsData);
    }
  }, [termsData]);


  const {
    data: propertiesData,
    isSuccess: isSuccessProperties,
    isLoading: isLoadingProperties
  } = useQuery(
    ["propertiesData", api],
    () => getTotalElements(`${api}properties?size=1`),
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if (isSuccessProperties) {
      setTotalProperties(propertiesData);
    }
  }, [propertiesData]);


  const {
    data: individualsData,
    isSuccess: isSuccessIndividuals,
    isLoading: isLoadingIndividuals,
  } = useQuery(
    ["individualsData", api],
    () => getTotalElements(`${api}individuals?size=1`),
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if (isSuccessIndividuals) {
      setTotalIndividuals(individualsData);
    }
  }, [individualsData]);


  return (
    <>
      <EuiCard
        title="Data Content"
        description={dataUpdatedAt ? `Updated ${new Date(dataUpdatedAt).toLocaleString()}` : ''}
        layout="horizontal"
      >
        <EuiText {...rest}>
          {isLoadingOntologies || isLoadingTerms || isLoadingProperties || isLoadingIndividuals
            ? <EuiLoadingSpinner/>
            : <ul>
                <li>{totalOntologies.toLocaleString()} ontologies and terminologies</li>
                <li>{totalTerms.toLocaleString()} terms</li>
                <li>{totalProperties.toLocaleString()} properties</li>
                <li>{totalIndividuals.toLocaleString()} individuals</li>
                <li>Version n/a</li> {/* TODO how to get version? */}
              </ul>
          }
        </EuiText>
      </EuiCard>
    </>
  );
}

export { DataContentWidget };
