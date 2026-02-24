"use client";

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiLoadingSpinner,
  EuiProvider,
  EuiText,
} from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { MetadataWidgetProps } from "../../../app";
import { getErrorMessageToDisplay } from "../../../app/util";
import { Entity } from "../../../model/interfaces";
import { EntityTypeName, isEntity } from "../../../model/ModelTypeCheck";
import {
  createModelObject,
  getPreferredOntologyJSON,
} from "../../../model/ols-model/ModelObjectCreator";
import "../../../style/ts4nfdiStyles/ts4nfdiMetadataStyle.css";
import "../../../style/tssStyles.css";
import { BreadcrumbPresentation } from "./BreadcrumbWidget";
import { DescriptionPresentation } from "./DescriptionWidget/DescriptionPresentation";
import { EntityDefinedByPresentation } from "./EntityDefinedByWidget/EntityDefinedByPresentation";
import { EntityOntoListPresentation } from "./EntityOntoListWidget/EntityOntoListPresentation";
import { IriWidget } from "./IriWidget";
import { TabPresentation } from "./TabWidget/TabPresentation";
import { TitlePresentation } from "./TitleWidget/TitlePresentation";

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
    graphViewTab,
    termDepictionTab,
    altNamesTab,
    termLink,
    className,
  } = props;
  const olsApi = new OlsEntityApi(api);
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
            useLegacy,
          )
        )["_embedded"];
        entity = createModelObject({
          _embedded: {
            [Object.keys(embedded)[0]]: getPreferredOntologyJSON(
              embedded[Object.keys(embedded)[0]],
              useLegacy,
              ontologyId,
            ),
          },
        }) as Entity;
        ontoList = embedded[Object.keys(embedded)[0]].map(
          (entityInOntology: any) => entityInOntology["ontology_name"],
        );
        definedBy = embedded[Object.keys(embedded)[0]]
          .filter(
            (entityInOntology: any) => entityInOntology["is_defining_ontology"],
          )
          .map((entityInOntology: any) => entityInOntology["ontology_name"]);
      } else {
        entity = await olsApi.getEntityObject(
          iri,
          entityType,
          ontologyId,
          parameter,
          useLegacy,
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
            onto != entity.getOntologyId() && !definedBy.includes(onto),
        )
        .sort();

      return {
        entity: entity,
        ontoList: ontoList,
        definedBy: definedBy,
      } as MetadataInfo;
    },
  );

  function render(data: MetadataInfo) {
    return (
      <div className={finalClassName} data-testid="metadata">
        <EuiFlexGroup direction="column">
          <EuiFlexItem grow={false}>
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
                shortForm={data.entity.getShortForm()}
                className={`${finalClassName}-breadcrumb`}
                colorFirst={props.colorFirst}
                colorSecond={props.colorSecond}
              />
            </span>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFlexGroup direction="column">
              <EuiFlexItem>
                <EuiFlexGroup>
                  <EuiFlexItem grow={false}>
                    <IriWidget
                      iri={iri}
                      className={`${finalClassName}-iri`}
                      iriText={props.iriText}
                      urlPrefix={props.urlPrefix}
                      externalIcon={props.externalIcon}
                      copyButton={props.copyButton}
                    />
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem>
            <DescriptionPresentation
              description={data.entity.getDescription()}
              className={`${finalClassName}-description`}
              isLoading={isLoading}
              error={error}
              descText={props.descText}
            />
          </EuiFlexItem>

          <div style={{ margin: "0 12px 0" }}>
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
              termDepictionTab={termDepictionTab}
              graphViewTab={graphViewTab}
              altNamesTab={altNamesTab}
              hierarchyPreferredRoots={props.hierarchyPreferredRoots}
              hierarchyShowSiblingsOnInit={props.hierarchyShowSiblingsOnInit}
              hierarchyKeepExpansionStates={props.hierarchyKeepExpansionStates}
              onNavigateToEntity={props.onNavigateToEntity}
              onNavigateToOntology={props.onNavigateToOntology}
              onNavigateToDisambiguate={props.onNavigateToDisambiguate}
              className={className}
              hierarchyWrap={props.hierarchyWrap}
              hierarchyTargetIri={props.hierarchyTargetIri}
              graphTargetIri={props.graphTargetIri}
              rootWalk={props.rootWalk}
              edgeLabel={props.edgeLabel}
              onNodeClick={props.onNodeClick}
              graphHierarchy={props.graphHierarchy}
              initialSelectedTab={props.initialSelectedTab}
              showHeader={props.showHeader}
              showComparisonInputField={props.showComparisonInputField}
              showComparisonTitleInHeader={props.showComparisonTitleInHeader}
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
          graphViewTab={props.graphViewTab}
          entityInfoTab={props.entityInfoTab}
          entityRelationTab={props.entityRelationTab}
          termDepictionTab={props.termDepictionTab}
          hierarchyPreferredRoots={props.hierarchyPreferredRoots}
          hierarchyShowSiblingsOnInit={props.hierarchyShowSiblingsOnInit}
          hierarchyKeepExpansionStates={props.hierarchyKeepExpansionStates}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
          onNavigateToDisambiguate={props.onNavigateToDisambiguate}
          className={props.className}
          initialSelectedTab={props.initialSelectedTab}
          copyButton={props.copyButton}
          descText={props.descText}
          titleText={props.titleText}
          defaultValue={props.defaultValue}
          iriText={props.iriText}
          externalIcon={props.externalIcon}
          urlPrefix={props.urlPrefix}
          hierarchyWrap={props.hierarchyWrap}
          hierarchyTargetIri={props.hierarchyTargetIri}
          graphTargetIri={props.graphTargetIri}
          rootWalk={props.rootWalk}
          graphHierarchy={props.graphHierarchy}
          edgeLabel={props.edgeLabel}
          onNodeClick={props.onNodeClick}
          colorSecond={props.colorSecond}
          colorFirst={props.colorFirst}
          showHeader={props.showHeader}
          showComparisonInputField={props.showComparisonInputField}
          showComparisonTitleInHeader={props.showComparisonTitleInHeader}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { MetadataWidget, WrappedMetadataWidget };
