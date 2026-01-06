import { ReactElement } from '../../../../../node_modules/react';
import { Thing } from '../../model/interfaces';
import { default as LinkedEntities } from '../../model/ols-model/LinkedEntities';
import { OnNavigates } from '../../app';
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
export default function EntityLink({ parentEntity, linkedEntities, iri, showBadges, onNavigates }: {
    parentEntity: Thing;
    linkedEntities: LinkedEntities;
    iri: string;
    showBadges?: boolean;
    onNavigates: OnNavigates;
}): ReactElement;
