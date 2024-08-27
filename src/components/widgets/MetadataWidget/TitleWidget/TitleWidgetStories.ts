import {thingTypeNames} from "../../../../model/ModelTypeCheck";
import * as globals from '../../../../app/globals';

export const TitleWidgetStoryArgTypes = {
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
    ontologyId: {
        description: "Ontology ID from where the object title/label should be taken.",
    },
    thingType: {
        description: "Sets the type of the object whose title/label you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",
        table: {
            type: { summary: `${thingTypeNames.join(" | ")}` },
        },
        control: {
            type: "radio",

        },
        options: [
            "ontology",
            "term",
            "class",
            "property",
            "individual",
            "",
            "INVALID STRING"
        ],
    },
    iri: {
        description: "Object IRI whose label you want to fetch. For ontologies this is ignored, since the 'ontologyId' arg is sufficient.",
    },
    titleText: {},
    default_value: {
        control: 'text',
    },
    parameter: {
        type: {required: false},
    },
}

export const TitleWidgetStoryArgs = {
    parameter: "collection=nfdi4health",
    useLegacy: true,
    ontologyId: "",
    thingType: "",
    titleText: ""
}

export const TitleWidget1 = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "ncit",
        thingType: "term",
    }
};

export const SelectingDefiningOntology = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://purl.obolibrary.org/obo/IAO_0000631",
        thingType: "term",
        parameter: ""
    }
};

export const DefiningOntologyUnavailable = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://identifiers.org/uniprot/Q9VAM9",
        thingType: "term",
        parameter: ""
    }
};
