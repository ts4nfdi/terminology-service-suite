import type { StoryObj, Meta } from '@storybook/html';
import 'semlookp-widgets';

interface OntologyInfoWidgetProps {
    ontologyId: string;
    api: string;
    parameter?: string;
}

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
    title: 'OntologyInfoWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="ontology_info_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createOntologyInfo(
    {
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        parameter:"${args.parameter}",
    },
    document.querySelector('#ontology_info_widget_container_${num}')
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
        ontologyId: {
            description: "ID of the ontology whose info should be displayed.",
            table: {
                type: {
                    summary: "string",
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
} satisfies Meta<OntologyInfoWidgetProps>;

export default meta;
type Story = StoryObj<OntologyInfoWidgetProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const OntologyInfoWidget1: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        ontologyId: "atc",
        parameter: "collection=nfdi4health",
    },
};