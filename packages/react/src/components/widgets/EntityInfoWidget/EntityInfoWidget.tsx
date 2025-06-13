import React, { ReactElement } from "react";
import {
  EuiCard,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiProvider,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { OlsApi } from "../../../api/OlsApi";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import {
  asArray,
  capitalize,
  deCamelCase,
  deUnderscore,
  getEntityTypeName,
  randomString,
  getErrorMessageToDisplay,
} from "../../../app/util";
import {
  getClassExpressionJSX,
  getEntityLinkJSX,
  getReifiedJSX,
  getTooltip,
} from "../../../model/StructureRendering";
import {
  Property,
  Thing,
  Class,
  Entity,
  Individual,
} from "../../../model/interfaces";
import {
  isClass,
  isProperty,
  isIndividual,
} from "../../../model/ModelTypeCheck";
import { EntityInfoWidgetProps } from "../../../app/types";
import ReactDOM from "react-dom";

const DEFAULT_HAS_TITLE = true;

function EntityInfoWidget(props: EntityInfoWidgetProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    api,
    iri,
    ontologyId,
    hasTitle = DEFAULT_HAS_TITLE,
    entityType,
    parameter,
    showBadges,
    useLegacy,
    onNavigateToEntity,
    onNavigateToOntology,
    onNavigateToDisambiguate,
    ...rest
  } = props;
  const olsApi = new OlsApi(api);

  const {
    data: entity,
    isLoading: isLoadingEntity,
    isSuccess: isSuccessEntity,
    isError: isErrorEntity,
    error: errorEntity,
  } = useQuery(["entityInfo", props], () => {
    return olsApi.getEntityObject(
      iri,
      entityType,
      ontologyId,
      parameter,
      useLegacy
    );
  });

  function getLabelSection(entity: Entity): ReactElement {
    return (
      <>
        {entity.getLabel() && (
          <>
            <EuiFlexItem>
              <b>Label:</b>
              {entity.getLabel()}
            </EuiFlexItem>
            <EuiSpacer />
          </>
        )}
      </>
    );
  }

  function getSynonymsSection(entity: Entity): ReactElement {
    return (
      <>
        {entity.getSynonyms().length > 0 && (
          <>
            <EuiFlexItem>
              <b>Synonyms:</b>
              {entity.getSynonyms().length > 1 ? (
                <>
                  <ul>
                    {entity.getSynonyms().map((synonym) => {
                      return (
                        <li key={randomString()} id={synonym.value}>
                          {getReifiedJSX(entity, synonym, showBadges, {
                            onNavigateToEntity: props.onNavigateToEntity,
                            onNavigateToOntology: props.onNavigateToOntology,
                            onNavigateToDisambiguate:
                              props.onNavigateToDisambiguate,
                          })}
                        </li>
                      );
                    })}
                  </ul>
                  <p></p>
                </>
              ) : (
                <p>
                  {getReifiedJSX(entity, entity.getSynonyms()[0], showBadges, {
                    onNavigateToEntity: props.onNavigateToEntity,
                    onNavigateToOntology: props.onNavigateToOntology,
                    onNavigateToDisambiguate: props.onNavigateToDisambiguate,
                  })}
                </p>
              )}
            </EuiFlexItem>
          </>
        )}
      </>
    );
  }

  function getHasKeySection(term: Class): ReactElement {
    const keys = term.getHasKey();
    return (
      <>
        {keys.length > 0 && (
          <>
            <EuiFlexItem>
              <b>Has Key:</b>
              {keys.length > 1 ? (
                <>
                  <ul>
                    {keys.map((keys) => {
                      return (
                        <li key={randomString()}>
                          {getClassExpressionJSX(
                            term,
                            term.getLinkedEntities(),
                            keys,
                            showBadges,
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
              ) : (
                <p>
                  {getClassExpressionJSX(
                    term,
                    term.getLinkedEntities(),
                    keys[0],
                    showBadges,
                    {
                      onNavigateToEntity: props.onNavigateToEntity,
                      onNavigateToOntology: props.onNavigateToOntology,
                      onNavigateToDisambiguate: props.onNavigateToDisambiguate,
                    }
                  )}
                </p>
              )}
            </EuiFlexItem>
          </>
        )}
      </>
    );
  }

  function getSubsetsSection(term: Class): ReactElement {
    return (
      <>
        {term.getSubsets().length > 0 && (
          <>
            <EuiFlexItem>
              <b>In Subsets:</b>
              {term.getSubsets().length > 1 ? (
                <>
                  <ul>
                    {term.getSubsets().map((subset) => {
                      return (
                        <li key={randomString()} id={subset + randomString()}>
                          {getEntityLinkJSX(
                            term,
                            term.getLinkedEntities(),
                            subset,
                            showBadges,
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
              ) : (
                <p>
                  {getEntityLinkJSX(
                    term,
                    term.getLinkedEntities(),
                    term.getSubsets()[0],
                    showBadges,
                    {
                      onNavigateToEntity: props.onNavigateToEntity,
                      onNavigateToOntology: props.onNavigateToOntology,
                      onNavigateToDisambiguate: props.onNavigateToDisambiguate,
                    }
                  )}
                </p>
              )}
            </EuiFlexItem>
          </>
        )}
      </>
    );
  }

  function getPropertyCharacteristicsSection(property: Property): ReactElement {
    const characteristics = property
      .getRdfTypes()
      .map((type) => {
        return {
          "http://www.w3.org/2002/07/owl#FunctionalProperty": "Functional",
          "http://www.w3.org/2002/07/owl#InverseFunctionalProperty":
            "Inverse Functional",
          "http://www.w3.org/2002/07/owl#TransitiveProperty": "Transitive",
          "http://www.w3.org/2002/07/owl#SymmetricProperty": "Symmetric",
          "http://www.w3.org/2002/07/owl#AsymmetricProperty": "Asymmetric",
          "http://www.w3.org/2002/07/owl#ReflexiveProperty": "Reflexive",
          "http://www.w3.org/2002/07/owl#IrreflexiveProperty": "Irreflexive",
        }[type];
      })
      .filter((type) => !!type);

    return (
      <>
        {characteristics.length > 0 && (
          <>
            <EuiFlexItem>
              <b>Characteristics:</b>
              {characteristics.length > 1 ? (
                <>
                  <ul>
                    {characteristics
                      .map((characteristic) => {
                        return <li key={randomString()}>{characteristic}</li>;
                      })
                      .sort()}
                  </ul>
                  <p></p>
                </>
              ) : (
                <p>{characteristics[0]}</p>
              )}
            </EuiFlexItem>
          </>
        )}
      </>
    );
  }

  function getDomainSection(property: Property): ReactElement {
    const domains = property.getDomain();
    return (
      <>
        {domains.length > 0 && (
          <>
            <EuiFlexItem>
              <b>Domain:</b>
              {domains.length > 1 ? (
                <>
                  <ul>
                    {domains.map((domains) => {
                      return (
                        <li key={randomString()}>
                          {getClassExpressionJSX(
                            property,
                            property.getLinkedEntities(),
                            domains,
                            showBadges,
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
              ) : (
                <p>
                  {getClassExpressionJSX(
                    property,
                    property.getLinkedEntities(),
                    domains[0],
                    showBadges,
                    {
                      onNavigateToEntity: props.onNavigateToEntity,
                      onNavigateToOntology: props.onNavigateToOntology,
                      onNavigateToDisambiguate: props.onNavigateToDisambiguate,
                    }
                  )}
                </p>
              )}
            </EuiFlexItem>
          </>
        )}
      </>
    );
  }

  function getRangeSection(property: Property): ReactElement {
    const ranges = property.getRange();
    return (
      <>
        {ranges.length > 0 && (
          <EuiFlexItem>
            <b>Range:</b>
            {ranges.length > 1 ? (
              <>
                <ul>
                  {ranges.map((ranges) => {
                    return (
                      <li key={randomString()}>
                        {getClassExpressionJSX(
                          property,
                          property.getLinkedEntities(),
                          ranges,
                          showBadges,
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
            ) : (
              <p>
                {getClassExpressionJSX(
                  property,
                  property.getLinkedEntities(),
                  ranges[0],
                  showBadges,
                  {
                    onNavigateToEntity: props.onNavigateToEntity,
                    onNavigateToOntology: props.onNavigateToOntology,
                    onNavigateToDisambiguate: props.onNavigateToDisambiguate,
                  }
                )}
              </p>
            )}
          </EuiFlexItem>
        )}
      </>
    );
  }

  function getIndividualPropertyAssertionsSection(
    individual: Individual
  ): ReactElement {
    const propertyIris = Object.keys(individual.properties);
    const negativeProperties = propertyIris.filter((key) =>
      key.startsWith("negativePropertyAssertion+")
    );
    const objectProperties = propertyIris.filter(
      (key) =>
        individual.getLinkedEntities().get(key) &&
        individual
          .getLinkedEntities()
          .get(key)
          ?.type.indexOf("objectProperty") !== -1
    );
    const dataProperties = propertyIris.filter(
      (key) =>
        individual.getLinkedEntities().get(key) &&
        individual
          .getLinkedEntities()
          .get(key)
          ?.type.indexOf("dataProperty") !== -1
    );
    const propertyAssertions: ReactElement[] = [];

    for (const iri of objectProperties) {
      const values = asArray(individual.properties[iri]);
      for (const v of values) {
        propertyAssertions.push(
          <>
            {getClassExpressionJSX(
              individual,
              individual.getLinkedEntities(),
              iri,
              showBadges,
              {
                onNavigateToEntity: props.onNavigateToEntity,
                onNavigateToOntology: props.onNavigateToOntology,
                onNavigateToDisambiguate: props.onNavigateToDisambiguate,
              }
            )}
            {typeof v === "string" && v.includes("http") ? (
              <>
                &nbsp;
                <span style={{ fontSize: "medium", color: "gray" }}>
                  &#9656;
                </span>
                &nbsp;
                {getEntityLinkJSX(
                  individual,
                  individual.getLinkedEntities(),
                  v,
                  showBadges,
                  {
                    onNavigateToEntity: props.onNavigateToEntity,
                    onNavigateToOntology: props.onNavigateToOntology,
                    onNavigateToDisambiguate: props.onNavigateToDisambiguate,
                  }
                )}
              </>
            ) : (
              getTooltip(
                typeof v === "string"
                  ? v
                  : typeof v === "object" && !Array.isArray(v) && v.value
                  ? JSON.stringify(v.value)
                  : JSON.stringify(v)
              )
            )}
          </>
        );
      }
    }

    for (const iri of dataProperties) {
      const values = asArray(individual.properties[iri]);
      for (const v of values) {
        propertyAssertions.push(
          <>
            {getClassExpressionJSX(
              individual,
              individual.getLinkedEntities(),
              iri,
              showBadges,
              {
                onNavigateToEntity: props.onNavigateToEntity,
                onNavigateToOntology: props.onNavigateToOntology,
                onNavigateToDisambiguate: props.onNavigateToDisambiguate,
              }
            )}
            {
              <>
                &nbsp;
                <span style={{ fontSize: "medium", color: "gray" }}>
                  &#9656;
                </span>
                &nbsp;
                {getEntityLinkJSX(
                  individual,
                  individual.getLinkedEntities(),
                  v,
                  showBadges,
                  {
                    onNavigateToEntity: props.onNavigateToEntity,
                    onNavigateToOntology: props.onNavigateToOntology,
                    onNavigateToDisambiguate: props.onNavigateToDisambiguate,
                  }
                )}
              </>
            }
          </>
        );
      }
    }

    for (const key of negativeProperties) {
      const iri = key.slice("negativePropertyAssertion+".length);
      const linkedEntity = individual.getLinkedEntities().get(iri);
      const hasDataProperty = linkedEntity?.type.indexOf("dataProperty") !== -1;
      const hasObjectProperty =
        linkedEntity?.type.indexOf("objectProperty") !== -1;
      const values = asArray(individual.properties[key]);

      for (const v of values) {
        propertyAssertions.push(
          <>
            <i style={{ color: "purple" }}>not</i>{" "}
            {getClassExpressionJSX(
              individual,
              individual.getLinkedEntities(),
              iri,
              showBadges,
              {
                onNavigateToEntity: props.onNavigateToEntity,
                onNavigateToOntology: props.onNavigateToOntology,
                onNavigateToDisambiguate: props.onNavigateToDisambiguate,
              }
            )}
            {typeof v === "string" && v.includes("http") ? (
              <>
                &nbsp;
                <span style={{ fontSize: "medium", color: "gray" }}>
                  &#9656;
                </span>
                &nbsp;
                {getEntityLinkJSX(
                  individual,
                  individual.getLinkedEntities(),
                  v,
                  showBadges,
                  {
                    onNavigateToEntity: props.onNavigateToEntity,
                    onNavigateToOntology: props.onNavigateToOntology,
                    onNavigateToDisambiguate: props.onNavigateToDisambiguate,
                  }
                )}
              </>
            ) : hasObjectProperty ? (
              getTooltip(
                typeof v === "string"
                  ? v
                  : typeof v === "object" && !Array.isArray(v) && v.value
                  ? JSON.stringify(v.value)
                  : JSON.stringify(v)
              )
            ) : hasDataProperty ? (
              <>
                &nbsp;
                <span style={{ fontSize: "medium", color: "gray" }}>
                  &#9656;
                </span>
                &nbsp;
                {getEntityLinkJSX(
                  individual,
                  individual.getLinkedEntities(),
                  v,
                  showBadges,
                  {
                    onNavigateToEntity: props.onNavigateToEntity,
                    onNavigateToOntology: props.onNavigateToOntology,
                    onNavigateToDisambiguate: props.onNavigateToDisambiguate,
                  }
                )}
              </>
            ) : (
              <></>
            )}
          </>
        );
      }
    }

    return (
      <>
        {propertyAssertions.length > 0 && (
          <>
            <EuiFlexItem>
              <b>Property assertions:</b>
              {propertyAssertions.length > 1 ? (
                <>
                  <ul>
                    {propertyAssertions
                      .map((pa) => {
                        return <li key={randomString()}>{pa}</li>;
                      })
                      .sort()}
                  </ul>
                  <p></p>
                </>
              ) : (
                <p>{propertyAssertions[0]}</p>
              )}
            </EuiFlexItem>
          </>
        )}
      </>
    );
  }

  function getAnnotationSection(thing: Thing): ReactElement {
    return (
      <>
        {thing.getAnnotationPredicates().map((annoKey, index, arr) => {
          const annos = thing.getAnnotationById(annoKey);
          if (annos.length == 0) return <></>;

          return (
            <>
              <EuiFlexItem grow={false} key={annoKey}>
                <b>
                  {capitalize(
                    deUnderscore(
                      deCamelCase(thing.getAnnotationTitleById(annoKey))
                    )
                  )}
                  :
                </b>
                {annos.length > 1 ? (
                  <>
                    <ul>
                      {annos.map((annotation) => {
                        return (
                          <li key={randomString()} id={annotation.value}>
                            {getReifiedJSX(thing, annotation, showBadges, {
                              onNavigateToEntity: props.onNavigateToEntity,
                              onNavigateToOntology: props.onNavigateToOntology,
                              onNavigateToDisambiguate:
                                props.onNavigateToDisambiguate,
                            })}
                          </li>
                        );
                      })}
                    </ul>
                    <p></p>
                  </>
                ) : (
                  <p key={randomString()}>
                    {getReifiedJSX(thing, annos[0], showBadges, {
                      onNavigateToEntity: props.onNavigateToEntity,
                      onNavigateToOntology: props.onNavigateToOntology,
                      onNavigateToDisambiguate: props.onNavigateToDisambiguate,
                    })}
                  </p>
                )}
              </EuiFlexItem>
            </>
          );
        })}
      </>
    );
  }

  return (
    <>
      <EuiCard
        title={
          hasTitle
            ? (entityType
                ? capitalize(getEntityTypeName(entityType))
                : isSuccessEntity && entity
                ? capitalize(entity.getType())
                : "") + " Information"
            : ""
        }
        layout="horizontal"
      >
        {isLoadingEntity && <EuiLoadingSpinner size={"s"} />}
        {isSuccessEntity && entity !== undefined && (
          <EuiText {...rest}>
            {getLabelSection(entity)}
            {getSynonymsSection(entity)}
            {isClass(entity) && (
              <>
                {getSubsetsSection(entity)}
                {getHasKeySection(entity)}
              </>
            )}

            {isProperty(entity) && (
              <>
                {getPropertyCharacteristicsSection(entity)}
                {getDomainSection(entity)}
                {getRangeSection(entity)}
              </>
            )}

            {isIndividual(entity) && (
              <>{getIndividualPropertyAssertionsSection(entity)}</>
            )}
            {getAnnotationSection(entity)}
          </EuiText>
        )}
        {isErrorEntity && (
          <EuiText>
            {getErrorMessageToDisplay(errorEntity, "information")}
          </EuiText>
        )}
      </EuiCard>
    </>
  );
}

export { EntityInfoWidget };
