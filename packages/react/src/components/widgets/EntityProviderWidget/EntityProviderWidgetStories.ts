import { expect, waitFor, within } from "storybook/test";
import * as globals from "../../../app/globals";
import { iriArgType, ontologyIdArgType } from "../../../stories/storyArgs";

export const EntityProviderWidgetStoryArgTypes = {
  ...iriArgType,
  ...ontologyIdArgType,
  api: {
    api: globals.GATEWAY_API_OLS_ENDPOINT,
    required: false,
    description:
      "The API instance for the API call.<br><br>" +
      "**Note:** the `provider` block is specific to the " +
      "[TS4NFDI API Gateway](https://base4nfdi.de/projects/ts4nfdi). " +
      "Plain OLS instances do not return it, so no provider can be resolved " +
      "against them. Defaults to the gateway OLS endpoint.",
    table: {
      defaultValue: { summary: globals.GATEWAY_API_OLS_ENDPOINT },
      type: { summary: "string" },
    },
  },
  enabled: {
    required: false,
    description:
      "If false, no request is made and the result stays empty. " +
      "Useful to defer fetching until an IRI is known.",
    control: { type: "boolean" } as const,
    table: {
      defaultValue: { summary: "true" },
      type: { summary: "boolean" },
    },
  },
  parameter: {
    required: false,
    description:
      "Additional parameters in URL format, e.g. " +
      "`collectionId=dc45621d-7e40-47ce-9616-4133f0b54edf` If a `collectionId` " +
      "is provided, only providers of the terminologies configured in that " +
      "TS4NFDI API Gateway collection are returned.",
    table: {
      type: { summary: "string" },
    },
  },
};

export const EntityProviderWidgetStoryArgs = {
  api: globals.GATEWAY_API_OLS_ENDPOINT,
  iri: "",
  ontologyId: "",
  enabled: true,
  parameter: "",
} as const;

/**
 * An entity that resolves in voc4cat via the TS4NFDI API Gateway. At the time of writing
 * the gateway serves it through Skosmos, but which provider answers is a
 * property of the API Gateway configuration and may change - the story renders
 * whatever the API reports rather than asserting a specific provider.
 */
export const withOntologyIdArgs = {
  api: globals.GATEWAY_API_OLS_ENDPOINT,
  ontologyId: "agrovoc",
  iri: "http://aims.fao.org/aos/agrovoc/c_12332",
  parameter: "collectionId=ff5491d1-d0a9-481e-ac90-0fad065fa097",
} as const;

/**
 * An IRI that does not exist in the requested ontology. The API answers with an
 * empty `elements` array, which is not an error: `provider` stays undefined
 * while `isSuccess` becomes true.
 */
export const notFoundArgs = {
  api: globals.GATEWAY_API_OLS_ENDPOINT,
  ontologyId: "voc4cat",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
} as const;

/**
 * Nothing is fetched while `enabled` is false, so the hook stays idle. Lets an
 * application mount the hook before an IRI has been selected.
 */
export const disabledArgs = {
  api: globals.GATEWAY_API_OLS_ENDPOINT,
  ontologyId: "voc4cat",
  iri: "https://w3id.org/nfdi4cat/voc4cat_0000151",
  enabled: false,
} as const;

export const commonEntityProviderWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("entity-provider");
      await expect(content).toBeInTheDocument();
      // The demo marks itself as settled once the hook is no longer loading.
      await expect(content.getAttribute("data-loading")).toBe("false");
    },
    {
      timeout: 5000,
    },
  );
};
