import React from "react";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiProvider,
  EuiText,
  EuiLink,
} from "@elastic/eui";
import { IriWidget } from "./IriWidget";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsApi } from "../../../api/OlsApi";
import { MetadataWidgetProps } from "../../../app/types";
import { Entity } from "../../../model/interfaces";
import { BreadcrumbPresentation } from "./BreadcrumbWidget/BreadcrumbPresentation";
import { TabPresentation } from "./TabWidget/TabPresentation";
import { DescriptionPresentation } from "./DescriptionWidget/DescriptionPresentation";
import { TitlePresentation } from "./TitleWidget/TitlePresentation";
import { getErrorMessageToDisplay } from "../../../app/util";
import { EntityTypeName, isEntity } from "../../../model/ModelTypeCheck";
import ReactDOM from "react-dom";
import {
  createModelObject,
  getPreferredOntologyJSON,
} from "../../../model/ModelObjectCreator";
import { EntityOntoListPresentation } from "./EntityOntoListWidget/EntityOntoListPresentation";
import { EntityDefinedByPresentation } from "./EntityDefinedByWidget/EntityDefinedByPresentation";
import "../../../style/tssStyles.css";
import "../../../style/ts4nfdiStyles/ts4nfdiMetadataStyle.css";

type MetadataInfo = {
  entity: Entity;
  ontoList: string[];
  definedBy: string[];
};

