import { Thing } from '../../model/interfaces';
import { default as Reified } from '../../model/Reified';
import { OnNavigates } from '../../app';
import { ReactElement } from '../../../../../node_modules/react';
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
export default function RenderedReified({ parentEntity, reified, showBadges, onNavigates }: {
    parentEntity: Thing;
    reified: Reified<any>;
    showBadges?: boolean;
    onNavigates: OnNavigates;
}): ReactElement;
