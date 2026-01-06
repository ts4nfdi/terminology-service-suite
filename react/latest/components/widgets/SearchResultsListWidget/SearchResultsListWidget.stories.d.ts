import { SearchResultsListWidget } from './SearchResultsListWidget';
import { StoryObj } from '@storybook/react-vite';
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
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SearchResultsListSafety: Story;
export declare const SearchResultsListNFDI4Health: Story;
export declare const ErrorSearchResultsList: Story;
export declare const TibNFDI4CHEM: Story;
export declare const TibDataPlant: Story;
export declare const SearchResultsListOls4: Story;
