import { StoryObj } from '@storybook/react-vite';
import { GraphViewWidget } from './GraphViewWidget';
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
        hierarchy: boolean;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ChebiIon: Story;
export declare const ChebiIonComparison: Story;
export declare const ChebiIonRootWalk: Story;
export declare const ChebiWater: Story;
export declare const ChebiWaterRootWalk: Story;
export declare const ChebiCaffeineHierarchy: Story;
export declare const WithOnNodeDoubleClickCallback: Story;
export declare const ChebiCaffeineHierarchyWithComparison: Story;
export declare const ChebiIonAndIonRadicalWithComparison: Story;
export declare const GraphWithGermanLabel: Story;
