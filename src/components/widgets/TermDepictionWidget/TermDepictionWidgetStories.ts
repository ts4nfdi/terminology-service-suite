import * as globals from '../../../app/globals';

export const TermDepictionWidgetStoryArgTypes = {    
    api: {
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
    iri: {
        description: "The term IRI to be depicted.",
    },
    ontologyId: {
        description: "Ontology ID that the term belongs to.",
    },     
}

export const TermDepictionWidgetStoryArgs = {    
    api: globals.EBI_API_ENDPOINT,
    iri: "",
    ontologyId: "",
    useLegacy: false,    
}

export const TermDepictionWidgetExample = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://purl.obolibrary.org/obo/UBERON_0001443",
        ontologyId: "uberon",
        useLegacy: false,
    }
};