import {entityTypeNames} from "../../../model/ModelTypeCheck";
import * as globals from '../../../app/globals';
import {
    onNavigateToEntityArgType,
} from "../../../stories/storyArgs";

export const OntologyEntityListWidgetStoryArgTypes =  {
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
            "ontology",
            "",
            "INVALID STRING"
        ],
    },
    ...onNavigateToEntityArgType,
}

export const OntologyEntityListWidgetStoryArgs = {
    api: "",
    useLegacy: true,
    ontologyId: "",
    entityType: "",
    onNavigateToEntity: "Console message",
}

export const OLS4V1Class = {
    storyName: "OLS4 V1 Class",
    args: {
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "efo",
        entityType: "class",
        useLegacy: false
    }
};
