import { apiArgType } from "../../../stories/storyArgs";

export const MappingListDetailWidgetStoryArgTypes = {
  ...apiArgType,
};

export const MappingListDetailWidgetStoryArgs = {
  api: "https://coli-conc.gbv.de/api/",
  iri: "http%3A%2F%2Furi.gbv.de%2Fterminology%2Fnsk%2FRec%2520B%25202000",
} as const;
