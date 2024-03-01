import React from "react";
import { BreadcrumbWidget, BreadcrumbWidgetProps } from "./BreadcrumbWidget";

export default {
  title: "BreadcrumbWidget",
  component: BreadcrumbWidget,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    api: {
      description: `The API instance for the API call.
- **Official OLS4 API of EMBL-EBI**: [https://www.ebi.ac.uk/ols4/api/](https://www.ebi.ac.uk/ols4/api/)
- **Official SemLookP API (based on OLS3)**: [https://semanticlookup.zbmed.de/ols/api/](https://semanticlookup.zbmed.de/ols/api/)
- **Improved SemLookP API (beta version)**: [https://semanticlookup.zbmed.de/api/](https://semanticlookup.zbmed.de/api/)`,
      control: {
        type: "radio"
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/"
      ]
    },
    iri: {
      description:
        "Iri of the term you want to fetch the ontology hierarchy for."
    },
    ontologyId: {
      description: "Ontology ID from where the object description should be taken."
    },
    entityType: {
      description: "Sets the type of the object whose description you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",
      control: {
        type: "radio"
      },
      options: [
        "term",
        "class",
        "property",
        "individual",
        "INVALID STRING"
      ]
    },
    colorFirst: {
      description:
        "Color of the first badge, can be primary, accent, success, warning, danger, ghost, text, subdued or hex",
      control: {
        type: "radio"
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
        "#00FFFF"
      ]
    },
    colorSecond: {
      description:
        "Color of the first badge, can be primary, accent, success, warning, danger, ghost, text, subdued or hex",
      control: {
        type: "radio"
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
        "#00FFFF"
      ]
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
    parameter: "collection=nfdi4health"
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
  parameter: "collection=nfdi4health"
};

export const SelectingDefiningOntology = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SelectingDefiningOntology.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://purl.obolibrary.org/obo/IAO_0000631",
  entityType: "term",
  parameter: ""
};

export const DefiningOntologyUnavailable = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DefiningOntologyUnavailable.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://identifiers.org/uniprot/Q9VAM9",
  entityType: "term",
  parameter: ""
};

export const ErrorBreadcrumbWidget = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ErrorBreadcrumbWidget.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985987654345678",
  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "ncit",
  entityType: "term",
  parameter: "collection=nfdi4health"
};
