import React from "react";
import { AutocompleteWidget } from "./AutocompleteWidget";
import "@elastic/eui/dist/eui_theme_light.json";
import {AutocompleteWidgetProps} from "../../../utils/types";

export default {
  title: "Autocomplete Widget",
  component: AutocompleteWidget,
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
    selectionChangedEvent: {
      action: "selectionChangedEvent",
    },
    placeholder: {
      defaultValue: "Search for Term",
    },
    selectOption: {},
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

const Template = (args: AutocompleteWidgetProps) => (
    <AutocompleteWidget {...args} />
);

export const WithDefaults = Template.bind({});

export const WithValue = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
WithValue.args = {
  selectOption: { iri: "http://purl.bioontology.org/ontology/MESH/D000086382" },
};
export const WithCustomValue = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
WithCustomValue.args = {
  allowCustomTerms: true,
  selectOption: { label: "freetext" },
};
export const WithInvalidValue = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
WithInvalidValue.args = {
  selectOption: {
    iri: "ht3stp://purl.bioontology.org/ontology/MESH/D000086382",
  },
};

export const WithGermanInput = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
WithGermanInput.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  parameter: "collection=nfdi4health&lang=de&type=class",
};

export const WithDescriptionAndShortForm = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
WithDescriptionAndShortForm.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  parameter: "fieldList=description,label,iri,ontology_name,type,short_form",
};

export const DisplaySelectedEntityWithLongForm = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DisplaySelectedEntityWithLongForm.args = {
  hasShortSelectedLabel: false
};

export const AllowAddingCustomTerms = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
AllowAddingCustomTerms.args = {
  allowCustomTerms: true
};





