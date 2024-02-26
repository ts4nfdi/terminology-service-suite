import {Class} from "../interfaces";
import {OLS3Entity} from "./OLS3Entity";

import Reified from "../Reified";

import { asArray } from "../../app/util";

export class OLS3Class extends OLS3Entity implements Class {

  getType(): "ontology" | "class" | "property" | "individual" {
    return "class"
  }

  getTypePlural(): "classes" | "properties" | "individuals" | "entities" {
    return "classes"
  }

  // TODO: can be inferred via "links"->"hierarchicalParents"
  getParents(): Reified<any>[] {
    return Reified.fromJson<any>(
      this.properties["hierarchicalParent"]
    );
  }

  // TODO: can be inferred via "links"->"parents"
  getSuperEntities(): Reified<any>[] {
    return Reified.fromJson<any>(
      this.properties["http://www.w3.org/2000/01/rdf-schema#subClassOf"]
    );
  }


  // TODO: can this be inferred?
  getEquivalents(): Reified<any>[] {
    return Reified.fromJson<any>(
      this.properties["http://www.w3.org/2002/07/owl#equivalentClass"]
    );
  }


  // TODO: can this be inferred?
  getDisjointWith() {
	return asArray(this.properties['http://www.w3.org/2002/07/owl#disjointWith'])
  }

  // TODO: can this be inferred?
  getHasKey() {
    return asArray(this.properties['http://www.w3.org/2002/07/owl#hasKey'])
  }

  getSubsets(): any[] {
    return this.properties["in_subset"];
  }
}
