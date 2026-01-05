import React, {ReactElement} from "react";
import {Thing} from "../../model/interfaces";
import LinkedEntities from "../../model/ols-model/LinkedEntities";
import {OnNavigates} from "../../app";
import Reified from "../../model/Reified";
import {asArray, randomString} from "../../app/util";
import {DEFAULT_SHOW_BADGES} from "../../app/globals";
import EntityLink from "./EntityLink";
import RenderedReified from "./RenderedReified";

/**
 * ONLY USABLE WITH V2-API ENTITIES
 *
 * Builds and returns one element of a sections' list, possibly in a recursive fashion by parsing the response object at the currentResponsePath to show Manchester syntax.
 * @param parentEntity the entity object possessing the whole response object
 * @param linkedEntities the linkedEntities object (exists as param because it is necessary that the entity has a linkedEntities block in properties)
 * @param currentResponsePath the current sub-object of the parentEntity response object parsed as class expression
 * @param showBadges boolean which indicates if badges should be shown
 * @param onNavigates functions defining the action when clicking clickable items
 * @param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
 * @param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
 * @param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
 * @returns ReactElement the class expression JSX
 */
export default function ClassExpression(
    {
        parentEntity,
        linkedEntities,
        currentResponsePath,
        showBadges = DEFAULT_SHOW_BADGES,
        onNavigates
    } : {
        parentEntity: Thing,
        linkedEntities: LinkedEntities,
        currentResponsePath: any,
        showBadges?: boolean,
        onNavigates: OnNavigates
    }
): ReactElement {
    let result = <></>;

    // merge linkedEntities of currentResponsePath if currentResponsePath.linkedEntities is not undefined
    linkedEntities = linkedEntities.mergeWith(currentResponsePath.linkedEntities);

    if (typeof currentResponsePath === "string") {
        result = <EntityLink
                    parentEntity={parentEntity}
                    linkedEntities={linkedEntities}
                    iri={currentResponsePath}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                 />
    } else if (
        typeof currentResponsePath === "object" &&
        !Array.isArray(currentResponsePath) &&
        Array.isArray(currentResponsePath["type"]) &&
        currentResponsePath["type"].indexOf("reification") !== -1
    ) {
        // TODO: Concat with else part? See relatedFrom (Manchester syntax does not get displayed, but neither in ols4)
        // current response path is reification
        result = <RenderedReified
                    parentEntity={parentEntity}
                    reified={Reified.fromJson<any>(currentResponsePath)[0]}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                 />
    } else {
        // type === "object"
        const someValuesFrom =
            currentResponsePath["http://www.w3.org/2002/07/owl#someValuesFrom"];
        const allValuesFrom =
            currentResponsePath["http://www.w3.org/2002/07/owl#allValuesFrom"];
        const intersectionOf = asArray(
            currentResponsePath["http://www.w3.org/2002/07/owl#intersectionOf"],
        );
        const unionOf = asArray(
            currentResponsePath["http://www.w3.org/2002/07/owl#unionOf"],
        );
        const hasValue =
            currentResponsePath["http://www.w3.org/2002/07/owl#hasValue"];
        const minCardinality =
            currentResponsePath["http://www.w3.org/2002/07/owl#minCardinality"] ||
            currentResponsePath[
                "http://www.w3.org/2002/07/owl#minQualifiedCardinality"
                ];
        const maxCardinality =
            currentResponsePath["http://www.w3.org/2002/07/owl#maxCardinality"] ||
            currentResponsePath[
                "http://www.w3.org/2002/07/owl#maxQualifiedCardinality"
                ];
        const cardinality =
            currentResponsePath["http://www.w3.org/2002/07/owl#cardinality"] ||
            currentResponsePath["http://www.w3.org/2002/07/owl#qualifiedCardinality"];
        const hasSelf =
            currentResponsePath["http://www.w3.org/2002/07/owl#hasSelf"];
        const complementOf =
            currentResponsePath["http://www.w3.org/2002/07/owl#complementOf"];
        const oneOf = asArray(
            currentResponsePath["http://www.w3.org/2002/07/owl#oneOf"],
        );
        const inverseOf =
            currentResponsePath["http://www.w3.org/2002/07/owl#inverseOf"];
        const onProperty =
            currentResponsePath["http://www.w3.org/2002/07/owl#onProperty"];
        const onDataType =
            currentResponsePath["http://www.w3.org/2002/07/owl#onDatatype"];

        if (onDataType) {
            const elements: ReactElement[] = [];

            elements.push(
                <ClassExpression
                    parentEntity={parentEntity}
                    linkedEntities={linkedEntities}
                    currentResponsePath={onDataType}
                    showBadges={showBadges}
                    onNavigates={onNavigates}
                />
            );

            const withRestrictions = asArray(
                currentResponsePath["http://www.w3.org/2002/07/owl#withRestrictions"],
            );
            if (withRestrictions.length > 0) {
                elements.push(<>[</>);

                let isFirst = true;
                for (const restriction of withRestrictions) {
                    if (isFirst) isFirst = false;
                    else elements.push(<>,&nbsp;</>);

                    const minExclusive =
                        restriction["http://www.w3.org/2001/XMLSchema#minExclusive"];
                    const minInclusive =
                        restriction["http://www.w3.org/2001/XMLSchema#minInclusive"];
                    const maxExclusive =
                        restriction["http://www.w3.org/2001/XMLSchema#maxExclusive"];
                    const maxInclusive =
                        restriction["http://www.w3.org/2001/XMLSchema#maxInclusive"];

                    if (minExclusive) elements.push(<>&gt; {minExclusive}</>);
                    else if (minInclusive) elements.push(<>&ge; {minInclusive}</>);
                    else if (maxExclusive) elements.push(<>&lt; {maxExclusive}</>);
                    else if (maxInclusive) elements.push(<>&le; {maxInclusive}</>);
                }

                elements.push(<>]</>);
            }

            result = (
                <>
                    {elements.map((elem) => (
                        <>{elem}</> // TODO test without <>{}</>
                    ))}
                </>
            );
        } else if (someValuesFrom) {
            result = (
                <>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={onProperty}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                    <i style={{ color: "purple" }}> some </i>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={asArray(someValuesFrom)[0]}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                </>
            );
        } else if (allValuesFrom) {
            result = (
                <>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={onProperty}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                    <i style={{ color: "purple" }}> only </i>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={asArray(allValuesFrom)[0]}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                </>
            );
        } else if (intersectionOf.length > 0) {
            const elements: ReactElement[] = [
                <span key={randomString()} className="text-neutral-default">
                    &#40;
                </span>,
            ];
            for (const elem of intersectionOf) {
                if (elements.length > 1) {
                    elements.push(<i> and </i>);
                }
                elements.push(
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={elem}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                );
            }
            elements.push(<span className="text-neutral-default">&#41;</span>);
            result = (
                <span>
                  {elements.map((elem) => (
                      <>{elem}</>
                  ))}
                </span>
            );
        } else if (unionOf.length > 0) {
            const elements: ReactElement[] = [
                <span key={randomString()} className="text-neutral-default">
                    &#40;
                </span>,
            ];
            for (const elem of unionOf) {
                if (elements.length > 1) {
                    elements.push(<i> or </i>);
                }
                elements.push(
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={elem}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                );
            }
            elements.push(<span className="text-neutral-default">&#41;</span>);
            result = (
                <span>
                  {elements.map((elem) => (
                      <span key={randomString()}>{elem}</span>
                  ))}
                </span>
            );
        } else if (hasValue) {
            result = (
                <>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={onProperty}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                    <i style={{ color: "purple" }}> value </i>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={asArray(hasValue)[0]}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                </>
            );
        } else if (minCardinality) {
            result = (
                <>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={onProperty}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                    <i style={{ color: "purple" }}> min </i>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={asArray(minCardinality)[0]}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                </>
            );
        } else if (maxCardinality) {
            result = (
                <>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={onProperty}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                    <i style={{ color: "purple" }}> max </i>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={asArray(maxCardinality)[0]}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                </>
            );
        } else if (cardinality) {
            result = (
                <>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={onProperty}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                    <i style={{ color: "purple" }}> exactly </i>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={asArray(cardinality)[0]}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                </>
            );
        } else if (hasSelf) {
            result = (
                <>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={onProperty}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                    <i style={{ color: "purple" }}> Self </i>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={asArray(hasSelf)[0]}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                </>
            );
        } else if (complementOf) {
            result = (
                <>
                    <i>not </i>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={asArray(complementOf)[0]}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                </>
            );
        } else if (oneOf.length > 0) {
            const elements: ReactElement[] = [
                <span key={randomString()} className="text-neutral-default">
                    &#123;
                </span>,
            ];
            for (const elem of oneOf) {
                if (elements.length > 1) {
                    elements.push(
                        <span key={randomString()} className="text-neutral-default">
                            &#44;&nbsp;
                        </span>,
                    );
                }
                elements.push(
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={elem}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                );
            }
            elements.push(<span className="text-neutral-default">&#125;</span>);
            result = (
                <span>
                  {elements.map((elem) => (
                      <span key={randomString()}>{elem}</span>
                  ))}
                </span>
            );
        } else if (inverseOf) {
            result = (
                <>
                    <i style={{ color: "purple" }}>inverse </i>
                    <span key={randomString()} className="text-neutral-default">
                        &#40;
                    </span>
                    <ClassExpression
                        parentEntity={parentEntity}
                        linkedEntities={linkedEntities}
                        currentResponsePath={inverseOf}
                        showBadges={showBadges}
                        onNavigates={onNavigates}
                    />
                    <span key={randomString()} className="text-neutral-default">
                        &#41;
                    </span>
                </>
            );
        }
    }

    return result;
}