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

export const commonEntityDefinedByWidgetPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('entity-defined-by');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};