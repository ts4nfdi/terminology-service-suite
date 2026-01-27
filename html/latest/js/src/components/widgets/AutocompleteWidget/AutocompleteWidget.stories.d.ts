import { StoryObj } from '@storybook/react-vite';
import { AutocompleteWidgetProps } from '@ts4nfdi/terminology-service-suite/src';
declare const meta: {
    title: string;
    tags: string[];
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    render: (args: AutocompleteWidgetProps) => string;
    argTypes: {
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
    args: {
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
        onNavigateToOntology: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const WithDefaults: Story;
export declare const UseAPIGatewayWithOLS: Story;
export declare const UseAPIGatewayWithOntoPortal: Story;
export declare const UseAPIGatewayWithSkosmos: Story;
export declare const HideApiSourceApiGateway: Story;
export declare const WithDefaultsCompact: Story;
export declare const WithPreselectedValueOLS4v2: Story;
export declare const WithPreselectedValueAndUnresolvedIriOLS3: Story;
export declare const WithPreselectedMultipleValuesOLS4: Story;
export declare const WithCustomValue: Story;
export declare const WithInvalidValue: Story;
export declare const WithGermanInput: Story;
export declare const WithDescriptionAndShortForm: Story;
export declare const WithLongForm: Story;
export declare const AllowAddingCustomTerms: Story;
export declare const AllowMultipleTerms: Story;
export declare const WithMultipleValues: Story;
export declare const TibNFDI4CHEM: Story;
export declare const TibDataPlant: Story;
export declare const SubtreeDirectSubtypes: Story;
export declare const SubtreeDirectAndIndirectSubtypes: Story;
