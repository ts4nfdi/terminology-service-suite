import * as globals from "../../../app/globals";
import {
  apiArgType,
  entityTypeArgType,
  ontologyIdArgType,
  parameterArgType,
} from "../../../stories/storyArgs";

export const EntityListWidgetStoryArgTypes = {
  ...apiArgType,
  ...ontologyIdArgType,
  ...entityTypeArgType,
  ...parameterArgType,
};

export const EntityListWidgetStoryArgs = {
  api: globals.EBI_API_ENDPOINT,
  ontologyId: "uberon",
  entityType: "class",
  parameter: "",
} as const;

export const EntityListWidgetIndividualsArgs = {
  api: globals.EBI_API_ENDPOINT,
  ontologyId: "efo",
  entityType: "individual",
  parameter: "",
} as const;

export const EntityListWidgetMeshTermsArgs = {
  api: "https://semanticlookup.zbmed.de/ols/api/",
  ontologyId: "mesh",
  entityType: "term",
  parameter: "",
} as const;
