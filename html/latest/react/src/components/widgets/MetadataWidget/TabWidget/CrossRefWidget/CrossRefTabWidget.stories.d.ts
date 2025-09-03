import { CrossRefTabWidget } from './CrossRefTabWidget';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof CrossRefTabWidget;
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
        readonly api: "";
        readonly iri: "";
        readonly useLegacy: true;
        readonly ontologyId: "";
        readonly entityType: "term";
        readonly parameter: "collection=nfdi4health";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const CrossRefTabWidget1: Story;
export declare const SelectingDefiningOntology: Story;
export declare const DefiningOntologyUnavailable: Story;
