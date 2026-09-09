import { MappingDetailBackgroundColorArgType } from "../../../stories/storyArgs";

export const MappingDetailWidgetStoryArgTypes = {
  ...MappingDetailBackgroundColorArgType,
};

export const MappingDetailWidgetStoryArgs_Rec_B_2000 = {
  type: "narrowMatch",
  from: "Rec B 2000",
  fromUri: "http://uri.gbv.de/terminology/nsk/Rec%20B%202000",
  fromScheme: "NSK",
  to: "86.26",
  toUri: "http://uri.gbv.de/terminology/bk/86.26",
  toScheme: "BK",
  creator: "Beatrix Kemm-Inci",
  created: "11 May 2026, 12:48",
  modified: "11 May 2026, 12:48",
  identifier:
    "mapping:3da011a5661ef018f0f67049f3de2a97e2ca18e2c5c322d62a9bd16594c8c17c",
  partOf: "https://coli-conc.gbv.de/api/concordances/nsk-bk",
  uri: "https://coli-conc.gbv.de/api/mappings/6e94f948-dd66-4910-aa96-174d1acce95a",
  MappingDetailBackgroundColor: "#ebedef",
} as const;
