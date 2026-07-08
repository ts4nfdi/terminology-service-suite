import { StoryObj } from '@storybook/react-vite';
import { MathFormulaWidget } from './MathFormulaWidget';
declare const meta: {
    title: string;
    component: typeof MathFormulaWidget;
    parameters: {
        layout: string;
    };
    argTypes: {
        iri: {
            required: boolean;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
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
        readonly ontologyId: "";
        readonly iri: "";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const MathmodP983: Story;
export declare const MathmodP989: Story;
