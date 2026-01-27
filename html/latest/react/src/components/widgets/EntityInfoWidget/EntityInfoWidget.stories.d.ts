import { StoryObj } from '@storybook/react-vite';
import { EntityInfoWidget } from './EntityInfoWidget';
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
    component: typeof EntityInfoWidget;
    argTypes: {
        entityType: {
            required: boolean;
            description: string;
            control: {
                readonly type: "radio";
            };
            table: {
                type: {
                    summary: string;
                };
            };
            options: string[];
        };
        ontologyId: {
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
    };
    args: {
        api: string;
        iri: string;
        useLegacy: boolean;
        ontologyId: string;
        entityType: import('../../../model/ModelTypeCheck').EntityTypeName;
        hasTitle: boolean;
        showBadges: boolean;
        parameter: string;
        onNavigateToEntity: string;
        onNavigateToOntology: string;
        onNavigateToDisambiguate: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TermInfoWidget: Story;
export declare const PropertyInfoWidget: Story;
export declare const IndividualInfoWidget: Story;
export declare const InfoWidgetBadges: Story;
export declare const OptionalEntityTypeLegacyAPI: Story;
export declare const InfoWidgetDomain: Story;
export declare const InfoWidgetRange: Story;
export declare const InfoWidgetPropertyAssertion: Story;
export declare const InfoWidgetPropertyCharacteristics: Story;
export declare const NavigateToEBIPage: Story;
export declare const SkosmosImport: Story;
