import * as globals from "../../../app/globals";

import { expect, waitFor, within } from "storybook/test";
import {
  apiArgType,
  initialItemsPerPageArgType,
  itemsPerPageOptionsArgType,
  onNavigateToOntologyArgType,
  parameterArgType,
  preselectedArgType,
  queryArgType,
  targetLinkArgType,
  useLegacyArgType,
} from "../../../stories/storyArgs";

export const SearchResultsListWidgetStoryArgTypes = {
  ...apiArgType,
  ...queryArgType,
  ...preselectedArgType,
  ...initialItemsPerPageArgType,
  ...itemsPerPageOptionsArgType,
  ...targetLinkArgType,
  ...useLegacyArgType,
  ...parameterArgType,
  ...onNavigateToOntologyArgType,
};

export const SearchResultsListWidgetStoryArgs = {
  api: "",
  useLegacy: true,
  query: "",
  initialItemsPerPage: 10,
  itemsPerPageOptions: [10, 25, 50, 100],
  preselected: [],
  targetLink: "",
  parameter: "collection=nfdi4health",
  onNavigateToOntology: "Console message",
};

export const SearchResultsListSafetyArgs = {
  api: globals.ZBMED_OLS4_API,
  query: "d*",
  targetLink: "",
  parameter:
    "collection=safety&fieldList=description,label,iri,ontology_name,type,short_form",
};

export const SearchResultsListNFDI4HealthArgs = {
  api: globals.ZBMED_OLS4_API,
  query: "d*",
  targetLink: "",
  parameter:
    "collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
  preselected: [{ label: "diabetes" }],
  useLegacy: true,
};

export const ErrorSearchResultsListArgs = {
  api: globals.ZBMED_OLS4_API,
  query: "d*",
  targetLink: "",
  parameter: "collection=nfdi4health",
};

export const TibNFDI4CHEMArgs = {
  api: globals.TIB_API_ENDPOINT,
  parameter:
    "classification=NFDI4CHEM&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",
  query: "assay",
  targetLink: "",
};

export const TibDataPlantArgs = {
  api: globals.TIB_API_ENDPOINT,
  parameter:
    "classification=DataPLANT&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",
  query: "agriculture",
  targetLink: "",
};

export const SearchResultsListOls4Args = {
  api: globals.EBI_API_ENDPOINT,
  query: "*",
  targetLink: "/",
  parameter: "",
  useLegacy: false,
};

export const commonSearchResultsListWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("search-result");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
