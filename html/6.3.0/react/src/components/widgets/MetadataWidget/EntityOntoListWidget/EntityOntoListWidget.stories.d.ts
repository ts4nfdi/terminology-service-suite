import { EntityOntoListWidget } from './EntityOntoListWidget';
import { manuallyEmbedOnNavigate } from '../../../../app/util';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof EntityOntoListWidget;
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
        readonly api: "";
        readonly useLegacy: false;
        readonly iri: "";
        readonly ontologyId: "";
        readonly entityType: "term";
        readonly parameter: "";
        readonly onNavigateToOntology: "Console message";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const v2ApiEFO: Story;
export declare const v2ApiONS: Story;
export declare const legacyApi: Story;
export declare const exceedsMaxDisplay: Story;
