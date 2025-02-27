import * as globals from "../../../app/globals";

import {
  apiArgType,
  initialItemsPerPageArgType,
  itemsPerPageOptionsArgType,
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
};

export const SearchResultsListSafety = {
  args: {
    api: globals.ZBMED_API_ENDPOINT,
    query: "d*",
    targetLink: "",
    parameter:
      "collection=safety&fieldList=description,label,iri,ontology_name,type,short_form",
  },
};

export const SearchResultsListNFDI4Health = {
  args: {
    api: globals.ZBMED_API_ENDPOINT,
    query: "d*",
    targetLink: "",
    parameter:
      "collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
    preselected: [{ label: "diabetes" }],
    useLegacy: true,
  },
};

export const ErrorSearchResultsList = {
  args: {
    api: globals.ZBMED_API_ENDPOINT,
    query: "d*",
    targetLink: "",
    parameter: "collection=nfdi4health",
  },
};

export const TibNFDI4CHEM = {
  args: {
    api: globals.TIB_API_ENDPOINT,
    parameter:
      "classification=NFDI4CHEM&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",
    query: "assay",
    targetLink: "",
  },
};

export const TibDataPlant = {
  args: {
    api: globals.TIB_API_ENDPOINT,
    parameter:
      "classification=DataPLANT&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",
    query: "agriculture",
    targetLink: "",
  },
};

export const SearchResultsListOls4 = {
  args: {
    api: globals.EBI_API_ENDPOINT,
    query: "*",
    targetLink: "/",
    parameter: "",
    useLegacy: false,
  },
};
