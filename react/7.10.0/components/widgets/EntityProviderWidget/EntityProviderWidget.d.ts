import { EntityProviderWidgetProps } from '../../../app/types';
export type EntityProviderWidgetFullProps = EntityProviderWidgetProps & {
    /** Shows the collapsible raw `provider` block per entry. Default: true. */
    showRaw?: boolean;
    /** Custom CSS class replacing the default wrapper class. */
    className?: string;
};
/**
 * Fetches the provider information of an entity via {@link useEntityProvider}
 * and displays it with {@link EntityProviderPresentation}.
 *
 * While the widget is disabled (or no IRI is given) nothing is rendered, since
 * "not requested yet" is different from "requested, but nothing found".
 */
declare function EntityProviderWidget(props: EntityProviderWidgetFullProps): React.JSX.Element;
declare function WrappedEntityProviderWidget(props: EntityProviderWidgetFullProps): React.JSX.Element;
export { EntityProviderWidget, WrappedEntityProviderWidget };
