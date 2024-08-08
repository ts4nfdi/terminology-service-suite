import {
  apiArgType,
  colorArgType,
  descTextArgType,
  iriArgType,
  ontologyIdArgType, parameterArgType, thingTypeArgType, useLegacyArgType
} from "../../../../stories/storyArgs";

export const DescriptionWidgetStoryArgTypes = {
  ...apiArgType,
  ...colorArgType,
  ...descTextArgType,
  ...ontologyIdArgType,
  ...iriArgType,
  ...useLegacyArgType,
  ...parameterArgType,
  ...thingTypeArgType,
};

export const DescriptionWidgetStoryArgs = {
  api: "",
  iri: "",
  useLegacy: true,
  ontologyId: "",
  thingType: "term",
  descText: "",
  color: "",
  parameter: "collection=nfdi4health"
};

export const DescriptionWidget1 = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: "https://semanticlookup.zbmed.de/api/",
    ontologyId: "ncit",
    thingType: "term",
    parameter: "collection=nfdi4health"
  }
};

export const SelectingDefiningOntology = {
  args: {
    api: "https://www.ebi.ac.uk/ols4/api/",
    iri: "http://purl.obolibrary.org/obo/IAO_0000631",
    thingType: "",
    parameter: ""
  }
};

export const DefiningOntologyUnavailable = {
  args: {
    api: "https://www.ebi.ac.uk/ols4/api/",
    iri: "http://identifiers.org/uniprot/Q9VAM9",
    thingType: "term",
    parameter: ""
  }
};
