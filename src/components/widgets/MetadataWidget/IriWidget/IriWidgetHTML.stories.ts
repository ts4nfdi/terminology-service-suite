import type { StoryObj, Meta } from '@storybook/html';
import 'semlookp-widgets';

interface IriWidgetProps {
    iri: string;
    iriText?: string;
    color?:
        | "primary"
        | "accent"
        | "success"
        | "warning"
        | "danger"
        | "ghost"
        | "text"
        | "subdued";
    parameter?: string
}

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
    title: 'IriWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="iri_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createIri(
    {
        iri:"${args.iri}",
        iriText:"${args.iriText}",
        color:"${args.color}",
        parameter:"${args.parameter}",
    },
    document.querySelector('#iri_widget_container_${num}')
)
</script>
        `
    },
    argTypes: {
        color: {
            description: "Color of the text, names, hex or rgb",
            control: {
                type: "radio",
            },
            options: [
                "primary",
                "accent",
                "success",
                "warning",
                "danger",
                "ghost",
                "text",
                "subdued",
            ],
            table: {
                type: {
                    summary: "union",
                },
            }
        },
        iriText: {
            description: "Set your own text manually that overwrites the text fetched from the API",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        iri: {
            description: "Object IRI whose Iri you want to fetch. For ontologies this is ignored, since the 'ontologyId' arg is sufficient.",
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
} satisfies Meta<IriWidgetProps>;

export default meta;
type Story = StoryObj<IriWidgetProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const IriWidget1: Story = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        iriText: "",
        color: "primary",
        parameter: "collection=nfdi4health",
    },
};