import { ReactElement } from '../../../../../../node_modules/react';
import { EntityRelationsPresentationProps, OnNavigates } from '../../../app';
import { Thing } from '../../../model/interfaces';
/**
 * Builds and returns an array of section list elements specified at `currentResponsePath`
 * @param parentEntity
 * @param array
 * @param showBadges
 * @param onNavigates functions defining the action when clicking clickable items
 * @param onNavigates.onNavigateToEntity function defining the action when clicking on an entities name
 * @param onNavigates.onNavigateToOntology function defining the action when clicking on an ontology badge
 * @param onNavigates.onNavigateToDisambiguate function defining the action when clicking on a disambiguation badge
 */
export declare function getSectionListJSX(parentEntity: Thing, array: any[], showBadges: boolean | undefined, onNavigates: OnNavigates): ReactElement;
declare function EntityRelationsPresentation(props: EntityRelationsPresentationProps): React.JSX.Element;
/**
 * Brings its own EUI provider, the way the widgets do, so the card also renders
 * inside a plain host application. It performs no request of its own.
 */
declare function WrappedEntityRelationsPresentation(props: EntityRelationsPresentationProps): React.JSX.Element;
export { EntityRelationsPresentation, WrappedEntityRelationsPresentation };
