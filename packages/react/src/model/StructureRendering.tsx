import { Thing } from "./interfaces";
import React, { ReactElement } from "react";
import { EuiIconTip, EuiIcon } from "@elastic/eui";
import { asArray, inferTypeFromTypeArray, randomString } from "../app/util";
import LinkedEntities from "./LinkedEntities";
import Reified from "./Reified";
import "../style/tssStyles.css";
import { OnNavigates } from "../app/types";
import ClassExpression from "./ClassExpression";

const DEFAULT_SHOW_BADGES = true;

export function getTooltip(text: string): ReactElement {
  return <EuiIconTip type="iInCircle" color={"subdued"} content={text} />;
}

/**
 * ONLY USABLE WITH V2-API ENTITIES
 *
 * Returns Reified axioms as JSX element (similar to MetadataTooltip component in ols4 project)
 * @param parentEntity the surrounding entity of the axioms array (for eventual label fetching)
 * @param axiomsDict the entities axioms in the format returned by Reified::getMetadata()
 * @returns ReactElement the axioms in JSX format to display
 */
export function getAxiomsInformationJSX(
  parentEntity: Thing,
  axiomsDict: any | null,
): ReactElement {
  const axiomsText = Object.keys(axiomsDict)
    .map((key) => {
      const label = parentEntity.getLinkedEntities().getLabelForIri(key) || key;
      if (label) {
        return "*" + axiomsDict[key] + " (" + label + ")";
      } else return "";
    })
    .join("\n");

  return getTooltip(axiomsText);
}

/**
 * ONLY USABLE WITH V2-API ENTITIES
 *
 * Returns a labeled entity link as JSX element
 * @param parentEntity the entity object in which the linked entity exists
 * @param linkedEntities the linkedEntities object (exists as param because it is necessary that the entity has a linkedEntities block in properties)
 * @param iri   the entities' iri
 * @param showBadges    boolean which indicates if badges should be shown
 * @param onNavigates functions defining the action when clicking clickable items
 * @param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
 * @param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
 * @param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
 * @returns ReactElement the entity link JSX
 */
