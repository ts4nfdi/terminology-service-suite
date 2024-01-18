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
        "https://www.ebi.ac.uk/ols4/api/",
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
    showBadges: {
      type: { required: false },
      description: "If true, entity badges linking to their defining ontologies are shown."
    },
    useLegacy: {
      type: { required: false },
      description: "Specifies the API version used."
    }
  },
  args: {
    api: "https://semanticlookup.zbmed.de/api/",
    hasTitle: true,
    showBadges: true,
    useLegacy: true,
    iri: ""
  }
};

const Template = (args: EntityInfoWidgetProps) => (
  <EntityInfoWidget {...args} />
);

export const OntologyInfoWidget = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
OntologyInfoWidget.args = {
  entityType: "ontology",
  ontologyId: "ncit"
};

export const TermInfoWidget = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TermInfoWidget.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  entityType: "term",
  ontologyId: "ncit"
};

export const PropertyInfoWidget = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
PropertyInfoWidget.args = {
  iri: "http://www.w3.org/2004/02/skos/core#altLabel",
  entityType: "property",
  ontologyId: "mesh"
};

export const IndividualInfoWidget = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
IndividualInfoWidget.args = {
  iri: "http://purl.obolibrary.org/obo/IAO_0000423",
  entityType: "individual",
  ontologyId: "clo"
};

export const OntologyInfoWidgetNewAPI = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
OntologyInfoWidgetNewAPI.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  useLegacy: false,
  entityType: "ontology",
  ontologyId: "mp" // "uberon" is also good for demonstration
};

export const InfoWidgetBadges = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
InfoWidgetBadges.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  useLegacy: false,
  entityType: "class",
  iri: "http://purl.obolibrary.org/obo/UBERON_0000006",
  ontologyId: "uberon"
};