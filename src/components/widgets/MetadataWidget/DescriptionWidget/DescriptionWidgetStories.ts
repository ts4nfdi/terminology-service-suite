import {
  apiArgType, classNameArgType,
  colorArgType,
  descTextArgType,
  iriArgType,
  ontologyIdArgType, parameterArgType, thingTypeArgType, useLegacyArgType
} from "../../../../stories/storyArgs";
import * as globals from '../../../../app/globals';

export const DescriptionWidgetStoryArgTypes = {
  ...apiArgType,
  ...colorArgType,
  ...descTextArgType,
  ...ontologyIdArgType,
  ...iriArgType,
  ...useLegacyArgType,
  ...parameterArgType,
  ...thingTypeArgType,
  ...classNameArgType,
};

export const DescriptionWidgetStoryArgs = {
  api: "",
  iri: "",
  useLegacy: true,
  ontologyId: "",
  thingType: "term",
  descText: "",
  color: "",
  className: "",
  parameter: "collection=nfdi4health"
};

export const DescriptionWidget1 = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "ncit",
        thingType: "term",
        parameter: "collection=nfdi4health",
    }
};

export const SelectingDefiningOntology = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://purl.obolibrary.org/obo/IAO_0000631",
        thingType: "",
        parameter: ""
    }
};

export const DefiningOntologyUnavailable = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://identifiers.org/uniprot/Q9VAM9",
        thingType: "term",
        parameter: ""
    }
};

export const ErrorFetchingData = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://identifiers.org/uniprot/Q9VA",
        thingType: "term",
        parameter: ""
    }
};
