import type { StoryObj, Meta } from '@storybook/html';
import 'semlookp-widgets';

interface AlternativeNameTabWidgetProps {
    iri: string;
    api: string;
    ontologyId?: string;
    entityType:
        | "ontology"
        | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
        | "individual"
        | "property"
        | string;
    parameter?: string;
}

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
    title: 'AlternativeNameTabWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="alternative_name_tab_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createAlternativeNameTab(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
    },
    document.querySelector('#alternative_name_tab_widget_container_${num}')
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
        iri: {
            description: "Iri of the term you want to fetch the alternative names for.",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        ontologyId: {
            description: "Ontology ID from where the entity metadata should be taken.",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        entityType: {
            description: "Sets the type of the entity whose information you want to fetch. Accepts 'term', 'class', 'property', or 'individual'.",
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
} satisfies Meta<AlternativeNameTabWidgetProps>;

export default meta;
type Story = StoryObj<AlternativeNameTabWidgetProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const AlternativeNameTabWidget1: Story = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        api: "https://semanticlookup.zbmed.de/api/",
        entityType: "term",
        ontologyId: "ncit",
        parameter: "collection=nfdi4health"
    },
};