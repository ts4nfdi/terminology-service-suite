import React from "react";
import {EuiCard, EuiFlexItem, EuiLoadingSpinner, EuiSpacer, EuiText} from "@elastic/eui";
import {OlsApi} from "../../../api/OlsApi";
import {useQuery} from 'react-query'
import { getErrorMessageToDisplay } from "../../../utils/helper";
import {asArray, capitalize, deCamelCase, deUnderscore, randomString} from "../../../app/util";
import {getClassExpressionJSX, getEntityLinkJSX, getReifiedJSX, getTooltip} from "../../../model/StructureRendering";
import {Property, Thing, Class, Entity, Individual} from "../../../model/interfaces";
import {isClass, isProperty, isIndividual, EntityTypeName} from "../../../model/ModelTypeCheck";

export interface EntityInfoWidgetProps {
    api: string;
    iri: string;
    ontologyId?: string;
    hasTitle?: boolean;
    entityType: EntityTypeName
    /**
     * Additional parameters to pass to the API.
     *
     * This parameters can be used to filter the search results. Each parameter can be combined via
     * the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign
     * <i><b>,</b></i>. The following keys could be used:<br/> <br/>
     *  <table>
     *  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
     *  <tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>
     *  <tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>
     *  <tr><td>slim</td><td>Restrict a search to a particular set of slims by name</td></tr>
     *  <tr><td>fieldList</td><td>Specify the fields to return. Defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td></tr>
     *  <tr><td>obsoletes</td><td>Set to true to include obsolete terms in the results</td></tr>
     *  <tr><td>local</td><td>Set to true to only return terms that are in a defining ontology, e.g. only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>
     *  <tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>
     *  <tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>
     *  <tr><td>rows</td><td>Set results per page</td></tr>
     *  <tr><td>start</td><td>Set the results page number</td></tr>
     *  <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. collection=nfdi4health</td></tr>
     * </table>
     */
    parameter?: string;
    showBadges?: boolean; // default is true
    useLegacy?: boolean; // default is true
}

const DEFAULT_HAS_TITLE = true;

