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
