import { IriWidget } from './IriWidget';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof IriWidget;
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
        readonly iri: "";
        readonly color: "text";
        readonly iriText: "";
        readonly urlPrefix: "";
        readonly externalIcon: true;
        readonly className: "";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const IriWidget1: Story;
export declare const withoutExternalIcon: Story;
export declare const withCopyButton: Story;
export declare const withUrlPrefix: Story;
