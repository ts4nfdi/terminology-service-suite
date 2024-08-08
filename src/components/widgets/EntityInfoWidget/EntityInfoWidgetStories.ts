import { entityTypeNames } from "../../../model/ModelTypeCheck";
import {
  apiArgType,
  entityTypeArgType,
  hasTitleArgType,
  iriArgType,
  ontologyIdArgType,
  parameterArgType,
  showBadgesArgType,
  useLegacyArgType
} from "../../../stories/storyArgs";

export const EntityInfoWidgetStoryArgTypes = {
  ...apiArgType,
  ...hasTitleArgType,
  ...ontologyIdArgType,
  ...entityTypeArgType,
  ...parameterArgType,
  ...showBadgesArgType,
  ...useLegacyArgType,
  ...iriArgType
};

export const EntityInfoWidgetStoryArgs = {
  api: "https://semanticlookup.zbmed.de/api/",
  iri: "",
  useLegacy: true,
  ontologyId: "",
  entityType: "",
  hasTitle: true,
  showBadges: true,
  parameter: ""
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
    api: "https://www.ebi.ac.uk/ols4/api/",
    useLegacy: false,
    entityType: "class",
    iri: "http://purl.obolibrary.org/obo/UBERON_0000006",
    ontologyId: "uberon"
  }
};

export const OptionalEntityTypeLegacyAPI = {
  args: {
    api: "https://semanticlookup.zbmed.de/ols/api/",
    iri: "http://purl.obolibrary.org/obo/NCIT_C88403"
  }
};

export const InfoWidgetDomain = {
  args: {
    api: "https://www.ebi.ac.uk/ols4/api/",
    useLegacy: false,
    iri: "http://purl.obolibrary.org/obo/NCIT_R89"
  }
};

export const InfoWidgetRange = {
  args: {
    api: "https://www.ebi.ac.uk/ols4/api/",
    useLegacy: false,
    iri: "http://purl.obolibrary.org/obo/RO_0002029"
  }
};

export const InfoWidgetPropertyAssertion = {
  args: {
    api: "https://www.ebi.ac.uk/ols4/api/",
    useLegacy: false,
    iri: "http://purl.obolibrary.org/obo/ENVO_01001569"
  }
};

export const InfoWidgetPropertyCharacteristics = {
  args: {
    api: "https://www.ebi.ac.uk/ols4/api/",
    useLegacy: false,
    iri: "http://purl.obolibrary.org/obo/MICRO_0001603"
  }
};

