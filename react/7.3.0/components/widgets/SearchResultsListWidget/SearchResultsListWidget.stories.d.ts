import { StoryObj } from '@storybook/react-vite';
import { SearchResultsListWidget } from './SearchResultsListWidget';
declare const meta: {
    title: string;
    component: typeof SearchResultsListWidget;
    parameters: {
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
        useLegacy: boolean;
        query: string;
        initialItemsPerPage: number;
        itemsPerPageOptions: number[];
        preselected: never[];
        targetLink: string;
        parameter: string;
        onNavigateToOntology: string;
        OnNavigateToSearchResult: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const ApiGateway: Story;
export declare const ApiGatewayWithCollection: Story;
export declare const NavigateToSearchResult: Story;
export declare const NFDI4Health: Story;
export declare const TibNFDI4CHEM: Story;
export declare const TibDataPlant: Story;
export declare const OpenEnergyPlatform: Story;
