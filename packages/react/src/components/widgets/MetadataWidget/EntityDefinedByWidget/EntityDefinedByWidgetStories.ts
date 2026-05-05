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

export const EntityDefinedByWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdArgType,
  ...entityTypeArgType,
  ...parameterArgType,
  ...useLegacyArgType,
  ...onNavigateToOntologyArgType,
};

export const EntityDefinedByWidgetStoryArgs = {
  api: "",
  useLegacy: false,
  iri: "",
  ontologyId: "",
  entityType: "term",
  parameter: "",
  onNavigateToOntology: "Console message",
} as const;

export const emptyInDefiningOntologyArgs = {
  iri: "http://purl.obolibrary.org/obo/MONDO_0005015",
  api: globals.EBI_API_ENDPOINT,
  entityType: "term",
  ontologyId: "efo",
} as const;

export const v2ApiFOODONArgs = {
  iri: "http://purl.obolibrary.org/obo/NCBITaxon_10090",
  api: globals.ZBMED_OLS4_API,
  ontologyId: "foodon",
} as const;

export const legacyApiArgs = {
  iri: "http://purl.obolibrary.org/obo/NCBITaxon_10090",
  api: globals.ZBMED_OLS4_API,
  entityType: "term",
  ontologyId: "foodon",
  useLegacy: true,
} as const;

export const commonEntityDefinedByWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("entity-defined-by");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
