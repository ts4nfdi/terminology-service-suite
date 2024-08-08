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
        api: "https://semanticlookup.zbmed.de/api/",
        ontologyId: "atc",
    }
};

export const OntologyInfoWidget2 = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        ontologyId: "ncit"
    }
};

export const OntologyInfoWidgetOLS4API = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        useLegacy: false,
        ontologyId: "mp" // "uberon" is also good for demonstration
    }
};
