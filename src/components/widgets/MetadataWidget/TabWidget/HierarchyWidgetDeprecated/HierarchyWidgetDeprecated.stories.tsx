import React from "react";
import { HierarchyWidgetDeprecatedProps, HierarchyWidgetDeprecated } from "./HierarchyWidgetDeprecated";
export default {
  title: "HierarchyWidgetDeprecated",
  component: HierarchyWidgetDeprecated,
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
    ontologyId: {
      description: "Ontology ID from where the term hierarchy should be taken.",
    },
    iri: {
      description: "Iri of the term you want to fetch the term hierarchy for.",
    },
    parameter: {
      collection: "nfdi4health"
    }
  },
};
const Template = (args: HierarchyWidgetDeprecatedProps) => <HierarchyWidgetDeprecated {...args} />;
export const HierarchyWidgetDeprecated1 = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
HierarchyWidgetDeprecated1.args = {
  iri: "http://purl.bioontology.org/ontology/MESH/D003704",
  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "mesh",
  parameter: "nfdi4health",
};