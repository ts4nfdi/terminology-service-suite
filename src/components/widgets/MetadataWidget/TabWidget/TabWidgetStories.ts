import {entityTypeNames} from "../../../../model/ModelTypeCheck";
import * as globals from '../../../../app/globals';

export const TabWidgetStoryArgTypes =  {
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
    ontologyId: {},
    iri: {
        description: "Iri of the term you want to fetch the tab information for.",
    },
    parameter: {
        type: { required: false }
    },
    entityType: {
        type: { required: false },
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
}

export const TabWidgetStoryArgs = {
    ontologyId: "",
    entityType: "",
    parameter: "collection=nfdi4health",
    useLegacy: true,
}

export const Default = {
    storyName: "Default",
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "hp",
        iri: "http://purl.obolibrary.org/obo/HP_0000819",
        useLegacy: true
    }
};

export const TabWidgetOLS3 = {
    storyName: "OLS3",
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "efo",
        iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
        useLegacy: true
    }
};

export const TabWidgetOLS4V1 = {
    storyName: "OLS4 V1",
    args: {
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "efo",
        iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
        useLegacy: true
    }
};

export const TabWidgetOLS4V2 = {
    storyName: "OLS4 V2",
    args: {
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "efo",
        iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
        useLegacy: false,
        parameter: ""
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

export const TabWidgetLarge = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "ncbitaxon",
        iri: "http://purl.obolibrary.org/obo/NCBITaxon_2489341",
        useLegacy: false,
        parameter: ""
    }
};
