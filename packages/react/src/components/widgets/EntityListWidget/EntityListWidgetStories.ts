import { EntityListWidgetProps } from "../../../app";
import * as globals from "../../../app/globals";
import { EBI_API_ENDPOINT } from "../../../app/globals";
import {
  apiArgType,
  ontologyIdArgType,
  parameterArgType,
  thingTypeArgType,
  useLegacyArgType,
} from "../../../stories/storyArgs";

export const EntityListWidgetStoryArgsReact: EntityListWidgetProps = {
  apiUrl: `${EBI_API_ENDPOINT}v2/ontologies/uberon/classes?size=10`,
};

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
