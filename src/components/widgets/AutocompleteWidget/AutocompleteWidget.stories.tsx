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
      defaultValue: "ontology=mesh,efo&type=class&collection=nfdi4health",
    },
    hasShortSelectedLabel: {
      description: "If true, only the selected label of the entity is displayed. If false, the ontology and the entity short form is displayed behind the label. Default is true.",
      type: { required: false },
      defaultValue: true,
    },
    allowCustomTerms: {
      description: "If true, custom terms that are not found in any ontology can be added.",
      type: { required: false},
      defaultValue: false
    }
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
export const withCustomValue = Template.bind({});
withCustomValue.args = {
  allowCustomTerms: true,
  selectOption: { label: "freetext" },
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
  parameter: "collection=nfdi4health&lang=de&type=class",
};

export const displaySelectedEntityWithLongForm = Template.bind({});
displaySelectedEntityWithLongForm.args = {
  hasShortSelectedLabel: false
};

export const allowAddingCustomTerms = Template.bind({});
allowAddingCustomTerms.args = {
  allowCustomTerms: true
};





