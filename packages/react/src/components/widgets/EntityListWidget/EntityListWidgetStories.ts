import * as globals from "../../../app/globals";
import {
  apiArgType,
  entityTypeArgType,
  ontologyIdArgType,
  parameterArgType,
  useLegacyArgType,
} from "../../../stories/storyArgs";

export const EntityListWidgetStoryArgTypes = {
  ...apiArgType,
  ...useLegacyArgType,
  ...ontologyIdArgType,
  ...entityTypeArgType,
  ...parameterArgType,
};

export const EntityListWidgetStoryArgs = {
  api: globals.EBI_API_ENDPOINT,
  useLegacy: false,
  ontologyId: "uberon",
  entityType: "class",
  parameter: "",
} as const;

export const EntityListWidgetPropertiesArgs = {
  api: "https://api.terminology.tib.eu/api/",
  useLegacy: false,
  ontologyId: "uberon",
  entityType: "property",
  parameter: "",
} as const;

export const EntityListWidgetIndividualsArgs = {
  api: globals.EBI_API_ENDPOINT,
  useLegacy: false,
  ontologyId: "efo",
  entityType: "individual",
  parameter: "",
} as const;

export const EntityListWidgetMeshTermsArgs = {
  api: "https://semanticlookup.zbmed.de/ols/api/",
  useLegacy: false,
  ontologyId: "mesh",
  entityType: "term",
  parameter: "",
} as const;