import React, {ReactElement} from "react";
import { OlsApi } from "../../../api/OlsApi";
import { useQuery } from "react-query";
import {EuiCard, EuiFlexItem, EuiLoadingSpinner, EuiText} from "@elastic/eui";
import {Class, Individual, Property, Thing} from "../../../model/interfaces";
import {
    getClassExpressionJSX,
    getEntityLinkJSX,
    getReifiedJSX,
    getSectionListJSX
} from "../../../model/StructureRendering";
import {EntityTypeName, isClass, isIndividual, isProperty} from "../../../model/ModelTypeCheck";
import Reified from "../../../model/Reified";
import {createModelObject} from "../../../model/ModelObjectCreator";
import {asArray, capitalize, getEntityTypeName, randomString} from "../../../app/util";

export interface EntityRelationsWidgetProps {
    api: string;
    iri: string;
    ontologyId?: string;
    hasTitle?: boolean;
    entityType?: EntityTypeName;
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
    showBadges?: boolean;
}

const DEFAULT_HAS_TITLE = true;

/**
 * Builds and returns the type section JSX element.
 * @param individual
 * @param props the entities' properties
 * @returns {ReactElement} the sections' JSX element
 */
function getIndividualTypesSectionJSX(individual: Individual, props: EntityRelationsWidgetProps): ReactElement {
    const types = individual.getRdfTypes().filter((elem: string) => elem !== "http://www.w3.org/2002/07/owl#NamedIndividual" && !elem.startsWith("http://www.w3.org/2000/01/rdf-schema#"));

    if(individual.getRdfTypes().length > 0) {
        return (<EuiFlexItem>
            <b>Type</b>
            {getSectionListJSX(individual, individual.getLinkedEntities(), types, props.api, props.showBadges)}
        </EuiFlexItem>);
    }
    else return <></>;
}

/**
 * Builds and returns the same as section JSX element.
 * @param individual
 * @param props the entities' properties
 * @returns {ReactElement} the sections' JSX element
 */
function getIndividualSameAsSectionJSX(individual: Individual, props: EntityRelationsWidgetProps): ReactElement {
    const sameAs = individual.getSameAs();

    return (
        <>
            {sameAs.length > 0 &&
                <EuiFlexItem>
                    <b>Same As</b>
                    {getSectionListJSX(individual, individual.getLinkedEntities(), sameAs, props.api, props.showBadges)}
                </EuiFlexItem>
            }
        </>);
}

/**
 * Builds and returns the different from section JSX element.
 * @param individual
 * @param props the entities' properties
 * @returns {ReactElement} the sections' JSX element
 */
function getIndividualDifferentFromSectionJSX(individual: Individual, props: EntityRelationsWidgetProps): ReactElement {
    const differentFrom = individual.getDifferentFrom();

    return (
        <>
            {differentFrom.length > 0 &&
                <EuiFlexItem>
                    <b>Different from</b>
                    {getSectionListJSX(individual, individual.getLinkedEntities(), differentFrom, props.api, props.showBadges)}
                </EuiFlexItem>
            }
        </>
    );
}

/**
 * Builds and returns the disjoint with section JSX element.
 * @param entity
 * @param props the entities' properties
 * @returns {ReactElement} the sections' JSX element
 */
function getDisjointWithSectionJSX(entity: Property | Class, props: EntityRelationsWidgetProps): ReactElement {
    const disjointWith = entity.getDisjointWith();

    return (
        <>
            {disjointWith.length > 0 &&
                <EuiFlexItem>
                    <b>Disjoint with</b>
                    {getSectionListJSX(entity, entity.getLinkedEntities(), disjointWith, props.api, props.showBadges)}
                </EuiFlexItem>
            }
        </>
    );
}

/**
 * Builds and returns the inverse of section JSX element.
 * @param property
 * @param props the entities' properties
 * @returns {ReactElement} the sections' JSX element
 */
function getPropertyInverseOfSectionJSX(property: Property, props: EntityRelationsWidgetProps): ReactElement {
    const inverseOfs = property.getInverseOf();

    return (
        <>
            {inverseOfs.length > 0 &&
                <EuiFlexItem>
                    <b>Inverse of</b>
                    {getSectionListJSX(property, property.getLinkedEntities(), inverseOfs, props.api, props.showBadges)}
                </EuiFlexItem>
            }
        </>
    );
}

/**
 * Builds and returns one property chain JSX element. Is used for {@link getPropertyChainSectionJSX}.
 * @param propertyChain the property chain
 * @param property
 * @param props     the entities' properties
 * @returns {ReactElement[]} the chains JSX element
 */
