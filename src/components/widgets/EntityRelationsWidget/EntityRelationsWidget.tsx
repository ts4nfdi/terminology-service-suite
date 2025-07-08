"use client";

import React, { ReactElement } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import {
  EuiCard,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiProvider,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import {
  Class,
  Entity,
  Individual,
  Property,
  Thing,
} from "../../../model/interfaces";
import {
  getClassExpressionJSX,
  getEntityLinkJSX,
  getReifiedJSX,
  getSectionListJSX,
} from "../../../model/StructureRendering";
import {
  isClass,
  isIndividual,
  isProperty,
} from "../../../model/ModelTypeCheck";
import Reified from "../../../model/Reified";
import {
  asArray,
  capitalize,
  getEntityTypeName,
  randomString,
} from "../../../app/util";
import { EntityRelationsWidgetProps } from "../../../app/types";
import ReactDOM from "react-dom";
import {OlsEntityApi} from "../../../api/ols/OlsEntityApi";

const DEFAULT_HAS_TITLE = true;

/**
 * Builds and returns the type section JSX element.
 * @param individual
 * @param props the entities' properties
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getIndividualTypesSectionJSX(
  individual: Individual,
  props: EntityRelationsWidgetProps
): ReactElement | undefined {
  const types = individual
    .getRdfTypes()
    .filter(
      (elem: string) =>
        elem !== "http://www.w3.org/2002/07/owl#NamedIndividual" &&
        !elem.startsWith("http://www.w3.org/2000/01/rdf-schema#")
    );

  if (individual.getRdfTypes().length > 0) {
    return (
      <EuiFlexItem>
        <b>Type</b>
        {getSectionListJSX(
          individual,
          individual.getLinkedEntities(),
          types,
          props.showBadges,
          {
            onNavigateToEntity: props.onNavigateToEntity,
            onNavigateToOntology: props.onNavigateToOntology,
            onNavigateToDisambiguate: props.onNavigateToDisambiguate,
          }
        )}
      </EuiFlexItem>
    );
  }
}

/**
 * Builds and returns the same as section JSX element.
 * @param individual
 * @param props the entities' properties
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getIndividualSameAsSectionJSX(
  individual: Individual,
  props: EntityRelationsWidgetProps
): ReactElement | undefined {
  const sameAs = individual.getSameAs();

  if (sameAs.length > 0) {
    return (
      <EuiFlexItem>
        <b>Same As</b>
        {getSectionListJSX(
          individual,
          individual.getLinkedEntities(),
          sameAs,
          props.showBadges,
          {
            onNavigateToEntity: props.onNavigateToEntity,
            onNavigateToOntology: props.onNavigateToOntology,
            onNavigateToDisambiguate: props.onNavigateToDisambiguate,
          }
        )}
      </EuiFlexItem>
    );
  }
}

/**
 * Builds and returns the different from section JSX element.
 * @param individual
 * @param props the entities' properties
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getIndividualDifferentFromSectionJSX(
  individual: Individual,
  props: EntityRelationsWidgetProps
): ReactElement | undefined {
  const differentFrom = individual.getDifferentFrom();

  if (differentFrom.length > 0) {
    return (
      <>
        <EuiSpacer />
        <EuiFlexItem>
          <b>Different from</b>
          {getSectionListJSX(
            individual,
            individual.getLinkedEntities(),
            differentFrom,
            props.showBadges,
            {
              onNavigateToEntity: props.onNavigateToEntity,
              onNavigateToOntology: props.onNavigateToOntology,
              onNavigateToDisambiguate: props.onNavigateToDisambiguate,
            }
          )}
        </EuiFlexItem>
      </>
    );
  }
}

/**
 * Builds and returns the disjoint with section JSX element.
 * @param entity
 * @param props the entities' properties
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getDisjointWithSectionJSX(
  entity: Property | Class,
  props: EntityRelationsWidgetProps
): ReactElement | undefined {
  const disjointWith = entity.getDisjointWith();

  if (disjointWith.length > 0) {
    return (
      <EuiFlexItem>
        <b>Disjoint with</b>
        {getSectionListJSX(
          entity,
          entity.getLinkedEntities(),
          disjointWith,
          props.showBadges,
          {
            onNavigateToEntity: props.onNavigateToEntity,
            onNavigateToOntology: props.onNavigateToOntology,
            onNavigateToDisambiguate: props.onNavigateToDisambiguate,
          }
        )}
      </EuiFlexItem>
    );
  }
}

/**
 * Builds and returns the inverse of section JSX element.
 * @param property
 * @param props the entities' properties
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getPropertyInverseOfSectionJSX(
  property: Property,
  props: EntityRelationsWidgetProps
): ReactElement | undefined {
  const inverseOfs = property.getInverseOf();

  if (inverseOfs.length > 0) {
    return (
      <EuiFlexItem>
        <b>Inverse of</b>
        {getSectionListJSX(
          property,
          property.getLinkedEntities(),
          inverseOfs,
          props.showBadges,
          {
            onNavigateToEntity: props.onNavigateToEntity,
            onNavigateToOntology: props.onNavigateToOntology,
            onNavigateToDisambiguate: props.onNavigateToDisambiguate,
          }
        )}
      </EuiFlexItem>
    );
  }
}

/**
 * Builds and returns one property chain JSX element. Is used for {@link getPropertyChainSectionJSX}.
 * @param propertyChain the property chain
 * @param property
 * @param props     the entities' properties
 * @returns {ReactElement[]} the chains JSX element
 */
function getPropertyChainJSX(
  propertyChain: any[],
  property: Property,
  props: EntityRelationsWidgetProps
): ReactElement[] {
  return asArray(propertyChain)
    .slice()
    .reverse()
    .map((propertyExpr, i) => {
      // using .slice() here is important because a mutation of propertyChain would trigger a useQuery()
      return (
        <span key={propertyExpr}>
          {getClassExpressionJSX(
            property,
            property.getLinkedEntities(),
            propertyExpr,
            props.showBadges,
            {
              onNavigateToEntity: props.onNavigateToEntity,
              onNavigateToOntology: props.onNavigateToOntology,
              onNavigateToDisambiguate: props.onNavigateToDisambiguate,
            }
          )}
          <>
            {i < asArray(propertyChain).length - 1 && (
              <span style={{ fontSize: "medium", color: "gray" }}>
                &nbsp;&#9666;&nbsp;
              </span>
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
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getPropertyChainSectionJSX(
  property: Property,
  props: EntityRelationsWidgetProps
): ReactElement | undefined {
  const propertyChains = property
    .getPropertyChains()
    .map((reified: Reified<any>) => reified.value);

  const hasMultipleChains =
    propertyChains.filter((elem: any) => Array.isArray(elem)).length > 0;

  if (propertyChains.length > 0) {
    return (
      <EuiFlexItem>
        <b>{!hasMultipleChains ? "Property chain" : "Property chains"}</b>
        {!hasMultipleChains ? (
          <p>{getPropertyChainJSX(propertyChains, property, props)}</p>
        ) : (
          <>
            <ul>
              {propertyChains.map((item: any) => {
                return (
                  <li key={randomString()}>
                    {getPropertyChainJSX(item, property, props)}
                  </li>
                );
              })}
            </ul>
            <p></p>
          </>
        )}
      </EuiFlexItem>
    );
  }
}

/**
 * Builds and returns the equivalent to section JSX element.
 * @param entity
 * @param props the entities' properties
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getEntityEquivalentToSectionJSX(
  entity: Property | Class,
  props: EntityRelationsWidgetProps
): ReactElement | undefined {
  const equivalents = entity.getEquivalents();

  if (equivalents.length > 0) {
    return (
      <EuiFlexItem>
        <b>Equivalent to</b>
        {equivalents.length === 1 ? (
          <p>
            {getReifiedJSX(entity, equivalents[0], props.showBadges, {
              onNavigateToEntity: props.onNavigateToEntity,
              onNavigateToOntology: props.onNavigateToOntology,
              onNavigateToDisambiguate: props.onNavigateToDisambiguate,
            })}
          </p>
        ) : (
          <>
            <ul>
              {equivalents.map((item: any) => {
                return (
                  <li key={randomString()}>
                    {getReifiedJSX(entity, item, props.showBadges, {
                      onNavigateToEntity: props.onNavigateToEntity,
                      onNavigateToOntology: props.onNavigateToOntology,
                      onNavigateToDisambiguate: props.onNavigateToDisambiguate,
                    })}
                  </li>
                );
              })}
            </ul>
            <p></p>
          </>
        )}
      </EuiFlexItem>
    );
  }
}

/**
 * Builds and returns the subentity of section JSX element.
 * @param entity
 * @param props the entities' properties
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getSubEntityOfSectionJSX(
  entity: Property | Class,
  props: EntityRelationsWidgetProps
): ReactElement | undefined {
  const superEntities = entity.getSuperEntities();

  if (superEntities.length > 0) {
    return (
      <EuiFlexItem>
        <b>Sub{entity.getType()} of</b>
        {superEntities.length === 1 ? (
          <p>
            {getReifiedJSX(entity, superEntities[0], props.showBadges, {
              onNavigateToEntity: props.onNavigateToEntity,
              onNavigateToOntology: props.onNavigateToOntology,
              onNavigateToDisambiguate: props.onNavigateToDisambiguate,
            })}
          </p>
        ) : (
          <>
            <ul>
              {superEntities.map((item: any) => {
                return (
                  <li key={randomString()}>
                    {getReifiedJSX(entity, item, props.showBadges, {
                      onNavigateToEntity: props.onNavigateToEntity,
                      onNavigateToOntology: props.onNavigateToOntology,
                      onNavigateToDisambiguate: props.onNavigateToDisambiguate,
                    })}
                  </li>
                );
              })}
            </ul>
            <p></p>
          </>
        )}
      </EuiFlexItem>
    );
  }
}

/**
 * Builds and returns the related from section JSX element.
 * @param entity
 * @param props the entities' properties
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getEntityRelatedFromSectionJSX(
  entity: Property | Class,
  props: EntityRelationsWidgetProps
): ReactElement | undefined {
  const relatedFroms = entity.getRelatedFrom();
  const predicates: string[] = Array.from(
    new Set(
      relatedFroms.map((elem: any) => {
        return elem.value["property"];
      })
    )
  );

  if (relatedFroms.length > 0) {
    return (
      <EuiFlexItem>
        <b>Related from</b>
        {predicates.map((p) => {
          const label = entity.getLinkedEntities().getLabelForIri(p);
          return (
            <div key={p.toString() + randomString()}>
              <div>
                <a style={{ color: "black" }} href={p}>
                  <i>{label || p}</i>
                </a>
              </div>
              <>
                <ul style={{ marginBottom: 0 }}>
                  {relatedFroms
                    .filter((elem: any) => {
                      return elem.value["property"] === p;
                    })
                    .map((elem) => {
                      return (
                        <li key={randomString()}>
                          {getClassExpressionJSX(
                            entity,
                            entity.getLinkedEntities(),
                            elem.value["value"],
                            props.showBadges,
                            {
                              onNavigateToEntity: props.onNavigateToEntity,
                              onNavigateToOntology: props.onNavigateToOntology,
                              onNavigateToDisambiguate:
                                props.onNavigateToDisambiguate,
                            }
                          )}
                        </li>
                      );
                    })}
                </ul>
                <p></p>
              </>
              <p></p> {/* Works as empty space left to next section */}
            </div>
          );
        })}
      </EuiFlexItem>
    );
  }
}

