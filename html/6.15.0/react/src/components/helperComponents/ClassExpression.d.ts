import { ReactElement } from '../../../../../node_modules/react';
import { OnNavigates } from '../../app';
import { Thing } from '../../model/interfaces';
import { default as LinkedEntities } from '../../model/ols-model/LinkedEntities';
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
export default function ClassExpression({ parentEntity, linkedEntities, currentResponsePath, showBadges, onNavigates, }: {
    parentEntity: Thing;
    linkedEntities: LinkedEntities;
    currentResponsePath: any;
    showBadges?: boolean;
    onNavigates: OnNavigates;
}): ReactElement;
