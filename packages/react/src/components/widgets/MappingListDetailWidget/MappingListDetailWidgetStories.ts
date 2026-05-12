import { apiArgType } from "../../../stories/storyArgs";

export const MappingListDetailWidgetStoryArgTypes = {
  ...apiArgType,
};

export const MappingListDetailWidgetStoryArgs = {
  api: "https://coli-conc.gbv.de/api/",
  iri: "http://uri.gbv.de/terminology/nsk/Rec%20B%202000",
} as const;
