import {
    apiArgType,
    iriArgType,
    ontologyIdReqArgType,
    useLegacyArgType
} from "../../../stories/storyArgs";

export const TermDepictionWidgetStoryArgTypes = {
    ...apiArgType,
    ...iriArgType,
    ...ontologyIdReqArgType,
    ...useLegacyArgType
}

export const TermDepictionWidgetStoryArgs = {    
    api: "https://www.ebi.ac.uk/ols4/api/",
    iri: "",
    ontologyId: "",
    useLegacy: false,    
}

export const TermDepictionWidgetExample = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        iri: "http://purl.obolibrary.org/obo/UBERON_0001443",
        ontologyId: "uberon",
        useLegacy: false,
    }
};