import {entityTypeNames} from "../../../model/ModelTypeCheck";
import * as globals from '../../../app/globals';
import {onNavigateToOntologyArgType} from "../../../stories/storyArgs";
import {EntityData} from "../../../app/types";

export const MetadataWidgetStoryArgTypes = {
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
    ...onNavigateToOntologyArgType
}

export const MetadataWidgetStoryArgs = {
    api: "",
    parameter: "collection=nfdi4health",
    useLegacy: true,
    ontologyId: "",
    entityType: "",
    iri: "",    
    onNavigateToOntology: "Console message",
}

export const MetadataWidget1 = {
    storyName: "Metadata Widget",
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "ncit",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
        entityType: "term",
        useLegacy: true
    }
};

export const OLS3 = {
    storyName: "OLS3",
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "ncit",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
        entityType: "term",
        useLegacy: true
    }
};

export const OLS4V1 = {
    storyName: "OLS4 V1",
    args: {
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "ncit",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
        entityType: "term",
        useLegacy: true
    }
};

export const OLS4V2 = {
    storyName: "OLS4 V2",
    args: {
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "ncit",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
        entityType: "term",
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

export const DefinedByAlsoAppearsInWidgets = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://purl.obolibrary.org/obo/HP_0000819",
        ontologyId: "efo"
    }
}