function getPropertyChainJSX(propertyChain: any[], property: Property, props: EntityRelationsWidgetProps): ReactElement[] {
    return asArray(propertyChain).slice().reverse().map((propertyExpr, i) => { // using .slice() here is important because a mutation of propertyChain would trigger a useQuery()
        return (
            <span key={propertyExpr}>
                {getClassExpressionJSX(property, property.getLinkedEntities(), propertyExpr, props.api, props.showBadges)}
                <>
                    {i < asArray(propertyChain).length - 1 && (
                        <span style={{fontSize: "medium", color: "gray"}}>&nbsp;&#9666;&nbsp;</span>
                    )}
                </>
            </span>
        );
    });
}

/**
 * Builds and returns the property chains section JSX element.
 * @param property
 * @param props the entities' properties
 * @returns {ReactElement} the sections' JSX element
 */
function getPropertyChainSectionJSX(property: Property, props: EntityRelationsWidgetProps): ReactElement {
    const propertyChains = property.getPropertyChains().map((reified : Reified<any>) => reified.value);

    const hasMultipleChains = propertyChains.filter((elem: any) => Array.isArray(elem)).length > 0;

    return (
        <>
            {propertyChains.length > 0 &&
                <EuiFlexItem>
                    <b>{!hasMultipleChains ? "Property chain" : "Property chains"}</b>
                    {!hasMultipleChains ?
                        (
                            <p>{getPropertyChainJSX(propertyChains, property, props)}</p>
                        ) :
                        <ul>
                            {
                                propertyChains.map((item: any) => {
                                    return (<li key={randomString()}>{getPropertyChainJSX(item, property, props)}</li>);
                                })
                            }
                        </ul>
                    }
                </EuiFlexItem>
            }
        </>
    );
}

/**
 * Builds and returns the equivalent to section JSX element.
 * @param entity
 * @param props the entities' properties
 * @returns {ReactElement} the sections' JSX element
 */
function getEntityEquivalentToSectionJSX(entity: Property | Class, props: EntityRelationsWidgetProps): ReactElement {
    const equivalents = entity.getEquivalents();

    return (
        <>
            {equivalents.length > 0 &&
                <EuiFlexItem>
                    <b>Equivalent to</b>
                    {equivalents.length === 1 ?
                        (
                            <p>{getReifiedJSX(entity, equivalents[0], props.api, props.showBadges)}</p>
                        ) :
                        <ul>
                            {
                                equivalents.map((item: any) => {
                                    return (<li key={randomString()} >{getReifiedJSX(entity, item, props.api, props.showBadges)}</li>);
                                })
                            }
                        </ul>
                    }
                </EuiFlexItem>
            }
        </>
    );
}

/**
 * Builds and returns the subentity of section JSX element.
 * @param entity
 * @param props the entities' properties
 * @returns {ReactElement} the sections' JSX element
 */
function getSubentityOfSectionJSX(entity: Property | Class, props: EntityRelationsWidgetProps): ReactElement {
    const superEntities = entity.getSuperEntities();
    return (
        <>
            {superEntities.length > 0 &&
                <EuiFlexItem>
                    <b>Sub{entity.getType()} of</b>
                    {superEntities.length === 1 ?
                        (
                            <p>{getReifiedJSX(entity, superEntities[0], props.api, props.showBadges)}</p>
                        ) :
                        <ul>
                            {
                                superEntities.map((item: any) => {
                                    return (<li key={randomString()}>{getReifiedJSX(entity, item, props.api, props.showBadges)}</li>);
                                })
                            }
                        </ul>
                    }
                </EuiFlexItem>
            }
        </>
    );
}

/**
 * Builds and returns the related from section JSX element.
 * @param entity
 * @param props the entities' properties
 * @returns {ReactElement} the sections' JSX element
 */
function getEntityRelatedFromSectionJSX(entity: Property | Class, props: EntityRelationsWidgetProps): ReactElement {
    const relatedFroms = entity.getRelatedFrom();
    const predicates: string[] = Array.from(new Set(relatedFroms.map((elem: any) => {return elem.value["property"]})));

    return (
        <>
            {relatedFroms.length > 0 &&
                <EuiFlexItem>
                    <b>Related from</b>
                    {predicates.map((p) => {
                        const label = entity.getLinkedEntities().getLabelForIri(p);
                        return (
                            <div key={p.toString() + randomString()}>
                                <div>
                                    <a style={{color: "black"}} href={p}><i>{label || p}</i></a>
                                </div>
                                <ul style={{marginBottom: 0}}>
                                    {relatedFroms.filter((elem: any) => {return elem.value["property"] === p})
                                        .map((elem) => {
                                            return(
                                                <li key={randomString()}>{getClassExpressionJSX(entity, entity.getLinkedEntities(), elem.value["value"], props.api, props.showBadges)}</li>
                                            )
                                        })}
                                </ul>
                                <p></p> {/* Works as empty space left to next section */}
                            </div>
                        );})
                    }
                </EuiFlexItem>
            }
        </>
    );
}

