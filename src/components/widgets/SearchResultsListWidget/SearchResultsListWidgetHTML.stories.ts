import type { StoryObj, Meta } from '@storybook/html';
import 'semlookp-widgets';

interface SearchResultsListWidgetProps {
    api: string;
    query: string;
    /**
     * This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'
     */
    parameter?: string;
    initialItemsPerPage?: number;
    itemsPerPageOptions?: number[];
    targetLink?: string;
}

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
    title: 'SearchResultsListWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="search_results_list_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createSearchResultsList(
    {
        api:"${args.api}",
        query:"${args.query}",
        parameter:"${args.parameter}",
        initialItemsPerPage:${args.initialItemsPerPage},
        itemsPerPageOptions:[${args.itemsPerPageOptions}],
        targetLink:"${args.targetLink}",
    },
    document.querySelector('#search_results_list_widget_container_${num}')
)
</script>
        `
    },
    argTypes: {
        api: {
            description: "Instance of the OLS API to call.",
            control: {
                type: "radio",
            },
            options: [
                "https://www.ebi.ac.uk/ols/api/",
                "https://semanticlookup.zbmed.de/ols/api/",
                "https://semanticlookup.zbmed.de/api/",
            ],
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        query: {
            description: "The terms to search. By default the search is performed over term labels, synonyms, descriptions, identifiers and annotation properties.",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        initialItemsPerPage: {
            description: "Initial number of items displayed per page.",
            control: "number",
            table: {
                type: {
                    summary: "number",
                },
            }
        },
        itemsPerPageOptions: {
            description: "Possible values for number of items displayed per page.",
            control: "array",
            table: {
                type: {
                    summary: "Array",
                },
            }
        },
        targetLink: {
            description: "The link which should be the target of the EuiCard.",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        parameter: {
            description: "This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
    },
} satisfies Meta<SearchResultsListWidgetProps>;

export default meta;
type Story = StoryObj<SearchResultsListWidgetProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const SearchResultsListSafety: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        query: "d*",
        initialItemsPerPage: 10,
        itemsPerPageOptions: [10,25,50,100],
        targetLink: "",
        parameter: "collection=safety",
    },
};

export const SearchResultsListNFDI4Health: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        query: "d*",
        initialItemsPerPage: 10,
        itemsPerPageOptions: [10,25,50,100],
        targetLink: "",
        parameter: "collection=nfdi4health",
    },
};