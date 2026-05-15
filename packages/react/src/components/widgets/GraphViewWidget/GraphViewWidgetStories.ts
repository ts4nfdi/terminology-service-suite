import { expect, waitFor, within } from "storybook/test";
import * as globals from "../../../app/globals";
import {
  apiArgType,
  classNameArgType,
  edgeLabelArgType,
  hierarchyArgType,
  hrefArgType,
  iriArgType,
  onNavigateToArgType,
  onNodeClickArgType,
  ontologyIdReqArgType,
  rootWalkArgType,
  targetIriArgType,
  irisListArgType,
  hierarchyDirectionArgType
} from "../../../stories/storyArgs";

export const GraphViewWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  iri: {
    ...iriArgType.iri,
    description:
      "Entity IRI or list of entity IRIs whose graph should be rendered.",
    table: {
      type: { summary: "string | string[]" },
    },
    control: { type: "object" } as const,
  },
  ...irisListArgType,
  ...ontologyIdReqArgType,
  ...rootWalkArgType,
  ...hierarchyArgType,
  ...hierarchyDirectionArgType,
  ...classNameArgType,
  ...targetIriArgType,
  ...edgeLabelArgType,
  ...onNodeClickArgType,
  ...hrefArgType,
  ...onNavigateToArgType,
};

export const GraphViewWidgetStoryArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_24870",
  ontologyId: "chebi",
  rootWalk: false,
  hierarchy: false,
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
  hierarchy: false,
};

export const ChebiIonRootWalkArgs = {
  ...ChebiIonArgs,
  api: globals.TIB_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_24870",
  ontologyId: "chebi",
  rootWalk: true,
  hierarchy: false,
};

export const ChebiWaterArgs = {
  ...ChebiIonArgs,
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_15377",
  ontologyId: "chebi",
  rootWalk: false,
  hierarchy: false,
};

export const ChebiWaterRootWalkArgs = {
  ...ChebiIonArgs,
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_15377",
  ontologyId: "chebi",
  rootWalk: true,
  hierarchy: false,
};

export const ChebiCaffeineHierarchyArgs = {
  ...ChebiIonArgs,
  api: globals.EBI_API_ENDPOINT,
  iri: "http://purl.obolibrary.org/obo/CHEBI_27732",
  ontologyId: "chebi",
  rootWalk: true,
  hierarchy: true,
};

export const ChebiMultiIriHierarchyArgs = {
  api: globals.EBI_API_ENDPOINT,
  irisList: [
    "http://purl.obolibrary.org/obo/CHEBI_30242",
    "http://purl.obolibrary.org/obo/CHEBI_29874",
    "http://purl.obolibrary.org/obo/CHEBI_29416",
  ],
  ontologyId: "chebi",
  rootWalk: true,
  hierarchy: true,
  hierarchyDirection: "LR",
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

export const GraphWithGermanLabelArgs = {
  api: globals.TIB_API_ENDPOINT,
  iri: "https://database.factgrid.de/entity/Q692839",
  ontologyId: "ohdab",
  rootWalk: true,
  hierarchy: true,
  targetIri: "",
  parameter: "lang=de",
  edgeLabel: "OhdAB-Kategorie",
};

export const GraphWithGermanLabelWithComparisonArgs = {
  api: globals.TIB_API_ENDPOINT,
  iri: "https://database.factgrid.de/entity/Q522817",
  targetIri: "https://database.factgrid.de/entity/Q522788",
  ontologyId: "ohdab",
  rootWalk: true,
  hierarchy: true,
  parameter: "lang=de",
  edgeLabel: "OhdAB-Kategorie",
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
