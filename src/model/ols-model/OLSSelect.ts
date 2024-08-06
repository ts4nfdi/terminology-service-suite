import { Select } from "../interfaces/Select";
import { SelectResult } from "../interfaces/SelectResult";

export class OLSSelect implements Select {
  properties: SelectResult[];

  constructor(properties: SelectResult[]) {
      this.properties = properties;
    }

  getTotalSearchResults(): number {
    return this.properties.length;
  }


  }