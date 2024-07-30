import {thingTypeNames} from "../../../../model/ModelTypeCheck";

export const TitleWidgetStoryArgTypes = {
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
    defaultValue: {
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

export const TitleWidgetDefault = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        api: "https://semanticlookup.zbmed.de/ols/api/",
        ontologyId: "ncit",
        thingType: "term",
    }
};

export const TitleWidgetWithTitleText = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C29",
        api: "https://semanticlookup.zbmed.de/ols/api/",
        ontologyId: "ncit",
        thingType: "term",
        titleText: "title text"
    }
};

export const IncorrectIriWithDefaultValue = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C29",
        api: "https://semanticlookup.zbmed.de/ols/api/",
        ontologyId: "ncit",
        thingType: "term",
        defaultValue: "default value"
    }
};

export const IncorrectIriWithoutDefaultValue = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C29",
        api: "https://semanticlookup.zbmed.de/ols/api/",
        ontologyId: "ncit",
        thingType: "term",
    }
};

export const SelectingDefiningOntology = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        iri: "http://purl.obolibrary.org/obo/IAO_0000631",
        thingType: "term",
        parameter: ""
    }
};

export const DefiningOntologyUnavailable = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        iri: "http://identifiers.org/uniprot/Q9VAM9",
        thingType: "term",
        parameter: ""
    }
};

