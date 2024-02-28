import React from "react";
import { SearchBarWidget } from "./SearchBarWidget";
import {SearchBarWidgetProps} from "../../../utils/types";

export default {
  title: "SearchBarWidget",
  component: SearchBarWidget,
  argTypes: {
    api: {
      description: "Instance of the OLS API to call.",
      control: {
        type: "radio",
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
      ],
    },
    query: {
      description: "The search term to receive suggestions for.",
    },
    onSearchValueChange: {
      description: "Function to be called when the search value in the search bar changes.",
      action: "onSearchValueChange"
    },
    parameter: {}
  },
  args: {
    parameter: "collection=nfdi4health",
  },
};

const Template = (args: SearchBarWidgetProps) => (
    <SearchBarWidget {...args} />
);

export const SearchBarWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SearchBarWidget1.args = {  api: "https://semanticlookup.zbmed.de/api/",
  query: "diab",
};
