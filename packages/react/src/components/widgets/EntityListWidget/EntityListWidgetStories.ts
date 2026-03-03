import * as globals from "../../../app/globals";
import {
  apiArgType,
  ontologyIdArgType,
  parameterArgType,
  thingTypeArgType,
  useLegacyArgType,
} from "../../../stories/storyArgs";



export const EntityListWidgetStoryArgTypes = {
  ...apiArgType,
  ...useLegacyArgType,
  ...ontologyIdArgType,
  ...thingTypeArgType,
  ...parameterArgType,
};

export const EntityListWidgetStoryArgs = {
  api: globals.EBI_API_ENDPOINT,
  useLegacy: false,
  ontologyId: "uberon",
  thingType: "class",
  parameter: "",
} as const;
