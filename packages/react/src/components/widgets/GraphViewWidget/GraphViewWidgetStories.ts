import * as globals from "../../../app/globals";
import {
  apiArgType,
  iriArgType,
  ontologyIdReqArgType, rootWalkArgType
} from "../../../stories/storyArgs";
import { expect, waitFor, within } from "storybook/test";

export const GraphViewWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdReqArgType,
  ...rootWalkArgType,
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
    rootWalk: true
};

export const ChebiWaterArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/CHEBI_15377",
    ontologyId: "chebi",
    rootWalk: false
};

export const ChebiWaterRootWalkArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/CHEBI_15377",
    ontologyId: "chebi",
    rootWalk: true
};

export const ChebiCaffeineHierarchyArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/CHEBI_27732",
    ontologyId: "chebi",
    rootWalk: true,
    hierarchy: true
};


export const WithOnNodeDoubleClickCallbackArgs = {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/CHEBI_27732",
    ontologyId: "chebi",
    rootWalk: true,
    hierarchy: true,
    onNodeClick: (iri: string) => {
      let url = `https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(iri))}?includeObsoleteEntities=true`;
      window.open(url, "_blank")?.focus();
    }
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
