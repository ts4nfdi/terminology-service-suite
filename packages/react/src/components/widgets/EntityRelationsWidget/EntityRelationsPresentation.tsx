"use client";

import {
  EuiCard,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiProvider,
  EuiText,
} from "@elastic/eui";
import { ReactElement } from "react";
import { EntityRelationsPresentationProps, OnNavigates } from "../../../app";
import { DEFAULT_SHOW_BADGES } from "../../../app/globals";
import {
  asArray,
  asReified,
  capitalize,
  getEntityTypeName,
  randomString,
} from "../../../app/util";
import {
  Class,
  Entity,
  Individual,
  Property,
  Thing,
} from "../../../model/interfaces";
import {
  isClass,
  isIndividual,
  isProperty,
} from "../../../model/ModelTypeCheck";
import Reified from "../../../model/Reified";
import ClassExpression from "../../helperComponents/ClassExpression";
import EntityLink from "../../helperComponents/EntityLink";
import RenderedReified from "../../helperComponents/RenderedReified";

const DEFAULT_HAS_TITLE = true;

/**
 * Builds and returns an array of section list elements specified at `currentResponsePath`
 * @param parentEntity
 * @param array
 * @param showBadges
 * @param onNavigates functions defining the action when clicking clickable items
 * @param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
 * @param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
 * @param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
 */
export function getSectionListJSX(
  parentEntity: Thing,
  array: any[],
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  onNavigates: OnNavigates,
): ReactElement {
  return (
    <>
      {array.length === 1 ? (
        <p>
          <RenderedReified
            parentEntity={parentEntity}
            reified={asReified(array[0])}
            showBadges={showBadges}
            onNavigates={onNavigates}
          />
        </p>
      ) : (
        <>
          <ul>
            {array.map((item: any) => {
              return (
                <li key={randomString()}>
                  <RenderedReified
                    parentEntity={parentEntity}
                    reified={asReified(item)}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                  />
                </li>
              );
            })}
          </ul>
          <p></p>
        </>
      )}
    </>
  );
}

/**
 * Builds and returns the type section JSX element.
 * @param individual
 * @param showBadges
 * @param onNavigates
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getIndividualTypesSectionJSX(
  individual: Individual,
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  onNavigates: OnNavigates,
): ReactElement | undefined {
  const types = individual
    .getRdfTypes()
    .filter(
      (elem: string) =>
        elem !== "http://www.w3.org/2002/07/owl#NamedIndividual" &&
        !elem.startsWith("http://www.w3.org/2000/01/rdf-schema#"),
    );

  if (individual.getRdfTypes().length > 0) {
    return (
      <EuiFlexItem>
        <b>Type</b>
        {getSectionListJSX(individual, types, showBadges, onNavigates)}
      </EuiFlexItem>
    );
  }
}

/**
 * Builds and returns the same as section JSX element.
 * @param individual
 * @param showBadges
 * @param onNavigates
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getIndividualSameAsSectionJSX(
  individual: Individual,
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  onNavigates: OnNavigates,
): ReactElement | undefined {
  const sameAs = individual.getSameAs();

  if (sameAs.length > 0) {
    return (
      <EuiFlexItem>
        <b>Same As</b>
        {getSectionListJSX(individual, sameAs, showBadges, onNavigates)}
      </EuiFlexItem>
    );
  }
}

/**
 * Builds and returns the different from section JSX element.
 * @param individual
 * @param showBadges
 * @param onNavigates
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getIndividualDifferentFromSectionJSX(
  individual: Individual,
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  onNavigates: OnNavigates,
): ReactElement | undefined {
  const differentFrom = individual.getDifferentFrom();

  if (differentFrom.length > 0) {
    return (
      <>
        <EuiFlexItem>
          <b>Different from</b>
          {getSectionListJSX(
            individual,
            differentFrom,
            showBadges,
            onNavigates,
          )}
        </EuiFlexItem>
      </>
    );
  }
}

/**
 * Builds and returns the disjoint with section JSX element.
 * @param entity
 * @param showBadges
 * @param onNavigates
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getDisjointWithSectionJSX(
  entity: Property | Class,
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  onNavigates: OnNavigates,
): ReactElement | undefined {
  const disjointWith = entity.getDisjointWith();

  if (disjointWith.length > 0) {
    return (
      <EuiFlexItem>
        <b>Disjoint with</b>
        {getSectionListJSX(entity, disjointWith, showBadges, onNavigates)}
      </EuiFlexItem>
    );
  }
}

/**
 * Builds and returns the inverse of section JSX element.
 * @param property
 * @param showBadges
 * @param onNavigates
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getPropertyInverseOfSectionJSX(
  property: Property,
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  onNavigates: OnNavigates,
): ReactElement | undefined {
  const inverseOfs = property.getInverseOf();

  if (inverseOfs.length > 0) {
    return (
      <EuiFlexItem>
        <b>Inverse of</b>
        {getSectionListJSX(property, inverseOfs, showBadges, onNavigates)}
      </EuiFlexItem>
    );
  }
}

/**
 * Builds and returns one property chain JSX element. Is used for {@link getPropertyChainSectionJSX}.
 * @param propertyChain the property chain
 * @param property
 * @param showBadges
 * @param onNavigates
 * @returns {ReactElement[]} the chains JSX element
 */
