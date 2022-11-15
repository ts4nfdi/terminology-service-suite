import React from "react";
import { HierarchyWidgetProps, HierarchyWidget } from "./HierarchyWidget";

export default {
  title: "HierarchyWidget",
  component: HierarchyWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
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
  linkToSelf: "https://semanticlookup.zbmed.de/ols/api/ontologies/mesh/terms/",
};
