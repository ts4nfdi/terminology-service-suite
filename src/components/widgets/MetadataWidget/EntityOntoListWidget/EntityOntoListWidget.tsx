import React from "react";
import {EuiLoadingSpinner, EuiProvider, EuiText} from "@elastic/eui";
import { OlsApi } from '../../../../api/OlsApi'
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import {getErrorMessageToDisplay, singularizeType} from "../../../../app/util";
import {EntityOntoListWidgetProps} from "../../../../app/types";
import { EntityOntoListPresentation } from "./EntityOntoListPresentation";
import ReactDOM from "react-dom";
import "../../../../style/semlookp-styles.css";
import {EntityTypeName} from "../../../../model/ModelTypeCheck";

function EntityOntoListWidget(props: EntityOntoListWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId, useLegacy } = props;
  const olsApi = new OlsApi(api);

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery<{ontoList: string[], entityType: EntityTypeName, label: string}>(
    ["entityOntoList", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
        let ontolist : string[];
        let realEntityType : EntityTypeName;
        let label : string;
        if(useLegacy) {
            const embedded = (await olsApi.getEntityResponse(iri, entityType, undefined, parameter, useLegacy))["_embedded"];
            ontolist = embedded[Object.keys(embedded)[0]].map((entityInOntology : any) => entityInOntology["ontology_name"]);
            realEntityType = entityType || singularizeType(Object.keys(embedded)[0]) as EntityTypeName;
            label = embedded[Object.keys(embedded)[0]][0]["label"];
        }
        else {
            const entity = await olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy);
            ontolist = entity.getAppearsIn();
            realEntityType = entityType || entity.getType() as EntityTypeName;
            label = entity.getLabel() || "";
        }
        ontolist = ontolist.filter((onto : string) => onto != ontologyId).sort();
        return {ontoList: ontolist, entityType: realEntityType, label: label};
    }
  );

  return (
    <>
      {isSuccess && data &&
        <EntityOntoListPresentation ontolist={data.ontoList} entityType={data.entityType} label={data.label} iri={iri} onNavigateToOntology={props.onNavigateToOntology} />}
      {isLoading && <EuiLoadingSpinner />}
      {isError && <EuiText>{getErrorMessageToDisplay(error, "ontology list")}</EuiText>}
    </>
  );
}

function createEntityOntoList(props: EntityOntoListWidgetProps, container: Element, callback?: ()=>void) {
    ReactDOM.render(WrappedEntityOntoListWidget(props), container, callback);
}

function WrappedEntityOntoListWidget(props: EntityOntoListWidgetProps) {
    const queryClient = new QueryClient();
    return (
        <EuiProvider colorMode="light">
            <QueryClientProvider client={queryClient}>
                <EntityOntoListWidget
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
    )
}

export { EntityOntoListWidget, createEntityOntoList };