export function getEntityLinkJSX(
  parentEntity: Thing,
  linkedEntities: LinkedEntities,
  iri: string,
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  /*TODO: change to using (entity : EntityData) later*/ onNavigates: OnNavigates,
): ReactElement {
  const label =
    linkedEntities.getLabelForIri(iri) || iri.split("/").pop() || iri;
  const linkedEntity = linkedEntities.get(iri);
  const localOntology = parentEntity.getOntologyId();

  // reference to self: just display label because we are already on that page
  if (parentEntity.getType() !== "ontology" && iri === parentEntity?.getIri()) {
    return <span className="highlight">{parentEntity.getLabel()}</span>;
  }

  if (!linkedEntity) {
    if (iri.startsWith("http")) {
      return (
        <a className="clickable" href={iri}>
          {label}
        </a>
      );
    } else {
      // So far only known occurrence of this branch is for owl#Thing
      return <span>{label}</span>;
    }
  }

  const otherDefinedBy = linkedEntity["definedBy"]
    ? linkedEntity["definedBy"].filter((elem: any) => {
        return elem !== localOntology;
      })
    : [];
  const linkedEntityType = linkedEntity["type"]
    ? inferTypeFromTypeArray(linkedEntity["type"])
    : parentEntity.getType();

  // see https://gitlab.zbmed.de/km/semlookp/ols4/-/blob/dev/frontend/src/components/EntityLink.tsx for original reference
  if (otherDefinedBy.length === 1) {
    if (linkedEntity["hasLocalDefinition"]) {
      // show <label> <ontologyId> where <label> links to the term in this ontology and <ontologyId> links to the term in the defining ontology
      return (
        <>
          <button
            className="clickable"
            onClick={() => {
              if (typeof onNavigates.onNavigateToEntity === "function")
                onNavigates.onNavigateToEntity(
                  localOntology,
                  linkedEntityType,
                  { iri, label },
                );
            }}
          >
            {label}
          </button>
          {showBadges ? (
            <>
              &nbsp;
              <button
                className="no-decoration"
                onClick={() => {
                  if (typeof onNavigates.onNavigateToOntology === "function")
                    onNavigates.onNavigateToOntology(
                      otherDefinedBy[0],
                      linkedEntityType,
                      { iri, label },
                    );
                }}
              >
                {
                  <span className="ontology-badge">
                    {otherDefinedBy[0].toUpperCase()}
                  </span>
                }
              </button>
            </>
          ) : (
            <></>
          )}
        </>
      );
    } else {
      // show <label> <ontologyId> linking to the term in the defining ontology
      return (
        <>
          <button
            className="clickable"
            onClick={() => {
              if (typeof onNavigates.onNavigateToEntity === "function")
                onNavigates.onNavigateToEntity(
                  otherDefinedBy[0],
                  linkedEntityType,
                  { iri, label },
                );
            }}
          >
            {label}
          </button>
          {showBadges ? (
            <>
              &nbsp;
              <button
                className="no-decoration"
                onClick={() => {
                  if (typeof onNavigates.onNavigateToOntology === "function")
                    onNavigates.onNavigateToOntology(
                      otherDefinedBy[0],
                      linkedEntityType,
                      { iri, label },
                    );
                }}
              >
                {
                  <span className="ontology-badge">
                    {otherDefinedBy[0].toUpperCase()}
                  </span>
                }
              </button>
            </>
          ) : (
            <></>
          )}
        </>
      );
    }
  } else if (otherDefinedBy.length > 1) {
    if (linkedEntity["hasLocalDefinition"]) {
      // show <label> <ontologyId1> <ontologyId2> ... <ontologyIdN> where <label> links to the term in this ontology and <ontologyIdI> links to the term in that defining ontology
      return (
        <>
          <button
            className="clickable"
            onClick={() => {
              if (typeof onNavigates.onNavigateToEntity === "function")
                onNavigates.onNavigateToEntity(
                  localOntology,
                  linkedEntityType,
                  { iri, label },
                );
            }}
          >
            {label}
          </button>
          {showBadges ? (
            <>
              &nbsp;
              {otherDefinedBy.map((elem: any) => {
                return (
                  <button
                    className="no-decoration"
                    key={randomString()}
                    onClick={() => {
                      if (
                        typeof onNavigates.onNavigateToOntology === "function"
                      )
                        onNavigates.onNavigateToOntology(
                          elem,
                          linkedEntityType,
                          { iri, label },
                        );
                    }}
                  >
                    {
                      <span className="ontology-badge">
                        {elem.toUpperCase()}
                      </span>
                    }
                  </button>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </>
      );
    } else {
      // show <label><ICON> where <label> links to the terms' iri and <ICON> links to disambiguation page
      return (
        <>
          <a className="clickable" href={iri}>
            {label}
          </a>
          {showBadges ? (
            <>
              &nbsp;
              <button
                className="no-decoration"
                key={randomString()}
                onClick={() => {
                  if (
                    typeof onNavigates.onNavigateToDisambiguate === "function"
                  )
                    onNavigates.onNavigateToDisambiguate(linkedEntityType, {
                      iri,
                      label,
                    });
                }}
              >
                <span className="ontology-badge">
                  <EuiIcon type="search" size={"s"} />
                  &nbsp;
                  {otherDefinedBy.length}
                  &nbsp;
                  {"ontologies"}
                </span>
              </button>
            </>
          ) : (
            <></>
          )}
        </>
      );
    }
  } else {
    if (linkedEntity["hasLocalDefinition"]) {
      // show <label> where <label> links to the term in this ontology
      return (
        <>
          <button
            className="clickable"
            onClick={() => {
              if (typeof onNavigates.onNavigateToEntity === "function")
                onNavigates.onNavigateToEntity(
                  localOntology,
                  linkedEntityType,
                  { iri, label },
                );
            }}
          >
            {label}
          </button>
        </>
      );
    } else {
      if (parseInt(linkedEntity["numAppearsIn"]) > 0) {
        // show <label><ICON> where <label> links to the terms' iri and <ICON> links to disambiguation page
        return (
          <>
            <a className="clickable" href={iri}>
              {label}
            </a>
            {showBadges ? (
              <>
                &nbsp;
                <button
                  className="no-decoration"
                  key={randomString()}
                  onClick={() => {
                    if (
                      typeof onNavigates.onNavigateToDisambiguate === "function"
                    )
                      onNavigates.onNavigateToDisambiguate(linkedEntityType, {
                        iri,
                        label,
                      });
                  }}
                >
                  <span className="ontology-badge">
                    <EuiIcon type="search" size={"s"} />
                    &nbsp;
                    {linkedEntity["numAppearsIn"]}
                    &nbsp;
                    {parseInt(linkedEntity["numAppearsIn"]) > 1
                      ? "ontologies"
                      : "ontology"}
                  </span>
                </button>
              </>
            ) : (
              <></>
            )}
          </>
        );
      } else {
        // show raw iri
        return (
          <>
            <a className="clickable" href={linkedEntity["url"] || iri}>
              {label}
            </a>
          </>
        );
      }
    }
  }
}

/**
 * Builds and returns an array of section list elements specified at `currentResponsePath`
 * @param parentEntity
 * @param linkedEntities
 * @param array
 * @param showBadges
 * @param onNavigates functions defining the action when clicking clickable items
 * @param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
 * @param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
 * @param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
 */
export function getSectionListJSX(
  parentEntity: Thing,
  linkedEntities: LinkedEntities,
  array: any[],
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  /*TODO: change to using (entity : EntityData) later*/ onNavigates: OnNavigates,
): ReactElement {
  return (
    <>
      {array.length === 1 ? (
        <p>
            <ClassExpression
                parentEntity={parentEntity}
                linkedEntities={parentEntity.getLinkedEntities()}
                currentResponsePath={array[0]}
                showBadges={showBadges}
                onNavigates={onNavigates}
            />
        </p>
      ) : (
        <ul>
          {array.map((item: any) => {
            return (
              <li key={randomString()}>
                  <ClassExpression
                      parentEntity={parentEntity}
                      linkedEntities={parentEntity.getLinkedEntities()}
                      currentResponsePath={item}
                      showBadges={showBadges}
                      onNavigates={onNavigates}
                  />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

/**
 * Inserts links into text (potentially with label instead of link displayed if link exists as key inside linkedEntities) and returns the resulting JSX element
 * @param parentEntity the entity object possessing the whole response object
 * @param text the text to insert links into
 * @param linkedEntities the linkedEntities object (if undefined, no labels are inferred)
 * @param showBadges boolean which indicates if badges should be shown
 * @param onNavigates functions defining the action when clicking clickable items
 * @param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
 * @param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
 * @param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
 */
function addLinksToText(
  parentEntity: Thing,
  text: string,
  linkedEntities: LinkedEntities | undefined,
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  /*TODO: change to using (entity : EntityData) later*/ onNavigates: OnNavigates,
) {
  const linksToSplice: Array<{
    start: number;
    end: number;
    link: ReactElement;
  }> = [];

  if (linkedEntities) {
    for (const entityId of Object.keys(linkedEntities.linkedEntities)) {
      for (
        let n = text.indexOf(entityId, 0);
        n !== -1;
        n = text.indexOf(entityId, n)
      ) {
        linksToSplice.push({
          start: n,
          end: n + entityId.length,
          link: getEntityLinkJSX(
            parentEntity,
            linkedEntities,
            entityId,
            showBadges,
            onNavigates,
          ),
        });

        n += entityId.length;
      }
    }
  }

  const urlRe = /[A-z]+:\/\/[^\s]+/g;
  for (let match = urlRe.exec(text); match; match = urlRe.exec(text)) {
    const url = match[0];
    // console.log("found match " + url);

    linksToSplice.push({
      start: match.index,
      end: match.index + url.length,
      link: (
        <span key={randomString()}>
          <a className="clickable" href={url}>
            {url}
          </a>
        </span>
      ),
    });
  }

  linksToSplice.sort((a, b) => a.start - b.start);

  removeOverlapping: for (let n = 0; n < linksToSplice.length; ) {
    for (let n2 = n + 1; n2 < linksToSplice.length; ++n2) {
      const spliceA = linksToSplice[n];
      const spliceB = linksToSplice[n2];

      if (spliceA === spliceB) continue;

      // The splices overlap if neither ends before the other starts
      if (spliceA.end >= spliceB.start && spliceB.end >= spliceA.start) {
        // console.log("Removing overlapping");

        // remove the shorter link of both
        if (spliceA.end - spliceA.start < spliceB.end - spliceB.start) {
          linksToSplice.splice(n, 1);
        } else {
          linksToSplice.splice(n2, 1);
        }
        continue removeOverlapping;
      }
    }
    ++n;
  }

  if (linksToSplice.length === 0) return <>{text}</>;

  const res: ReactElement[] = [];
  let n = 0;

  for (const link of linksToSplice) {
    res.push(<span key={randomString()}>{text.substring(n, link.start)}</span>);
    res.push(link.link);
    n = link.end;
  }
  res.push(<span key={randomString()}>{text.slice(n)}</span>);

  return <>{res}</>;
}

/**
 * Renders a given Reified
 * @param entity the entity the Reified exists in
 * @param reified the Reified
 * @param showBadges boolean which indicates if badges should be shown
 * @param onNavigates functions defining the action when clicking clickable items
 * @param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
 * @param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
 * @param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
 */
export function getReifiedJSX(
  entity: Thing,
  reified: Reified<any>,
  showBadges: boolean = DEFAULT_SHOW_BADGES,
  /*TODO: change to using (entity : EntityData) later*/ onNavigates: OnNavigates,
): ReactElement {
  function getValueJSX(value: Reified<any>): ReactElement {
    const linkedEntities = entity.getLinkedEntities();

    // linkedEntities not existent on entity (-> probably legacy api version)
    if (Object.keys(linkedEntities.linkedEntities).length == 0) {
      if (typeof value.value == "string") {
        return addLinksToText(
          entity,
          value.value.toString(),
          undefined,
          showBadges,
          onNavigates,
        );
      } else if (
        typeof value.value == "object" &&
        value.value["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"] !=
          undefined
      ) {
        // Is converted from Skosmos
        switch (
          value.value["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]
        ) {
          case "http://www.w3.org/2008/05/skos-xl#Label":
            const label =
              value.value["http://www.w3.org/2008/05/skos-xl#literalForm"][
                "value"
              ];

            return <>{label}</>;
          case "http://purl.org/vocab/changeset/schema#ChangeSet":
            const changeReason =
              value.value[
                "http://purl.org/vocab/changeset/schema#changeReason"
              ]["value"];
            const date =
              value.value["http://purl.org/vocab/changeset/schema#createdDate"][
                "value"
              ];

            return (
              <>
                {date}: {changeReason}
              </>
            );
          default:
            console.error(
              `Unknown rdf syntax type: ${value.value["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]}`,
            );
            return <>{JSON.stringify(value.value)}</>;
        }
      } else {
        // TODO: should not happen, prove that this is never the case
        console.error(`Unknown entry information format: ${value}`);
        return <>{JSON.stringify(value.value)}</>;
      }
    } else {
      const linkedEntity = linkedEntities.get(value.value);

      if (linkedEntity) {
        return getEntityLinkJSX(
          entity,
          linkedEntities,
          value.value,
          showBadges,
          onNavigates,
        );
      } else {
        if (typeof value.value !== "string") {
          if (entity.getType() == "ontology") {
            return <>{JSON.stringify(value.value)}</>;
          } else {
            return <ClassExpression
                parentEntity={entity}
                linkedEntities={linkedEntities}
                currentResponsePath={value.value}
                showBadges={showBadges}
                onNavigates={onNavigates}
            />
          }
        } else {
          return addLinksToText(
            entity,
            value.value.toString(),
            linkedEntities,
            showBadges,
            onNavigates,
          );
        }
      }
    }
  }

  return (
    <>
      {getValueJSX(reified)}
      &nbsp;
      {reified.hasMetadata() &&
        getAxiomsInformationJSX(entity, reified.getMetadata())}
    </>
  );
}
