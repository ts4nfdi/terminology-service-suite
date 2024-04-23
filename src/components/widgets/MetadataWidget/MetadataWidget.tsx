import React from "react";
import {EuiFlexGroup, EuiFlexItem, EuiLoadingSpinner, EuiProvider, EuiText} from "@elastic/eui";
import { IriWidget } from "./IriWidget";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import {OlsApi} from "../../../api/OlsApi";
import {MetadataWidgetProps} from "../../../app/types";
import { Entity, Thing } from "../../../model/interfaces";
import { BreadcrumbPresentation } from "./BreadcrumbWidget/BreadcrumbPresentation";
import { TabPresentation } from "./TabWidget/TabPresentation";
import { DescriptionPresentation } from "./DescriptionWidget/DescriptionPresentation";
import { TitlePresentation } from "./TitleWidget/TitlePresentation";
import { getErrorMessageToDisplay } from "../../../app/util";
import { isEntity } from "../../../model/ModelTypeCheck";
import ReactDOM from "react-dom";

function MetadataWidget(props: MetadataWidgetProps) {
  const { iri, api, ontologyId, entityType, parameter, useLegacy } = props;
  const olsApi = new OlsApi(api);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery<Thing>(
    ["metadata", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy);
    }
  );

  function render(data: Entity) {
    return (
      <>
        <EuiFlexGroup direction="column">
          <EuiFlexItem grow={false}>
                <span>
                  <BreadcrumbPresentation
                    isDefiningOntology={data.getIsDefiningOntology()}
                    ontologyName={data.getOntologyId()}
                    shortForm={data.getShortForm()}
                  />
                </span>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFlexGroup direction="column">
              <EuiFlexItem>
                <EuiFlexGroup>
                  <EuiFlexItem grow={false} style={{ maxWidth: 600 }}>
                    <IriWidget
                      iri={iri}
                      parameter={parameter}
                    />
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
              <EuiFlexItem grow={false} style={{ maxWidth: 600 }}>
                <TitlePresentation
                  title={data.getLabel()}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem style={{ maxWidth: 600 }}>
            <DescriptionPresentation
              description={data.getDescription()}
            />
          </EuiFlexItem>
          <EuiFlexItem>
              <TabPresentation
                data={data}
                iri={iri}
                entityType={props.entityType}
                api={api}
                ontologyId={props.ontologyId ? props.ontologyId : data.getOntologyId()}
                useLegacy={useLegacy}
              />
          </EuiFlexItem>
        </EuiFlexGroup>
      </>
    );
  }

  return (
    <>
      {isLoading && <EuiLoadingSpinner />}
      {isError && <EuiText>{getErrorMessageToDisplay(error, "metadata")}</EuiText>}
      {isSuccess && data &&
        <>
          {isEntity(data) ? render(data) : null}
        </>
      }
    </>
  );
}

function createMetadata(props: MetadataWidgetProps, container: Element, callback?: ()=>void) {
    ReactDOM.render(WrappedMetadataWidget(props), container, callback);
}

function WrappedMetadataWidget(props: MetadataWidgetProps) {
    const queryClient = new QueryClient();
    return (
        <EuiProvider colorMode="light">
            <QueryClientProvider client={queryClient}>
                <MetadataWidget
                    iri={props.iri}
                    ontologyId={props.ontologyId}
                    api={props.api}
                    entityType={props.entityType}
                    parameter={props.parameter}
                    useLegacy={props.useLegacy}
                />
            </QueryClientProvider>
        </EuiProvider>
    )
}

export { MetadataWidget, createMetadata };
