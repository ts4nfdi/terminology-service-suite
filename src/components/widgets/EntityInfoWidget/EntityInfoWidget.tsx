import React from "react";
import { EuiCard, EuiFlexItem, EuiLoadingSpinner, EuiSpacer, EuiText } from "@elastic/eui";
import { OlsApi } from "../../../api/OlsApi";
import { useQuery } from 'react-query'
import {getErrorMessageToDisplay} from "../index";
import {capitalize, randomString} from "../../../app/util";
import Ontology from "./../../../model/interfaces/Ontology"
import Thing from "../../../model/interfaces/Thing";
import Entity from "../../../model/interfaces/Entity";
import Class from "../../../model/interfaces/Class";
import {getEntityLinkJSX, getReifiedJSX} from "../../../model/StructureRendering";

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
    showBadges?: boolean; // default is true
    useLegacy?: boolean; // default is true
}

const DEFAULT_HAS_TITLE = true;
const DEFAULT_SHOW_BADGES = true;
const DEFAULT_USE_LEGACY = true;

function EntityInfoWidget(props: EntityInfoWidgetProps) {
    const { api, iri, ontologyId, hasTitle = DEFAULT_HAS_TITLE, entityType, parameter, showBadges = DEFAULT_SHOW_BADGES, useLegacy = DEFAULT_USE_LEGACY, ...rest } = props;
    const olsApi = new OlsApi(api);

    const {
        data: entityInfo,
        isLoading: isLoadingEntityInfo,
        isSuccess: isSuccessEntityInfo,
        isError: isErrorEntityInfo,
        error: errorEntityInfo,
    } = useQuery([api, iri, ontologyId, entityType, parameter, "entityInfo"], () => {
        return olsApi.getResponseObject(entityType, iri, ontologyId, parameter, useLegacy);
    });

    function getOntologyIriSection(entity?: Thing) : JSX.Element {
        if(entity?.getType() != "ontology") {
            return <></>;
        }
        else {
            const castedEntity = entity as Ontology;
            return (
                <>
                    {(castedEntity.getIri() || castedEntity.getOntologyPurl()) &&
                        <EuiFlexItem>
                            <b>Ontology IRI:</b>
                            <p><a id={"ontologyIri"} href={castedEntity.getIri() || castedEntity.getOntologyPurl()}>
                                {castedEntity.getIri() || castedEntity.getOntologyPurl()}
                            </a></p>
                        </EuiFlexItem>
                    }
                </>
            );
        }
    }

    function getVersionIriSection(entity?: Thing) : JSX.Element {
        if(entity?.getType() != "ontology") {
            return <></>;
        }
        else {
            const castedEntity = entity as Ontology;
            return (
                <>
                    {castedEntity.getVersionIri() &&
                        <EuiFlexItem>
                            <b>Version IRI:</b>
                            <p><a id={"versionIri"} href={castedEntity.getVersionIri()}>
                                {castedEntity.getVersionIri()}
                            </a></p>
                        </EuiFlexItem>
                    }
                </>
            );
        }
    }

    function getLastLoadSection(entity?: Thing) : JSX.Element {
        if(entity?.getType() != "ontology") {
            return <></>;
        }
        else {
            const castedEntity = entity as Ontology;
            return (
                <>
                    {castedEntity.getSourceFileTimestamp() &&
                        <EuiFlexItem>
                            <b>Last loaded:</b>
                            <p>{new Date(castedEntity.getSourceFileTimestamp()).toString()}</p>
                        </EuiFlexItem>
                    }
                </>
            );
        }
    }

    function getOntologyIdSection(entity?: Thing) : JSX.Element {
        if(entity?.getType() != "ontology") {
            return <></>;
        }
        else {
            const castedEntity = entity as Ontology;
            return (
                <>
                    {castedEntity.getOntologyId() &&
                        <EuiFlexItem>
                            <b>Ontology ID:</b>
                            <p>{castedEntity.getOntologyId()}</p>
                        </EuiFlexItem>
                    }
                </>
            );
        }
    }

    function getVersionSection(entity?: Thing) : JSX.Element {
        if(entity?.getType() != "ontology") {
            return <></>;
        }
        else {
            const castedEntity = entity as Ontology;
            return (
                <>
                    {castedEntity.getVersion() &&
                        <EuiFlexItem>
                            <b>Version:</b>
                            <p>{castedEntity.getVersion()}</p>
                        </EuiFlexItem>
                    }
                </>
            );
        }
    }

    function getNumClassesSection(entity?: Thing) : JSX.Element {
        if(entity?.getType() != "ontology") {
            return <></>;
        }
        else {
            const castedEntity = entity as Ontology;
            return (
                <>
                    {castedEntity.getNumClasses() &&
                        <EuiFlexItem>
                            <b>Number of classes:</b>
                            <p>{castedEntity.getNumClasses().toLocaleString()}</p>
                        </EuiFlexItem>
                    }
                </>
            );
        }
    }

    function getCreatorsSection(entity?: Thing) : JSX.Element {
        if(entity?.getType() != "ontology") {
            return <></>;
        }
        else {
            const castedEntity = entity as Ontology;
            return (
                <>
                    {castedEntity.getCreators().length > 0 &&
                        <><EuiFlexItem>
                            <b>Creators:</b>
                            {castedEntity.getCreators().length > 1 ?
                                <ul>{castedEntity.getCreators().map((creator) => {
                                    return <li id={creator + randomString()}>{getEntityLinkJSX(castedEntity, castedEntity.getLinkedEntities(), creator, api, showBadges)}</li>
                                })}</ul> :
                                <p>{getEntityLinkJSX(castedEntity, castedEntity.getLinkedEntities(), castedEntity.getCreators()[0], api, showBadges)}</p>
                            }
                        </EuiFlexItem><EuiSpacer/></>
                    }
                </>
            );
        }
    }

    function getAnnotationSection(entity?: Thing) : JSX.Element {
        if(entity == undefined) return <></>;
        return (
            <>
                {entity.getAnnotationPredicates().map((annoKey) => (
                    <EuiFlexItem grow={false} key={annoKey}>
                        <b>{entity.getAnnotationTitleById(annoKey)}:</b>
                        {entity.getAnnotationById(annoKey).length > 1 ?
                            <ul>{entity.getAnnotationById(annoKey).map((annotation) => {
                                return <li id={annotation.value}>{getReifiedJSX(entity, annotation, api, showBadges)}</li>;
                            })}</ul> :
                            <p>{getReifiedJSX(entity, entity.getAnnotationById(annoKey)[0], api, showBadges)}</p>
                        }
                    </EuiFlexItem>
                ))}
            </>
        );
    }

    function getLabelSection(entity?: Thing) : JSX.Element {
        if(entity == undefined || entity.getType() == "ontology") {
            return <></>;
        }
        else {
            return (
                <>
                    {entity.getLabel() &&
                        <><EuiFlexItem>
                            <b>Label:</b>
                            {entity.getLabel()}
                        </EuiFlexItem><EuiSpacer/></>
                    }
                </>
            );
        }
    }

    function getSynonymsSection(entity?: Thing) : JSX.Element {
        if(entity == undefined || entity.getType() == "ontology") {
            return <></>;
        }
        else {
            const castedEntity = entity as Entity;
            return (
                <>
                    {castedEntity.getSynonyms().length > 0 &&
                        <><EuiFlexItem>
                            <b>Synonyms:</b>
                            {castedEntity.getSynonyms().length > 1 ?
                                <ul>{castedEntity.getSynonyms().map((synonym) => {
                                    return <li id={synonym.value}>{getReifiedJSX(castedEntity, synonym, api, showBadges)}</li>;
                                })}</ul> :
                                <p>{getReifiedJSX(castedEntity, castedEntity.getSynonyms()[0], api, showBadges)}</p>
                            }
                        </EuiFlexItem></>
                    }
                </>
            );
        }
    }

    function getSubsetsSection(entity?: Thing) : JSX.Element {
        if(entity == undefined || entity.getType() != "class") {
            return <></>;
        }
        else {
            const castedEntity = entity as Class;
            return (
                <>
                    { castedEntity.getSubsets().length > 0 &&
                        <><EuiFlexItem>
                            <b>In Subsets:</b>
                            {castedEntity.getSubsets().length > 1 ?
                                <ul>{castedEntity.getSubsets().map((subset) => {
                                    return <li id={subset + randomString()}>{getEntityLinkJSX(castedEntity, castedEntity.getLinkedEntities(), subset, api, showBadges)}</li>
                                })}</ul> :
                                <p>{getEntityLinkJSX(castedEntity, castedEntity.getLinkedEntities(), castedEntity.getSubsets()[0], api, showBadges)}</p>
                            }
                        </EuiFlexItem></>
                    }
                </>
            );
        }
    }

    return (
        <>
            <EuiCard
                title={hasTitle ? (entityType ? capitalize(entityType) : (isSuccessEntityInfo && entityInfo) ? capitalize(entityInfo.getType()) : "")  +" Information" : ""}
                layout="horizontal"
            >

                {isLoadingEntityInfo && <EuiLoadingSpinner size={'s'}/>}
                {isSuccessEntityInfo &&
                    <EuiText {...rest}>
                        {getOntologyIriSection(entityInfo)}
                        {getVersionIriSection(entityInfo)}
                        {getLastLoadSection(entityInfo)}

                        {/* TODO: Do we want the following on the information widget?
                                  Ebi does not have them there, but on other parts of the entity page */
                            <>
                                {getOntologyIdSection(entityInfo)}
                                {getVersionSection(entityInfo)}
                                {getNumClassesSection(entityInfo)}
                                {   // redundant as it's listed in annotations anyway
                                /*{getCreatorsSection(entityInfo)}*/}
                            </>
                        }

                        {getLabelSection(entityInfo)}
                        {getSynonymsSection(entityInfo)}
                        {getSubsetsSection(entityInfo)}
                        {getAnnotationSection(entityInfo)}
                    </EuiText>
                }
                {isErrorEntityInfo && <EuiText>{getErrorMessageToDisplay(errorEntityInfo, "information")}</EuiText>}
            </EuiCard>
        </>
    );
}

export { EntityInfoWidget };
