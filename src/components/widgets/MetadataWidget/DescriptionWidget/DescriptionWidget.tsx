import React from "react";
import { useQuery } from "react-query";
import { EuiLoadingSpinner, EuiText } from "@elastic/eui";
import { EuiTextProps } from "@elastic/eui/src/components/text/text";
import { apiCallFn, OlsApi } from "../../../../api/OlsApi";

export interface DescriptionWidgetProps extends EuiTextProps {
  iri: string;
  onto: string;
  api: string;
  descText?: string;
}

const NO_DESCRIPTION = "No description available.";

async function getDescription(apiCall: apiCallFn, onto: string, termIri: string): Promise<string> {
  const response = await apiCall(undefined, undefined, {ontologyId: onto, termIri: termIri})
    .catch((error) => console.log(error));
  if (response?._embedded?.terms[0].description != null && response._embedded.terms[0].description[0] != null) {
    return response._embedded.terms[0].description[0];
  } else {
    return NO_DESCRIPTION;
  }
}

function DescriptionWidget(props: DescriptionWidgetProps) {
  const { api, onto, iri, descText, ...rest } = props;
  const olsApi = new OlsApi(api);

  const {
    data: description,
    isLoading,
  } = useQuery([api, "getTerm", onto, iri], () => { return getDescription(olsApi.getTerm, onto, iri); });

  return (
    <>
      {isLoading ? <EuiLoadingSpinner size="s" /> : <EuiText {...rest}>{descText || description}</EuiText>}
    </>
  );
}

export { DescriptionWidget };
