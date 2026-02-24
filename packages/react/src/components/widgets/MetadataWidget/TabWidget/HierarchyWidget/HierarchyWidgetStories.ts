import { expect, waitFor, within } from "storybook/test";
import { HIERARCHY_WIDGET_DEFAULT_VALUES } from "../../../../../api/ols/OlsHierarchyApi";
import * as globals from "../../../../../app/globals";
import { EntityTypeName } from "../../../../../model/ModelTypeCheck";
import {
  apiKeyArgType,
  apiUrlArgType,
  backendArgType,
  entityTypeArgTypeHierarchy,
  hierarchyWrapArgType,
  includeObsoleteEntitiesArgType,
  iriArgTypeHierarchy,
  keepExpansionStatesArgType,
  onNavigateToEntityArgType,
  onNavigateToOntologyArgType,
  ontologyIdArgTypeHierarchy,
  parameterArgTypeHierarchy,
  preferredRootsArgType,
  showComparisonInputFieldArgType,
  showComparisonTitleInHeaderArgType,
  showHeaderArgType,
  showSiblingsOnInitArgType,
  targetIriArgType,
  useLegacyArgTypeHierarchy,
} from "../../../../../stories/storyArgs";

export const HierarchyWidgetStoryArgTypes = {
  ...apiUrlArgType,
  ...backendArgType,
  ...apiKeyArgType,
  ...onNavigateToEntityArgType,
  ...onNavigateToOntologyArgType,
  ...iriArgTypeHierarchy,
  ...ontologyIdArgTypeHierarchy,
  ...entityTypeArgTypeHierarchy,
  ...includeObsoleteEntitiesArgType,
  ...preferredRootsArgType,
  ...keepExpansionStatesArgType,
  ...showSiblingsOnInitArgType,
  ...useLegacyArgTypeHierarchy,
  ...parameterArgTypeHierarchy,
  ...hierarchyWrapArgType,
  ...targetIriArgType,
  ...showComparisonTitleInHeaderArgType,
  ...showHeaderArgType,
  ...showComparisonInputFieldArgType,
};

export const HierarchyWidgetStoryArgs = {
  apiUrl: "",
  backendType: "ols",
  apiKey: "",
  onNavigateToEntity: "Console message",
  onNavigateToOntology: "Console message",
  iri: "",
  ontologyId: "",
  entityType: "term",
  includeObsoleteEntities:
    HIERARCHY_WIDGET_DEFAULT_VALUES.INCLUDE_OBSOLETE_ENTITIES,
  preferredRoots: HIERARCHY_WIDGET_DEFAULT_VALUES.PREFERRED_ROOTS,
  keepExpansionStates: HIERARCHY_WIDGET_DEFAULT_VALUES.KEEP_EXPANSION_STATES,
  showSiblingsOnInit: HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT,
  useLegacy: HIERARCHY_WIDGET_DEFAULT_VALUES.USE_LEGACY,
  hierarchyWrap: HIERARCHY_WIDGET_DEFAULT_VALUES.WRAP,
  parameter: "",
  targetIri: "",
  showHeader: HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_HEADER,
  showComparisonTitleInHeader:
    HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_COMPARISON_TITLE_IN_HEADER,
} as const;

export const ClassHierarchyArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: globals.EBI_API_ENDPOINT,
  backendType: "ols",
  iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
  entityType: "class",
  ontologyId: "efo",
  showComparisonInputField: true,
} as const;

export const IndividualHierarchyArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: globals.EBI_API_ENDPOINT,
  backendType: "ols",
  iri: "http://purl.obolibrary.org/obo/IAO_0000120",
  entityType: "individual",
  ontologyId: "bco",
} as const;

export const PreferredRootsArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: globals.EBI_API_ENDPOINT,
  backendType: "ols",
  iri: "",
  entityType: "class",
  ontologyId: "uberon",
  preferredRoots: true,
} as const;

export const IncludeObsoleteEntitiesArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: globals.EBI_API_ENDPOINT,
  backendType: "ols",
  iri: "",
  entityType: "class",
  ontologyId: "uberon",
  includeObsoleteEntities: true,
  useLegacy: true,
} as const;

export const PropertyRootsArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: globals.EBI_API_ENDPOINT,
  backendType: "ols",
  iri: "",
  entityType: "property",
  ontologyId: "bco",
  useLegacy: true,
} as const;

export const IndividualRootsArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: globals.EBI_API_ENDPOINT,
  backendType: "ols",
  iri: "",
  entityType: "individual",
  ontologyId: "bco",
} as const;

export const LargeHierarchyArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: globals.EBI_API_ENDPOINT,
  backendType: "ols",
  iri: "http://purl.obolibrary.org/obo/UBERON_2001747",
  entityType: "class",
  ontologyId: "uberon",
} as const;

export const SkosHierarchyArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: globals.FINTO_V1_API_ENDPOINT,
  backendType: "skosmos",
  iri: "http://www.yso.fi/onto/yso/p864",
  ontologyId: "yso",
} as const;

export const SagePubHierarchyArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: "https://concepts.sagepub.com/vocabularies/rest/v1/",
  backendType: "skosmos",
  iri: "https://concepts.sagepub.com/social-science/concept/economic_forecasting",
  ontologyId: "social-science",
} as const;

export const OntoportalHierarchyArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: "https://data.biodivportal.gfbio.org",
  backendType: "ontoportal",
  iri: "http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",
  ontologyId: "IOC",
  entityType: "class",
  apiKey: "",
} as const;

export const OLS3HierarchyArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: globals.ZBMED_OLS3_API,
  backendType: "ols",
  iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
  entityType: "class",
  ontologyId: "efo",
  useLegacy: true,
} as const;

export const OLSGermanArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: globals.EBI_API_ENDPOINT,
  backendType: "ols",
  iri: "http://purl.obolibrary.org/obo/HP_0003502",
  entityType: "class",
  ontologyId: "hp",
  useLegacy: false,
  parameter: "lang=de",
} as const;

export const SkosmosAgrovocGermanArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: "https://agrovoc.fao.org/browse/rest/v1/",
  backendType: "skosmos",
  iri: "http://aims.fao.org/aos/agrovoc/c_1731",
  showSiblingsOnInit: true,
  ontologyId: "agrovoc",
  parameter: "lang=de",
} as const;

export const CompareHierarchiesArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: globals.EBI_API_ENDPOINT,
  backendType: "ols",
  iri: "http://purl.obolibrary.org/obo/CHEBI_27594",
  targetIri: "http://purl.obolibrary.org/obo/CHEBI_18248",
  entityType: "class" as EntityTypeName,
  ontologyId: "chebi",
  showComparisonInputField: true,
};

export const CompareHierarchiesSubEntityArgs = {
  ...HierarchyWidgetStoryArgs,
  apiUrl: globals.EBI_API_ENDPOINT,
  backendType: "ols",
  iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
  targetIri: "http://www.ebi.ac.uk/efo/EFO_0000405",
  entityType: "class" as EntityTypeName,
  ontologyId: "efo",
};

export const commonHierarchyWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("hierarchy");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
