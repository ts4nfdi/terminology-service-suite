import {entityTypeNames} from "../../../../model/ModelTypeCheck";
import * as globals from '../../../../app/globals';

export const BreadcrumbWidgetStoryArgTypes = {
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
    iri: {},
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
    colorFirst: {
        table: {
            type: { summary: `EuiLinkColor | string` },
        },
        control: {
            type: "radio",
        },
        options: [
            "primary",
            "accent",
            "success",
            "warning",
            "danger",
            "ghost",
            "text",
            "subdued",
            "#00FFFF",
        ],
    },
    colorSecond: {
        table: {
            type: { summary: `EuiLinkColor | string` },
        },
        control: {
            type: "radio",
        },
        options: [
            "primary",
            "accent",
            "success",
            "warning",
            "danger",
            "ghost",
            "text",
            "subdued",
            "#00FFFF",
        ],
    },
    parameter: {
        type: { required: false }
    },
    useLegacy: {
        type: { required: false }
    }
}

export const BreadcrumbWidgetStoryArgs = {
    parameter: "collection=nfdi4health",
    useLegacy: true,
    iri: "",
    ontologyId: "",
    entityType: "",
    colorFirst: "",
    colorSecond: ""
}

export const BreadcrumbWidget1 = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "ncit",
        entityType: "term",
        parameter: "collection=nfdi4health",
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

export const ErrorBreadcrumbWidget = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985987654345678",
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "ncit",
        entityType: "term",
        parameter: "collection=nfdi4health",
    }
};
