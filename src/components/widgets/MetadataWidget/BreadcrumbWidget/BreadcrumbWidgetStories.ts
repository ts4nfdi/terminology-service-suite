import {
  apiArgType, colorFirstArgType, colorSecondArgType,
  entityTypeArgType,
  iriArgType,
  ontologyIdArgType,
  parameterArgType, useLegacyArgType
} from "../../../../stories/storyArgs";

export const BreadcrumbWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdArgType,
  ...entityTypeArgType,
  ...parameterArgType,
  ...useLegacyArgType,
  ...colorFirstArgType,
  ...colorSecondArgType
};

export const BreadcrumbWidgetStoryArgs = {
  api: "",
  useLegacy: true,
  iri: "",
  ontologyId: "",
  entityType: "",
  colorFirst: "",
  colorSecond: "",
  parameter: "collection=nfdi4health"
};

export const BreadcrumbWidgetExample = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: "https://semanticlookup.zbmed.de/api/",
    ontologyId: "ncit",
    entityType: "term",
    parameter: "collection=nfdi4health"
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

export const ErrorBreadcrumbWidget = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985987654345678",
    api: "https://semanticlookup.zbmed.de/api/",
    ontologyId: "ncit",
    entityType: "term",
    parameter: "collection=nfdi4health"
  }
};
