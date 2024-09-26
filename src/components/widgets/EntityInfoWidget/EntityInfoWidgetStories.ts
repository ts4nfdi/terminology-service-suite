import {
    apiArgType,
    entityTypeArgType,
    hasTitleArgType,
    iriArgType, onNavigateToDisambiguateArgType, onNavigateToEntityArgType, onNavigateToOntologyArgType,
    ontologyIdArgType,
    parameterArgType,
    showBadgesArgType,
    useLegacyArgType
} from "../../../stories/storyArgs";
import * as globals from '../../../app/globals';
import {pluralizeType} from "../../../app/util";

export const EntityInfoWidgetStoryArgTypes = {
  ...apiArgType,
  ...hasTitleArgType,
  ...ontologyIdArgType,
  ...entityTypeArgType,
  ...parameterArgType,
  ...showBadgesArgType,
  ...useLegacyArgType,
  ...iriArgType,
  ...onNavigateToEntityArgType,
  ...onNavigateToOntologyArgType,
  ...onNavigateToDisambiguateArgType
};

export const EntityInfoWidgetStoryArgs = {
  api: globals.ZBMED_API_ENDPOINT,
  iri: "",
  useLegacy: true,
  ontologyId: "",
  entityType: "",
  hasTitle: true,
  showBadges: true,
  parameter: "",
  onNavigateToEntity: (ontologyId: string, entityType: string, entity: { iri: string, label?: string }) => {console.log(`Triggered onNavigateToEntity() for ${entityType || "entity"} "${entity.label}" (iri="${entity.iri}").`)},
  onNavigateToOntology: (ontologyId: string, entityType: string, entity: { iri: string, label?: string }) => {console.log(`Trigerred onNavigateToOntology() for ${entityType || "entity"} "${entity.label}" (iri="${entity.iri}") and ontologyId "${ontologyId}".`)},
  onNavigateToDisambiguate: (entityType: string, entity: { iri: string, label?: string }) => {console.log(`Triggered onNavigateToDisambiguate() for ${entityType || "entity"} "${entity.label}" (iri="${entity.iri}").`)},
};


export const TermInfoWidget = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    entityType: "term",
    ontologyId: "ncit",
    hasTitle: true
  }
};

export const PropertyInfoWidget = {
  args: {
    iri: "http://www.w3.org/2004/02/skos/core#altLabel",
    entityType: "property",
    ontologyId: "mesh"
  }
};

export const IndividualInfoWidget = {
  args: {
    iri: "http://purl.obolibrary.org/obo/IAO_0000423",
    entityType: "individual",
    ontologyId: "clo"
  }
};

export const InfoWidgetBadges = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        useLegacy: false,
        entityType: "class",
        iri: "http://purl.obolibrary.org/obo/UBERON_0000006",
        ontologyId: "uberon"
    }
};

export const OptionalEntityTypeLegacyAPI = {
    args: {
        api: globals.ZBMED_OLS_API_ENDPOINT,
        iri: "http://purl.obolibrary.org/obo/NCIT_C88403",
    }
};

export const InfoWidgetDomain = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        useLegacy: false,
        iri: "http://purl.obolibrary.org/obo/NCIT_R89",
    }
};

export const InfoWidgetRange = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        useLegacy: false,
        iri: "http://purl.obolibrary.org/obo/RO_0002029",
    }
};

export const InfoWidgetPropertyAssertion = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        useLegacy: false,
        iri: "http://purl.obolibrary.org/obo/ENVO_01001569",
    }
};

export const InfoWidgetPropertyCharacteristics = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        useLegacy: false,
        iri: "http://purl.obolibrary.org/obo/MICRO_0001603",
    }
};

export const NavigateToEBIPage = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        useLegacy: false,
        iri: "http://purl.obolibrary.org/obo/ENVO_01001569",
        onNavigateToEntity: (ontologyId: string, entityType: string, entity: { iri: string, label?: string }) => {
            window.open(`https://www.ebi.ac.uk/ols4/ontologies/${ontologyId}/${pluralizeType(entityType, false)}/${encodeURIComponent(encodeURIComponent(entity.iri))}`, "_top");
        },
        onNavigateToOntology: (ontologyId: string, entityType: string, entity: { iri: string, label?: string }) => {
            window.open(`https://www.ebi.ac.uk/ols4/ontologies/${ontologyId}/${pluralizeType(entityType, false)}/${encodeURIComponent(encodeURIComponent(entity.iri))}`, "_top");
        },
        onNavigateToDisambiguate: (entityType: string, entity: { iri: string, label?: string }) => {
            window.open(`https://www.ebi.ac.uk/ols4/search?q=${entity.label}&exactMatch=true&lang=en`, "_top");
        },
    }
};

