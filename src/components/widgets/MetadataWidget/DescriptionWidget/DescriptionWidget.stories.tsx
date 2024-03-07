import React from "react";
import { DescriptionWidget } from "./DescriptionWidget";
import {DescriptionWidgetProps} from "../../../../utils/types";
import { EuiPanel } from "@elastic/eui";
import {thingTypeNames} from "../../../../model/ModelTypeCheck";

export default {
  title: "DescriptionWidget",
  component: DescriptionWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    api: {
      control: {
        type: "radio",
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
      ],
    },
    color: {
      table: {
        type: { summary: `EuiLinkColor | string` },
      },
      control: {
        type: "radio",
      },
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
    descText: {},
    ontologyId: {
      description: "Ontology ID from where the object description should be taken.",
    },
    thingType: {
      description: "Sets the type of the object whose description you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",
      table: {
        type: { summary: `${thingTypeNames.join(" | ")}` },
      },
      control: {
        type: "radio",
      },
      options: [
        "ontology",
        "term",
        "class",
        "property",
        "individual",
        undefined,
        "INVALID STRING"
      ],
    },
    iri: {
      description: "Object IRI whose description you want to fetch. For ontologies this is ignored, since the 'ontologyId' arg is sufficient.",
    },
    parameter: {
      type: { required: false }
    },
    useLegacy: { required: false }
  },
  args: {
    parameter: "collection=nfdi4health",
    useLegacy: true,
  }
};

const Template = (args: DescriptionWidgetProps) => (
  <EuiPanel>
    <DescriptionWidget {...args} />
  </EuiPanel>
);

export const DescriptionWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
DescriptionWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "ncit",
  thingType: "term",
  parameter: "collection=nfdi4health"
};

export const SelectingDefiningOntology = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SelectingDefiningOntology.args = {  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://purl.obolibrary.org/obo/IAO_0000631",
  thingType: "term",
  parameter: ""
};

export const DefiningOntologyUnavailable = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DefiningOntologyUnavailable.args = {  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://identifiers.org/uniprot/Q9VAM9",
  thingType: "term",
  parameter: ""
};
