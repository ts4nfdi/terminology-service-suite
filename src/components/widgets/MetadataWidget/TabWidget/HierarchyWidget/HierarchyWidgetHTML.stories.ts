import type { StoryObj, Meta } from '@storybook/html';
import 'semlookp-widgets';

interface HierarchyWidgetProps {
    iri?: string;
    ontologyId: string;
    api: string;
}

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
    title: 'HierarchyWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="hierarchy_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createHierarchy(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
    },
    document.querySelector('#hierarchy_widget_container_${num}')
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
        ontologyId: {
            description: "Ontology ID from where the term hierarchy should be taken.",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        iri: {
            description: "Iri of the term you want to fetch the term hierarchy for.",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
    },
} satisfies Meta<HierarchyWidgetProps>;

export default meta;
type Story = StoryObj<HierarchyWidgetProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const HierarchyWidget1: Story = {
    args: {
        iri: "http://purl.bioontology.org/ontology/MESH/D003704",
        api: "https://semanticlookup.zbmed.de/api/",
        ontologyId: "mesh",
    },
};