import { SelectResult } from "./SelectResult";

export interface Select {
  properties: SelectResult[];

  getTotalSearchResults(): number,
}