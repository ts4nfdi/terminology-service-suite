import Ontologies from "../interfaces/Ontologies";
import OLS4Ontology from "./OLS4Ontology";

export default class OLS4Ontologies implements Ontologies {
  properties: OLS4Ontology[];

  constructor(properties: OLS4Ontology[]) {
    this.properties = properties;
  }

  getTotalOntologies(): number {
    return this.properties.length;
  }

  getNumEntities(): number {
    return this.properties.reduce((total, ontology) => total + ontology.getNumEntities(), 0);
  }

  getNumClasses(): number {
    return this.properties.reduce((total, ontology) => total + ontology.getNumClasses(), 0);
  }

  getNumProperties(): number {
    return this.properties.reduce((total, ontology) => total + ontology.getNumProperties(), 0);
  }

  getNumIndividuals(): number {
    return this.properties.reduce((total, ontology) => total + ontology.getNumIndividuals(), 0);
  }


}
