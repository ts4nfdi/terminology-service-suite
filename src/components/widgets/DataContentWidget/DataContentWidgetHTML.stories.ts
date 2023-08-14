import type { StoryObj, Meta } from '@storybook/html';
import 'semlookp-widgets';

interface DataContentWidgetProps {
    api: string;
    iri: string;
    entityType: string;
    ontologyId: string;
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
    title: 'DataContentWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="data_content_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createDataContent(
    {
        api:"${args.api}",
        parameter:"${args.parameter}",
    },
    document.querySelector('#data_content_widget_container_${num}')
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
        parameter: {
            description: "This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
    },
} satisfies Meta<DataContentWidgetProps>;

export default meta;
type Story = StoryObj<DataContentWidgetProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const NFDI4HealthDataContentWidget: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        parameter: "collection=nfdi4health"
    },
};

export const SafetyDataContentWidget: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        parameter: "collection=safety",
    },
};