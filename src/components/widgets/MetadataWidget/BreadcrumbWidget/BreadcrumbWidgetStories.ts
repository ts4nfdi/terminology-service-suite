import * as globals from "../../../../app/globals";
import {
  apiArgType,
  colorFirstArgType,
  colorSecondArgType,
  entityTypeArgType,
  iriArgType,
  onNavigateToOntologyArgType,
  ontologyIdArgType,
  parameterArgType,
  useLegacyArgType,
} from "../../../../stories/storyArgs";
import "../../../../style/customBreadcrumbStyle.css";

export const BreadcrumbWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdArgType,
  ...entityTypeArgType,
  ...parameterArgType,
  ...useLegacyArgType,
  ...colorFirstArgType,
  ...colorSecondArgType,
  ...onNavigateToOntologyArgType,
};

export const BreadcrumbWidgetStoryArgs = {
  api: "",
  useLegacy: true,
  iri: "",
  ontologyId: "",
  entityType: "",
  colorFirst: "",
  colorSecond: "",
  parameter: "collection=nfdi4health",
  onNavigateToOntology: "Console message",
};

export const BreadcrumbWidgetDefault = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    entityType: "term",
    parameter: "collection=nfdi4health",
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

export const ErrorBreadcrumbWidget = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985987654345678",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    entityType: "term",
    parameter: "collection=nfdi4health",
  },
};

export const CustomColors = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    entityType: "term",
    parameter: "collection=nfdi4health",
    colorFirst: "red",
    colorSecond: "grey",
  },
};

export const CustomStyle = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    entityType: "term",
    parameter: "collection=nfdi4health",
    colorFirst: "#eced8e",
    colorSecond: "#8eaeed",
    className: "custom-breadcrumb-style",
  },
};

export const EntityInput = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    entityType: "term",
    parameter: "collection=nfdi4health",
    entity: {
      properties: {
        "iri": "http://purl.obolibrary.org/obo/NCIT_C2985",
        "ontologyId": "ncit",
        "shortForm": "NCIT_C2985",
      }
    },
  },
};

