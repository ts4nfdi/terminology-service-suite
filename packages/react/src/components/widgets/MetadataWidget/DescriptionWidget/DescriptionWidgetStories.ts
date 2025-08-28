import {
  apiArgType,
  classNameArgType,
  colorArgType,
  descTextArgType,
  iriArgType,
  ontologyIdArgType,
  parameterArgType,
  thingTypeArgType,
  useLegacyArgType,
} from "../../../../stories/storyArgs";
import * as globals from "../../../../app/globals";
import { expect, waitFor, within } from "storybook/test";
import { ThingTypeName } from "../../../../model/ModelTypeCheck";

export const DescriptionWidgetStoryArgTypes = {
  ...apiArgType,
  ...colorArgType,
  ...descTextArgType,
  ...ontologyIdArgType,
  ...iriArgType,
  ...useLegacyArgType,
  ...parameterArgType,
  ...thingTypeArgType,
  ...classNameArgType,
};

export const DescriptionWidgetStoryArgs = {
  api: "",
  iri: "",
  useLegacy: true,
  ontologyId: "",
  thingType: "term" as ThingTypeName,
  descText: "",
  color: "",
  className: "",
  parameter: "collection=nfdi4health",
};

export const DescriptionWidget1Args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: globals.ZBMED_OLS4_API,
  ontologyId: "ncit",
  thingType: "term",
  parameter: "collection=nfdi4health",
} as const;

export const SelectingDefiningOntologyArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/IAO_0000631",
  thingType: "term",
  parameter: "",
} as const;

export const DefiningOntologyUnavailableArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "http://identifiers.org/uniprot/Q9VAM9",
  thingType: "term",
  parameter: "",
} as const;

export const ErrorFetchingDataArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "http://identifiers.org/uniprot/Q9VA",
  thingType: "term",
  parameter: "",
} as const;

export const commonDescriptionWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("description");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
