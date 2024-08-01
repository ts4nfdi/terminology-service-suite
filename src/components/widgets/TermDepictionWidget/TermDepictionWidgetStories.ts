export const TermDepictionWidgetStoryArgTypes = {    
    api: {
        control: {
            type: "radio",
        },
        options: [
            "https://www.ebi.ac.uk/ols4/api/",
            "https://semanticlookup.zbmed.de/ols/api/",
            "https://semanticlookup.zbmed.de/api/",
            "https://service.tib.eu/ts4tib/api/"
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
    api: "https://www.ebi.ac.uk/ols4/api/",
    iri: "",
    ontologyId: "",
    useLegacy: false,    
}

export const TermDepictionWidgetExample = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        iri: "http://purl.obolibrary.org/obo/UBERON_0001443",
        ontologyId: "uberon",
        useLegacy: false,
    }
};