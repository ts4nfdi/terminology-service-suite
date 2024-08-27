import {thingTypeNames} from "../../../../model/ModelTypeCheck";
import * as globals from '../../../../app/globals';

export const DescriptionWidgetStoryArgTypes = {
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
    color: {
        table: {
            type: { summary: `EuiLinkColor | string` },
        },
        control: {
            type: "radio",
        },
        options: [
            "default",
            "subdued",
            "success",
            "accent",
            "danger",
            "warning",
            "ghost",
            "#00FFFF",
            "rgb(255,0,255)",
        ],
    },
    descText: {},
    ontologyId: {
        description: "Ontology ID from where the object description should be taken.",
    },
    thingType: {
        description: "Sets the type of the object whose description you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",
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
        description: "Object IRI whose description you want to fetch. For ontologies this is ignored, since the 'ontologyId' arg is sufficient.",
    },
    parameter: {
        type: { required: false }
    },
    useLegacy: { required: false }
}

export const DescriptionWidgetStoryArgs = {
    parameter: "collection=nfdi4health",
    useLegacy: true,
    ontologyId: "",
    thingType: "term",
    descText: "",
    color: "",
}

export const DescriptionWidget1 = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "ncit",
        thingType: "term",
        parameter: "collection=nfdi4health",
    }
};

export const SelectingDefiningOntology = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://purl.obolibrary.org/obo/IAO_0000631",
        thingType: "",
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
