import {Thing} from "./interfaces";
import Reified from "./Reified";
import {OnNavigates} from "../app";
import React, {ReactElement} from "react";
import EntityLink from "./EntityLink";
import ClassExpression from "./ClassExpression";
import {addLinksToText, getAxiomsInformationJSX} from "./StructureRendering";
import {DEFAULT_SHOW_BADGES} from "../app/globals";

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

        // linkedEntities not existent on entity (-> probably legacy api version)
        if (Object.keys(linkedEntities.linkedEntities).length == 0) {
            if (typeof value == "string") {
                return addLinksToText(
                    parentEntity,
                    value.toString(),
                    undefined,
                    showBadges,
                    onNavigates,
                );
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
                    return addLinksToText(
                        parentEntity,
                        value.toString(),
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
            <RenderedValue value={reified.value} />
            &nbsp;
            {reified.hasMetadata() &&
                getAxiomsInformationJSX(parentEntity, reified.getMetadata())}
        </>
    );
}