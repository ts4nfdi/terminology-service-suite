import { entityTypeNames } from "../../../../../model/ModelTypeCheck";
import {
  apiArgType,
  entityTypeArgType,
  iriArgType,
  ontologyIdArgType,
  parameterArgType,
  useLegacyArgType,
} from "../../../../../stories/storyArgs";
import * as globals from "../../../../../app/globals";
import { expect, waitFor, within } from "storybook/test";

export const CrossRefWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdArgType,
  ...entityTypeArgType,
  ...parameterArgType,
  ...useLegacyArgType,
};

export const CrossRefWidgetStoryArgs = {
  api: "",
  iri: "",
  useLegacy: true,
  ontologyId: "",
  entityType: "term",
  parameter: "collection=nfdi4health",
} as const;

export const CrossRefTabWidget1Args = {
    iri: "http://purl.obolibrary.org/obo/RXNO_0000138",
    api: globals.EBI_API_ENDPOINT,
    entityType: "term",
    ontologyId: "rxno",
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

export const commonCrossRefWidgetPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('cross-ref');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};
