import React from "react";
import { EuiCard, EuiFlexItem, EuiLoadingSpinner, EuiSpacer, EuiText } from "@elastic/eui";
import { OlsApi } from "../../../api/OlsApi";
import { useQuery } from 'react-query'

export interface EntityInfoWidgetProps {
    api: string;
    iri?: string;
    ontologyId?: string;
    hasTitle?: boolean;
    entityType:
      | "ontology"
      | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
      | "individual"
      | "property";
    parameter?: string;
}

interface EntityInfo {
    //ontology:
    iri?: string,
    versionIri?: string,
    id?: string,
    version?: string,
    termNum?: number,
    lastLoad?: string,
    creators?: [],
    //term:
    subsets?: [],
    //term, property, individual:
    label?: string,
    synonyms?: [],
    //all:
    annotations: {},
    entityTypeName: string
}

const DEFAULT_HAS_TITLE = true;

async function getEntityInfo(olsApi: OlsApi, entityType: string, iri?: string, ontologyId?: string, parameter?: string): Promise<EntityInfo> {
    if (entityType == "ontology") {
        const response = await olsApi.getOntology(undefined, undefined, {ontologyId: ontologyId}, parameter)
        return {
            iri: response.config.id,
            versionIri: response.config.versionIri,
            id: response.ontologyId,
            version: response.config.version,
            termNum: response.numberOfTerms,
            lastLoad: response.loaded,
            creators: response.creators,
            annotations: response.config.annotations ? response.config.annotations : [],
            entityTypeName: 'Ontology'
        };
    }
    if (entityType == "term" || entityType == "class") {
        const response = await olsApi.getTerm(undefined, undefined, {ontologyId: ontologyId, termIri: iri}, parameter)
        return {
            label: response._embedded.terms[0].label,
            synonyms: response._embedded.terms[0].synonyms,
            subsets: response._embedded.terms[0].in_subset,
            annotations: response._embedded.terms[0].annotation,
            entityTypeName: 'Term'
        };
    }
    if (entityType == "property") {
        const response = await olsApi.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri}, parameter)
        return {
            label: response._embedded.properties[0].label,
            synonyms: response._embedded.properties[0].synonyms,
            annotations: response._embedded.properties[0].annotation,
            entityTypeName: 'Property'
        };
    }
    if (entityType == "individual") {
        const response = await olsApi.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri}, parameter)
        return {
            label: response._embedded.individuals[0].label,
            synonyms: response._embedded.individuals[0].synonyms,
            annotations: response._embedded.individuals[0].annotation,
            entityTypeName: 'Individual'
        };
    }
    return {
        label: 'INVALID ENTITY TYPE',
        synonyms: [],
        annotations: {},
        entityTypeName: 'No'
    };
}

function EntityInfoWidget(props: EntityInfoWidgetProps) {
    const { api, iri, ontologyId, hasTitle = DEFAULT_HAS_TITLE, entityType, parameter, ...rest } = props;
    const olsApi = new OlsApi(api);

    const {
        data: entityInfo,
        isLoading: isLoadingEntityInfo,
        isSuccess: isSuccessEntityInfo,
        isError: isErrorEntityInfo,
        error: errorEntityInfo,
    } = useQuery([api, iri, ontologyId, entityType, parameter, "entityInfo"], () => {
        return getEntityInfo(olsApi, entityType, iri, ontologyId);
    });

    function generateDisplayItems(item: any) {
        return (
            item ?
                item.length > 1 ?
                    item.map((element: string, i: any) =>
                        <dd key={i}>{element.split(",")}</dd>)
                    : item
                : "-"
        );
    }


    return (
        <>
            <EuiCard
                title={hasTitle ? entityInfo?.entityTypeName+" Information" : ""}
                layout="horizontal"
            >
                {isLoadingEntityInfo && <EuiLoadingSpinner size={'s'}/>}
                {isSuccessEntityInfo &&
                    <EuiText {...rest}>
                        {entityInfo?.iri &&
                          <EuiFlexItem>
                              <b>Ontology IRI:</b>
                              <p>{entityInfo.iri.toLocaleString()}</p>
                          </EuiFlexItem>}
                        {entityInfo?.versionIri &&
                          <EuiFlexItem>
                              <b>Version IRI:</b>
                              <p>{entityInfo.versionIri.toLocaleString()}</p>
                          </EuiFlexItem>}
                        {entityInfo?.id &&
                          <EuiFlexItem>
                              <b>Ontology ID:</b>
                              <p>{entityInfo.id.toLocaleString()}</p>
                          </EuiFlexItem>}
                        {entityInfo?.version &&
                          <EuiFlexItem>
                              <b>Version:</b>
                              <p>{entityInfo.version.toLocaleString()}</p>
                          </EuiFlexItem>}
                        {entityInfo?.termNum &&
                          <EuiFlexItem>
                              <b>Number of terms:</b>
                              <p>{entityInfo.termNum.toLocaleString()}</p>
                          </EuiFlexItem>}
                        {entityInfo?.lastLoad &&
                          <EuiFlexItem>
                              <b>Last loaded:</b>
                              <p>{entityInfo.lastLoad.toLocaleString()}</p>
                          </EuiFlexItem>}
                        {entityInfo?.creators &&
                          <><EuiFlexItem>
                              <b>Creators:</b>
                              {generateDisplayItems(entityInfo?.creators)}
                          </EuiFlexItem><EuiSpacer/></>}

                        {entityInfo?.label &&
                          <EuiFlexItem>
                              <b>Label:</b>
                              <p>{entityInfo?.label}</p>
                          </EuiFlexItem>}
                        {entityInfo?.synonyms &&
                          <><EuiFlexItem>
                              <b>Synonyms:</b>
                              {generateDisplayItems(entityInfo?.synonyms)}
                          </EuiFlexItem><EuiSpacer/></>}
                        {entityInfo?.subsets &&
                          <><EuiFlexItem>
                              <b>In Subsets:</b>
                              {generateDisplayItems(entityInfo?.subsets)}
                          </EuiFlexItem><EuiSpacer/></>}


                        {entityInfo ? Object.entries(entityInfo.annotations).map(([annoKey, annoVal]) => (
                            <EuiFlexItem grow={false} key={annoKey}>
                                <b>{annoKey}:</b>
                                <p>{generateDisplayItems(annoVal)}</p>
                            </EuiFlexItem>
                        )) : ""}
                    </EuiText>
                }
                {isErrorEntityInfo && <EuiText>No information available</EuiText>}
            </EuiCard>
        </>
    );
}

export { EntityInfoWidget };
