import React from "react";
import { EuiCard, EuiFlexItem, EuiLoadingSpinner, EuiSpacer, EuiText } from "@elastic/eui";
import { OlsApi } from "../../../api/OlsApi";
import { useQuery } from 'react-query'
import {getErrorMessageToDisplay} from "../index";
import {asArray, capitalize, randomString} from "../../../app/util";
import Ontology from "./../../../model/interfaces/Ontology"
import Thing from "../../../model/interfaces/Thing";
import Entity from "../../../model/interfaces/Entity";
import Class from "../../../model/interfaces/Class";
import {getClassExpressionJSX, getEntityLinkJSX, getReifiedJSX, getTooltip} from "../../../model/StructureRendering";
import Property from "../../../model/interfaces/Property";
import Individual from "../../../model/interfaces/Individual";
import {type} from "os";

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

function EntityInfoWidget(props: EntityInfoWidgetProps) {
    const { api, iri, ontologyId, hasTitle = DEFAULT_HAS_TITLE, entityType, parameter, showBadges = DEFAULT_SHOW_BADGES, useLegacy , ...rest } = props;
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
                                return <li key={randomString()} id={annotation.value}>{getReifiedJSX(entity, annotation, api, showBadges)}</li>;
                            })}</ul> :
                            <p key={randomString()}>{getReifiedJSX(entity, entity.getAnnotationById(annoKey)[0], api, showBadges)}</p>
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
                                    return <li key={randomString()} id={synonym.value}>{getReifiedJSX(castedEntity, synonym, api, showBadges)}</li>;
                                })}</ul> :
                                <p>{getReifiedJSX(castedEntity, castedEntity.getSynonyms()[0], api, showBadges)}</p>
                            }
                        </EuiFlexItem></>
                    }
                </>
            );
        }
    }

    function getHasKeySection(entity?: Thing) : JSX.Element {
        if(entity == undefined || entity.getType() != "class") return <></>;
        else {
            const castedEntity = entity as Class;

            const keys = castedEntity.getHasKey();
            return (
                <>
                    {keys.length > 0 &&
                        <><EuiFlexItem>
                            <b>Has Key:</b>
                            {keys.length > 1 ?
                                <ul>{keys.map((keys) => {
                                    return <li key={randomString()}>{getClassExpressionJSX(castedEntity, castedEntity.getLinkedEntities(), keys, api, showBadges)}</li>
                                })}</ul> :
                                <p>{getClassExpressionJSX(castedEntity, castedEntity.getLinkedEntities(), keys[0], api, showBadges)}</p>
                            }
                        </EuiFlexItem></>
                    }
                </>
            );
        }
    }

    function getPropertyCharacteristicsSection(entity?: Thing) : JSX.Element {
        if(entity == undefined || entity.getType() != "property") return <></>;
        else {
            const castedEntity = entity as Property;

            const characteristics = castedEntity.getRdfTypes().map(type => {
                return ({
                    'http://www.w3.org/2002/07/owl#FunctionalProperty': 'Functional',
                    'http://www.w3.org/2002/07/owl#InverseFunctionalProperty': 'Inverse Functional',
                    'http://www.w3.org/2002/07/owl#TransitiveProperty': 'Transitive',
                    'http://www.w3.org/2002/07/owl#SymmetricProperty': 'Symmetric',
                    'http://www.w3.org/2002/07/owl#AsymmetricProperty': 'Asymmetric',
                    'http://www.w3.org/2002/07/owl#ReflexiveProperty': 'Reflexive',
                    'http://www.w3.org/2002/07/owl#IrreflexiveProperty': 'Irreflexive',
                })[type];
            }).filter((type) => !!type);

            return (
                <>
                    {characteristics.length > 0 &&
                        <><EuiFlexItem>
                            <b>Characteristics:</b>
                            {characteristics.length > 1 ?
                                <ul>{characteristics.map((characteristic) => {
                                    return <li key={randomString()}>{characteristic}</li>
                                })
                                    .sort()}</ul> :
                                <p>{characteristics[0]}</p>
                            }
                        </EuiFlexItem></>
                    }
                </>
            );
        }
    }

    function getDomainSection(entity?: Thing) : JSX.Element {
        if(entity == undefined || entity.getType() != "property") return <></>;
        else {
            const castedEntity = entity as Property;

            const domains = castedEntity.getDomain();
            return (
                <>
                    {domains.length > 0 &&
                        <><EuiFlexItem>
                            <b>Domain:</b>
                            {domains.length > 1 ?
                                <ul>{domains.map((domains) => {
                                    return <li key={randomString()}>{getClassExpressionJSX(castedEntity, castedEntity.getLinkedEntities(), domains, api, showBadges)}</li>
                                })}</ul> :
                                <p>{getClassExpressionJSX(castedEntity, castedEntity.getLinkedEntities(), domains[0], api, showBadges)}</p>
                            }
                        </EuiFlexItem></>
                    }
                </>
            );
        }
    }

    function getRangeSection(entity?: Thing) : JSX.Element {
        if(entity == undefined || entity.getType() != "property") return <></>;
        else {
            const castedEntity = entity as Property;

            const ranges = castedEntity.getRange();
            return (
                <>
                    {ranges.length > 0 &&
                        <><EuiFlexItem>
                            <b>Range:</b>
                            {ranges.length > 1 ?
                                <ul>{ranges.map((ranges) => {
                                    return <li key={randomString()}>{getClassExpressionJSX(castedEntity, castedEntity.getLinkedEntities(), ranges, api, showBadges)}</li>
                                })}</ul> :
                                <p>{getClassExpressionJSX(castedEntity, castedEntity.getLinkedEntities(), ranges[0], api, showBadges)}</p>
                            }
                        </EuiFlexItem></>
                    }
                </>
            );
        }
    }

    function getIndividualPropertyAssertionsSection(entity?: Thing) : JSX.Element {
        if(entity == undefined || entity.getType() != "individual") return <></>;
        else {
            const castedEntity = entity as Individual;

            const propertyIris = Object.keys(entity.properties);
            const negativeProperties = propertyIris.filter((key) => key.startsWith("negativePropertyAssertion+"));
            const objectProperties = propertyIris.filter((key) => entity.getLinkedEntities().get(key) && entity.getLinkedEntities().get(key)!.type.indexOf("objectProperty") !== -1)
            const dataProperties = propertyIris.filter((key) => entity.getLinkedEntities().get(key) && entity.getLinkedEntities().get(key)!.type.indexOf("dataProperty") !== -1)
            const propertyAssertions: JSX.Element[] = [];

            for(let iri of objectProperties) {
                const values = asArray(entity.properties[iri]);
                for(let v of values) {
                    propertyAssertions.push(
                        <>
                            {getClassExpressionJSX(castedEntity, castedEntity.getLinkedEntities(), iri, api, showBadges)}
                            {typeof v === "string" && v.includes("http") ?
                                <>
                                    &nbsp;
                                    <span style={{fontSize: "medium", color: "gray"}}>&#9656;</span>
                                    &nbsp;
                                    {getEntityLinkJSX(castedEntity, castedEntity.getLinkedEntities(), v, api, showBadges)}
                                </> :
                                getTooltip((typeof v === "string" ? v : typeof v === "object" && !Array.isArray(v) && v.value ? JSON.stringify(v.value) : JSON.stringify(v)))
                            }
                        </>
                    )
                }
            }

            for(let iri of dataProperties) {
                const values = asArray(entity.properties[iri]);
                for(let v of values) {
                    propertyAssertions.push(
                        <>
                            {getClassExpressionJSX(castedEntity, castedEntity.getLinkedEntities(), iri, api, showBadges)}
                            {<>
                                &nbsp;
                                <span style={{fontSize: "medium", color: "gray"}}>&#9656;</span>
                                &nbsp;
                                {getEntityLinkJSX(castedEntity, castedEntity.getLinkedEntities(), v, api, showBadges)}
                            </>}
                        </>
                    )
                }
            }

            for(let key of negativeProperties) {
                const iri = key.slice("negativePropertyAssertion+".length);
                const linkedEntity = castedEntity.getLinkedEntities().get(iri);
                const hasDataProperty = linkedEntity!.type.indexOf("dataProperty") !== -1;
                const hasObjectProperty = linkedEntity!.type.indexOf("objectProperty") !== -1;
                const values = asArray(castedEntity.properties[key]);

                for(let v of values) {
                    propertyAssertions.push(
                        <>
                            <i style={{color: "purple"}}>not</i>{" "}
                            {getClassExpressionJSX(castedEntity, castedEntity.getLinkedEntities(), iri, api, showBadges)}
                            {typeof v === "string" && v.includes("http") ? (
                                <>
                                    &nbsp;
                                    <span style={{fontSize: "medium", color: "gray"}}>&#9656;</span>
                                    &nbsp;
                                    {getEntityLinkJSX(castedEntity, castedEntity.getLinkedEntities(), v, api, showBadges)}
                                </>
                            ) :
                            hasObjectProperty ? (
                                getTooltip((typeof v === "string" ? v : typeof v === "object" && !Array.isArray(v) && v.value ? JSON.stringify(v.value) : JSON.stringify(v)))
                            ) :
                            hasDataProperty ? (
                                <>
                                    &nbsp;
                                    <span style={{fontSize: "medium", color: "gray"}}>&#9656;</span>
                                    &nbsp;
                                    {getEntityLinkJSX(castedEntity, castedEntity.getLinkedEntities(), v, api, showBadges)}
                                </>
                            ) :
                                <></>
                            }
                        </>
                    )
                }
            }

            return (
                <>
                    {propertyAssertions.length > 0 &&
                        <><EuiFlexItem>
                            <b>Property assertions:</b>
                            {propertyAssertions.length > 1 ?
                                <ul>{propertyAssertions.map((pa) => {
                                    return <li key={randomString()}>{pa}</li>
                                })
                                    .sort()}</ul> :
                                <p>{propertyAssertions[0]}</p>
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
                                    return <li key={randomString()} id={subset + randomString()}>{getEntityLinkJSX(castedEntity, castedEntity.getLinkedEntities(), subset, api, showBadges)}</li>
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

                        {getHasKeySection(entityInfo)}
                        {getPropertyCharacteristicsSection(entityInfo)}
                        {getDomainSection(entityInfo)}
                        {getRangeSection(entityInfo)}
                        {getIndividualPropertyAssertionsSection(entityInfo)}

                        {getAnnotationSection(entityInfo)}
                    </EuiText>
                }
                {isErrorEntityInfo && <EuiText>{getErrorMessageToDisplay(errorEntityInfo, "information")}</EuiText>}
            </EuiCard>
        </>
    );
}

export { EntityInfoWidget };
