import React from "react";
import { SearchResultsListWidget, SearchResultsListWidgetProps } from "./SearchResultsListWidget";

export default {
  title: "SearchResultsListWidget",
  component: SearchResultsListWidget,
  argTypes: {
    api: {
      description: "Instance of the OLS API to call.",
      control: {
        type: "radio",
      },
      options: [
        "https://www.ebi.ac.uk/ols/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
      ],
    },
    query: {
      description: "The terms to search. By default the search is performed over term labels, synonyms, descriptions, identifiers and annotation properties.",
    },
    initialItemsPerPage: {
      description: "Initial number of items displayed per page.",
      control: "number",
    },
    itemsPerPageOptions: {
      description: "Possible values for number of items displayed per page.",
      control: "array",
    },
    targetLink: {
      description: "The link which should be the target of the EuiCard.",
    },
    parameter: {
      defaultValue: "collection=nfdi4health",
      type: { required: false }
    },
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
  targetLink: "",
  parameter: "collection=safety",
};

export const SearchResultsListNFDI4Health = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SearchResultsListNFDI4Health.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  query: "d*",
  targetLink: "",
  parameter: "collection=nfdi4health",
};
