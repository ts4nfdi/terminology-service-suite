import {entityTypeNames} from "../../../../../model/ModelTypeCheck";
import * as globals from '../../../../../app/globals';
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
    api: globals.EBI_API_ENDPOINT,
    ontologyId: "efo",
    entityType: "class"
  }
};