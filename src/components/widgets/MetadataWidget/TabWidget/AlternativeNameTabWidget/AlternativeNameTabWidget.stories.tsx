import React from "react";
import {AlternativeNameTabWidget} from "./AlternativeNameTabWidget";
import {AlternativeNameTabWidgetProps} from "../../../../../utils/types";

export default {
  title: "AlternativeNameTabWidget",
  component: AlternativeNameTabWidget,
  parameters: {
    layout: "centered",
  },
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
    iri: {
      description:
        "Iri of the term you want to fetch the alternative names for.",
    },
    ontologyId: {
      description: "Ontology ID from where the entity metadata should be taken.",
    },
    thingType: {
      description: "Sets the type of the entity whose information you want to fetch. Accepts 'term', 'class', 'property', or 'individual'.",
      control: {
        type: "radio",
      },
      options: [
        "term",
        "class",
        "property",
        "individual",
        "INVALID STRING"
      ],
    },
    parameter: {
      type: { required: false }
    },
  },
  args: {
    parameter: "collection=nfdi4health",
  }
};

const Template = (args: AlternativeNameTabWidgetProps) => (
  <AlternativeNameTabWidget {...args} />
);

export const AlternativeNameTabWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
AlternativeNameTabWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: "https://semanticlookup.zbmed.de/api/",
  thingType: "term",
  ontologyId: "ncit",
};

export const SelectingDefiningOntology = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SelectingDefiningOntology.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://purl.obolibrary.org/obo/IAO_0000631",
  thingType: "term",
  parameter: ""
};

export const DefiningOntologyUnavailable = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DefiningOntologyUnavailable.args = {  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://identifiers.org/uniprot/Q9VAM9",
  thingType: "term",
  parameter: ""
};

