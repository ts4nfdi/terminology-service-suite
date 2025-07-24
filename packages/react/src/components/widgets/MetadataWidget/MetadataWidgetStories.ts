import * as globals from "../../../app/globals";
import {
  apiArgType,
  entityTypeArgType,
  iriArgType,
  onNavigateToDisambiguateArgType,
  onNavigateToEntityArgType,
  onNavigateToOntologyArgType,
  ontologyIdArgType,
  parameterArgType,
  useLegacyArgType,
} from "../../../stories/storyArgs";
import { HIERARCHY_WIDGET_DEFAULT_VALUES } from "./TabWidget/HierarchyWidget/HierarchyWidget";
import { expect, waitFor, within } from "@storybook/test";

export const MetadataWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...entityTypeArgType,
  ...ontologyIdArgType,
  ...onNavigateToEntityArgType,
  ...onNavigateToOntologyArgType,
  ...onNavigateToDisambiguateArgType,
  ...parameterArgType,
  ...useLegacyArgType,
};

export const MetadataWidgetStoryArgs = {
  api: "",
  useLegacy: "true",
  ontologyId: "",
  entityType: "",
  iri: "",
  termLink: "",
  altNamesTab: true,
  hierarchyTab: true,
  crossRefTab: true,
  terminologyInfoTab: true,
  graphViewTab: true,
  termDepictionTab: true,
  hierarchyPreferredRoots: HIERARCHY_WIDGET_DEFAULT_VALUES.PREFERRED_ROOTS,
  hierarchyKeepExpansionStates:
    HIERARCHY_WIDGET_DEFAULT_VALUES.KEEP_EXPANSION_STATES,
  hierarchyShowSiblingsOnInit:
    HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT,
  onNavigateToEntity: "Console message",
  onNavigateToOntology: "Console message",
  onNavigateToDisambiguate: "Console message",
  parameter: "",
};

export const MetadataWidget1Args = {
    api: globals.ZBMED_OLS4_API,
    ontologyId: "uberon",
    iri: "http://purl.obolibrary.org/obo/UBERON_0001443",
    entityType: "term",
};

export const OLS3Args = {
    api: globals.ZBMED_OLS3_API,
    ontologyId: "ncit",
    iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
    entityType: "term",
};

export const OLS4V1Args = {
    api: globals.EBI_API_ENDPOINT,
    ontologyId: "ncit",
    iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
    entityType: "term",
};

export const OLS4V2Args = {
    api: globals.EBI_API_ENDPOINT,
    ontologyId: "ncit",
    iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
    entityType: "term",
    useLegacy: false,
    parameter: "",
};

export const SelectingDefiningOntologyArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/IAO_0000631",
    entityType: "term",
    parameter: "",
};

export const DefiningOntologyUnavailableArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://identifiers.org/uniprot/Q9VAM9",
    entityType: "term",
    parameter: "",
};

export const DefinedByAlsoAppearsInWidgetsArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/HP_0000819",
    ontologyId: "efo",
};

export const HiddenTabsArgs = {
    api: globals.EBI_API_ENDPOINT,
    ontologyId: "uberon",
    iri: "http://purl.obolibrary.org/obo/UBERON_0001443",
    entityType: "term",
    useLegacy: false,
    parameter: "",
    altNamesTab: false,
    hierarchyTab: false,
    crossRefTab: false,
    terminologyInfoTab: false,
    graphViewTab: false,
    termDepictionTab: false,
};

export const TermAsLinkArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/HP_0000819",
    ontologyId: "efo",
    termLink:
      "https://www.ebi.ac.uk/ols4/ontologies/efo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FHP_0000819",
};

export const commonMetadataWidgetPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('metadata');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};