import {entityTypeNames} from "../../../../../model/ModelTypeCheck";
import * as globals from '../../../../../app/globals';

export const AlternativeNameTabWidgetStoryArgTypes = {
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
        description: "Iri of the term you want to fetch the alternative names for.",
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

export const AlternativeNameTabWidgetStoryArgs = {
    parameter: "collection=nfdi4health",
    useLegacy: true,
    ontologyId: "",
    entityType: "",
}

export const AlternativeNameTabWidget1 = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        api: globals.ZBMED_API_ENDPOINT,
        entityType: "term",
        ontologyId: "ncit",
    }
};

export const SelectingDefiningOntology = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://purl.obolibrary.org/obo/IAO_0000631",
        entityType: "term",
        parameter: ""
    }
};

export const DefiningOntologyUnavailable = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://identifiers.org/uniprot/Q9VAM9",
        entityType: "term",
        parameter: ""
    }
};

