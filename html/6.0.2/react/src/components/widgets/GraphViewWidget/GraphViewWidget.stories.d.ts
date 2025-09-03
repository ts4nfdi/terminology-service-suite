import { GraphViewWidget } from './GraphViewWidget';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof GraphViewWidget;
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
        rootWalk: boolean;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const GraphViewWidgetExample: Story;
export declare const RootWalkGraphExample: Story;
export declare const ChebiWater: Story;
export declare const ChebiWaterRootWalk: Story;
export declare const ChebiCaffeineHierarchy: Story;
export declare const WithOnNodeDoubleClickCallback: Story;
