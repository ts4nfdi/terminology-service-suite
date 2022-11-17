import React from "react";
import { HierarchyWidgetProps, HierarchyWidget } from "./HierarchyWidget";

export default {
  title: "HierarchyWidget",
  component: HierarchyWidget,
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
    ontologyID: {
      description: "Ontology ID from where the term hierarchy should be taken.",
    },
    iri: {
      description: "Iri of the term you want to fetch the term hierarchy for.",
    },
    linkToSelf: {
      description: "Link to the source of the ontology terms",
    },
  },
};

const Template = (args: HierarchyWidgetProps) => <HierarchyWidget {...args} />;

export const HierarchyWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
HierarchyWidget1.args = {
  iri: "http://purl.bioontology.org/ontology/MESH/D003704",
  api: "https://semanticlookup.zbmed.de/ols/api/",
  ontologyID: "mesh",
  linkToSelf: "https://semanticlookup.zbmed.de/ols/api/ontologies/mesh/terms/",
};
