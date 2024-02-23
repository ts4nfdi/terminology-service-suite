import React from "react";
import {EuiCard, EuiFlexItem, EuiLoadingSpinner, EuiSpacer, EuiText} from "@elastic/eui";
import {useQuery} from "react-query";
import { OlsApi } from "../../../api/OlsApi";
import {Ontology, Thing} from "../../../model/interfaces";
import {capitalize, deCamelCase, deUnderscore, randomString} from "../../../app/util";
import {getEntityLinkJSX, getReifiedJSX} from "../../../model/StructureRendering";
import {getErrorMessageToDisplay} from "../../../utils/helper";

export interface OntologyInfoWidgetProps {
  ontologyId: string;
  api: string;
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
  useLegacy?: boolean;
  hasTitle?: boolean;
}

const DEFAULT_HAS_TITLE = true;

function OntologyInfoWidget(props: OntologyInfoWidgetProps) {
  const { ontologyId, api, parameter, hasTitle = DEFAULT_HAS_TITLE, useLegacy, showBadges, ...rest } = props;
  const olsApi = new OlsApi(api);

  const {
    data: ontology,
    isLoading: isLoadingOntology,
    isSuccess: isSuccessOntology,
    isError: isErrorOntology,
    error: errorOntology,
  } = useQuery(
      [
        "ontologyInfo",
        props
      ],
      () => {
        return olsApi.getOntologyObject(ontologyId, parameter, useLegacy);
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
                      return <li key={creator + randomString()}>{getEntityLinkJSX(ontology, ontology.getLinkedEntities(), creator, api, showBadges)}</li>
                    })}</ul> :
                    <p>{getEntityLinkJSX(ontology, ontology.getLinkedEntities(), ontology.getCreators()[0], api, showBadges)}</p>
                }
              </EuiFlexItem><EuiSpacer/></>
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
            title={hasTitle ? "Ontology Information" : ""}
            layout="horizontal"
        >

          {isLoadingOntology && <EuiLoadingSpinner size={'s'}/>}
          {isSuccessOntology && ontology !== undefined &&
              <EuiText {...rest}>

                {getOntologyIriSection(ontology)}
                {getVersionIriSection(ontology)}
                {getLastLoadSection(ontology)}
                {/* TODO: Do we want the following on the information widget?
                                    Ebi does not have them there, but on other parts of the entity page */
                  <>
                    {getOntologyIdSection(ontology)}
                    {getVersionSection(ontology)}
                    {getNumClassesSection(ontology)}
                    {/*{getCreatorsSection(entityInfo)}*/ /* redundant as it's listed in annotations anyway */}
                  </>
                }

                {getAnnotationSection(ontology)}
              </EuiText>
          }
          {isErrorOntology && <EuiText>{getErrorMessageToDisplay(errorOntology, "information")}</EuiText>}
        </EuiCard>
      </>
  );

}
export { OntologyInfoWidget };
