import { TabWidget } from './TabWidget';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof TabWidget;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
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
        parameter: string;
        useLegacy: boolean;
        ontologyId: string;
        entityType: import('../../../../model/ModelTypeCheck').EntityTypeName;
        iri: string;
        altNamesTab: boolean;
        hierarchyTab: boolean;
        crossRefTab: boolean;
        terminologyInfoTab: boolean;
        hierarchyPreferredRoots: false;
        hierarchyKeepExpansionStates: false;
        hierarchyShowSiblingsOnInit: false;
        onNavigateToEntity: string;
        onNavigateToOntology: string;
        onNavigateToDisambiguate: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const TabWidgetOLS3: Story;
export declare const TabWidgetOLS4V1: Story;
export declare const TabWidgetOLS4V2: Story;
export declare const SelectingDefiningOntology: Story;
export declare const DefiningOntologyUnavailable: Story;
export declare const TabWidgetLarge: Story;
export declare const HiddenTabs: Story;
