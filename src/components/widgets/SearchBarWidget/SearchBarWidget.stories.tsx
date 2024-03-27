import React from "react";
import { SearchBarWidget } from "./SearchBarWidget";
import {SearchBarWidgetProps} from "../../../utils/types";

export default {
  title: "SearchBarWidget",
  component: SearchBarWidget,
  argTypes: {
    api: {
      control: {
        type: "radio",
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
        "https://service.tib.eu/ts4tib/api/"
      ],
    },
    query: {},
    onSearchValueChange: {
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
