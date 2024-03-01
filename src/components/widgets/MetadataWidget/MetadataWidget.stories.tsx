import React from "react";
import { MetadataWidget } from "./MetadataWidget";
import {MetadataWidgetProps} from "../../../utils/types";
import { EuiPanel } from "@elastic/eui";
import {entityTypeNames} from "../../../model/ModelTypeCheck";

export default {
  title: "MetadataWidget",
  component: MetadataWidget,
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
    ontologyId: {
      description: "Ontology ID from where the term metadata should be taken.",
    },
    iri: {
      description: "Iri of the term you want to fetch the metadata for.",
    },
    entityType: {
      table: {
        type: { summary: `${entityTypeNames.join(" | ")}` },
      },
      control: {
        type: "radio",
      },
      options: [
        "term",
        "class",
        "property",
        "individual",
        undefined,
        "INVALID STRING"
      ],
    },
    parameter: {
      type: { required: false }
    },
  },
  args: {
    parameter: "collection=nfdi4health",
    useLegacy: true,
  }
};

const Template = (args: MetadataWidgetProps) => (
  <EuiPanel>
    <MetadataWidget {...args} />
  </EuiPanel>
);

export const MetadataWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
MetadataWidget1.args = {  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "ncit",
  iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
  entityType: "term",
  parameter: "collection=nfdi4health"
};

export const SelectingDefiningOntology = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
SelectingDefiningOntology.args = {  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://purl.obolibrary.org/obo/IAO_0000631",
  entityType: "term",
  parameter: ""
};

export const DefiningOntologyUnavailable = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DefiningOntologyUnavailable.args = {  api: "https://www.ebi.ac.uk/ols4/api/",
  iri: "http://identifiers.org/uniprot/Q9VAM9",
  entityType: "term",
  parameter: ""
};
