import * as globals from "../../../../../app/globals";
import {
  apiArgType,
  classNameArgType,
  entityTypeArgType,
  iriArgType,
  ontologyIdArgType,
  parameterArgType,
  useLegacyArgType,
} from "../../../../../stories/storyArgs";
import { expect, waitFor, within } from "@storybook/test";

export const AlternativeNameTabWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdArgType,
  ...entityTypeArgType,
  ...parameterArgType,
  ...useLegacyArgType,
  ...classNameArgType,
};

export const AlternativeNameTabWidgetStoryArgs = {
  api: "",
  useLegacy: true,
  iri: "",
  ontologyId: "",
  entityType: "term",
  className: "",
  parameter: "collection=nfdi4health",
} as const;

export const AlternativeNameTabWidget1Args = {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_OLS4_API,
    entityType: "term",
    ontologyId: "ncit",
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

export const commonAlternativeNameTabWidgetPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('alternative-name');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};