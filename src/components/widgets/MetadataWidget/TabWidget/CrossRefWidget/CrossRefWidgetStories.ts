import {entityTypeNames} from "../../../../../model/ModelTypeCheck";

export const CrossRefWidgetStoryArgTypes = {
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
        description: "IRI of the entity you want to fetch the cross references for.",
    },
    ontologyId: {},
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
    useLegacy: {
        type: { required: false },
        control: "boolean",
        description: "Toggle between OLS3 (legacy) and OLS4 API versions.",
        default: true
    }
}

export const CrossRefWidgetStoryArgs = {
    parameter: "collection=nfdi4health",
    useLegacy: true,
    ontologyId: "",
    entityType: ""
}

export const CrossRefTabWidget1 = {
    args: {
        iri: "http://purl.obolibrary.org/obo/RXNO_0000138",
        api: "https://www.ebi.ac.uk/ols4/api/",
        entityType: "term",
        ontologyId: "rxno",
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