function getPropertyChainJSX(
  propertyChain: any[],
  property: Property,
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  onNavigates: OnNavigates,
): ReactElement[] {
  return asArray(propertyChain)
    .slice()
    .reverse()
    .map((propertyExpr, i) => {
      // using .slice() here is important because a mutation of propertyChain would trigger a useQuery()
      return (
        <span key={propertyExpr}>
          <ClassExpression
            parentEntity={property}
            linkedEntities={property.getLinkedEntities()}
            currentResponsePath={propertyExpr}
            showBadges={showBadges}
            onNavigates={onNavigates}
          />
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
 * @param showBadges
 * @param onNavigates
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getPropertyChainSectionJSX(
  property: Property,
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  onNavigates: OnNavigates,
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
          <p>
            {getPropertyChainJSX(
              propertyChains,
              property,
              showBadges,
              onNavigates,
            )}
          </p>
        ) : (
          <>
            <ul>
              {propertyChains.map((item: any) => {
                return (
                  <li key={randomString()}>
                    {getPropertyChainJSX(
                      item,
                      property,
                      showBadges,
                      onNavigates,
                    )}
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
 * @param showBadges
 * @param onNavigates
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getEntityEquivalentToSectionJSX(
  entity: Property | Class,
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  onNavigates: OnNavigates,
): ReactElement | undefined {
  const equivalents = entity.getEquivalents();

  if (equivalents.length > 0) {
    return (
      <EuiFlexItem>
        <b>Equivalent to</b>
        {getSectionListJSX(
          entity,
          equivalents.map((item) => item.value),
          showBadges,
          onNavigates,
        )}
      </EuiFlexItem>
    );
  }
}

/**
 * Builds and returns the subentity of section JSX element.
 * @param entity
 * @param showBadges
 * @param onNavigates
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getSubEntityOfSectionJSX(
  entity: Property | Class,
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  onNavigates: OnNavigates,
): ReactElement | undefined {
  const superEntities = entity.getSuperEntities();

  if (superEntities.length > 0) {
    return (
      <EuiFlexItem>
        <b>Sub{entity.getType()} of</b>
        {getSectionListJSX(entity, superEntities, showBadges, onNavigates)}
      </EuiFlexItem>
    );
  }
}

/**
 * Builds and returns the related from section JSX element.
 * @param entity
 * @param showBadges
 * @param onNavigates
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getEntityRelatedFromSectionJSX(
  entity: Property | Class,
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  onNavigates: OnNavigates,
): ReactElement | undefined {
  const relatedFroms = entity.getRelatedFrom();
  const predicates: string[] = Array.from(
    new Set(
      relatedFroms.map((elem: any) => {
        return elem.value["property"];
      }),
    ),
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
                          <ClassExpression
                            parentEntity={entity}
                            linkedEntities={entity.getLinkedEntities()}
                            currentResponsePath={elem.value["value"]}
                            showBadges={showBadges}
                            onNavigates={onNavigates}
                          />
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
 * @param showBadges
 * @param onNavigates
 * @returns {ReactElement | undefined} the sections' JSX element or undefined if section would be empty
 */
function getClassInstancesSectionJSX(
  term: Class,
  instances: Thing[],
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  onNavigates: OnNavigates,
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
                  <EntityLink
                    parentEntity={term}
                    linkedEntities={term.getLinkedEntities()}
                    iri={instance.getIri()}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                  />
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

function EntityRelationsPresentation(
  props: EntityRelationsPresentationProps,
): React.JSX.Element {
  const {
    entity,
    instances,
    isLoading,
    isError,
    hasTitle = DEFAULT_HAS_TITLE,
    entityType,
    showBadges,
    onNavigateToEntity,
    onNavigateToOntology,
    onNavigateToDisambiguate,
    ...rest
  } = props;

  const onNavigates = {
    onNavigateToEntity,
    onNavigateToOntology,
    onNavigateToDisambiguate,
  };

  function renderSections(
    entity: Entity,
    instances: Individual[],
  ): ReactElement {
    let sectionList: (ReactElement | undefined)[] = [];

    if (isIndividual(entity)) {
      sectionList.push(
        getIndividualTypesSectionJSX(entity, showBadges, onNavigates),
        getIndividualSameAsSectionJSX(entity, showBadges, onNavigates),
        getIndividualDifferentFromSectionJSX(entity, showBadges, onNavigates),
      );
    }

    if (isProperty(entity) || isClass(entity)) {
      sectionList.push(
        getDisjointWithSectionJSX(entity, showBadges, onNavigates),
      );
    }

    if (isProperty(entity)) {
      sectionList.push(
        getPropertyInverseOfSectionJSX(entity, showBadges, onNavigates),
        getPropertyChainSectionJSX(entity, showBadges, onNavigates),
      );
    }

    if (isProperty(entity) || isClass(entity)) {
      sectionList.push(
        getEntityEquivalentToSectionJSX(entity, showBadges, onNavigates),
        getSubEntityOfSectionJSX(entity, showBadges, onNavigates),
        getEntityRelatedFromSectionJSX(entity, showBadges, onNavigates),
      );
    }

    if (isClass(entity)) {
      sectionList.push(
        getClassInstancesSectionJSX(entity, instances, showBadges, onNavigates),
      );
    }

    // filter out empty (= undefined) sections
    sectionList = sectionList.filter(
      (elem: ReactElement | undefined): boolean => elem != undefined,
    );

    if (sectionList.length > 0) {
      return <EuiText {...rest}>{sectionList}</EuiText>;
    } else {
      return <EuiText {...rest}>No relations available.</EuiText>;
    }
  }

  return (
    <EuiCard
      data-testid="entity-relations"
      title={
        hasTitle
          ? (entityType
              ? capitalize(getEntityTypeName(entityType))
              : entity
                ? capitalize(entity.getType())
                : "") + " Relations"
          : ""
      }
      layout="horizontal"
    >
      {isLoading && <EuiLoadingSpinner size={"s"} />}
      {isError && <EuiText>Requested resource not available</EuiText>}
      {entity !== undefined &&
        instances !== undefined &&
        renderSections(entity, instances)}
    </EuiCard>
  );
}

/**
 * Brings its own EUI provider, the way the widgets do, so the card also renders
 * inside a plain host application. It performs no request of its own.
 */
function WrappedEntityRelationsPresentation(
  props: EntityRelationsPresentationProps,
): React.JSX.Element {
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <EntityRelationsPresentation {...props} />
    </EuiProvider>
  );
}

export { EntityRelationsPresentation, WrappedEntityRelationsPresentation };
