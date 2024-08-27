import {entityTypeNames} from "../../../../../model/ModelTypeCheck";
import * as globals from '../../../../../app/globals';

export const HierarchyWidgetOLSStoryArgTypes =  {
    api: {
        control: {
            type: "radio",
        },
        options: [
            globals.EBI_API_ENDPOINT,
            globals.ZBMED_OLS_API_ENDPOINT,
            globals.ZBMED_API_ENDPOINT,
            globals.TIB_API_ENDPOINT,
            globals.ZBMED_K8S_ENDPOINT
        ],
    },
    ontologyId: {
        description: "Ontology ID from where the term hierarchy should be taken.",
    },
    iri: {
        description: "Iri of the term you want to fetch the term hierarchy for.",
    },
    entityType: {
        table: {
            type: { summary: `${entityTypeNames.join(" | ")}` },
        },
        control: { type: "radio" },
        options: [
            "property",
            "individual",
            "class",
            "term",
            "",
            "not specified"
        ]
    },
}

export const HierarchyWidgetOLSStoryArgs = {
    ontologyId: "",
    entityType: "",
    iri: ""
}

export const HierarchyWidgetOLS1 = {
    args: {
        iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "efo",
        entityType: "class"
    }
};