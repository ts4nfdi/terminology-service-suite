import type { EntityListWidgetProps } from "../../../../../../../../Desktop/EntityListWidget/EntityListWidget";
import { EBI_API_ENDPOINT } from "../../../app/globals";
import * as globals from "../../../app/globals";
import {
  apiArgType,
  ontologyIdArgType,
  thingTypeArgType,
  parameterArgType,
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

export function buildEntityListApiUrl(args: {
  api: string;
  useLegacy: boolean;
  ontologyId: string;
  thingType: string;
  parameter: string;
}) {

  const endpoint =
    args.thingType === "ontology"
      ? "ontologies"
      : args.thingType === "property"
        ? "properties"
        : args.thingType === "individual"
          ? "individuals"
          : "classes"; // term/class -> classes

  const base =
    endpoint === "ontologies"
      ? `${args.api}v2/ontologies?`
      : `${args.api}v2/ontologies/${args.ontologyId}/${endpoint}?`;

  const url = new URL(base);


  url.searchParams.set("size", "10");

  if (args.parameter) {
    for (const part of args.parameter.split("&")) {
      const [k, v] = part.split("=");
      if (k) url.searchParams.set(k, v ?? "");
    }
  }

  return url.toString();
}
