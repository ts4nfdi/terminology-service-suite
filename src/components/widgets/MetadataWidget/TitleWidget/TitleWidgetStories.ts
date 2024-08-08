import {
  apiArgType,
  defaultValueArgType,
  iriArgType,
  ontologyIdArgType,
  parameterArgType,
  thingTypeArgType,
  titleTextArgType
} from "../../../../stories/storyArgs";

export const TitleWidgetStoryArgTypes = {
  ...apiArgType,
  ...ontologyIdArgType,
  ...thingTypeArgType,
  ...iriArgType,
  ...parameterArgType,
  ...titleTextArgType,
  ...defaultValueArgType
};

export const TitleWidgetStoryArgs = {
  api: "",
  useLegacy: true,
  ontologyId: "",
  thingType: "",
  titleText: "",
  defaultValue: "",
  parameter: "collection=nfdi4health"
};

export const TitleWidget1 = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: "https://semanticlookup.zbmed.de/api/",
    ontologyId: "ncit",
    thingType: "term"
  }
};

export const SelectingDefiningOntology = {
  args: {
    api: "https://www.ebi.ac.uk/ols4/api/",
    iri: "http://purl.obolibrary.org/obo/IAO_0000631",
    thingType: "term",
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
