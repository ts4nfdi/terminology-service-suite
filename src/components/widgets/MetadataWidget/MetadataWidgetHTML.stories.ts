import type { StoryObj, Meta } from '@storybook/html';
import 'semlookp-widgets';

interface MetadataWidgetProps {
    iri: string;
    ontologyId: string;
    api: string;
    entityType:
        | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
        | "individual"
        | "property"
        | string;
    parameter?: string
}

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
    title: 'MetadataWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div class="euiPanel euiPanel--plain euiPanel--paddingMedium euiCard euiCard--horizontal css-1yzwxdg-euiPanel-grow-m-m-plain-hasShadow" style="margin-bottom: 20px">
    <div id="metadata_widget_container_${num}"></div>
</div>

<script type="text/javascript">
window['SemLookPWidgets'].createMetadata(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
    },
    document.querySelector('#metadata_widget_container_${num}')
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
            description: "Ontology ID from where the term metadata should be taken.",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        iri: {
            description: "Iri of the term you want to fetch the metadata for.",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        entityType: {
            description: "Sets the type of the object whose description you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",
            control: {
                type: "radio",
            },
            options: [
                "term",
                "class",
                "property",
                "individual",
                "INVALID STRING"
            ],
            table: {
                type: {
                    summary: "union",
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
} satisfies Meta<MetadataWidgetProps>;

export default meta;
type Story = StoryObj<MetadataWidgetProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const MetadataWidget1: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        ontologyId: "ncit",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
        entityType: "term",
        parameter: "collection=nfdi4health",
    },
};