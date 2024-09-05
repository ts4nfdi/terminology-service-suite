import * as globals from '../../../app/globals';
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
    api: globals.EBI_API_ENDPOINT,
    iri: "",
    ontologyId: "",
    useLegacy: false,    
}

export const TermDepictionWidgetExample = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://purl.obolibrary.org/obo/UBERON_0001443",
        ontologyId: "uberon",
        useLegacy: false,
    }
};