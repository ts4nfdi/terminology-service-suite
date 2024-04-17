import React from "react";
import { HierarchyWidget } from "./HierarchyWidget";
import {HierarchyWidgetProps} from "../../../../../utils/types";
import {entityTypeNames} from "../../../../../model/ModelTypeCheck";

export default {
  title: "HierarchyWidget",
  component: HierarchyWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The HierarchyWidget is a component designed to visualize and interact with hierarchical data structures of ontology hierarchies, specifically tailored for the OLS4 API to retrieve and display hierarchical relationships between terms within a given ontology."
      }
    }
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
        "https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/",
        "https://service.tib.eu/ts4tib/api/"
      ],
    },
    ontologyId: {
      description: "Ontology ID from where the term hierarchy should be taken.",
    },
    iri: {
      description: "Iri of the term you want to fetch the term hierarchy for.",
    },
    entityType: {
      table: {
        type: { summary: `${entityTypeNames.join(" | ")}` },
      },
      control: { type: "radio" },
      options: [
        "property",
        "individual",
        "class",
        "not specified"
      ]
    },
  },
  args: {

  }
};

const Template = (args: HierarchyWidgetProps) => <HierarchyWidget {...args} />;

export const HierarchyWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
HierarchyWidget1.args = {
  iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
  api: "https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/",
  ontologyId: "efo",
  entityType: "class"
};

export const HierarchyWidgetLarge = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
HierarchyWidgetLarge.storyName = "Hierarchy Widget Large Hierarchy"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
HierarchyWidgetLarge.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  ontologyId: "ncbitaxon",
  iri: "http://purl.obolibrary.org/obo/NCBITaxon_2489341",
  entityType: "term",
};