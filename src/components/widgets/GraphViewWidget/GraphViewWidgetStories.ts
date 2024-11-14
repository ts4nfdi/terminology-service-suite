import * as globals from '../../../app/globals';
import {
  apiArgType,
  iriArgType,
  ontologyIdReqArgType
} from "../../../stories/storyArgs";

export const GraphViewWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdReqArgType,
  rootWalk: {
    required: false,
    description: "When true, the graph will show the tree hierarchy for the target node in form of a graph.",
    table: {
      defaultValue: { summary: false }
    },
    type: { summary: "boolean" }
  }
}


export const GraphViewWidgetStoryArgs = {
  api: globals.EBI_API_ENDPOINT,
  iri: "",
  ontologyId: "",
  rootWalk: false,
}

export const GraphViewWidgetExample = {
  args: {
    api: globals.TIB_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/OBI_0000070",
    ontologyId: "vibso",
    rootWalk: false
  }
};

export const RootWalkGraphExample = {
  args: {
    api: globals.TIB_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/OBI_0000070",
    ontologyId: "vibso",
    rootWalk: true
  }
}

export const ChebiWater = {
  args: {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/CHEBI_15377",
    ontologyId: "chebi",
    rootWalk: false 
  }
}

export const ChebiWaterRootWalk = {
  args: {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/CHEBI_15377",
    ontologyId: "chebi",
    rootWalk: true 
  }
}
