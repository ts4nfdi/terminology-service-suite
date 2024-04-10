import React from "react";
import { SearchResultsListWidget } from "./SearchResultsListWidget";
import {SearchResultsListWidgetProps} from "../../../utils/types";

export default {
  title: "SearchResultsListWidget",
  component: SearchResultsListWidget,
  argTypes: {
    api: {
      control: {
        type: "radio",
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
      ],
    },
    query: {},
    initialItemsPerPage: {
      control: "number",
    },
    itemsPerPageOptions: {
      control: "array",
    },
    targetLink: {},
    parameter: {
      type: { required: false }
    },
  },
  args: {
    parameter: "collection=nfdi4health",
  },
};

const Template = (args: SearchResultsListWidgetProps) => (
    <SearchResultsListWidget {...args} />
);

export const SearchResultsListSafety = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SearchResultsListSafety.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  query: "d*",
  parameter: "collection=safety",
};

export const SearchResultsListNFDI4Health = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SearchResultsListNFDI4Health.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  query: "d*",
  parameter: "collection=nfdi4health",
};

export const WithOnNavigateFunction = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
WithOnNavigateFunction.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  query: "diabetes",
  parameter: "collection=nfdi4health",
  onNavigateToEntity: (ontologyId: string, entityType: string, iri: string) => {
    console.log(`Navigating to ontologyId: ${ontologyId}, entityType: ${entityType}, iri: ${iri}`);
 },
};

export const ErrorSearchResultsList = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ErrorSearchResultsList.args = {
  api: "ht3ps://semanticlookup.zbmed.de/api/",
  query: "d*",
  parameter: "collection=nfdi4health",
};
