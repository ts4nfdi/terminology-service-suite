import {thingTypeNames} from "../../../../model/ModelTypeCheck";
import "../../../../style/titleStyles.css"

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
        type: {required: false},
    },
    thingType: {
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
        type: {required: false},
    },
    titleText: {},
    defaultValue: {
        type: {required: false},
        control: 'text',
    },
    parameter: {
        type: {required: false},
    },
    className: {
        type: {required: false},
    },
    useLegacy: {
        type: {required: false},
        defaultValue: {summary: true}
    }
}

export const TitleWidgetStoryArgs = {
    api: "",
    useLegacy: true,
    iri: "",
    ontologyId: "",
    thingType: "",
    titleText: "",
    defaultValue: "",
    className: "",
    parameter: "collection=nfdi4health",
}

export const TitleWidgetDefault = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        api: "https://semanticlookup.zbmed.de/api/",
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

export const TitleWidgetWithStyles = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        api: "https://semanticlookup.zbmed.de/api/",
        ontologyId: "ncit",
        thingType: "term",
        className: 'title-styles',
    }
};
