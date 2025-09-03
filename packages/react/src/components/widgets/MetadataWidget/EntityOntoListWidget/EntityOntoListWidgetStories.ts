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
import { expect, waitFor, within } from "storybook/test";

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

export const v2ApiEFOArgs = {
  iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
  api: globals.EBI_API_ENDPOINT,
  entityType: "term",
  ontologyId: "efo",
} as const;

export const v2ApiONSArgs = {
  iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
  api: globals.EBI_API_ENDPOINT,
  ontologyId: "ons",
} as const;

export const legacyApiArgs = {
  iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
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