/**
 * Builds and returns the class instances section JSX element.
 * @param term
 * @param instances an array of the classes' instances
 * @param props
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getClassInstancesSectionJSX(
  term: Class,
  instances: Thing[],
  props: EntityRelationsWidgetProps
): ReactElement | undefined {
  if (instances.length > 0) {
    return (
      <EuiFlexItem>
        {<b>Instances</b>}
        <>
          <ul>
            {instances.map((instance) => {
              return (
                <li key={randomString()}>
                  {getEntityLinkJSX(
                    term,
                    term.getLinkedEntities(),
                    instance.getIri(),
                    props.showBadges,
                    {
                      onNavigateToEntity: props.onNavigateToEntity,
                      onNavigateToOntology: props.onNavigateToOntology,
                      onNavigateToDisambiguate: props.onNavigateToDisambiguate,
                    }
                  )}
                </li>
              );
            })}
          </ul>
          <p></p>
        </>
      </EuiFlexItem>
    );
  }
}

function EntityRelationsWidget(props: EntityRelationsWidgetProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    api,
    iri,
    ontologyId,
    hasTitle = DEFAULT_HAS_TITLE,
    showBadges,
    entityType,
    parameter,
    onNavigateToEntity,
    onNavigateToDisambiguate,
    onNavigateToOntology,
    ...rest
  } = props;

  const olsApi = new OlsEntityApi(api);

  /**
   * Used to fetch an entities' data to be shown in different sections
   */
  const {
    data: entity,
    isLoading: isLoadingEntityRelation,
    isSuccess: isSuccessEntityRelation,
    isError: isErrorEntityRelation,
  } = useQuery(
    ["entityJson", api, iri, ontologyId, entityType, parameter, showBadges],
    async () => {
      return olsApi.getEntityObject(
        iri,
        entityType,
        ontologyId,
        parameter,
        false
      ); // always use v2/ API
    }
  );

  /**
   * Used to fetch a classes instances to be shown in class instances section
   */
  const {
    data: instances,
    isLoading: isLoadingInstances,
    isSuccess: isSuccessInstances,
  } = useQuery({
    queryKey: ["instances", entity],
    queryFn: async () => {
      return entity && isClass(entity) && entity.hasDirectChildren()
        ? olsApi.getClassInstances(entity.getIri(), entity.getOntologyId())
        : [];
    },
    enabled: !!entity,
  });

  function renderSections(
    entity: Entity,
    instances: Individual[]
  ): ReactElement {
    const sectionList: ReactElement[] = [];

    if (isIndividual(entity)) {
      const individualTypesSection = getIndividualTypesSectionJSX(
        entity,
        props
      );
      if (individualTypesSection != undefined)
        sectionList.push(individualTypesSection);

      const individualSameAsSection = getIndividualSameAsSectionJSX(
        entity,
        props
      );
      if (individualSameAsSection != undefined)
        sectionList.push(individualSameAsSection);

      const individualDifferentFromSection =
        getIndividualDifferentFromSectionJSX(entity, props);
      if (individualDifferentFromSection != undefined)
        sectionList.push(individualDifferentFromSection);
    }
    if (isProperty(entity) || isClass(entity)) {
      const disjointWithSection = getDisjointWithSectionJSX(entity, props);
      if (disjointWithSection != undefined)
        sectionList.push(disjointWithSection);
    }
    if (isProperty(entity)) {
      const propertyInverseOfSection = getPropertyInverseOfSectionJSX(
        entity,
        props
      );
      if (propertyInverseOfSection != undefined)
        sectionList.push(propertyInverseOfSection);

      const propertyChainSection = getPropertyChainSectionJSX(entity, props);
      if (propertyChainSection != undefined)
        sectionList.push(propertyChainSection);
    }
    if (isProperty(entity) || isClass(entity)) {
      const entityEquivalentToSection = getEntityEquivalentToSectionJSX(
        entity,
        props
      );
      if (entityEquivalentToSection != undefined)
        sectionList.push(entityEquivalentToSection);

      const subEntityOfSection = getSubEntityOfSectionJSX(entity, props);
      if (subEntityOfSection != undefined) sectionList.push(subEntityOfSection);

      const entityRelatedFromSection = getEntityRelatedFromSectionJSX(
        entity,
        props
      );
      if (entityRelatedFromSection != undefined)
        sectionList.push(entityRelatedFromSection);
    }
    if (isClass(entity)) {
      const classInstancesSection = getClassInstancesSectionJSX(
        entity,
        instances,
        props
      );
      if (classInstancesSection != undefined)
        sectionList.push(classInstancesSection);
    }

    if (sectionList.length > 0) {
      return <EuiText {...rest}>{sectionList}</EuiText>;
    } else {
      return <EuiText {...rest}>No relations available.</EuiText>;
    }
  }

  return (
    <>
      <EuiCard
        title={
          hasTitle
            ? (entityType
                ? capitalize(getEntityTypeName(entityType))
                : isSuccessEntityRelation && entity
                ? capitalize(entity.getType())
                : "") + " Relations"
            : ""
        }
        layout="horizontal"
      >
        {(isLoadingEntityRelation || isLoadingInstances) && (
          <EuiLoadingSpinner size={"s"} />
        )}
        {isErrorEntityRelation && (
          <EuiText>Requested resource not available</EuiText>
        )}
        {isSuccessEntityRelation &&
          isSuccessInstances &&
          entity !== undefined &&
          instances !== undefined &&
          renderSections(entity, instances)}
      </EuiCard>
    </>
  );
}

function createEntityRelations(
  props: EntityRelationsWidgetProps,
  container: Element,
  callback?: () => void
) {
  ReactDOM.render(WrappedEntityRelationsWidget(props), container, callback);
}

function WrappedEntityRelationsWidget(props: EntityRelationsWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <EntityRelationsWidget
          api={props.api}
          iri={props.iri}
          ontologyId={props.ontologyId}
          hasTitle={props.hasTitle}
          entityType={props.entityType}
          parameter={props.parameter}
          showBadges={props.showBadges}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
          onNavigateToDisambiguate={props.onNavigateToDisambiguate}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { createEntityRelations, EntityRelationsWidget };
