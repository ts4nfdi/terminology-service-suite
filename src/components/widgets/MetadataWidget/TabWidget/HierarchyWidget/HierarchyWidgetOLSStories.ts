import {
  apiArgType,
  entityTypeArgType,
  iriArgType, onNavigateToEntityArgType,
  onNavigateToOntologyArgType,
  ontologyIdArgType
} from "../../../../../stories/storyArgs";
import { action } from "@storybook/addon-actions";

export const HierarchyWidgetOLSStoryArgTypes = {
  ...apiArgType,
  ...ontologyIdArgType,
  ...iriArgType,
  ...entityTypeArgType,
  ...onNavigateToOntologyArgType,
  ...onNavigateToEntityArgType
};

export const HierarchyWidgetOLSStoryArgs = {
  api: "",
  iri: "",
  ontologyId: "",
  entityType: "",
  onNavigateToEntity: action("onNavigateToEntity"),
  onNavigateToOntology: action("onNavigateToOntology")
};

export const HierarchyWidgetOLS1 = {
  args: {
    iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
    api: "https://www.ebi.ac.uk/ols4/api/",
    ontologyId: "efo",
    entityType: "class"
  }
};