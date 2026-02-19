// EntityListWidgetStories.ts


import * as globals from "../../../app/globals";
import { EBI_API_ENDPOINT } from "../../../app/globals";
import {
  apiArgType,
  ontologyIdArgType,
  parameterArgType,
  thingTypeArgType,
  useLegacyArgType,
} from "../../../stories/storyArgs";
import type { EntityListWidgetProps } from "./EntityListWidget";

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

function normalizeBaseApi(api: string) {
  return api.endsWith("/") ? api : `${api}/`;
}

function splitAndApplyParams(url: URL, raw: string) {
  if (!raw) return;

  for (const part of raw.split("&")) {
    if (!part) continue;
    const [k, v] = part.split("=");
    if (!k) continue;
    url.searchParams.set(k, v ?? "");
  }
}

export function buildEntityListApiUrl(args: {
  api: string;
  useLegacy: boolean;
  ontologyId: string;
  thingType: string;
  parameter: string;
}) {
  const api = normalizeBaseApi(args.api);

  // v2: classes | properties | individuals | ontologies
  // legacy: terms | properties | individuals | ontologies
  const v2Endpoint =
    args.thingType === "ontology"
      ? "ontologies"
      : args.thingType === "property"
        ? "properties"
        : args.thingType === "individual"
          ? "individuals"
          : "classes"; // term/class -> classes

  const legacyEndpoint =
    args.thingType === "ontology"
      ? "ontologies"
      : args.thingType === "property"
        ? "properties"
        : args.thingType === "individual"
          ? "individuals"
          : "terms"; // term/class -> terms (legacy)

  const endpoint = args.useLegacy ? legacyEndpoint : v2Endpoint;

  // v2:
  //   ontologies:  {api}v2/ontologies?
  //   others:      {api}v2/ontologies/{ontologyId}/{endpoint}?
  //
  // legacy:
  //   ontologies:  {api}ontologies?
  //   others:      {api}ontologies/{ontologyId}/{endpoint}?
  const base =
    endpoint === "ontologies"
      ? args.useLegacy
        ? `${api}ontologies?`
        : `${api}v2/ontologies?`
      : args.useLegacy
        ? `${api}ontologies/${args.ontologyId}/${endpoint}?`
        : `${api}v2/ontologies/${args.ontologyId}/${endpoint}?`;

  const url = new URL(base);

  url.searchParams.set("size", "10");

  splitAndApplyParams(url, args.parameter);

  return url.toString();
}
