import React from "react";
import { DescriptionWidget, DescriptionWidgetProps } from "./DescriptionWidget";

export default {
  title: "DescriptionWidget",
  component: DescriptionWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    api: {
      description: "API die genutzt werden soll",
      control: {
        type: "radio",
        options: [
          "https://www.ebi.ac.uk/ols/api/",
          "https://semanticlookup.zbmed.de/ols/api/",
          "http://localhost:8080/api/",
          "http://localhost:5000/api/",
        ],
      },
    },
  },
};

const Template = (args: DescriptionWidgetProps) => (
  <DescriptionWidget {...args} />
);

export const DescriptionWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
DescriptionWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: "https://semanticlookup.zbmed.de/ols/api/",
};
