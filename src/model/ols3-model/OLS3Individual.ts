import { asArray } from "../../app/util";
import OLS3Entity from "./OLS3Entity";
import Reified from "../Reified";
import Individual from "../interfaces/Individual";

export default class OLS3Individual extends OLS3Entity implements Individual{

  getType(): "ontology" | "class" | "property" | "individual" {
    return "individual";
  }

  getTypePlural(): "ontologies" | "classes" | "properties" | "individuals" {
    return "individuals";
  }

  getParents() {
    return Reified.fromJson<any>(
      this.properties["directParent"]
    );
  }
  getEquivalents() {
    return [];
  }
  getSuperEntities(): Reified<any>[] {
    return Reified.fromJson<any>([])
  }

  getDifferentFrom() {
    return asArray(
      this.properties["http://www.w3.org/2002/07/owl#differentFrom"]
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
		( (! (typeof t === 'string') || !t.startsWith("http://www.w3.org/2000/01/rdf-schema#")))
    );
  }
}
