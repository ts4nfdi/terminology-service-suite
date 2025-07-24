import { EntityTypeName, entityTypeNames } from "../../../../model/ModelTypeCheck";
import * as globals from "../../../../app/globals";
import {
  onNavigateToDisambiguateArgType,
  onNavigateToEntityArgType,
  onNavigateToOntologyArgType
} from "../../../../stories/storyArgs";
import { HIERARCHY_WIDGET_DEFAULT_VALUES } from "./HierarchyWidget/HierarchyWidget";
import { expect, waitFor, within } from "@storybook/test";

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
  entityType: "term" as EntityTypeName,
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

export const DefaultArgs = {
    api: globals.ZBMED_OLS4_API,
    ontologyId: "hp",
    iri: "http://purl.obolibrary.org/obo/HP_0000819",
    useLegacy: true,
} as const;

export const TabWidgetOLS3Args = {
    api: globals.ZBMED_OLS3_API,
    ontologyId: "efo",
    iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
    useLegacy: true,
} as const;

export const TabWidgetOLS4V1Args = {
    api: globals.EBI_API_ENDPOINT,
    ontologyId: "efo",
    iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
    useLegacy: true,
} as const;

export const TabWidgetOLS4V2Args = {
    api: globals.EBI_API_ENDPOINT,
    ontologyId: "efo",
    iri: "http://www.ebi.ac.uk/efo/EFO_0009644",
    useLegacy: false,
    parameter: "",
} as const;

export const SelectingDefiningOntologyArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/IAO_0000631",
    entityType: "term",
    parameter: "",
} as const;

export const DefiningOntologyUnavailableArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://identifiers.org/uniprot/Q9VAM9",
    entityType: "term",
    parameter: "",
} as const;

export const TabWidgetLargeArgs = {
    api: globals.EBI_API_ENDPOINT,
    ontologyId: "ncbitaxon",
    iri: "http://purl.obolibrary.org/obo/NCBITaxon_2489341",
    useLegacy: false,
    parameter: "",
} as const;

export const HiddenTabsArgs = {
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
} as const;

export const commonTabWidgetPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('tab');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};