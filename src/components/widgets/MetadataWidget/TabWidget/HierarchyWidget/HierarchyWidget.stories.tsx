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
      description: `The API instance for the API call.
- **Official OLS4 API of EMBL-EBI**: [https://www.ebi.ac.uk/ols4/api/](https://www.ebi.ac.uk/ols4/api/)
- **Official SemLookP API (based on OLS3)**: [https://semanticlookup.zbmed.de/ols/api/](https://semanticlookup.zbmed.de/ols/api/)
- **Improved SemLookP API (beta version)**: [https://semanticlookup.zbmed.de/api/](https://semanticlookup.zbmed.de/api/)`,
      control: {
        type: "radio",
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
        "http://ols4.qa.km.k8s.zbmed.de/ols4/api/"
      ],
    },
    ontologyId: {
      description: "Ontology ID from where the term hierarchy should be taken.",
    },
    iri: {
      description: "Iri of the term you want to fetch the term hierarchy for.",
    },
    parameter: {
      type: { required: false }
    },
  },
  args: {
    parameter: "collection=nfdi4health",
  }
};

const Template = (args: HierarchyWidgetProps) => <HierarchyWidget {...args} />;

export const HierarchyWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
HierarchyWidget1.args = {
  iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
  api: "http://ols4.qa.km.k8s.zbmed.de/ols4/api/",
  ontologyId: "efo",
  parameter: "collection=nfdi4health",
};
