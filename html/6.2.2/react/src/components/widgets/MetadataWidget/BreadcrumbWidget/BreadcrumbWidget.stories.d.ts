import { BreadcrumbWidget } from './BreadcrumbWidget';
import { manuallyEmbedOnNavigate } from '../../../../app/util';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof BreadcrumbWidget;
    parameters: {
        layout: string;
        docs: {
            source: {
                transform: typeof manuallyEmbedOnNavigate;
            };
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
        useLegacy: boolean;
        iri: string;
        ontologyId: string;
        entityType: import('../../../../model/ModelTypeCheck').EntityTypeName;
        colorFirst: string;
        colorSecond: string;
        parameter: string;
        onNavigateToOntology: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const BreadcrumbWidgetDefault: Story;
export declare const SelectingDefiningOntology: Story;
export declare const DefiningOntologyUnavailable: Story;
export declare const ErrorBreadcrumbWidget: Story;
export declare const CustomColors: Story;
export declare const CustomStyle: Story;
export declare const EntityInput: Story;
