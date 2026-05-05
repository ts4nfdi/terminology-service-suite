import { expect, waitFor, within } from "storybook/test";
import * as globals from "../../../../app/globals";
import {
  apiArgType,
  entityTypeArgType,
  iriArgType,
  onNavigateToOntologyArgType,
  ontologyIdArgType,
  parameterArgType,
  useLegacyArgType,
} from "../../../../stories/storyArgs";

export const EntityOntoListWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdArgType,
  ...entityTypeArgType,
  ...parameterArgType,
  ...useLegacyArgType,
  ...onNavigateToOntologyArgType,
};

export const EntityOntoListWidgetStoryArgs = {
  api: "",
  useLegacy: false,
  iri: "",
  ontologyId: "",
  entityType: "term",
  parameter: "",
  onNavigateToOntology: "Console message",
} as const;

export const v2ApiNCBITaxonArgs = {
  iri: "http://purl.obolibrary.org/obo/NCBITaxon_10090",
  api: globals.ZBMED_OLS4_API,
  entityType: "term",
  ontologyId: "ncbitaxon",
} as const;

export const v2ApiFOODONArgs = {
  iri: "http://purl.obolibrary.org/obo/NCBITaxon_10090",
  api: globals.ZBMED_OLS4_API,
  ontologyId: "foodon",
} as const;

export const legacyApiArgs = {
  iri: "http://purl.obolibrary.org/obo/MONDO_0005015",
  api: globals.EBI_API_ENDPOINT,
  entityType: "term",
  ontologyId: "efo",
  useLegacy: true,
} as const;

export const exceedsMaxDisplayArgs = {
  iri: "http://purl.obolibrary.org/obo/HP_0000819",
  api: globals.EBI_API_ENDPOINT,
  ontologyId: "hp",
} as const;

export const commonEntityOntoListWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("entity-onto-list");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
