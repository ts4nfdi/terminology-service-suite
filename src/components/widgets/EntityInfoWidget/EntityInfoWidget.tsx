import React from "react";
import {EuiCard, EuiFlexItem, EuiLoadingSpinner, EuiSpacer, EuiText} from "@elastic/eui";
import {OlsApi} from "../../../api/OlsApi";
import {useQuery} from 'react-query'
import { getErrorMessageToDisplay } from "../../../utils/helper";
import {asArray, capitalize, randomString} from "../../../app/util";
import {getClassExpressionJSX, getEntityLinkJSX, getReifiedJSX, getTooltip} from "../../../model/StructureRendering";
import {Ontology, Property, Thing, Class, Entity, Individual} from "../../../model/interfaces";
import {isEntity, isOntology, isClass, isProperty, isIndividual} from "../../../model/ModelTypeCheck";

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
    } = useQuery(
        [
            "entityInfo",
            props
        ],
        () => {
            return olsApi.getResponseObject(entityType, iri, ontologyId, parameter, useLegacy);
        }
    );

    function getOntologyIriSection(ontology: Ontology): JSX.Element {
        return (
            <>
                {(ontology.getIri() || ontology.getOntologyPurl()) &&
                    <EuiFlexItem>
                        <b>Ontology IRI:</b>
                        <p><a id={"ontologyIri"} href={ontology.getIri() || ontology.getOntologyPurl()}>
                            {ontology.getIri() || ontology.getOntologyPurl()}
                        </a></p>
                    </EuiFlexItem>
                }
            </>
        );
    }

    function getVersionIriSection(ontology: Ontology) : JSX.Element {
        return (
            <>
                {ontology.getVersionIri() &&
                    <EuiFlexItem>
                        <b>Version IRI:</b>
                        <p><a id={"versionIri"} href={ontology.getVersionIri()}>
                            {ontology.getVersionIri()}
                        </a></p>
                    </EuiFlexItem>
                }
            </>
        );
    }

    function getLastLoadSection(ontology: Ontology) : JSX.Element {
        return (
            <>
                {ontology.getSourceFileTimestamp() &&
                    <EuiFlexItem>
                        <b>Last loaded:</b>
                        <p>{new Date(ontology.getSourceFileTimestamp()).toString()}</p>
                    </EuiFlexItem>
                }
            </>
        );
    }

    function getOntologyIdSection(ontology: Ontology) : JSX.Element {
        return (
            <>
                {ontology.getOntologyId() &&
                    <EuiFlexItem>
                        <b>Ontology ID:</b>
                        <p>{ontology.getOntologyId()}</p>
                    </EuiFlexItem>
                }
            </>
        );
    }

    function getVersionSection(ontology: Ontology) : JSX.Element {
        return (
            <>
                {ontology.getVersion() &&
                    <EuiFlexItem>
                        <b>Version:</b>
                        <p>{ontology.getVersion()}</p>
                    </EuiFlexItem>
                }
            </>
        );
    }

    function getNumClassesSection(ontology: Ontology) : JSX.Element {
        return (
            <>
                {ontology.getNumClasses() &&
                    <EuiFlexItem>
                        <b>Number of classes:</b>
                        <p>{ontology.getNumClasses().toLocaleString()}</p>
                    </EuiFlexItem>
                }
            </>
        );
    }

    function getCreatorsSection(ontology: Ontology) : JSX.Element {
        return (
            <>
                {ontology.getCreators().length > 0 &&
                    <><EuiFlexItem>
                        <b>Creators:</b>
                        {ontology.getCreators().length > 1 ?
                            <ul>{ontology.getCreators().map((creator) => {
                                return <li id={creator + randomString()}>{getEntityLinkJSX(ontology, ontology.getLinkedEntities(), creator, api, showBadges)}</li>
                            })}</ul> :
                            <p>{getEntityLinkJSX(ontology, ontology.getLinkedEntities(), ontology.getCreators()[0], api, showBadges)}</p>
                        }
                    </EuiFlexItem><EuiSpacer/></>
                }
            </>
        );
    }

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
                    <><EuiFlexItem>
                        <b>Range:</b>
                        {ranges.length > 1 ?
                            <ul>{ranges.map((ranges) => {
                                return <li key={randomString()}>{getClassExpressionJSX(property, property.getLinkedEntities(), ranges, api, showBadges)}</li>
                            })}</ul> :
                            <p>{getClassExpressionJSX(property, property.getLinkedEntities(), ranges[0], api, showBadges)}</p>
                        }
                    </EuiFlexItem></>
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

        for(let iri of objectProperties) {
            const values = asArray(individual.properties[iri]);
            for(let v of values) {
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

        for(let iri of dataProperties) {
            const values = asArray(individual.properties[iri]);
            for(let v of values) {
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

        for(let key of negativeProperties) {
            const iri = key.slice("negativePropertyAssertion+".length);
            const linkedEntity = individual.getLinkedEntities().get(iri);
            const hasDataProperty = linkedEntity!.type.indexOf("dataProperty") !== -1;
            const hasObjectProperty = linkedEntity!.type.indexOf("objectProperty") !== -1;
            const values = asArray(individual.properties[key]);

            for(let v of values) {
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
                {thing.getAnnotationPredicates().map((annoKey) => (
                    <EuiFlexItem grow={false} key={annoKey}>
                        <b>{thing.getAnnotationTitleById(annoKey)}:</b>
                        {thing.getAnnotationById(annoKey).length > 1 ?
                            <ul>{thing.getAnnotationById(annoKey).map((annotation) => {
                                return <li key={randomString()} id={annotation.value}>{getReifiedJSX(thing, annotation, api, showBadges)}</li>;
                            })}</ul> :
                            <p key={randomString()}>{getReifiedJSX(thing, thing.getAnnotationById(annoKey)[0], api, showBadges)}</p>
                        }
                    </EuiFlexItem>
                ))}
            </>
        );
    }

    return (
        <>
            <EuiCard
                title={hasTitle ? (entityType ? capitalize(entityType) : (isSuccessEntityInfo && entityInfo) ? capitalize(entityInfo.getType()) : "")  +" Information" : ""}
                layout="horizontal"
            >

                {isLoadingEntityInfo && <EuiLoadingSpinner size={'s'}/>}
                {isSuccessEntityInfo && entityInfo !== undefined &&
                    <EuiText {...rest}>
                        {isOntology(entityInfo) &&
                            <>
                                {getOntologyIriSection(entityInfo)}
                                {getVersionIriSection(entityInfo)}
                                {getLastLoadSection(entityInfo)}
                                {/* TODO: Do we want the following on the information widget?
                                          Ebi does not have them there, but on other parts of the entity page */
                                    <>
                                        {getOntologyIdSection(entityInfo)}
                                        {getVersionSection(entityInfo)}
                                        {getNumClassesSection(entityInfo)}
                                        {/*{getCreatorsSection(entityInfo)}*/ /* redundant as it's listed in annotations anyway */}
                                    </>
                                }
                            </>
                        }

                        {isEntity(entityInfo) &&
                            <>
                                {getLabelSection(entityInfo)}
                                {getSynonymsSection(entityInfo)}
                            </>
                        }

                        {isClass(entityInfo) &&
                            <>
                                {getSubsetsSection(entityInfo)}
                                {getHasKeySection(entityInfo)}
                            </>
                        }

                        {isProperty(entityInfo) &&
                            <>
                                {getPropertyCharacteristicsSection(entityInfo)}
                                {getDomainSection(entityInfo)}
                                {getRangeSection(entityInfo)}
                            </>
                        }

                        {isIndividual(entityInfo) &&
                            <>
                                {getIndividualPropertyAssertionsSection(entityInfo)}
                            </>
                        }

                        {getAnnotationSection(entityInfo)}
                    </EuiText>
                }
                {isErrorEntityInfo && <EuiText>{getErrorMessageToDisplay(errorEntityInfo, "information")}</EuiText>}
            </EuiCard>
        </>
    );
}

export { EntityInfoWidget };