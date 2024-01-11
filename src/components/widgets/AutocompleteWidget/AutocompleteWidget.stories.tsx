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
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
      ],
    },
    selectionChangedEvent: {
      action: "selectionChangedEvent",
    },
    placeholder: {
      defaultValue: "Search for Term",
    },
    preselected: {},
    parameter: {},
    hasShortSelectedLabel: {
      description: "If true, only the selected label of the entity is displayed. If false, the ontology and the entity short form is displayed behind the label. Default is true.",
      type: { required: false },
    },
    allowCustomTerms: {
      description: "If true, custom terms that are not found in any ontology can be added.",
      type: { required: false},
    },
    singleSelection: {
      description: "If true, only one concept can be selected at once.",
      type: { required: false},
    }
  },
  args: {
    api: "https://semanticlookup.zbmed.de/ols/api/",
    parameter: "ontology=mesh,efo&type=class&collection=nfdi4health",
    hasShortSelectedLabel: true,
    allowCustomTerms: false,
    singleSelection: true,
  }
};
const Template: ComponentStory<typeof AutocompleteWidget> = (args) => (
  <AutocompleteWidget {...args} />
);

export const withDefaults = Template.bind({});

export const withValue = Template.bind({});
withValue.args = {
  preselected: [{ iri: "http://purl.bioontology.org/ontology/MESH/D000086382" }],
};
export const withCustomValue = Template.bind({});
withCustomValue.args = {
  allowCustomTerms: true,
  preselected: [{ label: "freetext" }],
};
export const withInvalidValue = Template.bind({});
withInvalidValue.args = {
  preselected: [{
    iri: "ht3stp://purl.bioontology.org/ontology/MESH/D000086382",
  }],
};

export const withGermanInput = Template.bind({});
withGermanInput.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  parameter: "collection=nfdi4health&lang=de&type=class",
};

export const withDescriptionAndShortForm = Template.bind({});
withDescriptionAndShortForm.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  parameter: "fieldList=description,label,iri,ontology_name,type,short_form",
};

export const displaySelectedEntityWithLongForm = Template.bind({});
displaySelectedEntityWithLongForm.args = {
  hasShortSelectedLabel: false
};

export const allowAddingCustomTerms = Template.bind({});
allowAddingCustomTerms.args = {
  allowCustomTerms: true
};

export const allowMultipleTerms = Template.bind({});
allowMultipleTerms.args = {
  singleSelection: false,
};

export const withMultipleValues = Template.bind({});
withMultipleValues.args = {
  preselected: [{ iri: "http://purl.bioontology.org/ontology/MESH/D000086382" }, { iri: "http://purl.bioontology.org/ontology/MESH/D003920" }],
  singleSelection: false,
};





