import { MappingDetailBackgroundColorArgType } from "../../../stories/storyArgs";

export const MappingDetailWidgetStoryArgTypes = {
  ...MappingDetailBackgroundColorArgType,
};

/**
 * One mapping of the NSK-BK concordance, picked by its source and target. It
 * belongs to a concordance, so every field of the card has a value.
 */
export const MappingDetailWidgetStoryArgs_Rec_B_2000 = {
  api: "https://coli-conc.gbv.de/api/",
  source: "http://uri.gbv.de/terminology/nsk/Rec%20B%202000",
  target: "http://uri.gbv.de/terminology/bk/86.26",
  MappingDetailBackgroundColor: "#ebedef",
} as const;
