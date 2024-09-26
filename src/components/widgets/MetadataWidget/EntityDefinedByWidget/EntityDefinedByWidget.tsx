import React from "react";
import {EuiLoadingSpinner, EuiProvider, EuiText} from "@elastic/eui";
import { OlsApi } from '../../../../api/OlsApi'
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
import { getErrorMessageToDisplay } from "../../../../app/util";
import {EntityDefinedByWidgetProps} from "../../../../app/types";
import { EntityDefinedByPresentation } from "./EntityDefinedByPresentation";
import ReactDOM from "react-dom";
import "../../../../style/semlookp-styles.css";

function EntityDefinedByWidget(props: EntityDefinedByWidgetProps) {
  const { iri, api, parameter, entityType, ontologyId, useLegacy } = props;
  const olsApi = new OlsApi(api);

  const {
    data : ontoList,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery<string[]>(
    ["entityDefinedBy", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
        let ontolist : string[];
        if(useLegacy) {
            const embedded = (await olsApi.getEntityResponse(iri, entityType, undefined, parameter, useLegacy))["_embedded"];
            ontolist = embedded[Object.keys(embedded)[0]]
                .filter((entityInOntology : any) => entityInOntology["is_defining_ontology"])
                .map((entityInOntology : any) => entityInOntology["ontology_name"]);
        }
        else {
            const entity = await olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy);
            ontolist = entity.getDefinedBy().filter((ontology) => ontology != entity.getOntologyId());
        }
        ontolist = ontolist.sort();
        return ontolist;
    }
  );

  return (
    <>
      {isSuccess && ontoList &&
        <EntityDefinedByPresentation ontolist={ontoList} entityType={entityType} iri={iri} onNavigateToOntology={props.onNavigateToOntology} />}
      {isLoading && <EuiLoadingSpinner />}
      {isError && <EuiText>{getErrorMessageToDisplay(error, "ontology list")}</EuiText>}
    </>
  );
}

function createEntityDefinedBy(props: EntityDefinedByWidgetProps, container: Element, callback?: ()=>void) {
    ReactDOM.render(WrappedEntityDefinedByWidget(props), container, callback);
}

function WrappedEntityDefinedByWidget(props: EntityDefinedByWidgetProps) {
    const queryClient = new QueryClient();
    return (
        <EuiProvider colorMode="light">
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
    )
}

export { EntityDefinedByWidget, createEntityDefinedBy };
