import { AutocompleteWidgetProps } from '../../../app';
export interface EntityValue {
    iri?: string;
    label?: string;
    ontology_name?: string;
    type?: string;
    short_form?: string;
    description?: string;
    provider_name?: string;
    provider_type?: string;
    provider_api?: string;
    synonyms?: string[];
}
/**
 * A React component to provide Autosuggestion based on SemLookP.
 */
declare function AutocompleteWidget(props: AutocompleteWidgetProps): JSX.Element;
declare function WrappedAutocompleteWidget(props: AutocompleteWidgetProps): JSX.Element;
export { AutocompleteWidget, WrappedAutocompleteWidget };