function EntityInfoWidget(props: EntityInfoWidgetProps) {
    const { api, iri, ontologyId, hasTitle = DEFAULT_HAS_TITLE, entityType, parameter, showBadges , useLegacy , ...rest } = props;
    const olsApi = new OlsApi(api);

    const {
        data: entity,
        isLoading: isLoadingEntity,
        isSuccess: isSuccessEntity,
        isError: isErrorEntity,
        error: errorEntity,
    } = useQuery(
        [
            "entityInfo",
            props
        ],
        () => {
            return olsApi.getEntityObject(iri, entityType, ontologyId, parameter, useLegacy);
        }
    );

    function getLabelSection(entity: Entity) : JSX.Element {
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

    function getSynonymsSection(entity: Entity) : JSX.Element {
        return (
            <>
                {entity.getSynonyms().length > 0 &&
                    <><EuiFlexItem>
                        <b>Synonyms:</b>
                        {entity.getSynonyms().length > 1 ?
                            <ul>{entity.getSynonyms().map((synonym) => {
                                return <li key={randomString()} id={synonym.value}>{getReifiedJSX(entity, synonym, api, showBadges)}</li>;
                            })}</ul> :
                            <p>{getReifiedJSX(entity, entity.getSynonyms()[0], api, showBadges)}</p>
                        }
                    </EuiFlexItem></>
                }
            </>
        );
    }

    function getHasKeySection(term: Class) : JSX.Element {
        const keys = term.getHasKey();
        return (
            <>
                {keys.length > 0 &&
                    <><EuiFlexItem>
                        <b>Has Key:</b>
                        {keys.length > 1 ?
                            <ul>{keys.map((keys) => {
                                return <li key={randomString()}>{getClassExpressionJSX(term, term.getLinkedEntities(), keys, api, showBadges)}</li>
                            })}</ul> :
                            <p>{getClassExpressionJSX(term, term.getLinkedEntities(), keys[0], api, showBadges)}</p>
                        }
                    </EuiFlexItem></>
                }
            </>
        );
    }

    function getSubsetsSection(term: Class) : JSX.Element {
        return (
            <>
                { term.getSubsets().length > 0 &&
                    <><EuiFlexItem>
                        <b>In Subsets:</b>
                        {term.getSubsets().length > 1 ?
                            <ul>{term.getSubsets().map((subset) => {
                                return <li key={randomString()} id={subset + randomString()}>{getEntityLinkJSX(term, term.getLinkedEntities(), subset, api, showBadges)}</li>
                            })}</ul> :
                            <p>{getEntityLinkJSX(term, term.getLinkedEntities(), term.getSubsets()[0], api, showBadges)}</p>
                        }
                    </EuiFlexItem></>
                }
            </>
        );
    }

    function getPropertyCharacteristicsSection(property: Property) : JSX.Element {
        const characteristics = property.getRdfTypes().map(type => {
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

    function getDomainSection(property: Property) : JSX.Element {
        const domains = property.getDomain();
        return (
            <>
                {domains.length > 0 &&
                    <><EuiFlexItem>
                        <b>Domain:</b>
                        {domains.length > 1 ?
                            <ul>{domains.map((domains) => {
                                return <li key={randomString()}>{getClassExpressionJSX(property, property.getLinkedEntities(), domains, api, showBadges)}</li>
                            })}</ul> :
                            <p>{getClassExpressionJSX(property, property.getLinkedEntities(), domains[0], api, showBadges)}</p>
                        }
                    </EuiFlexItem></>
                }
            </>
        );
    }

    function getRangeSection(property: Property) : JSX.Element {
        const ranges = property.getRange();
        return (
            <>
                {ranges.length > 0 &&
                    <EuiFlexItem>
                        <b>Range:</b>
                        {ranges.length > 1 ?
                            <ul>{ranges.map((ranges) => {
                                return <li key={randomString()}>{getClassExpressionJSX(property, property.getLinkedEntities(), ranges, api, showBadges)}</li>
                            })}</ul> :
                            <p>{getClassExpressionJSX(property, property.getLinkedEntities(), ranges[0], api, showBadges)}</p>
                        }
                    </EuiFlexItem>
                }
            </>
        );
    }

    function getIndividualPropertyAssertionsSection(individual: Individual) : JSX.Element {
        const propertyIris = Object.keys(individual.properties);
        const negativeProperties = propertyIris.filter((key) => key.startsWith("negativePropertyAssertion+"));
        const objectProperties = propertyIris.filter((key) => individual.getLinkedEntities().get(key) && individual.getLinkedEntities().get(key)!.type.indexOf("objectProperty") !== -1)
        const dataProperties = propertyIris.filter((key) => individual.getLinkedEntities().get(key) && individual.getLinkedEntities().get(key)!.type.indexOf("dataProperty") !== -1)
        const propertyAssertions: JSX.Element[] = [];

        for(const iri of objectProperties) {
            const values = asArray(individual.properties[iri]);
            for(const v of values) {
                propertyAssertions.push(
                    <>
                        {getClassExpressionJSX(individual, individual.getLinkedEntities(), iri, api, showBadges)}
                        {typeof v === "string" && v.includes("http") ?
                            <>
                                &nbsp;
                                <span style={{fontSize: "medium", color: "gray"}}>&#9656;</span>
                                &nbsp;
                                {getEntityLinkJSX(individual, individual.getLinkedEntities(), v, api, showBadges)}
                            </> :
                            getTooltip((typeof v === "string" ? v : typeof v === "object" && !Array.isArray(v) && v.value ? JSON.stringify(v.value) : JSON.stringify(v)))
                        }
                    </>
                )
            }
        }

        for(const iri of dataProperties) {
            const values = asArray(individual.properties[iri]);
            for(const v of values) {
                propertyAssertions.push(
                    <>
                        {getClassExpressionJSX(individual, individual.getLinkedEntities(), iri, api, showBadges)}
                        {<>
                            &nbsp;
                            <span style={{fontSize: "medium", color: "gray"}}>&#9656;</span>
                            &nbsp;
                            {getEntityLinkJSX(individual, individual.getLinkedEntities(), v, api, showBadges)}
                        </>}
                    </>
                )
            }
        }

        for(const key of negativeProperties) {
            const iri = key.slice("negativePropertyAssertion+".length);
            const linkedEntity = individual.getLinkedEntities().get(iri);
            const hasDataProperty = linkedEntity?.type.indexOf("dataProperty") !== -1;
            const hasObjectProperty = linkedEntity?.type.indexOf("objectProperty") !== -1;
            const values = asArray(individual.properties[key]);

            for(const v of values) {
                propertyAssertions.push(
                    <>
                        <i style={{color: "purple"}}>not</i>{" "}
                        {getClassExpressionJSX(individual, individual.getLinkedEntities(), iri, api, showBadges)}
                        {typeof v === "string" && v.includes("http") ? (
                            <>
                                &nbsp;
                                <span style={{fontSize: "medium", color: "gray"}}>&#9656;</span>
                                &nbsp;
                                {getEntityLinkJSX(individual, individual.getLinkedEntities(), v, api, showBadges)}
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
                                {getEntityLinkJSX(individual, individual.getLinkedEntities(), v, api, showBadges)}
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

    function getAnnotationSection(thing: Thing) : JSX.Element {
        return (
            <>
                {thing.getAnnotationPredicates().map((annoKey) => {
                    const annos = thing.getAnnotationById(annoKey);
                    if(annos.length == 0) return <></>;

                    return <EuiFlexItem grow={false} key={annoKey}>
                        <b>{capitalize(deUnderscore(deCamelCase(thing.getAnnotationTitleById(annoKey))))}:</b>
                        {annos.length > 1 ?
                            <ul>{annos.map((annotation) => {
                                return <li key={randomString()} id={annotation.value}>{getReifiedJSX(thing, annotation, api, showBadges)}</li>;
                            })}</ul> :
                            <p key={randomString()}>{getReifiedJSX(thing, annos[0], api, showBadges)}</p>
                        }
                    </EuiFlexItem>
                    }
                )}
            </>
        );
    }

    return (
        <>
            <EuiCard
                title={hasTitle ? (entityType ? capitalize(entityType) : (isSuccessEntity && entity) ? capitalize(entity.getType()) : "")  +" Information" : ""}
                layout="horizontal"
            >

                {isLoadingEntity && <EuiLoadingSpinner size={'s'}/>}
                {isSuccessEntity && entity !== undefined &&
                    <EuiText {...rest}>
                        {getLabelSection(entity)}
                        {getSynonymsSection(entity)}

                        {isClass(entity) &&
                            <>
                                {getSubsetsSection(entity)}
                                {getHasKeySection(entity)}
                            </>
                        }

                        {isProperty(entity) &&
                            <>
                                {getPropertyCharacteristicsSection(entity)}
                                {getDomainSection(entity)}
                                {getRangeSection(entity)}
                            </>
                        }

                        {isIndividual(entity) &&
                            <>
                                {getIndividualPropertyAssertionsSection(entity)}
                            </>
                        }

                        {getAnnotationSection(entity)}
                    </EuiText>
                }
                {isErrorEntity && <EuiText>{getErrorMessageToDisplay(errorEntity, "information")}</EuiText>}
            </EuiCard>
        </>
    );
}

export { EntityInfoWidget };