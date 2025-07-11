import {
  classNameArgType,
  colorFirstArgType,
  colorSecondArgType, entityArgType,
  onNavigateToOntologyArgType,
  ontologyIdArgType,
} from "../../../../../stories/storyArgs";
import "../../../../../style/customBreadcrumbStyle.css";

export const BreadcrumbPresentationStoryArgTypes = {
  ...ontologyIdArgType,
  ...colorFirstArgType,
  ...colorSecondArgType,
  ...onNavigateToOntologyArgType,
  ...classNameArgType,
  ...entityArgType,
};

export const BreadcrumbPresentationStoryArgs = {
  ontologyId: "",
  shortForm: "",
  colorFirst: "",
  colorSecond: "",
  onNavigateToOntology: "Console message",
  className: "",
  entity: {},
};

export const EntityInput = {
  args: {
    entity: {
      properties: {
        "iri": "http://purl.obolibrary.org/obo/NCIT_C2985",
        "ontologyId": "ncit",
        "shortForm": "NCIT_C2985",
      }
    },
  },
};

export const EntityInputMissingValue = {
  args: {
    entity: {
      properties: {
        "iri": "http://purl.obolibrary.org/obo/NCIT_C2985",
        "shortForm": "NCIT_C2985",
      }
    },
    ontologyId: "NCIT"
  },
};

