import { rowColorArgType } from "../../../stories/storyArgs";

export const MappingListWidgetStoryArgTypes = {
  ...rowColorArgType,
};

export const MappingListWidgetStoryArgs_OEO_00000150 = {
  api: "https://coli-conc.gbv.de/api/",
  source: "https://openenergyplatform.org/ontology/oeo/OEO_00000150",
} as const;

export const MappingListWidgetStoryArgs_Q259745 = {
  api: "https://coli-conc.gbv.de/api/",
  source: "http://www.wikidata.org/entity/Q259745",
  rowColor: "#ebe3f8",
} as const;

export const MappingListWidgetStoryArgs_Energy = {
  api: "https://coli-conc.gbv.de/api/",
  source: "https://schema.org/Energy",
  rowColor: "#fae0e5",
} as const;

export const MappingListWidgetStoryArgs_Rec_B_2000 = {
  api: "https://coli-conc.gbv.de/api/",
  source: "http://uri.gbv.de/terminology/nsk/Rec%20B%202000",
  rowColor: "#f8e0f4",
} as const;

export const MappingListWidgetStoryArgs_Ges_C_2700 = {
  api: "https://coli-conc.gbv.de/api/",
  source: "http://uri.gbv.de/terminology/nsk/Ges%20C%202700",
  rowColor: "#ffd5ea",
} as const;

export const MappingListWidgetStoryArgs_B14C4A = {
  api: "https://coli-conc.gbv.de/api/",
  source: "https://www.w3id.org/archlink/terms/conservationthesaurus/B14C4A",
} as const;
