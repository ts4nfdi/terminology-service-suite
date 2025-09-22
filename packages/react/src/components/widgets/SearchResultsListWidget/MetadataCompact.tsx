import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";
import React from "react";
import {
  BreadcrumbWidget,
  DescriptionWidget,
  IriWidget,
} from "../MetadataWidget";
import { MetadataCompactProps } from "../../../app";
import { pluralizeType } from "../../../app/util";
import { EntityOntoListPresentation } from "../MetadataWidget/EntityOntoListWidget/EntityOntoListPresentation";
import { EntityTypeName } from "../../../model/ModelTypeCheck";
import { EntityDefinedByPresentation } from "../MetadataWidget/EntityDefinedByWidget/EntityDefinedByPresentation";
import { useQuery } from "react-query";
import { Entity } from "../../../model/interfaces";
import {
  createModelObject,
  getPreferredOntologyJSON,
} from "../../../model/ols-model/ModelObjectCreator";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";

type MetadataInfo = {
  entity: Entity;
  ontoList: string[];
  definedBy: string[];
};

function MetadataCompact(props: MetadataCompactProps) {
  const {
    api,
    result,
    targetLink,
    className,
    parameter,
    entityType,
    iri,
    ontologyId,
    useLegacy,
    ...rest
  } = props;
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
  console.log(data);

  return (
    <div className={className}>
      <EuiCard
        textAlign="left"
        {...rest}
        href={
          targetLink
            ? result.type != "ontology"
              ? targetLink +
                "ontologies/" +
                result.ontology_name +
                "/" +
                pluralizeType(result.type, true) +
                "?iri=" +
                encodeURIComponent(result.iri)
              : targetLink + "ontologies/" + result.ontology_name
            : undefined
        }
        titleElement={"span"}
        title={
          <div>
            <EuiSpacer size="m" />
            <EuiTitle>
              <h2>{result.label}</h2>
            </EuiTitle>
          </div>
        }
      >
        {result.type != "ontology" && (
          <BreadcrumbWidget
            api={api}
            iri={result.iri}
            entityType={result.type}
            ontologyId={result.ontology_name}
            className={`${className}-breadcrumb`}
          />
        )}

        <EuiSpacer size="s" />

        {result.type != "ontology" ? (
          <IriWidget iri={result.iri} className={`${className}-iri`} />
        ) : undefined}

        <EuiSpacer size="s" />

        {data && (
          <div style={{ maxWidth: 600 }}>
            <EntityOntoListPresentation
              iri={result.iri}
              label={result.label || ""}
              ontolist={data.ontoList}
              entityType={(result.type || "class") as EntityTypeName}
              className={`${className}-entity-onto-list`}
            />
            <EntityDefinedByPresentation
              iri={result.iri}
              ontolist={data.definedBy}
              label={result.label || ""}
              entityType={(result.type || "class") as EntityTypeName}
              className={`${className}-entity-defined-by`}
            />
          </div>
        )}

        <EuiSpacer size="s" />

        <DescriptionWidget
          api={api}
          ontologyId={result.ontology_name}
          iri={result.iri}
          thingType={result.type}
          className={`${className}-description`}
        />
      </EuiCard>
    </div>
  );
}

export { MetadataCompact };
