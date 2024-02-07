import Ontologies from "../interfaces/Ontologies";
import OLS3Ontology from "./OLS3Ontology";

export default class OLS3Ontologies implements Ontologies {
  properties: OLS3Ontology[];

  constructor(properties: OLS3Ontology[]) {
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
