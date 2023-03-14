import React from "react";
import { AutocompleteWidget } from "./AutocompleteWidget";
import "@elastic/eui/dist/eui_theme_light.json";
import { ComponentStory } from "@storybook/react";

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
          "https://semanticlookup.zbmed.de/api/",
        ],
      },
      defaultValue: "https://semanticlookup.zbmed.de/ols/api/",
    },
    selectionChangedEvent: {
      action: "selectionChangedEvent",
    },
    placeholder: {
      defaultValue: "Search for Term",
    },
    selectOption: {},
    parameter: {
      defaultValue: "ontology=mesh,efo&type=class&frontend=nfdi4health",
    },
  },
};
const Template: ComponentStory<typeof AutocompleteWidget> = (args) => (
  <AutocompleteWidget {...args} />
);

export const withDefaults = Template.bind({});

export const withValue = Template.bind({});
withValue.args = {
  selectOption: { iri: "http://purl.bioontology.org/ontology/MESH/D000086382" },
};

export const withInvalidValue = Template.bind({});
withInvalidValue.args = {
  selectOption: {
    iri: "ht3stp://purl.bioontology.org/ontology/MESH/D000086382",
  },
};

export const withGermanInput = Template.bind({});
withGermanInput.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  parameter: "frontend=nfdi4health&lang=de&type=class",
};






