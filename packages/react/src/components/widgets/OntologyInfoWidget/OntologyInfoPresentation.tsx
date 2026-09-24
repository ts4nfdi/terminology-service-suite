"use client";

import {
  EuiCard,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiProvider,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { ReactElement } from "react";
import { OntologyInfoPresentationProps } from "../../../app";
import {
  capitalize,
  deCamelCase,
  deUnderscore,
  getErrorMessageToDisplay,
  randomString,
} from "../../../app/util";
import { Ontology, Thing } from "../../../model/interfaces";
import "../../../style/ts4nfdiStyles/ts4nfdiOntologyInfoStyle.css";
import "../../../style/tssStyles.css";
import EntityLink from "../../helperComponents/EntityLink";
import RenderedReified from "../../helperComponents/RenderedReified";

const DEFAULT_HAS_TITLE = true;

function OntologyInfoPresentation(
  props: OntologyInfoPresentationProps,
): React.JSX.Element {
  const {
    ontology,
    isLoading,
    error,
    hasTitle = DEFAULT_HAS_TITLE,
    showBadges,
    width,
    className,
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

  const finalClassName = className || "ts4nfdi-ontologyy-info-style";

  function getOntologyIriSection(
    ontology: Ontology,
  ): React.ReactElement | null {
    const iri = ontology.getIri() || ontology.getOntologyPurl();

    if (!iri || iri.startsWith("file:")) {
      return null;
    }

    return (
      <EuiFlexItem>
        <b>Ontology IRI:</b>
        <p>
          <a
            id={"ontologyIri"}
            href={ontology.getIri() || ontology.getOntologyPurl()}
          >
            {ontology.getIri() || ontology.getOntologyPurl()}
          </a>
        </p>
      </EuiFlexItem>
    );
  }

  function getVersionIriSection(ontology: Ontology): ReactElement {
    return (
      <>
        {ontology.getVersionIri() && (
          <EuiFlexItem>
            <b>Version IRI:</b>
            <p>
              <a id={"versionIri"} href={ontology.getVersionIri()}>
                {ontology.getVersionIri()}
              </a>
            </p>
          </EuiFlexItem>
        )}
      </>
    );
  }

  function getLastLoadSection(ontology: Ontology): ReactElement {
    return (
      <>
        {ontology.getSourceFileTimestamp() && (
          <EuiFlexItem>
            <b>Last loaded:</b>
            <p>{new Date(ontology.getSourceFileTimestamp()).toString()}</p>
          </EuiFlexItem>
        )}
      </>
    );
  }

  function getOntologyIdSection(ontology: Ontology): ReactElement {
    return (
      <>
        {ontology.getOntologyId() && (
          <EuiFlexItem>
            <b>Ontology ID:</b>
            <p>{ontology.getOntologyId()}</p>
          </EuiFlexItem>
        )}
      </>
    );
  }

  function getVersionSection(ontology: Ontology): ReactElement {
    return (
      <>
        {ontology.getVersion() && (
          <EuiFlexItem>
            <b>Version:</b>
            <p>{ontology.getVersion()}</p>
          </EuiFlexItem>
        )}
      </>
    );
  }

  function getNumClassesSection(ontology: Ontology): ReactElement {
    return (
      <>
        {ontology.getNumClasses() && (
          <EuiFlexItem>
            <b>Number of classes:</b>
            <p>{ontology.getNumClasses().toLocaleString()}</p>
          </EuiFlexItem>
        )}
      </>
    );
  }

  /**
   * Get logo from annotation 'depicted_by'
   */
  function getLogoSection(ontology: Ontology): ReactElement {
    try {
      const logos = ontology.getAnnotationById("depicted_by");

      if (!logos || logos.length === 0) return <></>;

      const logoUrl = logos[0]?.value;
      if (!logoUrl) return <></>;

      return (
        <>
          <EuiFlexItem>
            <b>Logo:</b>
            <div>
              <img
                src={logoUrl}
                alt={"ontology logo"}
                className={"ontology-logo"}
              />
            </div>
          </EuiFlexItem>
        </>
      );

      /**
       * Happens when legacy API or annotations config is missing
       */
    } catch (e) {
      return <></>;
    }
  }
  function getCreatorsSection(ontology: Ontology): ReactElement {
    return (
      <>
        {ontology.getCreators().length > 0 && (
          <>
            <EuiFlexItem>
              <b>Creators:</b>
              {ontology.getCreators().length > 1 ? (
                <>
                  <ul>
                    {ontology.getCreators().map((creator) => {
                      return (
                        <li key={creator + randomString()}>
                          <EntityLink
                            parentEntity={ontology}
                            linkedEntities={ontology.getLinkedEntities()}
                            iri={creator}
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
                    parentEntity={ontology}
                    linkedEntities={ontology.getLinkedEntities()}
                    iri={ontology.getCreators()[0]}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                  />
                </p>
              )}
            </EuiFlexItem>
            <EuiSpacer />
          </>
        )}
      </>
    );
  }

  function getAnnotationSection(thing: Thing): ReactElement {
    return (
      <>
        {thing.getAnnotationPredicates().map((annoKey) => {
          const annos = thing.getAnnotationById(annoKey);
          if (annos.length == 0) return <></>;

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
          );
        })}
      </>
    );
  }

  return (
    <div className={finalClassName} data-testid="ontology-info">
      <EuiCard
        title={hasTitle ? "Ontology Information" : ""}
        layout="horizontal"
        style={width ? { width: width } : {}}
      >
        {isLoading && <EuiLoadingSpinner size={"s"} />}
        {ontology !== undefined && (
          <EuiText {...rest}>
            {getOntologyIriSection(ontology)}
            {getVersionIriSection(ontology)}
            {getLastLoadSection(ontology)}
            {
              /* TODO: Do we want the following on the information widget?
                                    Ebi does not have them there, but on other parts of the entity page */
              <>
                {getOntologyIdSection(ontology)}
                {getVersionSection(ontology)}
                {getNumClassesSection(ontology)}
                {getLogoSection(ontology)}
                {/*{getCreatorsSection(entityInfo)}*/
                /* redundant as it's listed in annotations anyway */}
              </>
            }

            {getAnnotationSection(ontology)}
          </EuiText>
        )}
        {error !== undefined && (
          <EuiText>{getErrorMessageToDisplay(error, "information")}</EuiText>
        )}
      </EuiCard>
    </div>
  );
}

function WrappedOntologyInfoPresentation(
  props: OntologyInfoPresentationProps,
): React.JSX.Element {
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <OntologyInfoPresentation {...props} />
    </EuiProvider>
  );
}

export { OntologyInfoPresentation, WrappedOntologyInfoPresentation };
