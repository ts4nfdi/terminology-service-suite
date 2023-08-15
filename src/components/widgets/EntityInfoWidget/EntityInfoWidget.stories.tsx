import React from "react";
import { EntityInfoWidget, EntityInfoWidgetProps } from "./EntityInfoWidget";

export default {
  title: "EntityInfoWidget",
  component: EntityInfoWidget,
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
        "https://www.ebi.ac.uk/ols/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
      ],
    },
    hasTitle: {
      description: "Show title, default is true",
      type: { required: false },
    },
    entityType: {
      description: "Sets the type of the entity whose information you want to fetch. Accepts 'term', 'class', 'property', or 'individual'.",
      control: {
        type: "radio",
      },
      options: [
        "ontology",
        "term",
        "class",
        "property",
        "individual",
        "INVALID STRING"
      ],
    },
    iri: {
      description: "Entity IRI whose information you want to fetch.",
    },
    parameter: {
      type: { required: false }
    },
  },
  args: {
    hasTitle: true,
    parameter: "collection=nfdi4health",
  }
};

const Template = (args: EntityInfoWidgetProps) => (
  <>
    <EntityInfoWidget {...args} />
  </>
);

export const OntologyInfoWidget = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
OntologyInfoWidget.args = {  api: "https://semanticlookup.zbmed.de/api/",
  entityType: "ontology",
  ontologyId: "ncit",
  hasTitle: true,
};

export const TermInfoWidget = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TermInfoWidget.args = {  api: "https://semanticlookup.zbmed.de/api/",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  entityType: "term",
  ontologyId: "ncit",
  hasTitle: true,
};

export const PropertyInfoWidget = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
PropertyInfoWidget.args = {  api: "https://semanticlookup.zbmed.de/api/",
  iri: "http://www.w3.org/2004/02/skos/core#altLabel",
  entityType: "property",
  ontologyId: "mesh",
  hasTitle: true,
};

export const IndividualInfoWidget = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
IndividualInfoWidget.args = {  api: "https://semanticlookup.zbmed.de/api/",
  iri: "http://purl.obolibrary.org/obo/IAO_0000423",
  entityType: "individual",
  ontologyId: "clo",
  hasTitle: true,
};
