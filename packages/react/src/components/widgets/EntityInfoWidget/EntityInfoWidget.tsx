"use client";

import type { EuiBasicTableColumn } from "@elastic/eui";
import {
  EuiBasicTable,
  EuiCard,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiProvider,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { ReactElement } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { EntityInfoWidgetProps } from "../../../app";
import {
  asArray,
  capitalize,
  deCamelCase,
  deUnderscore,
  getEntityTypeName,
  getErrorMessageToDisplay,
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
import ClassExpression from "../../helperComponents/ClassExpression";
import EntityLink from "../../helperComponents/EntityLink";
import RenderedReified from "../../helperComponents/RenderedReified";
import Tooltip from "../../helperComponents/Tooltip";
import { MathFormulaWidget } from "../MetadataWidget";

const DEFAULT_HAS_TITLE = true;

type FormulaSymbolRow = {
  symbol: ReactElement;
  meanings: ReactElement[];
  sortValue: string;
};

function isReifiedAssertion(value: any, useLegacy?: boolean): boolean {
  return (
    useLegacy === false &&
    typeof value === "object" &&
    Array.isArray(value.type) &&
    value.type.includes("reification")
  );
}

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
    ...rest
  } = props;

  const onNavigates = {
    onNavigateToEntity: props.onNavigateToEntity,
    onNavigateToOntology: props.onNavigateToOntology,
    onNavigateToDisambiguate: props.onNavigateToDisambiguate,
  };

  const olsApi = new OlsEntityApi(api);

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
      useLegacy,
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
                          <RenderedReified
                            parentEntity={entity}
                            reified={synonym}
                            showBadges={showBadges}
                            onNavigates={onNavigates}
                          />
                        </li>
                      );
                    })}
                  </ul>
                  <p></p>
                </>
              ) : (
                <p>
                  <RenderedReified
                    parentEntity={entity}
                    reified={entity.getSynonyms()[0]}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                  />
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
                          <ClassExpression
                            parentEntity={term}
                            linkedEntities={term.getLinkedEntities()}
                            currentResponsePath={keys}
                            showBadges={showBadges}
                            onNavigates={onNavigates}
                          />
                        </li>
                      );
                    })}
                  </ul>
                  <p></p>
                </>
              ) : (
                <p>
                  <ClassExpression
                    parentEntity={term}
                    linkedEntities={term.getLinkedEntities()}
                    currentResponsePath={keys[0]}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                  />
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
                          <EntityLink
                            parentEntity={term}
                            linkedEntities={term.getLinkedEntities()}
                            iri={subset}
                            showBadges={showBadges}
                            onNavigates={onNavigates}
                          />
                        </li>
                      );
                    })}
                  </ul>
                  <p></p>
                </>
              ) : (
                <p>
                  <EntityLink
                    parentEntity={term}
                    linkedEntities={term.getLinkedEntities()}
                    iri={term.getSubsets()[0]}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                  />
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
                          <ClassExpression
                            parentEntity={property}
                            linkedEntities={property.getLinkedEntities()}
                            currentResponsePath={domains}
                            showBadges={showBadges}
                            onNavigates={onNavigates}
                          />
                        </li>
                      );
                    })}
                  </ul>
                  <p></p>
                </>
              ) : (
                <p>
                  <ClassExpression
                    parentEntity={property}
                    linkedEntities={property.getLinkedEntities()}
                    currentResponsePath={domains[0]}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                  />
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
                        <ClassExpression
                          parentEntity={property}
                          linkedEntities={property.getLinkedEntities()}
                          currentResponsePath={ranges}
                          showBadges={showBadges}
                          onNavigates={onNavigates}
                        />
                      </li>
                    );
                  })}
                </ul>
                <p></p>
              </>
            ) : (
              <p>
                <ClassExpression
                  parentEntity={property}
                  linkedEntities={property.getLinkedEntities()}
                  currentResponsePath={ranges[0]}
                  showBadges={showBadges}
                  onNavigates={onNavigates}
                />
              </p>
            )}
          </EuiFlexItem>
        )}
      </>
    );
  }

  function getIndividualPropertyAssertionsSection(
    individual: Individual,
  ): ReactElement {
    const propertyIris = Object.keys(individual.properties);

    // console.log(
    //   individual
    //     .getLinkedEntities()
    //     .get("https://portal.mardi4nfdi.de/entity/P983"),
    // );

    const negativeProperties = propertyIris.filter((key) =>
      key.startsWith("negativePropertyAssertion+"),
    );
    const objectProperties = propertyIris.filter(
      (key) =>
        individual.getLinkedEntities().get(key) &&
        individual
          .getLinkedEntities()
          .get(key)
          ?.type.indexOf("objectProperty") !== -1,
    );

    const dataProperties = propertyIris.filter(
      (key) =>
        individual.getLinkedEntities().get(key) &&
        individual
          .getLinkedEntities()
          .get(key)
          ?.type.indexOf("dataProperty") !== -1,
    );

    const propertyAssertions: ReactElement[] = [];
    const formulaAssertions: ReactElement[] = [];
    const formulaSymbolRows: {
      symbol: ReactElement;
      meanings: ReactElement[];
      sortValue: string;
    }[] = [];
    const formulaSymbolColumns: Array<EuiBasicTableColumn<FormulaSymbolRow>> = [
      {
        field: "symbol",
        name: "Symbol",
        width: "120px",
        render: (symbol: ReactElement) => symbol,
      },
      {
        field: "meanings",
        name: "Meaning",
        width: "520px",
        render: (meanings: ReactElement[]) => (
          <>
            {meanings.map((meaning) => (
              <div key={randomString()}>{meaning}</div>
            ))}
          </>
        ),
      },
    ];

    function renderFormulaMeaningValue(valueIri: string): ReactElement {
      if (valueIri === individual.getIri()) {
        return (
          <button
            className="clickable"
            onClick={() => {
              if (typeof onNavigates.onNavigateToEntity === "function") {
                onNavigates.onNavigateToEntity(
                  individual.getOntologyId(),
                  individual.getType(),
                  {
                    iri: valueIri,
                    label: individual.getLabel(),
                  },
                );
              }
            }}
          >
            {individual.getLabel()}
          </button>
        );
      }

      return (
        <EntityLink
          parentEntity={individual}
          linkedEntities={individual.getLinkedEntities()}
          iri={valueIri}
          showBadges={showBadges}
          onNavigates={onNavigates}
        />
      );
    }

    for (const iri of objectProperties) {
      const values = asArray(individual.properties[iri]);
      for (const v of values) {
        propertyAssertions.push(
          <>
            <ClassExpression
              parentEntity={individual}
              linkedEntities={individual.getLinkedEntities()}
              currentResponsePath={iri}
              showBadges={showBadges}
              onNavigates={onNavigates}
            />
            {typeof v === "string" && v.includes("http") ? (
              <>
                &nbsp;
                <span style={{ fontSize: "medium", color: "gray" }}>
                  &#9656;
                </span>
                &nbsp;
                <EntityLink
                  parentEntity={individual}
                  linkedEntities={individual.getLinkedEntities()}
                  iri={v}
                  showBadges={showBadges}
                  onNavigates={onNavigates}
                />
              </>
            ) : (
              <Tooltip
                text={
                  typeof v === "string"
                    ? v
                    : typeof v === "object" && !Array.isArray(v) && v.value
                      ? JSON.stringify(v.value)
                      : JSON.stringify(v)
                }
              />
            )}
          </>,
        );
      }
    }

    for (const iri of dataProperties) {
      const values = asArray(individual.properties[iri]);
      for (const v of values) {
        if (
          isReifiedAssertion(v, useLegacy) &&
          typeof v.value === "string" &&
          isMathML(v.value)
        ) {
          const meanings: ReactElement[] = [];

          asArray(v.axioms).forEach((axiom) => {
            Object.keys(axiom).forEach((axiomIri) => {
              meanings.push(
                <span key={randomString()}>
                  <ClassExpression
                    parentEntity={individual}
                    linkedEntities={individual.getLinkedEntities()}
                    currentResponsePath={axiomIri}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                  />
                  : {renderFormulaMeaningValue(axiom[axiomIri])}
                </span>,
              );
            });
          });

          formulaSymbolRows.push({
            symbol: (
              <MathFormulaWidget
                iri={iri}
                api={api}
                ontologyId={individual.getOntologyId()}
                mathML={v.value}
              />
            ),
            meanings,
            sortValue: v.value,
          });
          continue;
        }

        if (typeof v === "string" && isMathML(v)) {
          formulaAssertions.push(
            <MathFormulaWidget
              key={randomString()}
              iri={iri}
              api={api}
              ontologyId={individual.getOntologyId()}
              mathML={v}
            />,
          );
          continue;
        }

        propertyAssertions.push(
          <>
            <ClassExpression
              parentEntity={individual}
              linkedEntities={individual.getLinkedEntities()}
              currentResponsePath={iri}
              showBadges={showBadges}
              onNavigates={onNavigates}
            />
            {
              <>
                &nbsp;
                <span style={{ fontSize: "medium", color: "gray" }}>
                  &#9656;
                </span>
                &nbsp;
                {isReifiedAssertion(v, useLegacy) ? (
                  <>
                    {asArray(v.axioms).map((axiom) => (
                      <ul style={{ listStyleType: "circle" }}>
                        {Object.keys(axiom).map((axiomIri) => (
                          <li key={randomString()}>
                            <ClassExpression
                              parentEntity={individual}
                              linkedEntities={individual.getLinkedEntities()}
                              currentResponsePath={axiomIri}
                              showBadges={showBadges}
                              onNavigates={onNavigates}
                            />
                            :{" "}
                            <EntityLink
                              parentEntity={individual}
                              linkedEntities={individual.getLinkedEntities()}
                              iri={axiom[axiomIri]}
                              showBadges={showBadges}
                              onNavigates={onNavigates}
                            />
                            {/*https://portal.mardi4nfdi.de/entity/P984 :  https://portal.mardi4nfdi.de/entity/Q6673756*/}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </>
                ) : (
                  <EntityLink
                    parentEntity={individual}
                    linkedEntities={individual.getLinkedEntities()}
                    iri={v}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                  />
                )}
              </>
            }
          </>,
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
            <ClassExpression
              parentEntity={individual}
              linkedEntities={individual.getLinkedEntities()}
              currentResponsePath={iri}
              showBadges={showBadges}
              onNavigates={onNavigates}
            />
            {typeof v === "string" && v.includes("http") ? (
              <>
                &nbsp;
                <span style={{ fontSize: "medium", color: "gray" }}>
                  &#9656;
                </span>
                &nbsp;
                <EntityLink
                  parentEntity={individual}
                  linkedEntities={individual.getLinkedEntities()}
                  iri={v}
                  showBadges={showBadges}
                  onNavigates={onNavigates}
                />
              </>
            ) : hasObjectProperty ? (
              <Tooltip
                text={
                  typeof v === "string"
                    ? v
                    : typeof v === "object" && !Array.isArray(v) && v.value
                      ? JSON.stringify(v.value)
                      : JSON.stringify(v)
                }
              />
            ) : hasDataProperty ? (
              <>
                &nbsp;
                <span style={{ fontSize: "medium", color: "gray" }}>
                  &#9656;
                </span>
                &nbsp;
                <EntityLink
                  parentEntity={individual}
                  linkedEntities={individual.getLinkedEntities()}
                  iri={v}
                  showBadges={showBadges}
                  onNavigates={onNavigates}
                />
              </>
            ) : (
              <></>
            )}
          </>,
        );
      }
    }

    return (
      <>
        {(formulaAssertions.length > 0 ||
          formulaSymbolRows.length > 0 ||
          propertyAssertions.length > 0) && (
          <>
            <EuiFlexItem>
              <b>Property assertions:</b>
              {formulaAssertions.length > 0 && (
                <div style={{ marginTop: "12px", marginBottom: "16px" }}>
                  <b>Formula:</b>
                  {formulaAssertions}
                </div>
              )}
              {formulaSymbolRows.length > 0 && (
                <div
                  style={{
                    marginTop: "12px",
                    marginBottom: "20px",
                    maxWidth: "720px",
                  }}
                >
                  <EuiBasicTable<FormulaSymbolRow>
                    tableCaption="Formula symbols"
                    responsiveBreakpoint={false}
                    tableLayout="auto"
                    items={[...formulaSymbolRows].sort((a, b) =>
                      a.sortValue.localeCompare(b.sortValue),
                    )}
                    columns={formulaSymbolColumns}
                  />
                </div>
              )}
              {propertyAssertions.length > 1 ? (
                <>
                  <ul>
                    {propertyAssertions
                      .map((pa) => {
                        return (
                          <li
                            key={randomString()}
                            style={{ marginBottom: "24px" }}
                          >
                            {pa}
                          </li>
                        );
                      })
                      .sort()}
                  </ul>
                  <p></p>
                </>
              ) : propertyAssertions.length === 1 ? (
                <p>{propertyAssertions[0]}</p>
              ) : (
                <></>
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

          if (annos.length && "value" in annos[0] && isMathML(annos[0].value)) {
            return (
              <EuiFlexItem grow={false} key={annoKey}>
                <b>
                  {capitalize(
                    deUnderscore(
                      deCamelCase(thing.getAnnotationTitleById(annoKey)),
                    ),
                  )}
                  :
                </b>
                {renderMathFormulaIfMathMl(annoKey)}
              </EuiFlexItem>
            );
          }

          return (
            <>
              <EuiFlexItem grow={false} key={annoKey}>
                <b>
                  {capitalize(
                    deUnderscore(
                      deCamelCase(thing.getAnnotationTitleById(annoKey)),
                    ),
                  )}
                  :
                </b>
                {annos.length > 1 ? (
                  <>
                    <ul>
                      {annos.map((annotation) => {
                        return (
                          <li key={randomString()} id={annotation.value}>
                            <RenderedReified
                              parentEntity={thing}
                              reified={annotation}
                              showBadges={showBadges}
                              onNavigates={onNavigates}
                            />
                          </li>
                        );
                      })}
                    </ul>
                    <p></p>
                  </>
                ) : (
                  <p key={randomString()}>
                    <RenderedReified
                      parentEntity={thing}
                      reified={annos[0]}
                      showBadges={showBadges}
                      onNavigates={onNavigates}
                    />
                  </p>
                )}
              </EuiFlexItem>
            </>
          );
        })}
      </>
    );
  }

  function isMathML(str: string): boolean {
    const doc = new DOMParser().parseFromString(str, "application/xml");

    if (doc.querySelector("parsererror")) return false;

    const root = doc.documentElement;
    return (
      root?.localName === "math" &&
      root.namespaceURI === "http://www.w3.org/1998/Math/MathML"
    );
  }

  function renderMathFormulaIfMathMl(mathProperty: string) {
    return (
      <MathFormulaWidget
        iri={iri}
        api={api}
        ontologyId={entity?.getOntologyId() ?? ""}
        mathProperty={mathProperty}
      />
    );
  }

  return (
    <>
      <EuiCard
        data-testid="entity-info"
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

function WrappedEntitiyInfoWidget(props: EntityInfoWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <EntityInfoWidget
          api={props.api}
          iri={props.iri}
          ontologyId={props.ontologyId}
          hasTitle={props.hasTitle}
          entityType={props.entityType}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          showBadges={props.showBadges}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
          onNavigateToDisambiguate={props.onNavigateToDisambiguate}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { EntityInfoWidget, WrappedEntitiyInfoWidget };
