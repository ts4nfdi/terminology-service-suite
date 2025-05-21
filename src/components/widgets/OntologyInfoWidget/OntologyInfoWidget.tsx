import React, { ReactElement } from "react";
import {
  EuiCard,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiProvider,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsApi } from "../../../api/OlsApi";
import { Ontology, Thing } from "../../../model/interfaces";
import {
  capitalize,
  deCamelCase,
  deUnderscore,
  randomString,
} from "../../../app/util";
import {
  getEntityLinkJSX,
  getReifiedJSX,
} from "../../../model/StructureRendering";
import { getErrorMessageToDisplay } from "../../../app/util";
import { OntologyInfoWidgetProps } from "../../../app/types";
import ReactDOM from "react-dom";
import "../../../style/ts4nfdiStyles/ts4nfdiOntologyInfoStyle.css";
import { createRoot, Root } from "react-dom/client";

const DEFAULT_HAS_TITLE = true;

function OntologyInfoWidget(props: OntologyInfoWidgetProps) {
  const {
    ontologyId,
    api,
    parameter,
    hasTitle = DEFAULT_HAS_TITLE,
    useLegacy,
    showBadges,
    className,
    ...rest
  } = props;
  const olsApi = new OlsApi(api);
  const onNavigates = {
    onNavigateToEntity: props.onNavigateToEntity,
    onNavigateToOntology: props.onNavigateToOntology,
    onNavigateToDisambiguate: props.onNavigateToDisambiguate,
  };
  const finalClassName = className || "ts4nfdi-ontologyy-info-style";

  const {
    data: ontology,
    isLoading: isLoadingOntology,
    isSuccess: isSuccessOntology,
    isError: isErrorOntology,
    error: errorOntology,
  } = useQuery(["ontologyInfo", props], () => {
    return olsApi.getOntologyObject(ontologyId, parameter, useLegacy);
  });

  function getOntologyIriSection(ontology: Ontology): ReactElement {
    return (
      <>
        {(ontology.getIri() || ontology.getOntologyPurl()) && (
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
        )}
      </>
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
                          {getEntityLinkJSX(
                            ontology,
                            ontology.getLinkedEntities(),
                            creator,
                            showBadges,
                            onNavigates
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
                    ontology,
                    ontology.getLinkedEntities(),
                    ontology.getCreators()[0],
                    showBadges,
                    onNavigates
                  )}
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
                          {getReifiedJSX(
                            thing,
                            annotation,
                            showBadges,
                            onNavigates
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <p></p>
                </>
              ) : (
                <p key={randomString()}>
                  {getReifiedJSX(thing, annos[0], showBadges, onNavigates)}
                </p>
              )}
            </EuiFlexItem>
          );
        })}
      </>
    );
  }

  return (
    <div className={finalClassName}>
      <EuiCard
        title={hasTitle ? "Ontology Information" : ""}
        layout="horizontal"
        style={props.width ? { width: props.width } : {}}
      >
        {isLoadingOntology && <EuiLoadingSpinner size={"s"} />}
        {isSuccessOntology && ontology !== undefined && (
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
                {/*{getCreatorsSection(entityInfo)}*/
                /* redundant as it's listed in annotations anyway */}
              </>
            }

            {getAnnotationSection(ontology)}
          </EuiText>
        )}
        {isErrorOntology && (
          <EuiText>
            {getErrorMessageToDisplay(errorOntology, "information")}
          </EuiText>
        )}
      </EuiCard>
    </div>
  );
}
const roots = new WeakMap<Element, Root>();
function createOntologyInfo(
  props: OntologyInfoWidgetProps,
  container: Element,
) {
  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(<WrappedOntologyInfoWidget {...props} />);
}

function WrappedOntologyInfoWidget(props: OntologyInfoWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <OntologyInfoWidget
          ontologyId={props.ontologyId}
          api={props.api}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          showBadges={props.showBadges}
          hasTitle={props.hasTitle}
          onNavigateToEntity={props.onNavigateToEntity}
          onNavigateToOntology={props.onNavigateToOntology}
          onNavigateToDisambiguate={props.onNavigateToDisambiguate}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { OntologyInfoWidget, createOntologyInfo };
