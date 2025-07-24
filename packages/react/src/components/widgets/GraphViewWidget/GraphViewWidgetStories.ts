import * as globals from "../../../app/globals";
import {
  apiArgType,
  iriArgType,
  ontologyIdReqArgType,
} from "../../../stories/storyArgs";
import { expect, waitFor, within } from "@storybook/test";

export const GraphViewWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdReqArgType,
  rootWalk: {
    required: false,
    description:
      "When true, the graph will show the tree hierarchy for the target node in form of a graph.",
    table: {
      defaultValue: { summary: false },
    },
    type: { summary: "boolean" },
  },
};

export const GraphViewWidgetStoryArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "",
  ontologyId: "",
  rootWalk: false,
};

export const GraphViewWidgetExampleArgs = {
    api: globals.TIB_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/OBI_0000070",
    ontologyId: "vibso",
    rootWalk: false,
};

export const RootWalkGraphExampleArgs = {
    api: globals.TIB_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/OBI_0000070",
    ontologyId: "vibso",
    rootWalk: true,
};

export const ChebiWaterArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/CHEBI_15377",
    ontologyId: "chebi",
    rootWalk: false,
};

export const ChebiWaterRootWalkArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/CHEBI_15377",
    ontologyId: "chebi",
    rootWalk: true,
};

export const commonGraphViewWidgetPlay = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const content = canvas.getByTestId('graph-view');
    await expect(content).toBeInTheDocument();
  }, {
    timeout: 3000
  })
};
