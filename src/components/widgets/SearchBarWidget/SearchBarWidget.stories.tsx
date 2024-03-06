import React from "react";
import { SearchBarWidget, SearchBarWidgetProps } from "./SearchBarWidget";

export default {
  title: "SearchBarWidget",
  component: SearchBarWidget,
  argTypes: {
    api: {
      description: `The API instance for the API call.
- **Official OLS4 API of EMBL-EBI**: [https://www.ebi.ac.uk/ols4/api/](https://www.ebi.ac.uk/ols4/api/)
- **Official SemLookP API (based on OLS3)**: [https://semanticlookup.zbmed.de/ols/api/](https://semanticlookup.zbmed.de/ols/api/)
- **Improved SemLookP API (beta version)**: [https://semanticlookup.zbmed.de/api/](https://semanticlookup.zbmed.de/api/)`,
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
