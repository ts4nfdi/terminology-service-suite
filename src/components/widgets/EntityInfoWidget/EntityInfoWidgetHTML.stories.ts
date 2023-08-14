import type { StoryObj, Meta } from '@storybook/html';
import 'semlookp-widgets';

interface EntityInfoWidgetProps {
    api: string;
    iri?: string;
    ontologyId?: string;
    hasTitle?: boolean;
    entityType:
        | "ontology"
        | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
        | "individual"
        | "property";
    parameter?: string;
}

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
    title: 'EntityInfoWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `        
<div id="entity_info_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createEntityInfo(
    {
        api:"${args.api}",
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        hasTitle:${args.hasTitle},
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
    },
    document.querySelector('#entity_info_widget_container_${num}')
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
        hasTitle: {
            description: "Show title, default is true",
            table: {
                type: {
                    summary: "boolean",
                },
            }
        },
        entityType: {
            description: "Sets the type of the entity whose information you want to fetch. Accepts 'term', 'class', 'property', or 'individual'.",
            control: {
                type: "radio",
            },
            options: [
                "ontology",
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
        ontologyId: {
            table: {
                type: {
                    summary: "string",
                },
            },
        },
        iri: {
            description: "Entity IRI whose information you want to fetch.",
            control: {
                type: "text",
            },
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
} satisfies Meta<EntityInfoWidgetProps>;

export default meta;
type Story = StoryObj<EntityInfoWidgetProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const OntologyInfoWidget: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        entityType: "ontology",
        ontologyId: "ncit",
        hasTitle: true,
        parameter: "collection=nfdi4health"
    },
};

export const TermInfoWidget: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        entityType: "term",
        ontologyId: "ncit",
        hasTitle: true,
        parameter: "collection=nfdi4health"
    },
};

export const PropertyInfoWidget: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        iri: "http://www.w3.org/2004/02/skos/core#altLabel",
        entityType: "property",
        ontologyId: "mesh",
        hasTitle: true,
        parameter: "collection=nfdi4health"
    },
};

export const IndividualInfoWidget: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        iri: "http://purl.obolibrary.org/obo/IAO_0000423",
        entityType: "individual",
        ontologyId: "clo",
        hasTitle: true,
        parameter: "collection=nfdi4health"
    },
};