function MetadataWidget(props: MetadataWidgetProps) {
  const {
    iri,
    api,
    ontologyId,
    entityType,
    parameter,
    useLegacy,
    onNavigateToOntology,
    hierarchyTab,
    crossRefTab,
    terminologyInfoTab,
    altNamesTab,
    termLink,
    className,
  } = props;
  const olsApi = new OlsApi(api);
  const finalClassName = className || "ts4nfdi-metadata-style";

  const { data, isLoading, isSuccess, isError, error } = useQuery<MetadataInfo>(
    ["metadata", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      let entity: Entity, ontoList: string[], definedBy: string[];
      if (useLegacy) {
        const embedded = (
          await olsApi.getEntityResponse(
            iri,
            entityType,
            undefined,
            parameter,
            useLegacy
          )
        )["_embedded"];
        entity = createModelObject({
          _embedded: {
            [Object.keys(embedded)[0]]: getPreferredOntologyJSON(
              embedded[Object.keys(embedded)[0]],
              useLegacy,
              ontologyId
            ),
          },
        }) as Entity;
        ontoList = embedded[Object.keys(embedded)[0]].map(
          (entityInOntology: any) => entityInOntology["ontology_name"]
        );
        definedBy = embedded[Object.keys(embedded)[0]]
          .filter(
            (entityInOntology: any) => entityInOntology["is_defining_ontology"]
          )
          .map((entityInOntology: any) => entityInOntology["ontology_name"]);
      } else {
        entity = await olsApi.getEntityObject(
          iri,
          entityType,
          ontologyId,
          parameter,
          useLegacy
        );
        ontoList = entity.getAppearsIn();
        definedBy = entity.getDefinedBy();
      }

      definedBy = definedBy
        .filter((onto: string) => onto != entity.getOntologyId())
        .sort();
      ontoList = ontoList
        .filter(
          (onto: string) =>
            onto != entity.getOntologyId() && !definedBy.includes(onto)
        )
        .sort();

      return {
        entity: entity,
        ontoList: ontoList,
        definedBy: definedBy,
      } as MetadataInfo;
    }
  );

  function render(data: MetadataInfo) {
    return (
      <div className={finalClassName}>
        <EuiFlexGroup direction="column">
          <EuiFlexItem grow={false} style={{ maxWidth: 600 }}>
            {termLink ? (
              <EuiLink href={termLink} target="_blank" external={false}>
                <TitlePresentation
                  title={data.entity.getLabel()}
                  className={`${finalClassName}-title`}
                  isLoading={isLoading}
                  error={error}
                />
              </EuiLink>
            ) : (
              <TitlePresentation
                title={data.entity.getLabel()}
                className={`${finalClassName}-title`}
                isLoading={isLoading}
                error={error}
              />
            )}
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <span>
              <BreadcrumbPresentation
                onNavigateToOntology={props.onNavigateToOntology}
                ontologyId={ontologyId || data.entity.getOntologyId()}
                ontologyName={data.entity.getOntologyId()}
                shortForm={data.entity.getShortForm()}
                className={`${finalClassName}-breadcrumb`}
              />
            </span>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFlexGroup direction="column">
              <EuiFlexItem>
                <EuiFlexGroup>
                  <EuiFlexItem grow={false} style={{ maxWidth: 600 }}>
                    <IriWidget iri={iri} className={`${finalClassName}-iri`} />
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem style={{ maxWidth: 600 }}>
            <DescriptionPresentation
              description={data.entity.getDescription()}
              className={`${finalClassName}-description`}
              isLoading={isLoading}
              error={error}
            />
          </EuiFlexItem>

          <div style={{ margin: "0 12px 0", maxWidth: 600 }}>
            <EntityOntoListPresentation
              iri={props.iri}
              label={data.entity.getLabel() || ""}
              ontolist={data.ontoList}
              entityType={
                entityType || (data.entity.getType() as EntityTypeName)
              }
              onNavigateToOntology={onNavigateToOntology}
              className={`${finalClassName}-entity-onto-list`}
            />
            <EntityDefinedByPresentation
              iri={props.iri}
              ontolist={data.definedBy}
              label={data.entity.getLabel() || ""}
              entityType={
                entityType || (data.entity.getType() as EntityTypeName)
              }
              onNavigateToOntology={onNavigateToOntology}
              className={`${finalClassName}-entity-defined-by`}
            />
          </div>

          <EuiFlexItem>
            <TabPresentation
              data={data.entity}
              isLoading={isLoading}
              error={error}
              iri={iri}
              entityType={props.entityType}
              api={api}
              ontologyId={
                props.ontologyId
                  ? props.ontologyId
                  : data.entity.getOntologyId()
              }
              useLegacy={useLegacy}
              hierarchyTab={hierarchyTab}
              crossRefTab={crossRefTab}
              terminologyInfoTab={terminologyInfoTab}
              altNamesTab={altNamesTab}
              hierarchyPreferredRoots={props.hierarchyPreferredRoots}
              hierarchyShowSiblingsOnInit={props.hierarchyShowSiblingsOnInit}
              hierarchyKeepExpansionStates={props.hierarchyKeepExpansionStates}
              onNavigateToEntity={props.onNavigateToEntity}
              onNavigateToOntology={props.onNavigateToOntology}
              onNavigateToDisambiguate={props.onNavigateToDisambiguate}
              className={className}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    );
  }

  return (
    <>
      {isLoading && <EuiLoadingSpinner />}
      {isError && (
        <EuiText>{getErrorMessageToDisplay(error, "metadata")}</EuiText>
      )}
      {isSuccess && data && <>{isEntity(data.entity) ? render(data) : null}</>}
    </>
  );
}

function createMetadata(
  props: MetadataWidgetProps,
  container: Element,
  callback?: () => void
) {
  ReactDOM.render(WrappedMetadataWidget(props), container, callback);
}

function WrappedMetadataWidget(props: MetadataWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <MetadataWidget
          iri={props.iri}
          ontologyId={props.ontologyId}
          api={props.api}
          entityType={props.entityType}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          termLink={props.termLink}
          altNamesTab={props.altNamesTab}
          hierarchyTab={props.hierarchyTab}
          crossRefTab={props.crossRefTab}
          terminologyInfoTab={props.terminologyInfoTab}
          hierarchyPreferredRoots={props.hierarchyPreferredRoots}
          hierarchyShowSiblingsOnInit={props.hierarchyShowSiblingsOnInit}
          hierarchyKeepExpansionStates={props.hierarchyKeepExpansionStates}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
          onNavigateToDisambiguate={props.onNavigateToDisambiguate}
          className={props.className}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { MetadataWidget, createMetadata };
