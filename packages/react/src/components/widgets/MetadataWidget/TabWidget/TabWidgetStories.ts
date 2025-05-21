import { entityTypeNames } from "../../../../model/ModelTypeCheck";
import * as globals from "../../../../app/globals";
import {
  onNavigateToDisambiguateArgType,
  onNavigateToEntityArgType,
  onNavigateToOntologyArgType,
} from "../../../../stories/storyArgs";
import { HIERARCHY_WIDGET_DEFAULT_VALUES } from "./HierarchyWidget/HierarchyWidget";

export const TabWidgetStoryArgTypes = {
  api: {
    control: {
      type: "radio",
    },
    options: [
      globals.EBI_API_ENDPOINT,
      globals.ZBMED_OLS4_API,
      globals.ZBMED_OLS4_API,
      globals.TIB_API_ENDPOINT,
    ],
  },
  ontologyId: {},
  iri: {
    description: "Iri of the term you want to fetch the tab information for.",
  },
  parameter: {
    type: { required: false },
  },
  entityType: {
    type: { required: false },
    table: {
      type: { summary: `${entityTypeNames.join(" | ")}` },
    },
    control: {
      type: "radio",
    },
    options: ["term", "class", "property", "individual", "", "INVALID STRING"],
  },
  ...onNavigateToEntityArgType,
  ...onNavigateToOntologyArgType,
  ...onNavigateToDisambiguateArgType,
};

export const TabWidgetStoryArgs = {
  api: "",
  parameter: "collection=nfdi4health",
  useLegacy: true,
  ontologyId: "",
  entityType: "",
  iri: "",
  altNamesTab: true,
  hierarchyTab: true,
  crossRefTab: true,
  terminologyInfoTab: true,
  hierarchyPreferredRoots: HIERARCHY_WIDGET_DEFAULT_VALUES.PREFERRED_ROOTS,
  hierarchyKeepExpansionStates:
    HIERARCHY_WIDGET_DEFAULT_VALUES.KEEP_EXPANSION_STATES,
  hierarchyShowSiblingsOnInit:
    HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT,
  onNavigateToEntity: "Console message",
  onNavigateToOntology: "Console message",
  onNavigateToDisambiguate: "Console message",
};

export const Default = {
  storyName: "Default",
  args: {
    api: globals.ZBMED_OLS4_API,
    ontologyId: "hp",
    iri: "http://purl.obolibrary.org/obo/HP_0000819",
    useLegacy: true,
  },
};

export const TabWidgetOLS3 = {
  storyName: "OLS3",
  args: {
    api: globals.ZBMED_OLS3_API,
    ontologyId: "efo",
    iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
    useLegacy: true,
  },
};

export const TabWidgetOLS4V1 = {
  storyName: "OLS4 V1",
  args: {
    api: globals.EBI_API_ENDPOINT,
    ontologyId: "efo",
    iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
    useLegacy: true,
  },
};

export const TabWidgetOLS4V2 = {
  storyName: "OLS4 V2",
  args: {
    api: globals.EBI_API_ENDPOINT,
    ontologyId: "efo",
    iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
    useLegacy: false,
    parameter: "",
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

export const TabWidgetLarge = {
  args: {
    api: globals.EBI_API_ENDPOINT,
    ontologyId: "ncbitaxon",
    iri: "http://purl.obolibrary.org/obo/NCBITaxon_2489341",
    useLegacy: false,
    parameter: "",
  },
};

export const HiddenTabs = {
  storyName: "Hidden Tabs",
  args: {
    api: globals.EBI_API_ENDPOINT,
    ontologyId: "ncit",
    iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
    entityType: "term",
    useLegacy: false,
    parameter: "",
    altNamesTab: true,
    hierarchyTab: false,
    crossRefTab: false,
    terminologyInfoTab: false,
  },
};
