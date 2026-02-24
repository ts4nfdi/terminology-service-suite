import { expect, waitFor, within } from "storybook/test";
import { HIERARCHY_WIDGET_DEFAULT_VALUES } from "../../../api/ols/OlsHierarchyApi";
import * as globals from "../../../app/globals";
import {
  apiArgType,
  entityTypeArgType,
  graphHierarchyArgType,
  graphTargetIriArgType,
  hierarchyKeepExpansionStatesArgType,
  hierarchyPreferredRootsArgType,
  hierarchyShowSiblingsOnInitArgType,
  hierarchyTargetIriArgType,
  hierarchyWrapArgType,
  iriArgType,
  onNavigateToDisambiguateArgType,
  onNavigateToEntityArgType,
  onNavigateToOntologyArgType,
  ontologyIdArgType,
  parameterArgType, showComparisonInputFieldArgType, showComparisonTitleInHeaderArgType, showHeaderArgType,
  termLinkArgType,
  useLegacyArgType
} from "../../../stories/storyArgs";

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
  ...hierarchyWrapArgType,
  ...hierarchyPreferredRootsArgType,
  ...hierarchyKeepExpansionStatesArgType,
  ...hierarchyShowSiblingsOnInitArgType,
  ...hierarchyTargetIriArgType,
  ...graphTargetIriArgType,
  ...graphHierarchyArgType,
  ...termLinkArgType,
  ...showHeaderArgType,
  ...showComparisonInputFieldArgType,
  ...showComparisonTitleInHeaderArgType,
};

export const MetadataWidgetStoryArgs = {
  api: "",
  useLegacy: true,
  ontologyId: "",
  entityType: "term",
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
  hierarchyWrap: HIERARCHY_WIDGET_DEFAULT_VALUES.WRAP,
  parameter: "",
  showComparisonTitleInHeader: true,
  showComparisonInputFieldArgType: true,
  showHeader: true,
} as const;

export const MetadataWidget1Args = {
  api: globals.ZBMED_OLS4_API,
  ontologyId: "uberon",
  iri: "http://purl.obolibrary.org/obo/UBERON_0001443",
  entityType: "term",
  hierarchyWrap: true,
  copyButton: "right",
  initialSelectedTab: "ontology",
} as const;

export const OLS3Args = {
  api: globals.ZBMED_OLS3_API,
  ontologyId: "ncit",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
  entityType: "term",
} as const;

export const OLS4V1Args = {
  api: globals.EBI_API_ENDPOINT,
  ontologyId: "ncit",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
  entityType: "term",
} as const;

export const OLS4V2Args = {
  api: globals.EBI_API_ENDPOINT,
  ontologyId: "ncit",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
  entityType: "term",
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

export const DefinedByAlsoAppearsInWidgetsArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/HP_0000819",
  ontologyId: "efo",
} as const;

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
} as const;

export const TermAsLinkArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/HP_0000819",
  ontologyId: "efo",
  termLink:
    "https://www.ebi.ac.uk/ols4/ontologies/efo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FHP_0000819",
} as const;

export const commonMetadataWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("metadata");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
