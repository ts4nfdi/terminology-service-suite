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
        options: [
          "https://www.ebi.ac.uk/ols/api/",
          "https://semanticlookup.zbmed.de/ols/api/",
        ],
      },
    },
    iri: {
      description:
        "Iri of the term you want to fetch the ontology hierarchy for.",
    },
    colorFirst: {
      description:
        "Color of the first badge, can be primary, accent, success, warning, danger, ghost, text, subdued or hex",
      control: {
        type: "radio",
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
    },
    colorSecond: {
      description:
        "Color of the first badge, can be primary, accent, success, warning, danger, ghost, text, subdued or hex",
      control: {
        type: "radio",
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
    },
  },
};

const Template = (args: BreadcrumbWidgetProps) => (
  <BreadcrumbWidget {...args} />
);

export const BreadcrumbWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BreadcrumbWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: "https://semanticlookup.zbmed.de/ols/api/",
};
