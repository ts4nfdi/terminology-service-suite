import type { StoryObj, Meta } from '@storybook/html';
import 'semlookp-widgets';

interface AutocompleteWidgetProps {
    /**
     * Instance of the OLS API to call.
     */
    api: string;
    /**
     * Additional parameter to pass to the API.
     *
     * This parameter could be used to filter the search results. Each parameter could be combined via
     * the special character <i><b>&</b></i>. The values of a parameter key could be combined with a comma sign
     * <i><b>,</b></i>. The following keys could be used:<br/> <br/>
     *  <table>
     *  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
     *  <tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>
     *  <tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>
     *  <tr><td>slim</td><td>Restrict a search to a particular set of slims by name</td></tr>
     *  <tr><td>fieldList</td><td>Specify the fields to return, the defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td></tr>
     *  <tr><td>obsoletes</td><td>Set to true to include obsoleted terms in the results</td></tr>
     *  <tr><td>local</td><td>Set to true to only return terms that are in a defining ontology e.g. Only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>
     *  <tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>
     *  <tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>
     *  <tr><td>rows</td><td>How many results per page</td></tr>
     *  <tr><td>start</td><td>The results page number</td></tr>
     * </table>
     */
    parameter?: string;
    /**
     * A method that is called once the set of selection changes
     * @param selectedOptions  The selected items
     */
    selectionChangedEvent: (selectedOption: {
        label: string;
        iri?: string;
        ontology_name?: string;
        type?: string;
    }) => void;
    /**
     * Pass a pre select value.
     */
    selectOption?: { label?: string; iri?: string };
    /**
     * Placeholder to show if no user input nor selection is performed.
     */
    placeholder?: string;
    /**
     * If true, only the selected label of the entity is displayed. If false, the ontology and the entity short form is displayed behind the label. Default is true.
     */
    hasShortSelectedLabel?: boolean;
    /**
     * If true, custom terms can be added that are not found via API.
     */
    allowCustomTerms: boolean;
}

let counter = 0;

function getIncNum() {
    return counter++;
}

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
const meta = {
    title: 'AutocompleteWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="autocomplete_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createAutocomplete(
    {
        api:"${args.api}",
        parameter:"${args.parameter}",
        selectionChangedEvent:${args.selectionChangedEvent.toString().replace(/(\r\n|\n|\r)/gm, "")},
        selectOption:${JSON.stringify(args.selectOption).replace(/"([^"]+)":/g, '$1:')},
        placeholder:"${args.placeholder}",
        hasShortSelectedLabel:${args.hasShortSelectedLabel},
        allowCustomTerms:${args.allowCustomTerms},
    },
    document.querySelector('#autocomplete_widget_container_${num}')
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
        selectionChangedEvent: {
            description: "A method that is called once the set of selection changes",
            action: "selectionChangedEvent",
            table: {
                type: {
                    summary: "signature",
                },
            }
        },
        placeholder: {
            description: "Placeholder to show if no user input nor selection is performed.",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        selectOption: {
            description: "Pass a pre select value.",
            table: {
                type: {
                    summary: "signature",
                },
            }
        },
        parameter: {
            description: "Additional parameter to pass to the API.\nThis parameter could be used to filter the search results. Each parameter could be combined via the special character <i><b>&</b></i>. The values of a parameter key could be combined with a comma sign\n<i><b>,</b></i>. The following keys could be used:<br/> <br/>\n<table>\n<thead><tr><th>Parameter</th><th>Description</th></tr></thead>\n<tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>\n<tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>\n<tr><td>slim</td><td>Restrict a search to a particular set of slims by name</td></tr>\n<tr><td>fieldList</td><td>Specify the fields to return, the defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td></tr>\n<tr><td>obsoletes</td><td>Set to true to include obsoleted terms in the results</td></tr>\n<tr><td>local</td><td>Set to true to only return terms that are in a defining ontology e.g. Only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>\n<tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>\n<tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>\n<tr><td>rows</td><td>How many results per page</td></tr>\n<tr><td>start</td><td>The results page number</td></tr>\n</table>",
            table: {
                type: {
                    summary: "string",
                },
            }
        },
        hasShortSelectedLabel: {
            description: "If true, only the selected label of the entity is displayed. If false, the ontology and the entity short form is displayed behind the label. Default is true.",
            table: {
                type: {
                    summary: "boolean",
                },
            }
        },
        allowCustomTerms: {
            description: "If true, custom terms that are not found in any ontology can be added.",
            table: {
                type: {
                    summary: "boolean",
                },
            }
        }
    },
} satisfies Meta<AutocompleteWidgetProps>;

export default meta;
type Story = StoryObj<AutocompleteWidgetProps>;

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const withDefaults: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/ols/api/",
        parameter: "ontology=mesh,efo&type=class&collection=nfdi4health",
        selectionChangedEvent: ()=>{},
        selectOption: {},
        placeholder: "Search for Term",
        hasShortSelectedLabel: true,
        allowCustomTerms: false,
    },
};

export const withValue: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/ols/api/",
        parameter: "ontology=mesh,efo&type=class&collection=nfdi4health",
        selectionChangedEvent: ()=>{return;},
        selectOption: {
            iri: "http://purl.bioontology.org/ontology/MESH/D000086382"
        },
        placeholder: "Search for Term",
        hasShortSelectedLabel: true,
        allowCustomTerms: false,
    },
};

export const withCustomValue: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/ols/api/",
        parameter: "ontology=mesh,efo&type=class&collection=nfdi4health",
        selectionChangedEvent: ()=>{return;},
        selectOption: {
            label: "freetext"
        },
        placeholder: "Search for Term",
        hasShortSelectedLabel: true,
        allowCustomTerms: true,
    },
};

export const withInvalidValue: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/ols/api/",
        parameter: "ontology=mesh,efo&type=class&collection=nfdi4health",
        selectionChangedEvent: ()=>{return;},
        selectOption: {
            iri: "ht3stp://purl.bioontology.org/ontology/MESH/D000086382",
        },
        placeholder: "Search for Term",
        hasShortSelectedLabel: true,
        allowCustomTerms: false,
    },
};

export const withGermanInput: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        parameter: "collection=nfdi4health&lang=de&type=class",
        selectionChangedEvent: ()=>{return;},
        selectOption: {},
        placeholder: "Search for Term",
        hasShortSelectedLabel: true,
        allowCustomTerms: false,
    },
};

export const displaySelectedEntityWithLongForm: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/ols/api/",
        parameter: "ontology=mesh,efo&type=class&collection=nfdi4health",
        selectionChangedEvent: ()=>{return;},
        selectOption: {},
        placeholder: "Search for Term",
        hasShortSelectedLabel: false,
        allowCustomTerms: false,
    },
};

export const allowAddingCustomTerms: Story = {
    args: {
        api: "https://semanticlookup.zbmed.de/ols/api/",
        parameter: "ontology=mesh,efo&type=class&collection=nfdi4health",
        selectionChangedEvent: ()=>{return;},
        selectOption: {},
        placeholder: "Search for Term",
        hasShortSelectedLabel: true,
        allowCustomTerms: true,
    },
};
