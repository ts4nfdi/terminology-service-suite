import React from "react";
import { SearchWidget, SearchWidgetProps } from "./SearchWidget";
import "@elastic/eui/dist/eui_theme_light.json";

export default {
  title: "SearchWidget",
  component: SearchWidget,
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
      defaultValue: "https://semanticlookup.zbmed.de/ols/api/"

    },
    onChange: {
      description: "Will be called everytime the text in the input field is parsed. Returns Object of the OLS API answer. " +
          "Pass as argument a function that takes the result of the search.",
    },
    placeholder: {
      description: "Placeholder for the input field.",
      defaultValue: "Search for Term"
    }
  },
};

const Template = (args: SearchWidgetProps) => <SearchWidget {...args} />;

export const SearchWidget1 = Template.bind({});
