import React from "react";
import { useQuery } from "react-query";
import { EuiLoadingSpinner, EuiText } from "@elastic/eui";
import { apiCallFn, OlsApi } from "../../../../api/OlsApi";

export interface TermWidgetProps {
  iri: string;
  onto: string;
  api: string;
  termText?: string;
}

async function getTerm(apiCall: apiCallFn, onto: string, termIri: string): Promise<string> {
  const response = await apiCall(undefined, undefined, {ontologyId: onto, termIri: termIri})
    .catch((error) => console.log(error));
  return response?._embedded?.terms[0].label || "No label available."
}

function TermWidget(props: TermWidgetProps) {
  const { iri, onto, api, termText } = props;
  const olsApi = new OlsApi(api);

  const {data: label,
  isLoading,
  } = useQuery([api, "getTerm", onto, iri], () => { return getTerm(olsApi.getTerm, onto, iri); });

  return (
    <>
      {isLoading ? <EuiLoadingSpinner size="s" /> : <EuiText>{termText || label}</EuiText>}
    </>
  );
}

export { TermWidget };
