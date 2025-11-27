import { BreadcrumbPresentation } from './BreadcrumbPresentation';
import { manuallyEmbedOnNavigate } from '../../../../../app/util';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof BreadcrumbPresentation;
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
        entity: {
            required: boolean;
            description: string;
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
        ontologyId: string;
        shortForm: string;
        colorFirst: string;
        colorSecond: string;
        onNavigateToOntology: string;
        className: string;
        entity: {
            properties: {
                ontologyId: string;
                iri: string;
                shortForm: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const EntityInput: Story;
export declare const EntityInputMissingValue: Story;
