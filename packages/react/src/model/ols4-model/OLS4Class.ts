import { Class } from "../interfaces";
import { OLS4Entity } from "./OLS4Entity";

import Reified from "../Reified";

import { asArray } from "../../app/util";

export class OLS4Class extends OLS4Entity implements Class {
  getParents(): Reified<any>[] {
    return Reified.fromJson<any>(this.properties["hierarchicalParent"]);
  }
  getSuperEntities(): Reified<any>[] {
    return Reified.fromJson<any>(
      this.properties["http://www.w3.org/2000/01/rdf-schema#subClassOf"],
    );
  }
  getEquivalents(): Reified<any>[] {
    return Reified.fromJson<any>(
      this.properties["http://www.w3.org/2002/07/owl#equivalentClass"],
    );
  }

  getDisjointWith() {
    return asArray(
      this.properties["http://www.w3.org/2002/07/owl#disjointWith"],
    );
  }

  getHasKey() {
    return asArray(this.properties["http://www.w3.org/2002/07/owl#hasKey"]);
  }

  getSubsets(): any[] {
    return (
      asArray(
        this.properties[
          "http://www.geneontology.org/formats/oboInOwl#inSubset"
        ],
      ) || []
    );
  }
}
