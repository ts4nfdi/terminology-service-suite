import {entityTypeNames} from "../../../model/ModelTypeCheck";

export const MetadataWidgetStoryArgTypes = {
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
    ontologyId: {
        description: "Ontology ID from where the term metadata should be taken.",
    },
    iri: {
        description: "Iri of the term you want to fetch the metadata for.",
    },
    entityType: {
        table: {
            type: { summary: `${entityTypeNames.join(" | ")}` },
        },
        control: {
            type: "radio",
        },
        options: [
            "term",
            "class",
            "property",
            "individual",
            "",
            "INVALID STRING"
        ],
    },
    parameter: {
        type: { required: false }
    },
}

export const MetadataWidgetStoryArgs = {
    parameter: "collection=nfdi4health",
    useLegacy: true,
    ontologyId: "",
    entityType: ""
}

export const MetadataWidget1 = {
    storyName: "Metadata Widget",
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        ontologyId: "ncit",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
        entityType: "term",
        useLegacy: true
    }
};

export const OLS3 = {
    storyName: "OLS3",
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        ontologyId: "ncit",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
        entityType: "term",
        useLegacy: true
    }
};

export const OLS4V1 = {
    storyName: "OLS4 V1",
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        ontologyId: "ncit",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
        entityType: "term",
        useLegacy: true
    }
};

export const OLS4V2 = {
    storyName: "OLS4 V2",
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        ontologyId: "ncit",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
        entityType: "term",
        useLegacy: false,
        parameter: ""
    }
};

export const SelectingDefiningOntology = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        iri: "http://purl.obolibrary.org/obo/IAO_0000631",
        entityType: "term",
        parameter: ""
    }
};

export const DefiningOntologyUnavailable = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        iri: "http://identifiers.org/uniprot/Q9VAM9",
        entityType: "term",
        parameter: ""
    }
};
