import { DescriptionWidget } from './DescriptionWidget';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof DescriptionWidget;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
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
        thingType: import('../../../../model/ModelTypeCheck').ThingTypeName;
        descText: string;
        color: string;
        className: string;
        parameter: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DescriptionWidget1: Story;
export declare const SelectingDefiningOntology: Story;
export declare const DefiningOntologyUnavailable: Story;
export declare const ErrorFetchingData: Story;
