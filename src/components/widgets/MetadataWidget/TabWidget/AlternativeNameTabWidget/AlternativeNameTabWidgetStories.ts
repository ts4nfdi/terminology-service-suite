import {
    apiArgType,
    entityTypeArgType,
    iriArgType,
    ontologyIdArgType,
    parameterArgType, useLegacyArgType
} from "../../../../../stories/storyArgs";

export const AlternativeNameTabWidgetStoryArgTypes = {
    ...apiArgType,
    ...iriArgType,
    ...ontologyIdArgType,
    ...entityTypeArgType,
    ...parameterArgType,
    ...useLegacyArgType
}

export const AlternativeNameTabWidgetStoryArgs = {
    api: "",
    useLegacy: true,
    iri: "",
    ontologyId: "",
    entityType: "",
    parameter: "collection=nfdi4health",
}

export const AlternativeNameTabWidget1 = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        api: "https://semanticlookup.zbmed.de/api/",
        entityType: "term",
        ontologyId: "ncit",
    }
};

export const SelectingDefiningOntology = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        iri: "http://purl.obolibrary.org/obo/IAO_0000631",
        entityType: "term",
        parameter: ""
    }
};

export const DefiningOntologyUnavailable = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        iri: "http://identifiers.org/uniprot/Q9VAM9",
        entityType: "term",
        parameter: ""
    }
};

