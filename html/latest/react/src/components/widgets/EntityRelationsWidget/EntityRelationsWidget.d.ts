import { ReactElement } from '../../../../../../node_modules/react';
import { EntityRelationsWidgetProps, OnNavigates } from '../../../app';
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
declare function EntityRelationsWidget(props: EntityRelationsWidgetProps): import("react/jsx-runtime").JSX.Element;
declare function WrappedEntityRelationsWidget(props: EntityRelationsWidgetProps): import("react/jsx-runtime").JSX.Element;
export { EntityRelationsWidget, WrappedEntityRelationsWidget };