/**
 * Builds and returns the class instances section JSX element.
 * @param term
 * @param instances an array of the classes' instances
 * @param props
 * @returns {ReactElement} the sections' JSX element
 */
function getClassInstancesSectionJSX(term: Class, instances: Thing[], props: EntityRelationsWidgetProps): ReactElement {
    if(instances.length > 0) {
        return (<EuiFlexItem>
            {
                <b>Instances</b>
            }
            <ul>
                {
                    instances.map((instance) => {
                        return (<li key={randomString()} >

                            {getEntityLinkJSX(term, term.getLinkedEntities(), instance.getIri(), props.api, props.showBadges)}
                        </li>);
                    })
                }
            </ul>
        </EuiFlexItem>);
    }
    else {
        return <></>;
    }
}

/**
 * Fetches a classes instances from the JSON api.
 * @param term
 * @param api   a reference to the api
 * @param props the classes' properties
 */
async function fetchInstances(term: Class, api: OlsApi, props: EntityRelationsWidgetProps)  {
    const doubleEncodedTermIri = encodeURIComponent(encodeURIComponent(term.getIri()));
    const response = await api.getClassInstances(undefined, undefined, {ontologyId: props.ontologyId, termIri: doubleEncodedTermIri}, props.parameter)
        .catch((error) => console.log(error));
    if (response["elements"] !== undefined) {
        return asArray(response["elements"]).map((instance) => createModelObject({elements: [instance]}));
    }
    else {
        throw Error("Error fetching instances of '" + props.iri + "'");
    }
}

function EntityRelationsWidget(props: EntityRelationsWidgetProps) {
    const { api, iri, ontologyId, hasTitle = DEFAULT_HAS_TITLE, showBadges, entityType, parameter, ...rest } = props;

    const olsApi = new OlsApi(api);

    /**
     * Used to fetch an entities' data to be shown in different sections
     */
    const {
        data: entity,
        isLoading: isLoadingEntityRelation,
        isSuccess: isSuccessEntityRelation,
        isError: isErrorEntityRelation,
    } = useQuery(
        [
            "entityJson",
            api,
            iri,
            ontologyId,
            entityType,
            parameter,
            showBadges
        ],
        async () => {
            return olsApi.getEntityObject(iri, entityType, ontologyId, parameter,  false); // always use v2/ API
        },
    );

    /**
     * Used to fetch a classes instances to be shown in class instances section
     */
    const {
        data: instancesJson,
        isLoading: isLoadingInstances,
        isSuccess: isSuccessInstances,
    } = useQuery({
        queryKey: [
            "instancesJson",
            entity
        ],
        queryFn: async () => {
            return (entity && isClass(entity) && entity.hasDirectChildren()) ? fetchInstances(entity, olsApi, props) : [];
        },
        enabled: !!entity},
    );

    return (
        <>
            <EuiCard
                title={hasTitle ? (entityType ? capitalize(getEntityTypeName(entityType)) : (isSuccessEntityRelation && entity) ? capitalize(entity.getType()) : "") + " Relations" : ""}
                layout="horizontal"
            >
                {(isLoadingEntityRelation || isLoadingInstances) && <EuiLoadingSpinner size={'s'}/>}
                {isErrorEntityRelation && <EuiText>Requested resource not available</EuiText>}
                {(isSuccessEntityRelation && isSuccessInstances) && entity !== undefined && instancesJson !== undefined &&
                    <EuiText {...rest}>
                        {isIndividual(entity) &&
                            <>
                                {getIndividualTypesSectionJSX(entity, props)}
                                {getIndividualSameAsSectionJSX(entity, props)}
                                {getIndividualDifferentFromSectionJSX(entity, props)}
                            </>
                        }

                        {(isProperty(entity) || isClass(entity)) &&
                            <>
                                {getDisjointWithSectionJSX(entity, props)}
                            </>
                        }

                        {isProperty(entity) &&
                            <>
                                {getPropertyInverseOfSectionJSX(entity, props)}
                                {getPropertyChainSectionJSX(entity, props)}
                            </>
                        }

                        {(isProperty(entity) || isClass(entity)) &&
                            <>
                                {getEntityEquivalentToSectionJSX(entity, props)}
                                {getSubentityOfSectionJSX(entity, props)}
                                {getEntityRelatedFromSectionJSX(entity, props)}
                            </>
                        }

                        {isClass(entity) &&
                            <>
                                {getClassInstancesSectionJSX(entity, instancesJson, props)}
                            </>
                        }
                    </EuiText>
                }
            </EuiCard>
        </>
    );
}

export { EntityRelationsWidget };