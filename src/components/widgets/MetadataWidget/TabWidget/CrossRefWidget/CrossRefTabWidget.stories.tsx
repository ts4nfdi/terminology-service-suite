import React from "react";
import { CrossRefTabWidget, CrossRefWidgetProps } from "./CrossRefTabWidget";

export default {
  title: "CrossRefTabWidget",
  component: CrossRefTabWidget,
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
        "IRI of the entity you want to fetch the cross references for.",
    },
    ontologyId: {
      description: "Ontology ID from where the entity metadata should be taken.",
    },
    entityType: {
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
    useLegacy: {
      type: { required: false },
      control: "boolean",
      description: "Toggle between OLS3 (legacy) and OLS4 API versions.",
      default: true
    }
  },
  args: {
    parameter: "collection=nfdi4health",
  }
};

const Template = (args: CrossRefWidgetProps) => <CrossRefTabWidget {...args} />;

export const CrossRefTabWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
CrossRefTabWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/RXNO_0000138",
  api: "https://www.ebi.ac.uk/ols4/api/",
  entityType: "term",
  ontologyId: "rxno",
  parameter: ""
};

export const SelectingDefiningOntology = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SelectingDefiningOntology.args = {  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://purl.obolibrary.org/obo/IAO_0000631",
  entityType: "term",
  parameter: ""
};

export const DefiningOntologyUnavailable = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DefiningOntologyUnavailable.args = {  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://identifiers.org/uniprot/Q9VAM9",
  entityType: "term",
  parameter: ""
};
