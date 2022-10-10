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

const useFetchTotalFromAPI = (queryPath: string, setTotal: React.Dispatch<React.SetStateAction<string | number>>): [boolean, number] => {
  const {
    data: data,
    isSuccess: isSuccess,
    isLoading: isLoading,
    dataUpdatedAt: dataUpdatedAt
  } = useQuery(
    [queryPath],
    () => getTotalElements(queryPath),
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if (isSuccess) {
      setTotal(data);
    }
  }, [data]);

  return [isLoading, dataUpdatedAt];
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

  const [isLoadingOntologies, dataUpdatedAtOntologies] = useFetchTotalFromAPI(`${props.api}ontologies?size=1`, setTotalOntologies);
  const [isLoadingTerms,] = useFetchTotalFromAPI(`${props.api}terms?size=1`, setTotalTerms);
  const [isLoadingProperties,] = useFetchTotalFromAPI(`${props.api}properties?size=1`, setTotalProperties);
  const [isLoadingIndividuals,] = useFetchTotalFromAPI(`${props.api}individuals?size=1`, setTotalIndividuals);

  return (
    <>
      <EuiCard
        title="Data Content"
        description={dataUpdatedAtOntologies ? `Updated ${new Date(dataUpdatedAtOntologies).toLocaleString()}` : ''}
        layout="horizontal"
      >
        <EuiText {...rest}>
          <ul>
            <li>{isLoadingOntologies ? <EuiLoadingSpinner size="s" /> : totalOntologies.toLocaleString()} ontologies and terminologies</li>
            <li>{isLoadingTerms ? <EuiLoadingSpinner size="s" /> : totalTerms.toLocaleString()} terms</li>
            <li>{isLoadingProperties ? <EuiLoadingSpinner size="s" /> : totalProperties.toLocaleString()} properties</li>
            <li>{isLoadingIndividuals ? <EuiLoadingSpinner size="s" /> : totalIndividuals.toLocaleString()} individuals</li>
            <li>Version n/a</li> {/* TODO how to get version? */}
          </ul>
        </EuiText>
      </EuiCard>
    </>
  );
}

export { DataContentWidget };
