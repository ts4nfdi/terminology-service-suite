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
import { expect, waitFor, within } from "@storybook/test";

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
  entityType: "",
  hasTitle: true,
  showBadges: true,
  parameter: "",
  onNavigateToEntity: "Console message",
  onNavigateToOntology: "Console message",
  onNavigateToDisambiguate: "Console message",
};

export const SubEntityOfArgs = {
    api: globals.EBI_API_ENDPOINT,
    entityType: "term",
    ontologyId: "agro",
    iri: "http://purl.obolibrary.org/obo/AGRO_00000002",
};

export const AllValuesFromArgs = {
    api: globals.EBI_API_ENDPOINT,
    entityType: "term",
    ontologyId: "go",
    iri: "http://purl.obolibrary.org/obo/BFO_0000004",
};

export const DifferentFromArgs = {
    api: globals.EBI_API_ENDPOINT,
    entityType: "individual",
    ontologyId: "bco",
    iri: "http://purl.obolibrary.org/obo/IAO_0000120",
};

export const EquivalentToArgs = {
    api: globals.EBI_API_ENDPOINT,
    entityType: "term",
    ontologyId: "go",
    iri: "http://purl.obolibrary.org/obo/GO_0048021",
};

export const SingleValueArgs = {
    api: globals.EBI_API_ENDPOINT,
    entityType: "term",
    ontologyId: "bfo",
    iri: "http://purl.obolibrary.org/obo/BFO_0000001",
};

export const InverseOfArgs = {
    api: globals.EBI_API_ENDPOINT,
    entityType: "property",
    ontologyId: "ro",
    iri: "http://purl.obolibrary.org/obo/RO_0000057",
};

export const PropertyChainArgs = {
    api: globals.EBI_API_ENDPOINT,
    entityType: "property",
    ontologyId: "ro",
    iri: "http://purl.obolibrary.org/obo/RO_0002170",
};

export const InstancesArgs = {
    api: globals.EBI_API_ENDPOINT,
    entityType: "term",
    ontologyId: "iao",
    iri: "http://purl.obolibrary.org/obo/IAO_0000078",
};

export const AxiomsArgs = {
    api: globals.EBI_API_ENDPOINT,
    entityType: "term",
    ontologyId: "aism",
    iri: "http://purl.obolibrary.org/obo/UBERON_0000006",
};

export const QualifiedCardinalityArgs = {
    api: globals.EBI_API_ENDPOINT,
    entityType: "term",
    ontologyId: "foodon",
    iri: "http://purl.obolibrary.org/obo/FOODON_00003382",
};

export const NavigateToEBIPageArgs = {
    api: globals.EBI_API_ENDPOINT,
    entityType: "individual",
    ontologyId: "bco",
    iri: "http://purl.obolibrary.org/obo/IAO_0000120",
    onNavigateToEntity: "Navigate to EBI page",
    onNavigateToOntology: "Navigate to EBI page",
    onNavigateToDisambiguate: "Navigate to EBI page",
};

export const commonEntityRelationsWidgetPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('entity-relations');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};