import type { StoryObj, Meta } from '@storybook/html';
import 'semlookp-widgets';

interface BreadcrumbWidgetProps {
    iri?: string;
    ontologyId?: string;
    api: string;
    /**
     * This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'
     */
    entityType:
        | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
        | "individual"
        | "property"
        | string;
    colorFirst?:
        | "primary"
        | "accent"
        | "success"
        | "warning"
        | "danger"
        | "ghost"
        | "text"
        | "subdued"
        | string;
    colorSecond?: string;
    parameter?: string
}

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
    title: 'BreadcrumbWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="breadcrumb_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createBreadcrumb(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        entityType:"${args.entityType}",
        colorFirst:"${args.colorFirst}",
        colorSecond:"${args.colorSecond}",
        parameter:"${args.parameter}",
    },
    document.querySelector('#breadcrumb_widget_container_${num}')
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
            description: "Iri of the term you want to fetch the ontology hierarchy for.",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        ontologyId: {
            description: "Ontology ID from where the object description should be taken.",
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
        colorFirst: {
            description:
                "Color of the first badge, can be primary, accent, success, warning, danger, ghost, text, subdued or hex",
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
                "#00FFFF",
            ],
            table: {
                type: {
                    summary: "union",
                },
            }
        },
        colorSecond: {
            description:
                "Color of the first badge, can be primary, accent, success, warning, danger, ghost, text, subdued or hex",
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
                "#00FFFF",
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
} satisfies Meta<BreadcrumbWidgetProps>;

export default meta;
type Story = StoryObj<BreadcrumbWidgetProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const BreadcrumbWidget1: Story = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        api: "https://semanticlookup.zbmed.de/api/",
        ontologyId: "ncit",
        entityType: "term",
        parameter: "collection=nfdi4health",
        colorFirst: "primary",
        colorSecond: "success",
    },
};