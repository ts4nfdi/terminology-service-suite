import { StoryObj } from '@storybook/react-vite';
import { MathFormulaWidget } from './MathFormulaWidget';
declare const meta: {
    title: string;
    component: typeof MathFormulaWidget;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: import('@storybook/react-vite').ArgTypes<import('@storybook/react-vite').Args>;
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
export declare const MathMLInput: Story;
export declare const MathMLTextInput: Story;
export declare const MathMLFractionInput: Story;
