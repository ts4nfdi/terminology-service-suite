"use client";

import React from "react";
import { EuiLoadingSpinner, EuiProvider, EuiText } from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import {
  getErrorMessageToDisplay,
  singularizeType,
} from "../../../../app/util";
import { EntityDefinedByWidgetProps } from "../../../../app/types";
import { EntityDefinedByPresentation } from "./EntityDefinedByPresentation";
import ReactDOM from "react-dom";
import "../../../../style/tssStyles.css";
import { EntityTypeName } from "../../../../model/ModelTypeCheck";
import {OlsEntityApi} from "../../../../api/ols/OlsEntityApi";

function EntityDefinedByWidget(props: EntityDefinedByWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId, useLegacy, className } =
    props;
  const olsApi = new OlsEntityApi(api);

  const { data, isLoading, isSuccess, isError, error } = useQuery<{
    ontoList: string[];
    entityType: EntityTypeName;
    label: string;
  }>(
    ["entityDefinedBy", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      let ontolist: string[];
      let realEntityType: EntityTypeName;
      let label: string;
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
        ontolist = embedded[Object.keys(embedded)[0]]
          .filter(
            (entityInOntology: any) => entityInOntology["is_defining_ontology"]
          )
          .map((entityInOntology: any) => entityInOntology["ontology_name"]);
        realEntityType =
          entityType ||
          (singularizeType(Object.keys(embedded)[0]) as EntityTypeName);
        label = embedded[Object.keys(embedded)[0]][0]["label"];
      } else {
        const entity = await olsApi.getEntityObject(
          iri,
          entityType,
          ontologyId,
          parameter,
          useLegacy
        );
        ontolist = entity
          .getDefinedBy()
          .filter((ontology) => ontology != entity.getOntologyId());
        realEntityType = entityType || (entity.getType() as EntityTypeName);
        label = entity.getLabel() || "";
      }
      ontolist = ontolist.sort();
      return { ontoList: ontolist, entityType: realEntityType, label: label };
    }
  );

  return (
    <>
      {isSuccess && data && (
        <EntityDefinedByPresentation
          ontolist={data.ontoList}
          entityType={data.entityType}
          label={data.label}
          iri={iri}
          onNavigateToOntology={props.onNavigateToOntology}
          className={className}
        />
      )}
      {isLoading && <EuiLoadingSpinner />}
      {isError && (
        <EuiText>{getErrorMessageToDisplay(error, "ontology list")}</EuiText>
      )}
    </>
  );
}

function createEntityDefinedBy(
  props: EntityDefinedByWidgetProps,
  container: Element,
  callback?: () => void
) {
  ReactDOM.render(WrappedEntityDefinedByWidget(props), container, callback);
}

function WrappedEntityDefinedByWidget(props: EntityDefinedByWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <EntityDefinedByWidget
          iri={props.iri}
          api={props.api}
          ontologyId={props.ontologyId}
          entityType={props.entityType}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          onNavigateToOntology={props.onNavigateToOntology}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { EntityDefinedByWidget, createEntityDefinedBy };
