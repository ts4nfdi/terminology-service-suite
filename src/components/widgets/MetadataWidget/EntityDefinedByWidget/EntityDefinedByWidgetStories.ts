import * as globals from '../../../../app/globals';
import {
    apiArgType,
    entityTypeArgType,
    iriArgType, onNavigateToOntologyArgType,
    ontologyIdArgType,
    parameterArgType, useLegacyArgType
} from "../../../../stories/storyArgs";
import {EntityData} from "../../../../app/types";

export const EntityDefinedByWidgetStoryArgTypes = {
    ...apiArgType,
    ...iriArgType,
    ...ontologyIdArgType,
    ...entityTypeArgType,
    ...parameterArgType,
    ...useLegacyArgType,
    ...onNavigateToOntologyArgType
}

export const EntityDefinedByWidgetStoryArgs = {
    api: "",
    useLegacy: false,
    iri: "",
    ontologyId: "",
    entityType: "",
    parameter: "",
    onNavigateToOntology: (ontologyId: string, entity: EntityData) => {console.log(`Trigerred onNavigateToOntology() for ontologyId "${ontologyId}".`)},
}

export const v2ApiEFO = {
    args: {
        iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
        api: globals.EBI_API_ENDPOINT,
        entityType: "term",
        ontologyId: "efo",
    }
};

export const v2ApiONS = {
    args: {
        iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "ons",
    }
};

export const legacyApi = {
    args: {
        iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
        api: globals.EBI_API_ENDPOINT,
        entityType: "term",
        ontologyId: "efo",
        useLegacy: true
    }
};
