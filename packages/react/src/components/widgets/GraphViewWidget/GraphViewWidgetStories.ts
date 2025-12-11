import * as globals from "../../../app/globals";
import {
  apiArgType,
  iriArgType,
  ontologyIdReqArgType,
  rootWalkArgType,
  hierarchyArgType,
  targetIriArgType,
  edgeLabelArgType,
  onNodeClickArgType, hrefArgType, onNavigateToArgType, classNameArgType
} from "../../../stories/storyArgs";
import { expect, waitFor, within } from "storybook/test";

export const GraphViewWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdReqArgType,
  ...rootWalkArgType,
  ...hierarchyArgType,
  ...classNameArgType,
  ...targetIriArgType,
  ...edgeLabelArgType,
  ...onNodeClickArgType,
  ...hrefArgType,
  ...onNavigateToArgType
};

export const GraphViewWidgetStoryArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_24870",
  ontologyId: "chebi",
  rootWalk: false,
  hierarchy: false
};

export const ChebiIonArgs = {
  api: globals.TIB_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_24870",
  ontologyId: "chebi",
  rootWalk: false,
  hierarchy: false,
  targetIri: "",
};

export const ChebiIonComparisonArgs = {
  ...ChebiIonArgs,
  api: globals.TIB_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_24870",
  targetIri: "http://purl.obolibrary.org/obo/CHEBI_139544",
  ontologyId: "chebi",
  rootWalk: false,
  hierarchy: false
};

export const ChebiIonRootWalkArgs = {
  ...ChebiIonArgs,
  api: globals.TIB_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_24870",
  ontologyId: "chebi",
  rootWalk: true,
  hierarchy: false
};

export const ChebiWaterArgs = {
  ...ChebiIonArgs,
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_15377",
  ontologyId: "chebi",
  rootWalk: false,
  hierarchy: false
};

export const ChebiWaterRootWalkArgs = {
  ...ChebiIonArgs,
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_15377",
  ontologyId: "chebi",
  rootWalk: true,
  hierarchy: false
};

export const ChebiCaffeineHierarchyArgs = {
  ...ChebiIonArgs,
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_27732",
  ontologyId: "chebi",
  rootWalk: true,
  hierarchy: true,
};

export const WithOnNodeDoubleClickCallbackArgs = {
  ...ChebiIonArgs,
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_27732",
  ontologyId: "chebi",
  rootWalk: true,
  hierarchy: true,
  onNodeClick: (iri: string) => {
    let url = `https://www.ebi.ac.uk/ols4/api/v2/ontologies/chebi/classes/${encodeURIComponent(encodeURIComponent(iri))}?includeObsoleteEntities=true`;
    window.open(url, "_blank")?.focus();
  },
};

export const ChebiCaffeineHierarchyWithComparisonArgs = {
  ...ChebiIonArgs,
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_27732",
  targetIri: "http://purl.obolibrary.org/obo/CHEBI_30151",
  ontologyId: "chebi",
  rootWalk: true,
  hierarchy: true,
};


export const ChebiIonAndIonRadicalWithComparisonArgs = {
  ...ChebiIonArgs,
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_24870",
  targetIri: "http://purl.obolibrary.org/obo/CHEBI_36875",
  ontologyId: "chebi",
  rootWalk: true,
  hierarchy: true,
};

export const GraphWithGermanLableArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/HP_0003502",
  ontologyId: "hp",
  rootWalk: true,
  hierarchy: true,
  targetIri: "",
  parameter: "lang=de"
};

export const commonGraphViewWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("graph-widget");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
