import type { StoryObj, Meta } from '@storybook/html';
import 'semlookp-widgets';

interface SearchBarWidgetProps {
    api: string;
    query: string;
    /**
     * This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'
     */
    onSearchValueChange: (suggestion: string) => void;
    parameter?: string
}

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
    title: 'SearchBarWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="search_bar_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createSearchBar(
    {
      api:"${args.api}",
      query:"${args.query}",
      onSearchValueChange:${args.onSearchValueChange.toString().replace(/(\r\n|\n|\r)/gm, "")},
      parameter:"${args.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${num}')
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
                "https://www.ebi.ac.uk/ols4/api/",
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
            description: "The search term to receive suggestions for.",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        onSearchValueChange: {
            description: "Function to be called when the search value in the search bar changes.",
            action: "onSearchValueChange",
            table: {
                type: {
                    summary: "signature",
                },
            }
        },
        parameter: {
            table: {
                type: {
                    summary: "string",
                },
            }
        }
    },
} satisfies Meta<SearchBarWidgetProps>;

export default meta;
type Story = StoryObj<SearchBarWidgetProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const SearchBarWidget1: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        query: "diab",
        onSearchValueChange: ((suggestion: string) => {}),
        parameter: "collection=nfdi4health",
    },
};