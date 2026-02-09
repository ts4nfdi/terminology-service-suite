import { expect, waitFor, within } from "storybook/test";
import * as globals from "../../../app/globals";
import {
  apiArgType,
  entityTypeArgType,
  hasTitleArgType,
  iriArgType,
  onNavigateToDisambiguateArgType,
  onNavigateToEntityArgType,
  onNavigateToOntologyArgType,
  ontologyIdArgType,
  parameterArgType,
  showBadgesArgType,
} from "../../../stories/storyArgs";

export const EntityRelationsWidgetStoryArgTypes = {
  ...apiArgType,
  ...hasTitleArgType,
  ...entityTypeArgType,
  ...iriArgType,
  ...parameterArgType,
  ...ontologyIdArgType,
  ...showBadgesArgType,
  ...onNavigateToEntityArgType,
  ...onNavigateToOntologyArgType,
  ...onNavigateToDisambiguateArgType,
};

export const EntityRelationsWidgetStoryArgs = {
  api: "https://semanticlookup.zbmed.de/api/",
  iri: "",
  ontologyId: "",
  entityType: "term",
  hasTitle: true,
  showBadges: true,
  parameter: "",
  onNavigateToEntity: "Console message",
  onNavigateToOntology: "Console message",
  onNavigateToDisambiguate: "Console message",
} as const;

export const SubEntityOfArgs = {
  api: globals.EBI_API_ENDPOINT,
  entityType: "term",
  ontologyId: "agro",
  iri: "http://purl.obolibrary.org/obo/AGRO_00000002",
} as const;

export const AllValuesFromArgs = {
  api: globals.EBI_API_ENDPOINT,
  entityType: "term",
  ontologyId: "go",
  iri: "http://purl.obolibrary.org/obo/BFO_0000004",
} as const;

export const DifferentFromArgs = {
  api: globals.EBI_API_ENDPOINT,
  entityType: "individual",
  ontologyId: "bco",
  iri: "http://purl.obolibrary.org/obo/IAO_0000120",
} as const;

export const EquivalentToArgs = {
  api: globals.EBI_API_ENDPOINT,
  entityType: "term",
  ontologyId: "go",
  iri: "http://purl.obolibrary.org/obo/GO_0048021",
} as const;

export const SingleValueArgs = {
  api: globals.EBI_API_ENDPOINT,
  entityType: "term",
  ontologyId: "bfo",
  iri: "http://purl.obolibrary.org/obo/BFO_0000001",
} as const;

export const InverseOfArgs = {
  api: globals.EBI_API_ENDPOINT,
  entityType: "property",
  ontologyId: "ro",
  iri: "http://purl.obolibrary.org/obo/RO_0000057",
} as const;

export const PropertyChainArgs = {
  api: globals.EBI_API_ENDPOINT,
  entityType: "property",
  ontologyId: "ro",
  iri: "http://purl.obolibrary.org/obo/RO_0002170",
} as const;

export const InstancesArgs = {
  api: globals.EBI_API_ENDPOINT,
  entityType: "term",
  ontologyId: "iao",
  iri: "http://purl.obolibrary.org/obo/IAO_0000078",
} as const;

export const AxiomsArgs = {
  api: globals.EBI_API_ENDPOINT,
  entityType: "term",
  ontologyId: "aism",
  iri: "http://purl.obolibrary.org/obo/UBERON_0000006",
} as const;

export const QualifiedCardinalityArgs = {
  api: globals.EBI_API_ENDPOINT,
  entityType: "term",
  ontologyId: "foodon",
  iri: "http://purl.obolibrary.org/obo/FOODON_00003382",
} as const;

export const NavigateToEBIPageArgs = {
  api: globals.EBI_API_ENDPOINT,
  entityType: "individual",
  ontologyId: "bco",
  iri: "http://purl.obolibrary.org/obo/IAO_0000120",
  onNavigateToEntity: "Navigate to EBI page",
  onNavigateToOntology: "Navigate to EBI page",
  onNavigateToDisambiguate: "Navigate to EBI page",
} as const;

export const commonEntityRelationsWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("entity-relations");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
