import { Search } from "../interfaces/Search";
import { SearchResult } from "../interfaces/SearchResult";

export class OLSSearch implements Search {
  properties: SearchResult[];

  constructor(properties: SearchResult[]) {
      this.properties = properties;
    }

  getTotalSearchResults(): number {
    return this.properties.length;
  }


  }