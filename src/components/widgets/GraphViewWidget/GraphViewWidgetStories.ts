import * as globals from '../../../app/globals';
import {
  apiArgType,
  iriArgType,
  ontologyIdReqArgType,
  useLegacyArgType
} from "../../../stories/storyArgs";

export const GraphViewWidgetStoryArgTypes = {
  ...apiArgType,
  ...iriArgType,
  ...ontologyIdReqArgType,
  ...useLegacyArgType,
  rootWalk: {
    required: false,
    description: "",
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
  useLegacy: true,
}

export const GraphViewWidgetExample = {
  args: {
    api: globals.TIB_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/OBI_0000070",
    ontologyId: "vibso",
    useLegacy: true,
    rootWalk: false
  }
};

export const RootWalkGraphExample = {
  args: {
    api: globals.TIB_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/OBI_0000070",
    ontologyId: "vibso",
    useLegacy: true,
    rootWalk: true
  }
}
