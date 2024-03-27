import React from "react";
import { AutocompleteWidget } from "./AutocompleteWidget";
import "@elastic/eui/dist/eui_theme_light.json";
import {AutocompleteWidgetProps} from "../../../utils/types";

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
        "https://service.tib.eu/ts4tib/api/"
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
      type: { required: false },
    },
    allowCustomTerms: {
      type: { required: false},
    },
    singleSelection: {
      type: { required: false},
    }
  },
  args: {
    api: "https://semanticlookup.zbmed.de/ols/api/",
    parameter: "ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
    hasShortSelectedLabel: true,
    allowCustomTerms: false,
    singleSelection: true,
  }
};

const Template = (args: AutocompleteWidgetProps) => (
    <AutocompleteWidget {...args} />
);

export const WithDefaults = Template.bind({});

export const withValue = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
withValue.args = {
  preselected: [{ iri: "http://purl.bioontology.org/ontology/MESH/D000086382" }],
};
export const WithCustomValue = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
WithCustomValue.args = {
  allowCustomTerms: true,
  preselected: [{ label: "freetext" }],
};
export const withInvalidValue = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
withInvalidValue.args = {
  preselected: [{
    iri: "ht3stp://purl.bioontology.org/ontology/MESH/D000086382",
  }],
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

export const allowMultipleTerms = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
allowMultipleTerms.args = {
  singleSelection: false,
};

export const withMultipleValues = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
withMultipleValues.args = {
  preselected: [{ iri: "http://purl.bioontology.org/ontology/MESH/D000086382" }, { iri: "http://purl.bioontology.org/ontology/MESH/D003920" }],
  singleSelection: false,
};





