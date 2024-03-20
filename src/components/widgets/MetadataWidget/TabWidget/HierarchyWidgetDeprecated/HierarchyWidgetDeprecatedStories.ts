export const HierarchyWidgetDeprecatedStoryArgTypes =  {
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
        api: "https://semanticlookup.zbmed.de/api/",
        ontologyId: "mesh",
        parameter: "nfdi4health",
    }
};