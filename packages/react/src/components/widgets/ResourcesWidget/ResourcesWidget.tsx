"use client";

import { EuiProvider } from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsOntologyApi } from "../../../api/ols/OlsOntologyApi";
import { OlsResource, ResourcesWidgetProps } from "../../../app";
import { Ontologies } from "../../../model/interfaces";
import { OLS4Ontology } from "../../../model/ols4-model";
import { ResourcesPresentation } from "./ResourcesPresentation";

const DEFAULT_USE_LEGACY = true as const;

function v2toOlsResource(ontology: OLS4Ontology): OlsResource {
  return {
    ontologyId: ontology.getOntologyId(),
    loaded: ontology.getLoaded(),
    numberOfTerms: ontology.getNumClasses(),
    numberOfProperties: ontology.getNumProperties(),
    numberOfIndividuals: ontology.getNumIndividuals(),
    config: {
      logo: ontology.getLogoURL(),
      title: ontology.getName().trim(),
      description: ontology.getDescription(),
      preferredPrefix: ontology.getPreferredPrefix(),
      allowDownload: ontology.getAllowDownload(),
      fileLocation: ontology.getIri(),
      version: ontology.getVersion(),
      iri: ontology.getIri(),
      homepage: ontology.getHomepage(),
      annotations: {
        license: ontology.getLicense(),
      },
    },
  };
}

function ResourcesWidget(props: ResourcesWidgetProps): React.JSX.Element {
  const {
    api,
    onNavigate,
    parameter,
    useLegacy = DEFAULT_USE_LEGACY,
    actions,
    className,
    ...rest
  } = props;
  const olsApi = new OlsOntologyApi(api);

  const {
    data: ontologiesData,
    isError,
    isLoading,
  } = useQuery<Ontologies>(
    ["ontologiesData", api, parameter, useLegacy],
    async () => {
      return olsApi.getOntologiesData(props.parameter, useLegacy);
    },
  );

  const ontos = useLegacy
    ? ontologiesData?.properties.map((ontology) => ({
        ...ontology.properties,
      })) || []
    : ontologiesData?.properties.map((ontology) => v2toOlsResource(ontology)) ||
      [];

  return (
    <ResourcesPresentation
      {...rest}
      resources={ontos}
      isLoading={isLoading}
      isError={isError}
      onNavigate={onNavigate}
      useLegacy={useLegacy}
      actions={actions}
      className={className}
    />
  );
}

function WrappedResourcesWidget(
  props: ResourcesWidgetProps,
): React.JSX.Element {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <ResourcesWidget
          api={props.api}
          initialEntriesPerPage={props.initialEntriesPerPage}
          pageSizeOptions={props.pageSizeOptions}
          initialSortField={props.initialSortField}
          initialSortDir={props.initialSortDir}
          actions={props.actions}
          parameter={props.parameter}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { ResourcesWidget, WrappedResourcesWidget };
