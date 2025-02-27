import * as globals from "../../../../../app/globals";
import {
  apiArgType,
  classNameArgType,
  entityTypeArgType,
  iriArgType,
  ontologyIdArgType,
  parameterArgType,
  useLegacyArgType,
} from "../../../../../stories/storyArgs";

export const AlternativeNameTabWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdArgType,
  ...entityTypeArgType,
  ...parameterArgType,
  ...useLegacyArgType,
  ...classNameArgType,
};

export const AlternativeNameTabWidgetStoryArgs = {
  api: "",
  useLegacy: true,
  iri: "",
  ontologyId: "",
  entityType: "",
  className: "",
  parameter: "collection=nfdi4health",
};

export const AlternativeNameTabWidget1 = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_API_ENDPOINT,
    entityType: "term",
    ontologyId: "ncit",
  },
};

export const SelectingDefiningOntology = {
  args: {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/IAO_0000631",
    entityType: "term",
    parameter: "",
  },
};

export const DefiningOntologyUnavailable = {
  args: {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://identifiers.org/uniprot/Q9VAM9",
    entityType: "term",
    parameter: "",
  },
};
