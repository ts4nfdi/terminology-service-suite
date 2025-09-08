import { Thing } from "./interfaces";
import React, { ReactElement } from "react";
import { EuiIconTip, EuiIcon } from "@elastic/eui";
import { asArray, inferTypeFromTypeArray, randomString } from "../app/util";
import LinkedEntities from "./LinkedEntities";
import Reified from "./Reified";
import "../style/tssStyles.css";
import { OnNavigates } from "../app/types";
import ClassExpression from "./ClassExpression";
import EntityLink from "./EntityLink";

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
          link: <EntityLink
                    parentEntity={parentEntity}
                    linkedEntities={linkedEntities}
                    iri={entityId}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                />,
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
        return <EntityLink
                    parentEntity={entity}
                    linkedEntities={linkedEntities}
                    iri={value.value}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                />
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
