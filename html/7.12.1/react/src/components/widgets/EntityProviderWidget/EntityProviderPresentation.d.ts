import { EntityProvider } from '../../../app/types';
export interface EntityProviderPresentationProps {
    /** All providers found for the entity (one per ontology it occurs in). */
    providers: EntityProvider[];
    /** The preferred provider (defining ontology), highlighted in the list. */
    provider?: EntityProvider;
    isLoading?: boolean;
    isError?: boolean;
    error?: Error;
    /** Shows the collapsible raw `provider` block per entry. Default: true. */
    showRaw?: boolean;
    className?: string;
}
declare function EntityProviderPresentation(props: EntityProviderPresentationProps): React.JSX.Element;
declare function WrappedEntityProviderPresentation(props: EntityProviderPresentationProps): React.JSX.Element;
export { EntityProviderPresentation, WrappedEntityProviderPresentation };
