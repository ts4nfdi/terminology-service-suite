import React from "react";
import {
  BreadcrumbWidget,
  BreadcrumbWidgetProps,
} from "./BreadcrumbWidget";

export default {
  title: "BreadcrumbWidget",
  component: BreadcrumbWidget,
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
        "https://www.ebi.ac.uk/ols/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
      ],
    },
    iri: {
      description:
        "Iri of the term you want to fetch the ontology hierarchy for.",
    },
    ontologyId: {
      description: "Ontology ID from where the object description should be taken.",
    },
  entityType: {
    description: "Sets the type of the object whose description you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",
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
    colorFirst: {
      description:
        "Color of the first badge, can be primary, accent, success, warning, danger, ghost, text, subdued or hex",
      control: {
        type: "radio",
      },
      options: [
        "primary",
        "accent",
        "success",
        "warning",
        "danger",
        "ghost",
        "text",
        "subdued",
        "#00FFFF",
      ],
    },
    colorSecond: {
      description:
        "Color of the first badge, can be primary, accent, success, warning, danger, ghost, text, subdued or hex",
      control: {
        type: "radio",
      },
      options: [
        "primary",
        "accent",
        "success",
        "warning",
        "danger",
        "ghost",
        "text",
        "subdued",
        "#00FFFF",
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

const Template = (args: BreadcrumbWidgetProps) => (
  <BreadcrumbWidget {...args} />
);

export const BreadcrumbWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BreadcrumbWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "ncit",
  entityType: "term",
  parameter: "collection=nfdi4health",
};

export const SelectingDefiningOntology = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SelectingDefiningOntology.args = {  api: "https://www.ebi.ac.uk/ols/api/",
  iri: "http://purl.obolibrary.org/obo/IAO_0000631",
  entityType: "term",
  parameter: ""
};

export const DefiningOntologyUnavailable = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DefiningOntologyUnavailable.args = {  api: "https://www.ebi.ac.uk/ols/api/",
  iri: "http://identifiers.org/uniprot/Q9VAM9",
  entityType: "term",
  parameter: ""
};
