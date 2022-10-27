import React from "react";
import { SearchResultsListWidget, SearchResultsListWidgetProps } from "./SearchResultsListWidget";

export default {
  title: "SearchResultsListWidget",
  component: SearchResultsListWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    api: {
      description: "Instance of the OLS API to call.",
      control: {
        type: "radio",
        options: [
          "https://www.ebi.ac.uk/ols/api/",
          "https://semanticlookup.zbmed.de/ols/api/",
        ],
      },
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
  },
};

const Template = (args: SearchResultsListWidgetProps) => (
  <>
    <SearchResultsListWidget {...args} />
  </>
);

export const SearchResultsListWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SearchResultsListWidget1.args = {
  api: "https://semanticlookup.zbmed.de/ols/api/",
  query: "diabetes",
};
