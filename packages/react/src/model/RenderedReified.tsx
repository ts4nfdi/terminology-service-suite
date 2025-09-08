import {Thing} from "./interfaces";
import Reified from "./Reified";
import {OnNavigates} from "../app";
import React, {ReactElement} from "react";
import EntityLink from "./EntityLink";
import ClassExpression from "./ClassExpression";
import {DEFAULT_SHOW_BADGES} from "../app/globals";
import Tooltip from "./Tooltip";
import {randomString} from "../app/util";

/**
 * Renders a given Reified
 * @param parentEntity the entity the Reified exists in
 * @param reified the Reified
 * @param showBadges boolean which indicates if badges should be shown
 * @param onNavigates functions defining the action when clicking clickable items
 * @param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
 * @param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
 * @param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
 */
export default function RenderedReified(
    {
        parentEntity,
        reified,
        showBadges = DEFAULT_SHOW_BADGES,
        onNavigates
    } : {
        parentEntity: Thing,
        reified: Reified<any>,
        showBadges?: boolean,
        /*TODO: change to using (entity : EntityData) later*/ onNavigates: OnNavigates,
    }
): ReactElement {

    function RenderedValue(
        {
            value
        } : {
            value: any
        }
    ): ReactElement {
        const linkedEntities = parentEntity.getLinkedEntities();

        /**
         * Inserts links into text (potentially with label instead of link displayed if link exists as key inside linkedEntities) and returns the resulting JSX element
         * @param text the text to insert links into
         */
        function addLinksToText(
            text: string
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

        // linkedEntities not existent on entity (-> probably legacy api version)
        if (Object.keys(linkedEntities.linkedEntities).length == 0) {
            if (typeof value == "string") {
                return addLinksToText(value.toString());
            } else if (
                typeof value == "object" &&
                value["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"] !=
                undefined
            ) {
                // Is converted from Skosmos
                switch (
                    value["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]
                    ) {
                    case "http://www.w3.org/2008/05/skos-xl#Label":
                        return <>
                            {/* label */ value["http://www.w3.org/2008/05/skos-xl#literalForm"]["value"]}
                        </>;
                    case "http://purl.org/vocab/changeset/schema#ChangeSet":
                        return (
                            <>
                                {/* date */ value["http://purl.org/vocab/changeset/schema#createdDate"]["value"]}: {/* changeReason */ value["http://purl.org/vocab/changeset/schema#changeReason"]["value"]}
                            </>
                        );
                    default:
                        console.error(
                            `Unknown rdf syntax type: ${value["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]}`,
                        );
                        return <>{JSON.stringify(value)}</>;
                }
            } else {
                // TODO: should not happen, prove that this is never the case
                console.error(`Unknown entry information format: ${value}`);
                return <>{JSON.stringify(value)}</>;
            }
        } else {
            const linkedEntity = linkedEntities.get(value);

            if (linkedEntity) {
                return <EntityLink
                    parentEntity={parentEntity}
                    linkedEntities={linkedEntities}
                    iri={value}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                />
            } else {
                if (typeof value !== "string") {
                    if (parentEntity.getType() == "ontology") {
                        return <>{JSON.stringify(value)}</>;
                    } else {
                        return <ClassExpression
                            parentEntity={parentEntity}
                            linkedEntities={linkedEntities}
                            currentResponsePath={value}
                            showBadges={showBadges}
                            onNavigates={onNavigates}
                        />
                    }
                } else {
                    return addLinksToText(value.toString(),);
                }
            }
        }
    }

    /**
     * @param axiomsDict the entities axioms in the format returned by Reified::getMetadata()
     */
    function RenderedAxioms(
        {
            axiomsDict
        } : {
            axiomsDict: any | null
        }
    ): ReactElement {
        const axiomsText = Object.keys(axiomsDict)
            .map((key) => {
                const label = parentEntity.getLinkedEntities().getLabelForIri(key) || key;
                if (label) {
                    return "*" + axiomsDict[key] + " (" + label + ")";
                } else return "";
            })
            .join("\n");

        return <Tooltip text={axiomsText} />;
    }

    return (
        <>
            <RenderedValue value={reified.value} />
            &nbsp;
            {reified.hasMetadata() && <RenderedAxioms axiomsDict={reified.getMetadata()}/>}
        </>
    );
}