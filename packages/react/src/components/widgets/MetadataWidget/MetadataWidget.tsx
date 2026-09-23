import { EuiLoadingSpinner, EuiProvider, EuiText } from "@elastic/eui";
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
import { MetadataPresentation } from "./MetadataPresentation";

type MetadataInfo = {
  entity: Entity;
  ontoList: string[];
  definedBy: string[];
};

function MetadataWidget(props: MetadataWidgetProps): React.JSX.Element {
  const { iri, api, ontologyId, entityType, parameter, useLegacy } = props;
  const olsApi = new OlsEntityApi(api);

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

  return (
    <>
      {isLoading && <EuiLoadingSpinner />}
      {isError && (
        <EuiText>{getErrorMessageToDisplay(error, "metadata")}</EuiText>
      )}
      {isSuccess && data && (
        <>
          {isEntity(data.entity) ? (
            <MetadataPresentation
              iri={iri}
              label={data.entity.getLabel()}
              ontologyId={ontologyId || data.entity.getOntologyId()}
              shortForm={data.entity.getShortForm()}
              description={data.entity.getDescription()}
              entityType={
                entityType || (data.entity.getType() as EntityTypeName)
              }
              ontoList={data.ontoList}
              definedBy={data.definedBy}
              isLoading={isLoading}
              error={error}
              className={props.className}
              termLink={props.termLink}
              iriText={props.iriText}
              urlPrefix={props.urlPrefix}
              externalIcon={props.externalIcon}
              copyButton={props.copyButton}
              descText={props.descText}
              colorFirst={props.colorFirst}
              colorSecond={props.colorSecond}
              onNavigateToOntology={props.onNavigateToOntology}
              tabProps={{
                ...props,
                ontologyId: ontologyId || data.entity.getOntologyId(),
              }}
            />
          ) : null}
        </>
      )}{" "}
    </>
  );
}

function WrappedMetadataWidget(props: MetadataWidgetProps): React.JSX.Element {
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
          rootWalk={props.rootWalk}
          graphHierarchy={props.graphHierarchy}
          edgeLabel={props.edgeLabel}
          onNodeClick={props.onNodeClick}
          colorSecond={props.colorSecond}
          colorFirst={props.colorFirst}
          showHeader={props.showHeader}
          showComparisonTitleInHeader={props.showComparisonTitleInHeader}
          enableComparisonMode={props.enableComparisonMode}
          targetIri={props.targetIri}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { MetadataWidget, WrappedMetadataWidget };
