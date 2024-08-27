import * as globals from '../../../../../app/globals';

export const HierarchyWidgetDeprecatedStoryArgTypes =  {
    api: {
        description: "Instance of the OLS API to call.",
        control: {
            type: "radio",
        },
        options: [
            globals.EBI_API_ENDPOINT,
            globals.ZBMED_OLS_API_ENDPOINT,
            globals.ZBMED_API_ENDPOINT,
            globals.TIB_API_ENDPOINT
        ],
    },
    ontologyId: {
        description: "Ontology ID from where the term hierarchy should be taken.",
    },
    iri: {
        description: "Iri of the term you want to fetch the term hierarchy for.",
    },
    parameter: {
        collection: "nfdi4health"
    }
}

export const HierarchyWidgetDeprecatedStoryArgs = {
    iri: "",
    ontologyId: ""
}

export const HierarchyWidgetDeprecated1 = {
    args: {
        iri: "http://purl.bioontology.org/ontology/MESH/D003704",
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "mesh",
        parameter: "nfdi4health",
    }
};