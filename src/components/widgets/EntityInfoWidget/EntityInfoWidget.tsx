import React from "react";
import { EuiCard, EuiFlexItem, EuiLoadingSpinner, EuiSpacer, EuiText } from "@elastic/eui";
import { OlsApi } from "../../../api/OlsApi";
import { useQuery } from 'react-query'

export interface EntityInfoWidgetProps {
    api: string;
    iri: string;
    ontologyId?: string;
    hasTitle?: boolean;
    entityType:
      | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
      | "individual"
      | "property";
}

interface EntityInfo {
    label: string,
    synonyms: [],
    annotations: {},
    entityTypeName: string
}

const DEFAULT_HAS_TITLE = true;

async function getEntityInfo(olsApi: OlsApi, entityType: string, iri: string, ontologyId?: string): Promise<EntityInfo> {
    if (entityType == "term" || entityType == "class") {
        const response = await olsApi.getTerm(undefined, undefined, {ontologyId: ontologyId, termIri: iri})
          .catch((error) => console.log(error));
        return {
            label: response._embedded.terms[0].label,
            synonyms: response._embedded.terms[0].synonyms,
            annotations: response._embedded.terms[0].annotation,
            entityTypeName: 'Term'
        };
    }
    if (entityType == "property") {
        const response = await olsApi.getProperty(undefined, undefined, {ontologyId: ontologyId, propertyIri: iri})
          .catch((error) => console.log(error));
        return {
            label: response._embedded.properties[0].label,
            synonyms: response._embedded.properties[0].synonyms,
            annotations: response._embedded.properties[0].annotation,
            entityTypeName: 'Property'
        };
    }
    if (entityType == "individual") {
        const response = await olsApi.getIndividual(undefined, undefined, {ontologyId: ontologyId, individualIri: iri})
          .catch((error) => console.log(error));
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
    const { api, iri, ontologyId, hasTitle = DEFAULT_HAS_TITLE, entityType, ...rest } = props;
    const olsApi = new OlsApi(api);

    const {
        data: entityInfo,
        isLoading: isLoadingEntityInfo,
        isSuccess: isSuccessEntityInfo,
    } = useQuery([api, iri, ontologyId, entityType, "getEntityInfo"], () => {
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
                        <EuiFlexItem>
                            <b>Label</b>
                            <p>{entityInfo?.label ? entityInfo?.label : "-"}</p>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <b>Synonyms</b>
                            {generateDisplayItems(entityInfo?.synonyms)}
                        </EuiFlexItem>
                        <EuiSpacer/>
                        {entityInfo ? Object.entries(entityInfo.annotations).map(([annoKey, annoVal]) => (
                            <EuiFlexItem grow={false} key={annoKey}>
                                <b>{annoKey}:</b>
                                <p>{generateDisplayItems(annoVal)}</p>
                            </EuiFlexItem>
                        )) : ""}
                    </EuiText>
                }
            </EuiCard>
        </>
    );
}

export { EntityInfoWidget };
