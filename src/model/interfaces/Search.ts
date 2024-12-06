import { SearchResult } from "./SearchResult";

export interface Search {
  properties: SearchResult[];

  getTotalSearchResults(): number,
}