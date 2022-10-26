import React from "react";
import { AutocompleteWidget } from "./AutocompleteWidget";
import "@elastic/eui/dist/eui_theme_light.json";

export default {
  title: "Autocomplete Widget",
  component: AutocompleteWidget,
  argTypes: {
    api: {
      control: {
        type: "radio",
        options: [
          "https://www.ebi.ac.uk/ols/api/",
          "https://semanticlookup.zbmed.de/ols/api/",
        ],
      },
      defaultValue: "https://semanticlookup.zbmed.de/ols/api/",
    },
    selectionChangedEvent:{
        action: 'selectionChangedEvent'
    },
    placeholder: {
      defaultValue: "Search for Term",
    },
    parameter: {
      defaultValue: "ontology=mesh,efo&type=class",
    },
  },
};

const Template = (args: any) => <AutocompleteWidget {...args} />;

export const AutocompleteWidget1 = Template.bind({});
