import React from "react";
import {
  AlternativeNameTabWidget,
  AlternativeNameTabWidgetProps,
} from "./AlternativeNameTabWidget";

export default {
  title: "AlternativeNameTabWidget",
  component: AlternativeNameTabWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    api: {
      description: "API",
      control: {
        type: "radio",
        options: [
          "https://www.ebi.ac.uk/ols/api/",
          "https://semanticlookup.zbmed.de/ols/api/",
        ],
      },
    },
  },
};

const Template = (args: AlternativeNameTabWidgetProps) => (
  <AlternativeNameTabWidget {...args} />
);

export const AlternativeNameTabWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
AlternativeNameTabWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: "https://semanticlookup.zbmed.de/ols/api/",
};
