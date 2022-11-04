import React from "react";
import { DescriptionWidget, DescriptionWidgetProps } from "./DescriptionWidget";
import { EuiPanel } from "@elastic/eui";

export default {
  title: "DescriptionWidget",
  component: DescriptionWidget,
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
    color: {
      description: "Color of the text, names, hex or rgb",
      control: {
        type: "radio",
        options: [
          "default",
          "subdued",
          "success",
          "accent",
          "danger",
          "warning",
          "ghost",
          "#00FFFF",
          "rgb(255,0,255)",
        ],
      },
    },
    descText: {
      description:
        "Set your own text manually that overwrites the text fetched from the API",
    },
    ontologyID: {
      description: "Ontology ID from where the object description should be taken.",
    },
    objType: {
      description: "Sets the type of the object whose description you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",
      control: {
        type: "radio",
        options: [
          "ontology",
          "term",
          "class",
          "property",
          "individual",
          "INVALID STRING"
        ],
      },
    },
    iri: {
      description: "Object IRI whose description you want to fetch. For ontologies this is ignored, since the 'ontologyID' arg is sufficient.",
    },
  },
};

const Template = (args: DescriptionWidgetProps) => (
  <>
    <EuiPanel>
      <DescriptionWidget {...args} />
    </EuiPanel>
  </>
);

export const DescriptionWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
DescriptionWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: "https://semanticlookup.zbmed.de/ols/api/",
  ontologyID: "ncit",
  objType: "term",
};
