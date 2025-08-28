import { Individual } from "../interfaces";
import { OLS4Entity } from "./OLS4Entity";

import Reified from "../Reified";

import { asArray } from "../../app/util";

export class OLS4Individual extends OLS4Entity implements Individual {
  getParents() {
    return Reified.fromJson<any>(this.properties["directParent"]);
  }
  getEquivalents() {
    return [];
  }
  getSuperEntities(): Reified<any>[] {
    return Reified.fromJson<any>([]);
  }

  getDifferentFrom() {
    return asArray(
      this.properties["http://www.w3.org/2002/07/owl#differentFrom"],
    );
  }

  getSameAs() {
    return asArray(this.properties["http://www.w3.org/2002/07/owl#sameAs"]);
  }

  getIndividualTypes(): string[] {
    const rdfTypes: any = this.getRdfTypes();

    if (!rdfTypes || !Array.isArray(rdfTypes)) {
      return [];
    }

    return rdfTypes.filter(
      (t: any) =>
        t !== "http://www.w3.org/2002/07/owl#NamedIndividual" &&
        (!(typeof t === "string") ||
          !t.startsWith("http://www.w3.org/2000/01/rdf-schema#")),
    );
  }
}
