import { Property } from "../interfaces";
import { OLS3Entity } from "./OLS3Entity";

import Reified from "../Reified";

import { asArray } from "../../app/util";
import { PropertyTypeName } from "../ModelTypeCheck";

export class OLS3Property extends OLS3Entity implements Property {
  getType(): PropertyTypeName {
    return "property";
  }

  getParents(): Reified<any>[] {
    return Reified.fromJson<any>(
      this.properties["http://www.w3.org/2000/01/rdf-schema#subPropertyOf"],
    );
  }
  getSuperEntities(): Reified<any>[] {
    return Reified.fromJson<any>(
      this.properties["http://www.w3.org/2000/01/rdf-schema#subPropertyOf"],
    );
  }
  getEquivalents(): Reified<any>[] {
    return Reified.fromJson<any>(
      this.properties["http://www.w3.org/2002/07/owl#equivalentProperty"],
    );
  }

  getDisjointWith() {
    return asArray(
      this.properties["http://www.w3.org/2002/07/owl#propertyDisjointWith"],
    );
  }

  getInverseOf() {
    return asArray(this.properties["http://www.w3.org/2002/07/owl#inverseOf"]);
  }

  getDomain() {
    return asArray(
      this.properties["http://www.w3.org/2000/01/rdf-schema#domain"],
    );
  }

  getRange() {
    return asArray(
      this.properties["http://www.w3.org/2000/01/rdf-schema#range"],
    );
  }

  getPropertyChains(): Reified<any>[] {
    return Reified.fromJson<any>(
      this.properties["http://www.w3.org/2002/07/owl#propertyChainAxiom"],
    );
  }
}
