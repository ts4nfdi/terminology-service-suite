import React from "react";
import { HierarchyWidgetProps, HierarchyWidget } from "./HierarchyWidget";
import { Entity, Ontology, Thing } from "../../../../../model/interfaces";
import { useQuery } from "react-query";
import { OlsApi } from "../../../../../api/OlsApi";

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

const iri = "http://www.ebi.ac.uk/efo/EFO_0000400"
const api = "http://ols4.qa.km.k8s.zbmed.de/ols4/api/"
const ontologyId = "efo"
const entityType = "term"
const parameter = "collection=nfdi4health"
const useLegacy = false
const olsApi = new OlsApi(api);

function getData(){
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery<Thing>(
    ["metadata", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getResponseObject(entityType, iri, ontologyId, parameter, useLegacy);
    }
  );
}

function getOntologyData(){
  const {
    data: ontologyData,
    isLoading: isLoadingOntology,
    isSuccess: isSuccessOntology,
    isError: isErrorOntology,
    error: errorOntology
  } = useQuery<Thing>(
    ["ontologyData", api, parameter, entityType, iri, ontologyId, useLegacy],
    async () => {
      return olsApi.getResponseObject("ontology", iri, ontologyId, parameter, useLegacy);
    }
  );
}



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
