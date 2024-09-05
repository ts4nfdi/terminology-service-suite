import {entityTypeNames} from "../../../../../model/ModelTypeCheck";
import {
    apiArgType,
    entityTypeArgType,
    iriArgType,
    ontologyIdArgType,
    parameterArgType, useLegacyArgType
} from "../../../../../stories/storyArgs";

export const CrossRefWidgetStoryArgTypes = {
    ...apiArgType,
    ...iriArgType,
    ...ontologyIdArgType,
    ...entityTypeArgType,
    ...parameterArgType,
    ...useLegacyArgType
}

export const CrossRefWidgetStoryArgs = {
    api: "",
    iri: "",
    useLegacy: true,
    ontologyId: "",
    entityType: "",
    parameter: "collection=nfdi4health",
}

export const CrossRefTabWidget1 = {
    args: {
        iri: "http://purl.obolibrary.org/obo/RXNO_0000138",
        api: "https://www.ebi.ac.uk/ols4/api/",
        entityType: "term",
        ontologyId: "rxno",
        parameter: ""
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
