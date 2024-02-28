import React from "react";
import {BreadcrumbWidget} from "./BreadcrumbWidget";
import {BreadcrumbWidgetProps} from "../../../../utils/types";

export default {
  title: "BreadcrumbWidget",
  component: BreadcrumbWidget,
  parameters: {
    layout: "centered",
  },
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
    iri: {},
    ontologyId: {},
  entityType: {
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
      table: {
        type: { summary: `EuiLinkColor | string` },
      },
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
      table: {
        type: { summary: `EuiLinkColor | string` },
      },
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

export const ErrorBreadcrumbWidget = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ErrorBreadcrumbWidget.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985987654345678",
  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "ncit",
  entityType: "term",
  parameter: "collection=nfdi4health",
};
