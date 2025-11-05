import { AutocompleteWidgetProps } from '../../../app';
export declare const AutocompleteWidgetStoryArgTypes: {
    hasShortSelectedLabel: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    selectionChangedEvent: {
        required: boolean;
        action: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
        control: "text";
    };
};
export declare const AutocompleteWidgetStoryArgsReact: {
    api: string;
    ts4nfdiGateway: boolean;
    singleSelection: boolean;
    allowCustomTerms: boolean;
    selectionChangedEvent: import('storybook/actions').HandlerFunction;
    hasShortSelectedLabel: boolean;
    placeholder: string;
    preselected: never[];
    showApiSource: boolean;
    singleSuggestionRow: boolean;
    className: string;
    useLegacy: boolean;
    parameter: string;
    initialSearchQuery: string;
};
export declare const AutocompleteWidgetStoryArgsHTML: {
    api: string;
    ts4nfdiGateway: boolean;
    singleSelection: boolean;
    allowCustomTerms: boolean;
    selectionChangedEvent: () => void;
    hasShortSelectedLabel: boolean;
    placeholder: string;
    preselected: never[];
    showApiSource: boolean;
    singleSuggestionRow: boolean;
    useLegacy: boolean;
    parameter: string;
    initialSearchQuery: string;
};
export declare const WithDefaultsArgs: {};
export declare const UseAPIGatewayWithOLSArgs: AutocompleteWidgetProps;
export declare const UseAPIGatewayWithOntoPortalArgs: AutocompleteWidgetProps;
export declare const UseAPIGatewayWithSkosmosArgs: AutocompleteWidgetProps;
export declare const HideApiSourceApiGatewayArgs: AutocompleteWidgetProps;
export declare const WithDefaultsCompactArgs: AutocompleteWidgetProps;
export declare const WithPreselectedValueOLS4v2Args: AutocompleteWidgetProps;
export declare const WithPreselectedValueAndUnresolvedIriOLS3Args: AutocompleteWidgetProps;
export declare const WithPreselectedMultipleValuesOLS4Args: AutocompleteWidgetProps;
export declare const WithCustomValueArgs: AutocompleteWidgetProps;
export declare const WithInvalidValueArgs: AutocompleteWidgetProps;
export declare const WithGermanInputArgs: AutocompleteWidgetProps;
export declare const WithDescriptionAndShortFormArgs: AutocompleteWidgetProps;
export declare const WithLongFormArgs: AutocompleteWidgetProps;
export declare const AllowAddingCustomTermsArgs: AutocompleteWidgetProps;
export declare const AllowMultipleTermsArgs: AutocompleteWidgetProps;
export declare const WithMultipleValuesArgs: AutocompleteWidgetProps;
export declare const TibNFDI4CHEMArgs: AutocompleteWidgetProps;
export declare const TibDataPlantArgs: AutocompleteWidgetProps;
export declare const SubtreeDirectSubtypesArgs: AutocompleteWidgetProps;
export declare const SubtreeDirectAndIndirectSubtypesArgs: AutocompleteWidgetProps;
export declare const InitialSearchQueryArgs: AutocompleteWidgetProps;
export declare const commonAutocompleteWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
