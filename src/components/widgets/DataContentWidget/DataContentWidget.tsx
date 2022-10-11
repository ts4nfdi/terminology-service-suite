import React from "react";
import { EuiText, EuiLoadingSpinner, EuiCard } from "@elastic/eui";
import { useQuery, QueryFunction } from 'react-query';

export interface DataContentWidgetProps {
  api: string;
}

const NOT_AVAILABLE = "n/a";
const QUERY_STALE_TIME = 5 * 60 * 1000;

const getTotalElements: QueryFunction<number, [string]> = ({queryKey}) => {
  const [queryPath] = queryKey;

  return fetch(queryPath, {
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
      throw new Error("page.totalElements is null in API response");
    }
  });
};

function DataContentWidget(props: DataContentWidgetProps) {
  const { api, ...rest } = props;

  const {
    data: totalOntologies,
    isLoading: isLoadingOntologies,
    dataUpdatedAt: dataUpdatedAtOntologies
  } = useQuery([`${props.api}ontologies?size=1`], getTotalElements, { staleTime: QUERY_STALE_TIME });

  const {
    data: totalTerms,
    isLoading: isLoadingTerms
  } = useQuery([`${props.api}terms?size=1`], getTotalElements, { staleTime: QUERY_STALE_TIME });

  const {
    data: totalProperties,
    isLoading: isLoadingProperties
  } = useQuery([`${props.api}properties?size=1`], getTotalElements, { staleTime: QUERY_STALE_TIME });

  const {
    data: totalIndividuals,
    isLoading: isLoadingIndividuals
  } = useQuery([`${props.api}individuals?size=1`], getTotalElements, { staleTime: QUERY_STALE_TIME });

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
            <li>Version {NOT_AVAILABLE}</li> {/* TODO how to get version? */}
          </ul>
        </EuiText>
      </EuiCard>
    </>
  );
}

export { DataContentWidget };
