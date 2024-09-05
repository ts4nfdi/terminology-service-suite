import * as globals from '../../../app/globals';

import {
    apiArgType,
    hasTitleArgType,
    ontologyIdReqArgType,
    parameterArgType,
    showBadgesArgType, useLegacyArgType
} from "../../../stories/storyArgs";

export const OntologyInfoWidgetStoryArgTypes = {
    ...apiArgType,
    ...hasTitleArgType,
    ...ontologyIdReqArgType,
    ...parameterArgType,
    ...showBadgesArgType,
    ...useLegacyArgType
}

export const OntologyInfoWidgetStoryArgs = {
    api: "",
    useLegacy: true,
    ontologyId: "",
    hasTitle: true,
    showBadges: true,
    parameter: "",
}

export const OntologyInfoWidget1 = {
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "atc",
    }
};

export const OntologyInfoWidget2 = {
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "ncit"
    }
};

export const OntologyInfoWidgetOLS4API = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        useLegacy: false,
        ontologyId: "mp" // "uberon" is also good for demonstration
    }
};
