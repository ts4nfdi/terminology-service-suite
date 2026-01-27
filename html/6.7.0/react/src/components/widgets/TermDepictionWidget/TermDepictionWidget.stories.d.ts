import { StoryObj } from '@storybook/react-vite';
import { TermDepictionWidget } from './TermDepictionWidget';
declare const meta: {
    title: string;
    component: typeof TermDepictionWidget;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        [x: string]: import('storybook/internal/csf').InputType;
    };
    args: {
        api: string;
        iri: string;
        ontologyId: string;
        useLegacy: boolean;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TermDepictionWidgetExample: Story;
export declare const TermDepictionWidget3D: Story;
