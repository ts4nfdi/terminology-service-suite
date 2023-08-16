import type { StoryObj, Meta } from '@storybook/html';
import 'semlookp-widgets';

interface ResourcesWidgetProps {
    api: string;
    initialEntriesPerPage?: number;
    pageSizeOptions?: number[];
    initialSortField?: string;
    initialSortDir?: "asc" | "desc";
    /**
     * Pass actions to each item in the table.
     */
    targetLink?: string;
    actions?: any;
    /**
     * This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'
     */
    parameter?: string;
}

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
    title: 'ResourcesWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="resources_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createResources(
    {
        api:"${args.api}",
        initialEntriesPerPage:${args.initialEntriesPerPage},
        pageSizeOptions:[${args.pageSizeOptions}],
        initialSortField:"${args.initialSortField}",
        initialSortDir:"${args.initialSortDir}",
        targetLink:"${args.targetLink}",
        actions:[${args.actions}],
        parameter:"${args.parameter}",
    },
    document.querySelector('#resources_widget_container_${num}')
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
        initialEntriesPerPage: {
            description: "Initial number of entries displayed per page.",
            control: "number",
            table: {
                type: {
                    summary: "number",
                },
            }
        },
        pageSizeOptions: {
            description: "Possible values for number of entries displayed per page.",
            control: "array",
            table: {
                type: {
                    summary: "Array",
                },
            }
        },
        initialSortField: {
            description: "Column the table is sorted by initially.",
            control: {
                type: "radio",
            },
            options: ["config.title", "config.preferredPrefix", "config.loaded"],
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        initialSortDir: {
            description: "Initial sorting direction.",
            control: {
                type: "radio",
            },
            options: ["asc", "desc"],
            table: {
                type: {
                    summary: "union",
                },
            }
        },
        targetLink: {
            description: "Possible hyperlink to a corresponding terminology in a Resource Name cell. Set this if you want " +
                "a hyperlink to the terminology overview of your terminology service. Leave it blank if your application " +
                "isn't  a terminology service.",
            control: "text",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        actions: {
            table: {
                type: {
                    summary: "Array",
                },
            }
        },
        parameter: {
            table: {
                type: {
                    summary: "string",
                },
            }
        },
    },
} satisfies Meta<ResourcesWidgetProps>;

export default meta;
type Story = StoryObj<ResourcesWidgetProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const ResourceWidget1: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        initialEntriesPerPage: 10,
        pageSizeOptions: Array(10, 25, 50, 100),
        initialSortField: "config.preferredPrefix",
        initialSortDir: "asc" as const,
        targetLink: "https://semanticlookup.zbmed.de/dev/",
        actions: [],
        parameter: "collection=nfdi4health"
    },
};

export const withActions: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        initialEntriesPerPage: 10,
        pageSizeOptions: Array(10, 25, 50, 100),
        initialSortField: "config.preferredPrefix",
        initialSortDir: "asc" as const,
        targetLink: "https://semanticlookup.zbmed.de/dev/",
        actions: [], // TODO
        parameter: "collection=nfdi4health"
    },
};

export const withActionsAndSafety: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        initialEntriesPerPage: 10,
        pageSizeOptions: Array(10, 25, 50, 100),
        initialSortField: "config.preferredPrefix",
        initialSortDir: "asc" as const,
        targetLink: "https://semanticlookup.zbmed.de/safety/",
        actions: [], // TODO
        parameter: "collection=safety",
    },
};

