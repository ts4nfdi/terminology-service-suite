import {entityTypeNames} from "../../../../../model/ModelTypeCheck";

export const HierarchyWidgetStoryArgTypes =  {
    api: {
        control: {
            type: "radio",
        },
        options: [
            "https://www.ebi.ac.uk/ols4/api/",
            "https://semanticlookup.zbmed.de/ols/api/",
            "https://semanticlookup.zbmed.de/api/",
            "https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/"
        ],
    },
    ontologyId: {
        description: "Ontology ID from where the term hierarchy should be taken.",
    },
    iri: {
        description: "Iri of the term you want to fetch the term hierarchy for.",
    },
    entityType: {
        table: {
            type: { summary: `${entityTypeNames.join(" | ")}` },
        },
        control: { type: "radio" },
        options: [
            "property",
            "individual",
            "class",
            "term",
            "",
            "not specified"
        ]
    },
}

export const HierarchyWidgetStoryArgs = {
    ontologyId: "",
    entityType: "",
    iri: ""
}

export const HierarchyWidget1 = {
    args: {
        iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
        api: "https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/",
        ontologyId: "efo",
        entityType: "class"
    }
};